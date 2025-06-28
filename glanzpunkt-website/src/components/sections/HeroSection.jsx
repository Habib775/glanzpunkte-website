import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  const features = [
    'Professionelles Team',
    'Umweltfreundliche Produkte',
    'Transparente Preise',
    '24/7 Kundenservice'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-medium">
                Über 1000+ zufriedene Kunden
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title font-bold text-white mb-6 animate-fade-in-up">
              {t('hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {t('hero.description')}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a
                href="#booking"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <span>{t('hero.bookNow')}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <span>{t('hero.getQuote')}</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-white/70 text-sm">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-float">
            <div className="relative z-10">
              {/* Placeholder for hero image - will be replaced with actual image */}
              <div className="w-full h-96 lg:h-[500px] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Professionelles Reinigungsteam</p>
                  <p className="text-sm opacity-75">Bild wird hier eingefügt</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Star className="w-8 h-8 text-yellow-800 fill-current" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="w-6 h-6 text-green-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

