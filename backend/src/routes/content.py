from flask import Blueprint, request, jsonify, session
from src.models.user import db, Content, ContactMessage
from functools import wraps

content_bp = Blueprint('content', __name__)

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

@content_bp.route('/', methods=['GET'])
def get_content():
    try:
        language = request.args.get('lang', 'de')
        category = request.args.get('category')
        
        query = Content.query
        if category:
            query = query.filter_by(category=category)
        
        contents = query.all()
        
        # Format content based on language
        result = {}
        for content in contents:
            if language == 'de':
                result[content.key] = content.value_de
            elif language == 'en':
                result[content.key] = content.value_en or content.value_de
            elif language == 'ar':
                result[content.key] = content.value_ar or content.value_de
            else:
                result[content.key] = content.value_de
        
        return jsonify({'content': result}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/admin', methods=['GET'])
@admin_required
def get_all_content():
    try:
        category = request.args.get('category')
        
        query = Content.query
        if category:
            query = query.filter_by(category=category)
        
        contents = query.all()
        return jsonify({'content': [content.to_dict() for content in contents]}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/', methods=['POST'])
@admin_required
def create_content():
    try:
        data = request.get_json()
        
        # Check if content key already exists
        if Content.query.filter_by(key=data['key']).first():
            return jsonify({'error': 'Content key already exists'}), 400
        
        content = Content(
            key=data['key'],
            value_de=data['value_de'],
            value_en=data.get('value_en'),
            value_ar=data.get('value_ar'),
            content_type=data.get('content_type', 'text'),
            category=data.get('category'),
            is_editable=data.get('is_editable', True)
        )
        
        db.session.add(content)
        db.session.commit()
        
        return jsonify({
            'message': 'Content created successfully',
            'content': content.to_dict()
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/<int:content_id>', methods=['PUT'])
@admin_required
def update_content(content_id):
    try:
        content = Content.query.get_or_404(content_id)
        
        if not content.is_editable:
            return jsonify({'error': 'This content is not editable'}), 400
        
        data = request.get_json()
        
        # Update fields
        for field in ['value_de', 'value_en', 'value_ar', 'content_type', 'category']:
            if field in data:
                setattr(content, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'message': 'Content updated successfully',
            'content': content.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/<int:content_id>', methods=['DELETE'])
@admin_required
def delete_content(content_id):
    try:
        content = Content.query.get_or_404(content_id)
        
        if not content.is_editable:
            return jsonify({'error': 'This content cannot be deleted'}), 400
        
        db.session.delete(content)
        db.session.commit()
        
        return jsonify({'message': 'Content deleted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Contact Messages endpoints
@content_bp.route('/messages', methods=['POST'])
def create_contact_message():
    try:
        data = request.get_json()
        
        message = ContactMessage(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone'),
            subject=data['subject'],
            message=data['message'],
            service_type=data.get('service_type')
        )
        
        db.session.add(message)
        db.session.commit()
        
        return jsonify({
            'message': 'Message sent successfully',
            'contact_message': message.to_dict()
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/messages/admin', methods=['GET'])
@admin_required
def get_contact_messages():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        status = request.args.get('status')
        
        query = ContactMessage.query
        
        if status:
            query = query.filter_by(status=status)
        
        messages = query.order_by(ContactMessage.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'messages': [message.to_dict() for message in messages.items],
            'total': messages.total,
            'pages': messages.pages,
            'current_page': page,
            'per_page': per_page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/messages/<int:message_id>/status', methods=['POST'])
@admin_required
def update_message_status(message_id):
    try:
        message = ContactMessage.query.get_or_404(message_id)
        data = request.get_json()
        
        valid_statuses = ['unread', 'read', 'replied']
        new_status = data.get('status')
        
        if new_status not in valid_statuses:
            return jsonify({'error': 'Invalid status'}), 400
        
        message.status = new_status
        if new_status == 'replied':
            from datetime import datetime
            message.replied_at = datetime.utcnow()
        
        db.session.commit()
        
        return jsonify({
            'message': f'Message status updated to {new_status}',
            'contact_message': message.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@content_bp.route('/messages/<int:message_id>', methods=['DELETE'])
@admin_required
def delete_contact_message(message_id):
    try:
        message = ContactMessage.query.get_or_404(message_id)
        db.session.delete(message)
        db.session.commit()
        
        return jsonify({'message': 'Contact message deleted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

