import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Edit, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';

const ServicesManagement = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState({
    name_de: '',
    name_ar: '',
    description_de: '',
    description_ar: '',
    price: '',
    features: [],
    visible: true,
    category: 'cleaning'
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockServices = [
      {
        id: 1,
        name_de: 'Hausreinigung',
        name_ar: 'تنظيف المنازل',
        description_de: 'Professionelle Reinigung für Ihr Zuhause',
        description_ar: 'تنظيف احترافي لمنزلك',
        price: 89.99,
        features: ['Staubsaugen', 'Wischen', 'Badezimmer', 'Küche'],
        visible: true,
        category: 'cleaning',
        rating: 4.9,
        bookings: 156
      },
      {
        id: 2,
        name_de: 'Büroreinigung',
        name_ar: 'تنظيف المكاتب',
        description_de: 'Saubere Arbeitsplätze für produktive Teams',
        description_ar: 'أماكن عمل نظيفة لفرق منتجة',
        price: 129.99,
        features: ['Schreibtische', 'Böden', 'Fenster', 'Sanitäranlagen'],
        visible: true,
        category: 'office',
        rating: 4.8,
        bookings: 89
      },
      {
        id: 3,
        name_de: 'Fensterreinigung',
        name_ar: 'تنظيف النوافذ',
        description_de: 'Kristallklare Fenster für mehr Licht',
        description_ar: 'نوافذ صافية كالكريستال لمزيد من الضوء',
        price: 59.99,
        features: ['Innen- und Außenreinigung', 'Rahmen', 'Fensterbänke'],
        visible: true,
        category: 'windows',
        rating: 4.7,
        bookings: 234
      },
      {
        id: 4,
        name_de: 'Teppichreinigung',
        name_ar: 'تنظيف السجاد',
        description_de: 'Tiefenreinigung für Ihre Teppiche',
        description_ar: 'تنظيف عميق للسجاد',
        price: 79.99,
        features: ['Fleckenentfernung', 'Tiefenreinigung', 'Schnelltrocknung'],
        visible: false,
        category: 'carpet',
        rating: 4.6,
        bookings: 67
      }
    ];
    setServices(mockServices);
  }, []);

  const handleEditService = (service) => {
    setEditingService({ ...service });
  };

  const handleSaveEdit = () => {
    setServices(services.map(service => 
      service.id === editingService.id ? editingService : service
    ));
    setEditingService(null);
  };

  const handleCancelEdit = () => {
    setEditingService(null);
  };

  const handleToggleVisibility = (serviceId) => {
    setServices(services.map(service => 
      service.id === serviceId ? { ...service, visible: !service.visible } : service
    ));
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm(t('services.confirmDelete'))) {
      setServices(services.filter(service => service.id !== serviceId));
    }
  };

  const handleAddService = () => {
    const id = Math.max(...services.map(s => s.id)) + 1;
    setServices([...services, { ...newService, id, rating: 0, bookings: 0 }]);
    setNewService({
      name_de: '',
      name_ar: '',
      description_de: '',
      description_ar: '',
      price: '',
      features: [],
      visible: true,
      category: 'cleaning'
    });
    setShowAddForm(false);
  };

  const categories = [
    { value: 'cleaning', label_de: 'Hausreinigung', label_ar: 'تنظيف المنازل' },
    { value: 'office', label_de: 'Büroreinigung', label_ar: 'تنظيف المكاتب' },
    { value: 'windows', label_de: 'Fensterreinigung', label_ar: 'تنظيف النوافذ' },
    { value: 'carpet', label_de: 'Teppichreinigung', label_ar: 'تنظيف السجاد' },
    { value: 'deep', label_de: 'Tiefenreinigung', label_ar: 'تنظيف عميق' },
    { value: 'move', label_de: 'Umzugsreinigung', label_ar: 'تنظيف الانتقال' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('services.title')}</h1>
          <p className="text-gray-600 mt-2">{t('services.subtitle')}</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>{t('services.addNew')}</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600">{services.length}</div>
          <div className="text-sm text-gray-600">{t('services.totalServices')}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600">
            {services.filter(s => s.visible).length}
          </div>
          <div className="text-sm text-gray-600">{t('services.activeServices')}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-orange-600">
            {services.reduce((sum, s) => sum + s.bookings, 0)}
          </div>
          <div className="text-sm text-gray-600">{t('services.totalBookings')}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-purple-600">
            €{(services.reduce((sum, s) => sum + s.price, 0) / services.length).toFixed(2)}
          </div>
          <div className="text-sm text-gray-600">{t('services.averagePrice')}</div>
        </div>
      </div>

      {/* Add Service Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">{t('services.addNewService')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('services.nameGerman')}
              </label>
              <input
                type="text"
                value={newService.name_de}
                onChange={(e) => setNewService({...newService, name_de: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('services.nameArabic')}
              </label>
              <input
                type="text"
                value={newService.name_ar}
                onChange={(e) => setNewService({...newService, name_ar: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('services.price')}
              </label>
              <input
                type="number"
                step="0.01"
                value={newService.price}
                onChange={(e) => setNewService({...newService, price: parseFloat(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('services.category')}
              </label>
              <select
                value={newService.category}
                onChange={(e) => setNewService({...newService, category: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label_de}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={handleAddService}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              {t('common.save')}
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              {t('common.cancel')}
            </button>
          </div>
        </div>
      )}

      {/* Services List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.service')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.category')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.price')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.rating')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.bookings')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('services.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id} className={!service.visible ? 'opacity-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingService && editingService.id === service.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editingService.name_de}
                          onChange={(e) => setEditingService({...editingService, name_de: e.target.value})}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                        <input
                          type="text"
                          value={editingService.name_ar}
                          onChange={(e) => setEditingService({...editingService, name_ar: e.target.value})}
                          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{service.name_de}</div>
                        <div className="text-sm text-gray-500">{service.name_ar}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {categories.find(c => c.value === service.category)?.label_de}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingService && editingService.id === service.id ? (
                      <input
                        type="number"
                        step="0.01"
                        value={editingService.price}
                        onChange={(e) => setEditingService({...editingService, price: parseFloat(e.target.value)})}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    ) : (
                      <span className="text-sm font-medium text-gray-900">€{service.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900">{service.rating}</span>
                      <span className="text-yellow-400 ml-1">★</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.bookings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      service.visible 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {service.visible ? t('services.active') : t('services.hidden')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {editingService && editingService.id === service.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditService(service)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleToggleVisibility(service.id)}
                          className="text-yellow-600 hover:text-yellow-900"
                        >
                          {service.visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesManagement;

