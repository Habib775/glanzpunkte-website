import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ServicesManagement from './pages/ServicesManagement';
import BookingsManagement from './pages/BookingsManagement';
import Sidebar from './components/admin/Sidebar';
import './i18n';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentLanguage, setCurrentLanguage] = useState('de');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'services':
        return <ServicesManagement />;
      case 'bookings':
        return <BookingsManagement />;
      case 'messages':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Messages Management</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'content':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'users':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      default:
        return <DashboardPage />;
    }
  };

  if (!isAuthenticated) {
    return (
      <AuthProvider>
        <div className={`min-h-screen bg-gray-100 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
          <LoginPage onLogin={handleLogin} />
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className={`min-h-screen bg-gray-100 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="flex">
          <Sidebar 
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onLogout={handleLogout}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
          <main className="flex-1 ml-64 p-6">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

