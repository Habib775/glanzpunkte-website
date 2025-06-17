# 🏢 Glanzpunkt Cleaning Services Website

Ein professionelles, vollständig responsives Website-System für Glanzpunkt Reinigungsdienstleistungen mit fortschrittlicher Verwaltungsoberfläche und interaktiven Funktionen.

## 🌟 Projektübersicht

Dieses Projekt umfasst eine komplette digitale Lösung für Glanzpunkt, bestehend aus:
- **Frontend Website** (Deutsch) - Kundenorientierte Website
- **Admin Panel** (Deutsch/Arabisch) - Verwaltungsoberfläche  
- **Backend API** (Flask) - Server und Datenbank
- **Umfassende Dokumentation** - Vollständige Projektdokumentation

## 🚀 Live Demo

- **Website:** [Frontend Demo](http://localhost:5173)
- **Admin Panel:** [Admin Demo](http://localhost:5174)
- **API:** [Backend API](http://localhost:5000)

**Admin Zugangsdaten:**
- Username: `admin`
- Password: `admin123`

## 📁 Projektstruktur

```
glanzpunkt-website/
├── frontend/                 # React Website (Deutsch)
│   ├── src/
│   │   ├── components/      # React Komponenten
│   │   ├── locales/         # Übersetzungen (DE/EN)
│   │   └── pages/           # Seiten
│   └── package.json
├── admin-panel/             # React Admin Panel (DE/AR)
│   ├── src/
│   │   ├── components/      # Admin Komponenten
│   │   ├── pages/           # Admin Seiten
│   │   └── locales/         # Übersetzungen (DE/AR)
│   └── package.json
├── backend/                 # Flask API Server
│   ├── src/
│   │   ├── models/          # Datenmodelle
│   │   ├── routes/          # API Routen
│   │   └── main.py          # Hauptserver
│   └── requirements.txt
├── docs/                    # Dokumentation
│   ├── planning/            # Planungsdokumente
│   └── reports/             # PDF Berichte
└── README.md
```

## ✨ Hauptfunktionen

### 🌐 Frontend Website
- **8 Hauptbereiche:** Header, Hero, Services, Statistics, Testimonials, Contact, FAQ, Footer
- **Online-Buchungssystem** mit intelligentem Preisrechner
- **Interaktive FAQ** mit 10 umfassenden Fragen
- **Erweiterte Benachrichtigungen** mit 4 verschiedenen Typen
- **100% Responsive Design** für alle Geräte
- **Ansprechende Animationen** und flüssige interaktive Effekte

### 🔧 Admin Panel
- **Umfassende Verwaltungsoberfläche** mit Deutsch/Arabisch Support
- **Service-Management** mit vollständigen CRUD-Operationen
- **Buchungs-Management** mit erweiterten Filtern und Statusupdates
- **Interaktives Dashboard** mit Echtzeit-Statistiken und KPIs
- **Sicheres Authentifizierungssystem** mit Session-Management
- **Nahtloser Sprachwechsel** zwischen Deutsch und Arabisch

### ⚙️ Backend API
- **Flask REST API** mit SQLAlchemy ORM
- **Sichere Authentifizierung** mit Session-Management
- **CRUD-Operationen** für Services, Buchungen, Benutzer
- **CORS-Support** für Frontend-Backend-Kommunikation
- **SQLite Datenbank** mit automatischer Initialisierung

## 🛠️ Technologie-Stack

### Frontend & Admin Panel
- **React 18** mit Vite für optimale Performance
- **Tailwind CSS** für modernes, responsives Design
- **i18next** für Internationalisierung (DE/AR/EN)
- **Lucide React** für konsistente Icons
- **Axios** für API-Kommunikation

### Backend
- **Flask** - Python Web Framework
- **SQLAlchemy** - ORM für Datenbankoperationen
- **Flask-CORS** - Cross-Origin Resource Sharing
- **SQLite** - Leichtgewichtige Datenbank

### Entwicklungstools
- **Vite** - Schneller Build-Tool
- **pnpm** - Effizienter Package Manager
- **Git** - Versionskontrolle

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js 18+ und pnpm
- Python 3.8+ und pip
- Git

### 1. Repository klonen
```bash
git clone https://github.com/Habib775/glanzpunkte-website.git
cd glanzpunkte-website
```

### 2. Frontend Setup
```bash
cd frontend
pnpm install
pnpm run dev
```
**Läuft auf:** http://localhost:5173

### 3. Admin Panel Setup
```bash
cd admin-panel
pnpm install
pnpm run dev
```
**Läuft auf:** http://localhost:5174

### 4. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# oder
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python init_db.py
python src/main.py
```
**Läuft auf:** http://localhost:5000

## 📖 Dokumentation

### 📋 Verfügbare Dokumente
- **Projektübersicht** - Umfassende Projektbeschreibung
- **Technische Spezifikationen** - Architektur und Datenbank-Design
- **Implementierungsplan** - Entwicklungsroadmap
- **Übersetzungsanforderungen** - Mehrsprachigkeits-Setup
- **Admin Panel Handbuch** - Verwaltungsanleitung
- **API Dokumentation** - Backend-Endpunkte

Alle Dokumente sind in `docs/` verfügbar, sowohl als Markdown als auch als PDF.

## 🌍 Mehrsprachigkeit

### Unterstützte Sprachen
- **Deutsch (DE)** - Hauptsprache für Website und Admin Panel
- **Arabisch (AR)** - Admin Panel Unterstützung mit RTL
- **Englisch (EN)** - Fallback-Sprache

### Sprachkonfiguration
```javascript
// i18n Konfiguration
const resources = {
  de: { translation: require('./locales/de/translation.json') },
  ar: { translation: require('./locales/ar/translation.json') },
  en: { translation: require('./locales/en/translation.json') }
};
```

## 🔐 Sicherheit

### Authentifizierung
- Session-basierte Authentifizierung
- Sichere Passwort-Hashing
- CSRF-Schutz
- Input-Validierung

### Datenschutz
- GDPR-konforme Datenverarbeitung
- Sichere API-Endpunkte
- Datenverschlüsselung

## 📊 Features im Detail

### Online-Buchungssystem
- **3-Schritt Buchungsprozess**
- **Intelligenter Preisrechner**
- **Service-Auswahl mit Anpassungen**
- **Terminplanung**
- **Automatische Bestätigungen**

### Admin Dashboard
- **Echtzeit-Statistiken**
  - Gesamtservices: 6
  - Gesamtbuchungen: 25
  - Ausstehende Buchungen: 5
  - Ungelesene Nachrichten: 3
- **Interaktive Charts und Grafiken**
- **Schnellzugriff auf wichtige Funktionen**

### Service-Management
- **Service hinzufügen/bearbeiten/löschen**
- **Preismanagement**
- **Service-Verfügbarkeit**
- **Kategorie-Organisation**

## 🎨 Design-System

### Farbpalette
- **Primär:** Blau (#3B82F6)
- **Sekundär:** Grün (#10B981)
- **Akzent:** Orange (#F59E0B)
- **Neutral:** Grau-Töne

### Typografie
- **Hauptschrift:** Inter
- **Überschriften:** Poppins
- **Code:** Fira Code

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1440px

### Mobile-First Ansatz
Alle Komponenten sind mobile-first entwickelt und skalieren elegant auf größere Bildschirme.

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

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne eine Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe [LICENSE](LICENSE) für Details.

## 👥 Team

- **Entwicklung:** Full-Stack Entwicklung mit React, Flask, und modernen Web-Technologien
- **Design:** Responsive UI/UX Design mit Fokus auf Benutzerfreundlichkeit
- **Übersetzung:** Professionelle Deutsch/Arabisch Lokalisierung

## 📞 Support

Für Support und Fragen:
- **Email:** support@glanzpunkt.de
- **Website:** [www.glanzpunkt.de](http://www.glanzpunkt.de)
- **GitHub Issues:** [Issues](https://github.com/Habib775/glanzpunkte-website/issues)

## 🎯 Roadmap

### Phase 1 ✅ Abgeschlossen
- Grundlegende Website-Entwicklung
- Admin Panel Implementierung
- Backend API Entwicklung

### Phase 2 ✅ Abgeschlossen
- Erweiterte Funktionen
- Mehrsprachigkeit
- Responsive Design

### Phase 3 🔄 In Arbeit
- Performance-Optimierung
- SEO-Verbesserungen
- Erweiterte Analytics

### Phase 4 📋 Geplant
- Mobile App
- Erweiterte Integrationen
- KI-gestützte Features

---

**Entwickelt mit ❤️ für Glanzpunkt Reinigungsdienstleistungen**

*Ein professionelles, skalierbares und benutzerfreundliches Web-System für moderne Reinigungsdienstleistungen.*

