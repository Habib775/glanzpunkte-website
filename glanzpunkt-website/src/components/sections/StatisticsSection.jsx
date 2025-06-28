import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  Target,
  Calendar
} from 'lucide-react';

const StatisticsSection = () => {
  const { t } = useTranslation();
  const [counters, setCounters] = useState({
    projects: 0,
    customers: 0,
    teamMembers: 0,
    experience: 0
  });

  const finalValues = {
    projects: 1250,
    customers: 1000,
    teamMembers: 25,
    experience: 10
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals.find(interval => interval === this));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const statistics = [
    {
      icon: CheckCircle,
      key: 'projectsCompleted',
      value: counters.projects,
      suffix: '+',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Erfolgreich abgeschlossene Projekte'
    },
    {
      icon: Users,
      key: 'satisfiedCustomers',
      value: counters.customers,
      suffix: '+',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Zufriedene Kunden vertrauen uns'
    },
    {
      icon: Award,
      key: 'teamMembers',
      value: counters.teamMembers,
      suffix: '',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Professionelle Teammitglieder'
    },
    {
      icon: Calendar,
      key: 'yearsExperience',
      value: counters.experience,
      suffix: '+',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: 'Jahre Erfahrung im Reinigungsbereich'
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: '4.9/5 Sterne',
      description: 'Durchschnittliche Kundenbewertung',
      color: 'text-yellow-600'
    },
    {
      icon: Clock,
      title: '24h Reaktionszeit',
      description: 'Schnelle Antwort auf Anfragen',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: '100% Qualität',
      description: 'Garantierte Zufriedenheit',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: '95% Weiterempfehlung',
      description: 'Kunden empfehlen uns weiter',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Unsere Erfolge</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('statistics.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zahlen, die für sich sprechen - Vertrauen Sie auf unsere bewährte Erfahrung
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.key}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.value.toLocaleString('de-DE')}{stat.suffix}
                  </div>

                  {/* Title */}
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {t(`statistics.${stat.key}`)}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <IconComponent className={`w-8 h-8 ${achievement.color} mx-auto mb-3`} />
                <div className="text-xl font-bold text-foreground mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schließen Sie sich über 1000 zufriedenen Kunden an und erleben Sie 
              den Unterschied, den professionelle Reinigung macht.
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
                href="#testimonials"
                className="btn-outline inline-flex items-center justify-center space-x-2"
              >
                <span>Kundenbewertungen lesen</span>
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

