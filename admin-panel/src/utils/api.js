import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
  logout: () => api.post('/admin/logout'),
  getProfile: () => api.get('/admin/profile'),
};

// Dashboard API
export const dashboardAPI = {
  getStats: () => api.get('/admin/dashboard/stats'),
};

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services/admin'),
  getPublic: () => api.get('/services'),
  create: (service) => api.post('/services', service),
  update: (id, service) => api.put(`/services/${id}`, service),
  delete: (id) => api.delete(`/services/${id}`),
  toggle: (id) => api.post(`/services/${id}/toggle`),
};

// Bookings API
export const bookingsAPI = {
  getAll: (params) => api.get('/bookings/admin', { params }),
  getById: (id) => api.get(`/bookings/${id}`),
  create: (booking) => api.post('/bookings', booking),
  update: (id, booking) => api.put(`/bookings/${id}`, booking),
  updateStatus: (id, status) => api.post(`/bookings/${id}/status`, { status }),
  delete: (id) => api.delete(`/bookings/${id}`),
  getStats: () => api.get('/bookings/stats'),
};

// Content API
export const contentAPI = {
  getAll: (params) => api.get('/content/admin', { params }),
  getPublic: (params) => api.get('/content', { params }),
  create: (content) => api.post('/content', content),
  update: (id, content) => api.put(`/content/${id}`, content),
  delete: (id) => api.delete(`/content/${id}`),
};

// Messages API
export const messagesAPI = {
  getAll: (params) => api.get('/content/messages/admin', { params }),
  create: (message) => api.post('/content/messages', message),
  updateStatus: (id, status) => api.post(`/content/messages/${id}/status`, { status }),
  delete: (id) => api.delete(`/content/messages/${id}`),
};

// Users API
export const usersAPI = {
  getAll: () => api.get('/admin/users'),
  create: (user) => api.post('/admin/users', user),
  update: (id, user) => api.put(`/admin/users/${id}`, user),
  delete: (id) => api.delete(`/admin/users/${id}`),
};

export default api;

