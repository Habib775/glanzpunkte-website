import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
    { key: 'blog', href: '#blog' },
    { key: 'faq', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Glanzpunkt</span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Reinigungsservice
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {t(`header.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {i18n.language.toUpperCase()}
                </span>
              </button>
              <div className="absolute top-full right-0 mt-2 py-2 w-24 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => changeLanguage('de')}
                  className={`block w-full px-3 py-1 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                    i18n.language === 'de' ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  Deutsch
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full px-3 py-1 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                    i18n.language === 'en' ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Call Button */}
            <a
              href="tel:+49123456789"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{t('header.callUs')}</span>
            </a>

            {/* Book Service Button */}
            <a
              href="#booking"
              className="btn-primary"
            >
              {t('header.bookService')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`header.${item.key}`)}
                </a>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-4">
                {/* Language Switcher */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t('header.language')}:
                  </span>
                  <button
                    onClick={() => changeLanguage('de')}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      i18n.language === 'de' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`text-sm px-2 py-1 rounded transition-colors ${
                      i18n.language === 'en' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+49123456789"
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{t('header.callUs')}</span>
                </a>

                {/* Book Service Button */}
                <a
                  href="#booking"
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.bookService')}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

