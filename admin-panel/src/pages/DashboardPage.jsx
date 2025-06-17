import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, MessageSquare, Wrench, TrendingUp, Clock, Euro } from 'lucide-react';

const DashboardPage = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalServices: 6,
    totalBookings: 25,
    pendingBookings: 5,
    unreadMessages: 3
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);

  useEffect(() => {
    // Mock data for recent bookings
    setRecentBookings([
      {
        id: 1,
        customerName: 'Max Mustermann',
        service: 'Hausreinigung',
        date: '2024-06-15',
        time: '10:00',
        status: 'pending'
      },
      {
        id: 2,
        customerName: 'Anna Schmidt',
        service: 'Büroreinigung',
        date: '2024-06-16',
        time: '18:00',
        status: 'confirmed'
      },
      {
        id: 3,
        customerName: 'Peter Weber',
        service: 'Fensterreinigung',
        date: '2024-06-14',
        time: '14:00',
        status: 'completed'
      }
    ]);

    // Mock data for recent messages
    setRecentMessages([
      {
        id: 1,
        from: 'Maria Müller',
        subject: 'Terminänderung gewünscht',
        time: '2 Stunden',
        read: false
      },
      {
        id: 2,
        from: 'Thomas Klein',
        subject: 'Frage zur Reinigung',
        time: '5 Stunden',
        read: false
      },
      {
        id: 3,
        from: 'Lisa Wagner',
        subject: 'Sehr zufrieden!',
        time: '1 Tag',
        read: true
      }
    ]);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.title')}</h1>
        <p className="text-gray-600 mt-2">{t('dashboard.subtitle')}</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Wrench className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{t('dashboard.totalServices')}</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalServices}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{t('dashboard.totalBookings')}</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{t('dashboard.pendingBookings')}</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{t('dashboard.unreadMessages')}</p>
              <p className="text-2xl font-bold text-gray-900">{stats.unreadMessages}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{t('dashboard.recentBookings')}</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{booking.customerName}</p>
                    <p className="text-sm text-gray-500">{booking.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{booking.date} {booking.time}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{t('dashboard.recentMessages')}</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${message.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{message.from}</p>
                      <p className="text-sm text-gray-500">{message.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

