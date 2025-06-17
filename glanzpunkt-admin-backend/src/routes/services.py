from flask import Blueprint, request, jsonify, session
from src.models.user import db, Service
from functools import wraps

services_bp = Blueprint('services', __name__)

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

@services_bp.route('/', methods=['GET'])
def get_services():
    try:
        # Public endpoint - only return active services
        services = Service.query.filter_by(is_active=True).all()
        return jsonify({'services': [service.to_dict() for service in services]}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@services_bp.route('/admin', methods=['GET'])
@admin_required
def get_all_services():
    try:
        # Admin endpoint - return all services
        services = Service.query.all()
        return jsonify({'services': [service.to_dict() for service in services]}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@services_bp.route('/', methods=['POST'])
@admin_required
def create_service():
    try:
        data = request.get_json()
        
        service = Service(
            name_de=data['name_de'],
            name_en=data.get('name_en'),
            description_de=data['description_de'],
            description_en=data.get('description_en'),
            price_from=data['price_from'],
            price_to=data.get('price_to'),
            currency=data.get('currency', 'EUR'),
            is_active=data.get('is_active', True),
            icon=data.get('icon'),
            color=data.get('color'),
            features_de=data.get('features_de', []),
            features_en=data.get('features_en', [])
        )
        
        db.session.add(service)
        db.session.commit()
        
        return jsonify({
            'message': 'Service created successfully',
            'service': service.to_dict()
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@services_bp.route('/<int:service_id>', methods=['PUT'])
@admin_required
def update_service(service_id):
    try:
        service = Service.query.get_or_404(service_id)
        data = request.get_json()
        
        # Update fields
        for field in ['name_de', 'name_en', 'description_de', 'description_en', 
                     'price_from', 'price_to', 'currency', 'is_active', 
                     'icon', 'color', 'features_de', 'features_en']:
            if field in data:
                setattr(service, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'message': 'Service updated successfully',
            'service': service.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@services_bp.route('/<int:service_id>', methods=['DELETE'])
@admin_required
def delete_service(service_id):
    try:
        service = Service.query.get_or_404(service_id)
        db.session.delete(service)
        db.session.commit()
        
        return jsonify({'message': 'Service deleted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@services_bp.route('/<int:service_id>/toggle', methods=['POST'])
@admin_required
def toggle_service(service_id):
    try:
        service = Service.query.get_or_404(service_id)
        service.is_active = not service.is_active
        db.session.commit()
        
        status = 'activated' if service.is_active else 'deactivated'
        return jsonify({
            'message': f'Service {status} successfully',
            'service': service.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

