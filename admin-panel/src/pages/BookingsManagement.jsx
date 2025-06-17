import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react';

const BookingsManagement = () => {
  const { t } = useTranslation();
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  // Mock data for demonstration
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        customerName: 'Max Mustermann',
        email: 'max.mustermann@email.de',
        phone: '+49 30 12345678',
        service: 'Hausreinigung',
        serviceId: 1,
        date: '2024-06-15',
        time: '10:00',
        address: 'Musterstraße 123, 10115 Berlin',
        status: 'pending',
        price: 89.99,
        notes: 'Bitte klingeln Sie an der Haustür. Hund im Haus.',
        createdAt: '2024-06-10T14:30:00Z',
        duration: 3,
        rooms: 4,
        specialRequests: ['Fenster putzen', 'Kühlschrank reinigen']
      },
      {
        id: 2,
        customerName: 'Anna Schmidt',
        email: 'anna.schmidt@email.de',
        phone: '+49 30 87654321',
        service: 'Büroreinigung',
        serviceId: 2,
        date: '2024-06-16',
        time: '18:00',
        address: 'Geschäftsstraße 456, 10117 Berlin',
        status: 'confirmed',
        price: 129.99,
        notes: 'Nach Geschäftsschluss. Schlüssel beim Pförtner.',
        createdAt: '2024-06-08T09:15:00Z',
        duration: 4,
        rooms: 8,
        specialRequests: ['Sanitäranlagen', 'Küche']
      },
      {
        id: 3,
        customerName: 'Peter Weber',
        email: 'peter.weber@email.de',
        phone: '+49 30 11223344',
        service: 'Fensterreinigung',
        serviceId: 3,
        date: '2024-06-14',
        time: '14:00',
        address: 'Fensterstraße 789, 10119 Berlin',
        status: 'completed',
        price: 59.99,
        notes: 'Alle Fenster innen und außen.',
        createdAt: '2024-06-05T16:45:00Z',
        duration: 2,
        rooms: 6,
        specialRequests: ['Rahmen reinigen']
      },
      {
        id: 4,
        customerName: 'Maria Müller',
        email: 'maria.mueller@email.de',
        phone: '+49 30 55667788',
        service: 'Teppichreinigung',
        serviceId: 4,
        date: '2024-06-17',
        time: '11:00',
        address: 'Teppichweg 321, 10121 Berlin',
        status: 'cancelled',
        price: 79.99,
        notes: 'Terminänderung gewünscht.',
        createdAt: '2024-06-09T11:20:00Z',
        duration: 3,
        rooms: 3,
        specialRequests: ['Fleckenentfernung']
      },
      {
        id: 5,
        customerName: 'Thomas Klein',
        email: 'thomas.klein@email.de',
        phone: '+49 30 99887766',
        service: 'Hausreinigung',
        serviceId: 1,
        date: '2024-06-18',
        time: '09:00',
        address: 'Kleinstraße 654, 10123 Berlin',
        status: 'pending',
        price: 89.99,
        notes: 'Ersttermin. Bitte pünktlich sein.',
        createdAt: '2024-06-11T13:10:00Z',
        duration: 3,
        rooms: 5,
        specialRequests: ['Balkon reinigen']
      }
    ];
    setBookings(mockBookings);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  const filteredBookings = bookings.filter(booking => {
    const statusMatch = filterStatus === 'all' || booking.status === filterStatus;
    const dateMatch = !filterDate || booking.date === filterDate;
    return statusMatch && dateMatch;
  });

  const statusCounts = {
    all: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('bookings.title')}</h1>
        <p className="text-gray-600 mt-2">{t('bookings.subtitle')}</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-gray-600">{statusCounts.all}</div>
          <div className="text-sm text-gray-600">{t('bookings.total')}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</div>
          <div className="text-sm text-gray-600">{t('bookings.pending')}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600">{statusCounts.confirmed}</div>
          <div className="text-sm text-gray-600">{t('bookings.confirmed')}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600">{statusCounts.completed}</div>
          <div className="text-sm text-gray-600">{t('bookings.completed')}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-red-600">{statusCounts.cancelled}</div>
          <div className="text-sm text-gray-600">{t('bookings.cancelled')}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('bookings.filterByStatus')}
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t('bookings.allStatuses')}</option>
              <option value="pending">{t('bookings.pending')}</option>
              <option value="confirmed">{t('bookings.confirmed')}</option>
              <option value="completed">{t('bookings.completed')}</option>
              <option value="cancelled">{t('bookings.cancelled')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('bookings.filterByDate')}
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.customer')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.service')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.dateTime')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.price')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('bookings.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{booking.customerName}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {booking.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {booking.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.service}</div>
                    <div className="text-sm text-gray-500">
                      {booking.duration}h • {booking.rooms} Räume
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {booking.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {booking.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">€{booking.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`px-2 py-1 text-xs font-semibold rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${getStatusColor(booking.status)}`}
                    >
                      <option value="pending">{t('bookings.pending')}</option>
                      <option value="confirmed">{t('bookings.confirmed')}</option>
                      <option value="completed">{t('bookings.completed')}</option>
                      <option value="cancelled">{t('bookings.cancelled')}</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="text-blue-600 hover:text-blue-900 flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {t('bookings.viewDetails')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {t('bookings.bookingDetails')} #{selectedBooking.id}
                </h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('bookings.customerInfo')}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedBooking.customerName}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedBooking.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {selectedBooking.phone}
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-0.5" />
                      {selectedBooking.address}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('bookings.serviceInfo')}</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>{t('bookings.service')}:</strong> {selectedBooking.service}</div>
                    <div><strong>{t('bookings.date')}:</strong> {selectedBooking.date}</div>
                    <div><strong>{t('bookings.time')}:</strong> {selectedBooking.time}</div>
                    <div><strong>{t('bookings.duration')}:</strong> {selectedBooking.duration} Stunden</div>
                    <div><strong>{t('bookings.rooms')}:</strong> {selectedBooking.rooms}</div>
                    <div><strong>{t('bookings.price')}:</strong> €{selectedBooking.price}</div>
                  </div>
                </div>
              </div>
              
              {selectedBooking.specialRequests.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">{t('bookings.specialRequests')}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {selectedBooking.specialRequests.map((request, index) => (
                      <li key={index}>{request}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedBooking.notes && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">{t('bookings.notes')}</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                    {selectedBooking.notes}
                  </p>
                </div>
              )}
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  {t('common.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsManagement;

