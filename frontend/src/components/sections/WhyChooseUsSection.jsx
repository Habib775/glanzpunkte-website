import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, 
  Award, 
  Leaf, 
  DollarSign, 
  Heart, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      key: 'professionalTeam',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      key: 'experience',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Leaf,
      key: 'ecoFriendly',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: DollarSign,
      key: 'competitivePrices',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Heart,
      key: 'customerSatisfaction',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Clock,
      key: 'punctuality',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Warum Glanzpunkt</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('whyChooseUs.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.key}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`whyChooseUs.features.${feature.key}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t(`whyChooseUs.features.${feature.key}.description`)}
                </p>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Garantiert</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Überzeugt von unserer Qualität?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihnen zeigen, warum über 1000 Kunden uns vertrauen. 
              Buchen Sie noch heute Ihren ersten Service und erleben Sie den Glanzpunkt-Unterschied.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Jetzt Service buchen</span>
                <CheckCircle className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <span>Kostenlose Beratung</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Reaktionszeit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Projekte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

