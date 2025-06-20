# Glanzpunkt Project

This repository contains the complete source code for the Glanzpunkt project, which includes:

- **Glanzpunkt Website**: A professional cleaning company website built with React.
- **Glanzpunkt Admin Panel**: An administrative panel for managing the website content, services, and bookings, built with React.
- **Glanzpunkt Admin Backend**: A Flask-based backend API for the admin panel and website.

## Project Structure

- `glanzpunkt-website/`: Contains the source code for the main website.
- `glanzpunkt-admin-panel/`: Contains the source code for the admin panel.
- `glanzpunkt-admin-backend/`: Contains the source code for the backend API.

## How to Run the Project

### 1. Backend (glanzpunkt-admin-backend)

```bash
cd glanzpunkt-admin-backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python init_db.py
python src/main.py
```

### 2. Admin Panel (glanzpunkt-admin-panel)

```bash
cd glanzpunkt-admin-panel
pnpm install
pnpm run dev
```

### 3. Main Website (glanzpunkt-website)

```bash
cd glanzpunkt-website
pnpm install
pnpm run dev
```

## Accessing the Applications

- **Main Website**: `http://localhost:5173`
- **Admin Panel**: `http://localhost:5174` (Login with `admin` / `admin123`)
- **Backend API**: `http://localhost:5000`

## Features

- Professional website with 8 main sections.
- Integrated online booking system with smart price calculator.
- Interactive FAQ section.
- Advanced notification system.
- 100% responsive design.
- Attractive animations and smooth interactive effects.
- Comprehensive admin interface with German and Arabic language support.
- Full management capabilities for services, bookings, and content.
- Secure authentication system.
- Integrated backend API with database.

## Languages

- **Website**: German (primary)
- **Admin Panel**: German and Arabic

## Contact

For any questions or issues, please contact [Your Name/Email/GitHub Profile].

## 🌟 Project Overview

This project includes a complete digital solution for Glanzpunkt, consisting of:
- **Frontend Website** (German) - Customer-facing website
- **Admin Panel** (German/Arabic) - Administration interface
- **Backend API** (Flask) - Server and database
- **Comprehensive Documentation** - Full project documentation

## 🚀 Live Demo

- **Website:** [Frontend Demo](http://localhost:5173)
- **Admin Panel:** [Admin Demo](http://localhost:5174)
- **API:** [Backend API](http://localhost:5000)

**Admin Login Details:**
- Username: `admin`
- Password: `admin123`

## 🛠️ Technology Stack

### Frontend & Admin Panel
- **React 18** with Vite for optimal performance
- **Tailwind CSS** for modern, responsive design
- **i18next** for internationalization (DE/AR/EN)
- **Lucide React** for consistent icons
- **Axios** for API communication

### Backend
- **Flask** - Python Web Framework
- **SQLAlchemy** - ORM for database operations
- **Flask-CORS** - Cross-Origin Resource Sharing
- **SQLite** - Lightweight database

### Development Tools
- **Vite** - Fast Build Tool
- **pnpm** - Efficient Package Manager
- **Git** - Version Control

## 📖 Documentation

### 📋 Available Documents
- **Project Overview** - Comprehensive project description
- **Technical Specifications** - Architecture and database design
- **Implementation Plan** - Development roadmap
- **Translation Requirements** - Multilingual setup
- **Admin Panel Manual** - Administration guide
- **API Documentation** - Backend endpoints

All documents are available in `docs/`, both as Markdown and PDF.

## 🌍 Multilingualism

### Supported Languages
- **German (DE)** - Main language for Website and Admin Panel
- **Arabic (AR)** - Admin Panel support with RTL
- **English (EN)** - Fallback language

### Language Configuration
```javascript
// i18n Configuration
const resources = {
  de: { translation: require(\'./locales/de/translation.json\') },
  ar: { translation: require(\'./locales/ar/translation.json\') },
  en: { translation: require(\'./locales/en/translation.json\') }
};
```

## 🔐 Security

### Authentication
- Session-based authentication
- Secure password hashing
- CSRF protection
- Input validation

### Data Privacy
- GDPR-compliant data processing
- Secure API endpoints
- Data encryption

## 📊 Features in Detail

### Online Booking System
- **3-step booking process**
- **Smart price calculator**
- **Service selection with customizations**
- **Appointment scheduling**
- **Automatic confirmations**

### Admin Dashboard
- **Real-time statistics**
  - Total Services: 6
  - Total Bookings: 25
  - Pending Bookings: 5
  - Unread Messages: 3
- **Interactive charts and graphs**
- **Quick access to important functions**

### Service Management
- **Add/edit/delete services**
- **Price management**
- **Service availability**
- **Category organization**

## 🎨 Design System

### Color Palette
- **Primary:** Blue (#3B82F6)
- **Secondary:** Green (#10B981)
- **Accent:** Orange (#F59E0B)
- **Neutral:** Gray tones

### Typography
- **Main Font:** Inter
- **Headings:** Poppins
- **Code:** Fira Code

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1440px

### Mobile-First Approach
All components are developed mobile-first and scale elegantly to larger screens.

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
pnpm run test
```

### Backend Testing
```bash
cd backend
python -m pytest
```

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
pnpm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
cd backend
# Configure production database
# Set environment variables
# Deploy to your server
```

## 🤝 Contributing

1. Fork the repository
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m \'Add some AmazingFeature\' `)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 👥 Team

- **Development:** Full-Stack Development with React, Flask, and modern Web Technologies
- **Design:** Responsive UI/UX Design with a focus on user-friendliness
- **Translation:** Professional German/Arabic Localization

## 📞 Support

For support and questions:
- **Email:** support@glanzpunkt.de
- **Website:** [www.glanzpunkt.de](http://www.glanzpunkt.de)
- **GitHub Issues:** [Issues](https://github.com/Habib775/glanzpunkte-website/issues)

## 🎯 Roadmap

### Phase 1 ✅ Completed
- Basic Website Development
- Admin Panel Implementation
- Backend API Development

### Phase 2 ✅ Completed
- Advanced Features
- Multilingualism
- Responsive Design

### Phase 3 🔄 In Progress
- Performance Optimization
- SEO Improvements
- Advanced Analytics

### Phase 4 📋 Planned
- Mobile App
- Advanced Integrations
- AI-powered Features

---

**Developed with ❤️ for Glanzpunkt Cleaning Services**

*A professional, scalable, and user-friendly web system for modern cleaning services.*


