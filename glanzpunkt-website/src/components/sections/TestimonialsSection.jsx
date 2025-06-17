import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  User,
  MapPin,
  Calendar,
  ThumbsUp
} from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Schmidt',
      location: 'München',
      service: 'Hausreinigung',
      rating: 5,
      date: '2024-05-15',
      text: 'Absolut professioneller Service! Das Team von Glanzpunkt hat meine Wohnung makellos gereinigt. Besonders beeindruckt hat mich die Gründlichkeit und die Verwendung umweltfreundlicher Produkte. Kann ich nur weiterempfehlen!',
      avatar: 'MS'
    },
    {
      id: 2,
      name: 'Thomas Müller',
      location: 'Berlin',
      service: 'Büroreinigung',
      rating: 5,
      date: '2024-05-10',
      text: 'Seit 2 Jahren vertrauen wir Glanzpunkt die Reinigung unserer Büroräume an. Zuverlässig, pünktlich und immer mit einem Lächeln. Die Qualität ist konstant hoch und das Preis-Leistungs-Verhältnis stimmt.',
      avatar: 'TM'
    },
    {
      id: 3,
      name: 'Anna Weber',
      location: 'Hamburg',
      service: 'Fensterreinigung',
      rating: 5,
      date: '2024-05-08',
      text: 'Die Fensterreinigung war einfach perfekt! Kristallklare Fenster und eine sehr freundliche Beratung. Das Team hat sogar kleine Reparaturen an den Fensterdichtungen vorgenommen. Echter Rundum-Service!',
      avatar: 'AW'
    },
    {
      id: 4,
      name: 'Michael Bauer',
      location: 'Köln',
      service: 'Baureinigung',
      rating: 5,
      date: '2024-05-05',
      text: 'Nach unserer Renovierung hat Glanzpunkt eine Grundreinigung durchgeführt. Trotz des großen Schmutzes haben sie alles blitzsauber bekommen. Sehr professionell und gründlich gearbeitet.',
      avatar: 'MB'
    },
    {
      id: 5,
      name: 'Sarah Klein',
      location: 'Frankfurt',
      service: 'Hotelreinigung',
      rating: 5,
      date: '2024-05-01',
      text: 'Als Hotelbetreiberin bin ich auf zuverlässige Partner angewiesen. Glanzpunkt übertrifft immer meine Erwartungen. Die Zimmer sind immer perfekt gereinigt und die Gäste sind sehr zufrieden.',
      avatar: 'SK'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Kundenbewertungen</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-foreground text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>

                {/* Details */}
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[currentTestimonial].location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(testimonials[currentTestimonial].date)}</span>
                    </div>
                  </div>
                  <div className="text-primary text-sm font-medium mt-1">
                    {testimonials[currentTestimonial].service}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 line-clamp-3">
                "{testimonial.text.substring(0, 120)}..."
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.location} • {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
            <ThumbsUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Teilen Sie Ihre Erfahrung mit uns
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Waren Sie mit unserem Service zufrieden? Wir freuen uns über Ihr Feedback 
              und helfen anderen Kunden bei ihrer Entscheidung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#review"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Bewertung abgeben</span>
                <Star className="w-5 h-5" />
              </a>
              <a
                href="#booking"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Service buchen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

