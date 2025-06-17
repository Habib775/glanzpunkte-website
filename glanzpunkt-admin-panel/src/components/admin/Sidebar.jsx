import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  MessageSquare, 
  Calendar, 
  Wrench,
  FileText,
  LogOut,
  Globe
} from 'lucide-react';

const Sidebar = ({ currentPage, onPageChange, onLogout, currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: t('dashboard.title') },
    { id: 'services', icon: Wrench, label: t('services.title') },
    { id: 'bookings', icon: Calendar, label: t('bookings.title') },
    { id: 'messages', icon: MessageSquare, label: t('messages.title') },
    { id: 'content', icon: FileText, label: t('content.title') },
    { id: 'users', icon: Users, label: t('users.title') },
    { id: 'settings', icon: Settings, label: t('settings.title') }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Glanzpunkt</h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        <div className="px-6 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {t('common.navigation')}
          </h3>
        </div>
        
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        {/* Language Switcher */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{t('settings.language')}</span>
          </div>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() => onLanguageChange('de')}
              className={`px-2 py-1 text-xs rounded ${
                currentLanguage === 'de'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              DE
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2 py-1 text-xs rounded ${
                currentLanguage === 'ar'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              AR
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          {t('auth.logout')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

