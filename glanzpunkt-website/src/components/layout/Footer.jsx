import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  Star,
  Shield,
  Award
} from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const companyLinks = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ];

  const serviceLinks = [
    { name: 'Hausreinigung', href: '#services' },
    { name: 'Büroreinigung', href: '#services' },
    { name: 'Hotelreinigung', href: '#services' },
    { name: 'Baureinigung', href: '#services' },
    { name: 'Fensterreinigung', href: '#services' },
    { name: 'Tatortreinigung', href: '#services' }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
    { name: 'Notfall-Service', href: 'tel:+491234567890' },
    { name: 'Service-Anfrage', href: '#booking' }
  ];

  const legalLinks = [
    { key: 'privacyPolicy', href: '#privacy' },
    { key: 'termsOfService', href: '#terms' },
    { key: 'cookiePolicy', href: '#cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Glanzpunkt</span>
                <span className="text-xs text-muted-foreground">
                  Reinigungsservice
                </span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professionelle Reinigungsdienstleistungen für Ihr Zuhause, Büro und 
              Ihre Geschäftsräume. Vertrauen Sie auf über 10 Jahre Erfahrung.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Versichert</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Zertifiziert</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+49123456789" className="text-muted-foreground hover:text-primary transition-colors">
                  +49 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@glanzpunkt.de" className="text-muted-foreground hover:text-primary transition-colors">
                  info@glanzpunkt.de
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Musterstraße 123, 80331 München
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`header.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">
              {t('footer.newsletter')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('footer.newsletterText')}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1 px-4 py-2 border border-border rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Jederzeit abbestellbar. Datenschutz wird respektiert.
              </p>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-foreground mb-3">
                {t('footer.followUs')}
              </h4>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 Glanzpunkt Reinigungsservice. {t('footer.allRightsReserved')}.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t(`footer.${link.key}`)}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <a
              href="#home"
              className="inline-flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors text-sm"
            >
              <span>Nach oben</span>
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

