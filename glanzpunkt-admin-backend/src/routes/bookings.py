from flask import Blueprint, request, jsonify, session
from src.models.user import db, Booking, Service
from datetime import datetime
from functools import wraps

bookings_bp = Blueprint('bookings', __name__)

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return jsonify({'error': 'Authentication required'}), 401
        
        from src.models.user import User
        user = User.query.get(session['user_id'])
        if not user or user.role != 'admin':
            return jsonify({'error': 'Admin access required'}), 403
        
        return f(*args, **kwargs)
    return decorated_function

@bookings_bp.route('/', methods=['POST'])
def create_booking():
    try:
        data = request.get_json()
        
        # Validate service exists
        service = Service.query.get(data['service_id'])
        if not service:
            return jsonify({'error': 'Service not found'}), 404
        
        # Parse preferred date if provided
        preferred_date = None
        if data.get('preferred_date'):
            try:
                preferred_date = datetime.fromisoformat(data['preferred_date'].replace('Z', '+00:00'))
            except ValueError:
                return jsonify({'error': 'Invalid date format'}), 400
        
        booking = Booking(
            customer_name=data['customer_name'],
            customer_email=data['customer_email'],
            customer_phone=data.get('customer_phone'),
            service_id=data['service_id'],
            address=data['address'],
            preferred_date=preferred_date,
            preferred_time=data.get('preferred_time'),
            message=data.get('message'),
            estimated_price=data.get('estimated_price')
        )
        
        db.session.add(booking)
        db.session.commit()
        
        return jsonify({
            'message': 'Booking created successfully',
            'booking': booking.to_dict()
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/admin', methods=['GET'])
@admin_required
def get_all_bookings():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        status = request.args.get('status')
        
        query = Booking.query
        
        if status:
            query = query.filter_by(status=status)
        
        bookings = query.order_by(Booking.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'bookings': [booking.to_dict() for booking in bookings.items],
            'total': bookings.total,
            'pages': bookings.pages,
            'current_page': page,
            'per_page': per_page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/<int:booking_id>', methods=['GET'])
@admin_required
def get_booking(booking_id):
    try:
        booking = Booking.query.get_or_404(booking_id)
        return jsonify({'booking': booking.to_dict()}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/<int:booking_id>', methods=['PUT'])
@admin_required
def update_booking(booking_id):
    try:
        booking = Booking.query.get_or_404(booking_id)
        data = request.get_json()
        
        # Update allowed fields
        for field in ['status', 'estimated_price', 'final_price', 'preferred_date', 'preferred_time']:
            if field in data:
                if field == 'preferred_date' and data[field]:
                    try:
                        setattr(booking, field, datetime.fromisoformat(data[field].replace('Z', '+00:00')))
                    except ValueError:
                        return jsonify({'error': 'Invalid date format'}), 400
                else:
                    setattr(booking, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'message': 'Booking updated successfully',
            'booking': booking.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/<int:booking_id>/status', methods=['POST'])
@admin_required
def update_booking_status(booking_id):
    try:
        booking = Booking.query.get_or_404(booking_id)
        data = request.get_json()
        
        valid_statuses = ['pending', 'confirmed', 'completed', 'cancelled']
        new_status = data.get('status')
        
        if new_status not in valid_statuses:
            return jsonify({'error': 'Invalid status'}), 400
        
        booking.status = new_status
        db.session.commit()
        
        return jsonify({
            'message': f'Booking status updated to {new_status}',
            'booking': booking.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/<int:booking_id>', methods=['DELETE'])
@admin_required
def delete_booking(booking_id):
    try:
        booking = Booking.query.get_or_404(booking_id)
        db.session.delete(booking)
        db.session.commit()
        
        return jsonify({'message': 'Booking deleted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bookings_bp.route('/stats', methods=['GET'])
@admin_required
def get_booking_stats():
    try:
        total_bookings = Booking.query.count()
        pending_bookings = Booking.query.filter_by(status='pending').count()
        confirmed_bookings = Booking.query.filter_by(status='confirmed').count()
        completed_bookings = Booking.query.filter_by(status='completed').count()
        cancelled_bookings = Booking.query.filter_by(status='cancelled').count()
        
        # Monthly stats for the current year
        from sqlalchemy import extract, func
        current_year = datetime.now().year
        
        monthly_stats = db.session.query(
            extract('month', Booking.created_at).label('month'),
            func.count(Booking.id).label('count')
        ).filter(
            extract('year', Booking.created_at) == current_year
        ).group_by(
            extract('month', Booking.created_at)
        ).all()
        
        monthly_data = {str(month): 0 for month in range(1, 13)}
        for month, count in monthly_stats:
            monthly_data[str(int(month))] = count
        
        return jsonify({
            'total_bookings': total_bookings,
            'pending_bookings': pending_bookings,
            'confirmed_bookings': confirmed_bookings,
            'completed_bookings': completed_bookings,
            'cancelled_bookings': cancelled_bookings,
            'monthly_stats': monthly_data
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

