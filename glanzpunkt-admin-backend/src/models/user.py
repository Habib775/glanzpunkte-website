from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), default='user')  # 'admin', 'user'
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    last_login = db.Column(db.DateTime)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.username}>'

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'role': self.role,
            'is_active': self.is_active,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'last_login': self.last_login.isoformat() if self.last_login else None
        }

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name_de = db.Column(db.String(100), nullable=False)  # German name
    name_en = db.Column(db.String(100), nullable=True)   # English name
    description_de = db.Column(db.Text, nullable=False)  # German description
    description_en = db.Column(db.Text, nullable=True)   # English description
    price_from = db.Column(db.Float, nullable=False)
    price_to = db.Column(db.Float, nullable=True)
    currency = db.Column(db.String(3), default='EUR')
    is_active = db.Column(db.Boolean, default=True)
    icon = db.Column(db.String(50), nullable=True)
    color = db.Column(db.String(20), nullable=True)
    features_de = db.Column(db.JSON, nullable=True)  # List of features in German
    features_en = db.Column(db.JSON, nullable=True)  # List of features in English
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<Service {self.name_de}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name_de': self.name_de,
            'name_en': self.name_en,
            'description_de': self.description_de,
            'description_en': self.description_en,
            'price_from': self.price_from,
            'price_to': self.price_to,
            'currency': self.currency,
            'is_active': self.is_active,
            'icon': self.icon,
            'color': self.color,
            'features_de': self.features_de,
            'features_en': self.features_en,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    customer_email = db.Column(db.String(120), nullable=False)
    customer_phone = db.Column(db.String(20), nullable=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    service = db.relationship('Service', backref=db.backref('bookings', lazy=True))
    address = db.Column(db.Text, nullable=False)
    preferred_date = db.Column(db.DateTime, nullable=True)
    preferred_time = db.Column(db.String(20), nullable=True)
    message = db.Column(db.Text, nullable=True)
    status = db.Column(db.String(20), default='pending')  # 'pending', 'confirmed', 'completed', 'cancelled'
    estimated_price = db.Column(db.Float, nullable=True)
    final_price = db.Column(db.Float, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<Booking {self.id} - {self.customer_name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'customer_name': self.customer_name,
            'customer_email': self.customer_email,
            'customer_phone': self.customer_phone,
            'service_id': self.service_id,
            'service': self.service.to_dict() if self.service else None,
            'address': self.address,
            'preferred_date': self.preferred_date.isoformat() if self.preferred_date else None,
            'preferred_time': self.preferred_time,
            'message': self.message,
            'status': self.status,
            'estimated_price': self.estimated_price,
            'final_price': self.final_price,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(100), unique=True, nullable=False)  # e.g., 'hero_title', 'company_phone'
    value_de = db.Column(db.Text, nullable=False)  # German content
    value_en = db.Column(db.Text, nullable=True)   # English content
    value_ar = db.Column(db.Text, nullable=True)   # Arabic content
    content_type = db.Column(db.String(20), default='text')  # 'text', 'html', 'json', 'image_url'
    category = db.Column(db.String(50), nullable=True)  # 'hero', 'contact', 'services', etc.
    is_editable = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f'<Content {self.key}>'

    def to_dict(self):
        return {
            'id': self.id,
            'key': self.key,
            'value_de': self.value_de,
            'value_en': self.value_en,
            'value_ar': self.value_ar,
            'content_type': self.content_type,
            'category': self.category,
            'is_editable': self.is_editable,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }

class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    service_type = db.Column(db.String(50), nullable=True)
    status = db.Column(db.String(20), default='unread')  # 'unread', 'read', 'replied'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    replied_at = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f'<ContactMessage {self.id} - {self.name}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'subject': self.subject,
            'message': self.message,
            'service_type': self.service_type,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'replied_at': self.replied_at.isoformat() if self.replied_at else None
        }

