import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ServicesSection from './components/sections/ServicesSection';
import StatisticsSection from './components/sections/StatisticsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import FAQSection from './components/sections/FAQSection';
import BookingForm from './components/sections/BookingForm';
import NotificationSystem from './components/common/NotificationSystem';
import './i18n';
import './App.css';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openBookingForm = (serviceId = null) => {
    setSelectedService(serviceId);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookingClick={() => openBookingForm()} />
      
      <main>
        <HeroSection onBookingClick={() => openBookingForm()} />
        <WhyChooseUsSection />
        <ServicesSection onServiceSelect={openBookingForm} />
        <StatisticsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Booking Form Modal */}
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={closeBookingForm}
        selectedService={selectedService}
      />
      
      {/* Notification System */}
      <NotificationSystem />
    </div>
  );
}

export default App;

