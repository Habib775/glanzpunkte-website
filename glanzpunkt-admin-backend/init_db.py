#!/usr/bin/env python3
"""
Script to initialize the database with sample data for Glanzpunkt Admin Panel
"""

import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from src.main import app
from src.models.user import db, User, Service, Content

def init_database():
    with app.app_context():
        # Drop all tables and recreate them
        db.drop_all()
        db.create_all()
        
        # Create admin user
        admin_user = User(
            username='admin',
            email='admin@glanzpunkt.de',
            role='admin'
        )
        admin_user.set_password('admin123')
        db.session.add(admin_user)
        
        # Create sample services
        services_data = [
            {
                'name_de': 'Hausreinigung',
                'name_en': 'House Cleaning',
                'description_de': 'Komplette Reinigung für Ihr Zuhause mit höchster Qualität',
                'description_en': 'Complete cleaning for your home with highest quality',
                'price_from': 25.0,
                'price_to': 80.0,
                'icon': 'Home',
                'color': 'blue',
                'features_de': ['Grundreinigung', 'Regelmäßige Reinigung', 'Fensterreinigung'],
                'features_en': ['Basic cleaning', 'Regular cleaning', 'Window cleaning']
            },
            {
                'name_de': 'Büroreinigung',
                'name_en': 'Office Cleaning',
                'description_de': 'Professionelle Büroreinigung für eine produktive Arbeitsumgebung',
                'description_en': 'Professional office cleaning for a productive work environment',
                'price_from': 30.0,
                'price_to': 100.0,
                'icon': 'Building',
                'color': 'green',
                'features_de': ['Büroreinigung', 'Sanitärreinigung', 'Bodenreinigung'],
                'features_en': ['Office cleaning', 'Sanitary cleaning', 'Floor cleaning']
            },
            {
                'name_de': 'Hotelreinigung',
                'name_en': 'Hotel Cleaning',
                'description_de': 'Spezialisierte Reinigungsdienstleistungen für Hotels und Gastgewerbe',
                'description_en': 'Specialized cleaning services for hotels and hospitality',
                'price_from': 20.0,
                'price_to': 60.0,
                'icon': 'Hotel',
                'color': 'purple',
                'features_de': ['Zimmerreinigung', 'Housekeeping', 'Wäscheservice'],
                'features_en': ['Room cleaning', 'Housekeeping', 'Laundry service']
            },
            {
                'name_de': 'Baureinigung',
                'name_en': 'Construction Cleaning',
                'description_de': 'Gründliche Reinigung nach Bau- und Renovierungsarbeiten',
                'description_en': 'Thorough cleaning after construction and renovation work',
                'price_from': 40.0,
                'price_to': 150.0,
                'icon': 'HardHat',
                'color': 'orange',
                'features_de': ['Baureinigung', 'Endreinigung', 'Grobreinigung'],
                'features_en': ['Construction cleaning', 'Final cleaning', 'Rough cleaning']
            },
            {
                'name_de': 'Fensterreinigung',
                'name_en': 'Window Cleaning',
                'description_de': 'Professionelle Fenster- und Fassadenreinigung für kristallklare Ergebnisse',
                'description_en': 'Professional window and facade cleaning for crystal clear results',
                'price_from': 15.0,
                'price_to': 50.0,
                'icon': 'Sparkles',
                'color': 'cyan',
                'features_de': ['Fensterreinigung', 'Fassadenreinigung', 'Glasreinigung'],
                'features_en': ['Window cleaning', 'Facade cleaning', 'Glass cleaning']
            },
            {
                'name_de': 'Tatortreinigung',
                'name_en': 'Crime Scene Cleaning',
                'description_de': 'Spezialisierte und diskrete Reinigung von Tatorten',
                'description_en': 'Specialized and discreet cleaning of crime scenes',
                'price_from': 100.0,
                'price_to': 500.0,
                'icon': 'Shield',
                'color': 'red',
                'features_de': ['Tatortreinigung', 'Desinfektion', 'Diskrete Abwicklung'],
                'features_en': ['Crime scene cleaning', 'Disinfection', 'Discreet handling']
            }
        ]
        
        for service_data in services_data:
            service = Service(**service_data)
            db.session.add(service)
        
        # Create sample content
        content_data = [
            {
                'key': 'hero_title',
                'value_de': 'Reinigung mit professioneller Note',
                'value_en': 'Cleaning with Professional Touch',
                'value_ar': 'تنظيف بلمسة احترافية',
                'category': 'hero',
                'content_type': 'text'
            },
            {
                'key': 'hero_subtitle',
                'value_de': 'Wir bieten professionelle Reinigungsdienstleistungen für Ihr Zuhause, Büro und Ihre Geschäftsräume.',
                'value_en': 'We offer professional cleaning services for your home, office and business premises.',
                'value_ar': 'نقدم خدمات تنظيف احترافية لمنزلك ومكتبك وأماكن عملك.',
                'category': 'hero',
                'content_type': 'text'
            },
            {
                'key': 'company_phone',
                'value_de': '+49 (0) 123 456 789',
                'value_en': '+49 (0) 123 456 789',
                'value_ar': '+49 (0) 123 456 789',
                'category': 'contact',
                'content_type': 'text'
            },
            {
                'key': 'company_email',
                'value_de': 'info@glanzpunkt.de',
                'value_en': 'info@glanzpunkt.de',
                'value_ar': 'info@glanzpunkt.de',
                'category': 'contact',
                'content_type': 'text'
            },
            {
                'key': 'company_address',
                'value_de': 'Musterstraße 123, 80331 München, Deutschland',
                'value_en': 'Musterstraße 123, 80331 Munich, Germany',
                'value_ar': 'Musterstraße 123, 80331 ميونخ، ألمانيا',
                'category': 'contact',
                'content_type': 'text'
            },
            {
                'key': 'working_hours',
                'value_de': 'Mo-Fr: 07:00 - 19:00, Sa: 08:00 - 16:00',
                'value_en': 'Mon-Fri: 07:00 - 19:00, Sat: 08:00 - 16:00',
                'value_ar': 'الإثنين-الجمعة: 07:00 - 19:00، السبت: 08:00 - 16:00',
                'category': 'contact',
                'content_type': 'text'
            }
        ]
        
        for content_item in content_data:
            content = Content(**content_item)
            db.session.add(content)
        
        # Commit all changes
        db.session.commit()
        
        print("Database initialized successfully!")
        print("Admin credentials:")
        print("Username: admin")
        print("Password: admin123")
        print(f"Created {len(services_data)} services")
        print(f"Created {len(content_data)} content items")

if __name__ == '__main__':
    init_database()

