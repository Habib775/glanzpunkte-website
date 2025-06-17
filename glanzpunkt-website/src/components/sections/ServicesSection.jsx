import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Building, 
  Hotel, 
  HardHat, 
  Sparkles, 
  Shield,
  ArrowRight,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

const ServicesSection = ({ onServiceSelect }) => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      key: 'residential',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      gradient: 'from-blue-500 to-blue-600',
      features: ['Grundreinigung', 'Regelmäßige Reinigung', 'Fensterreinigung']
    },
    {
      icon: Building,
      key: 'office',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      gradient: 'from-green-500 to-green-600',
      features: ['Büroreinigung', 'Sanitärreinigung', 'Bodenreinigung']
    },
    {
      icon: Hotel,
      key: 'hotel',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      gradient: 'from-purple-500 to-purple-600',
      features: ['Zimmerreinigung', 'Housekeeping', 'Wäscheservice']
    },
    {
      icon: HardHat,
      key: 'construction',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      gradient: 'from-orange-500 to-orange-600',
      features: ['Baureinigung', 'Endreinigung', 'Grobreinigung']
    },
    {
      icon: Sparkles,
      key: 'window',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
      gradient: 'from-cyan-500 to-cyan-600',
      features: ['Fensterreinigung', 'Fassadenreinigung', 'Glasreinigung']
    },
    {
      icon: Shield,
      key: 'crime',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      gradient: 'from-red-500 to-red-600',
      features: ['Tatortreinigung', 'Desinfektion', 'Diskrete Abwicklung']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Unsere Dienstleistungen</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.key}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`services.types.${service.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(`services.types.${service.key}.description`)}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                      <span>{t('services.bookService')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button className="w-full border border-border text-foreground py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-300">
                      {t('services.getQuote')}
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 mt-4 pt-4 border-t border-border">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">4.9/5</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Benötigen Sie eine maßgeschneiderte Lösung?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Wir bieten auch individuelle Reinigungslösungen für spezielle Anforderungen. 
              Kontaktieren Sie uns für ein persönliches Beratungsgespräch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+49123456789"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Sofort anrufen</span>
                <Clock className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas Teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Verfügbar in München, Berlin, Hamburg, Köln und weiteren Städten
          </p>
          <a
            href="#service-areas"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center space-x-1"
          >
            <span>Alle Servicegebiete anzeigen</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

