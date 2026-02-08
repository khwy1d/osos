
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE } from '../constants';
import { OsosLogo, WhatsAppIcon } from './BrandIcons';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
            : 'bg-white py-4 border-b border-slate-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <OsosLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-brand-navy font-black text-xl md:text-2xl uppercase tracking-tight leading-none ${lang === 'ar' ? 'font-cairo' : 'font-tajawal'}`}>
                  {lang === 'ar' ? 'أُسس' : 'OSOS'}
                </span>
                <span className="text-brand-green font-bold text-xs md:text-sm tracking-widest uppercase mt-0.5">
                  {lang === 'ar' ? 'للسفر' : 'TRAVEL'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-100">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  className={({ isActive }) => 
                    `px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-white text-brand-navy shadow-sm' 
                        : 'text-slate-500 hover:text-brand-green'
                    }`
                  }
                >
                  {link.label[lang]}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Language Toggle - Icon Only - Visible on all screens */}
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="p-2.5 rounded-full hover:bg-slate-50 transition-colors text-brand-navy group"
                aria-label={lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
                title={lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              >
                <Globe className="w-6 h-6 stroke-[1.5] group-hover:stroke-2 transition-all" />
              </button>

              <a
                href={`tel:${WA_PHONE}`}
                className="hidden md:flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-2xl font-bold text-sm hover:bg-brand-green transition-colors shadow-lg shadow-brand-navy/10 hover:shadow-brand-green/20"
              >
                <Phone className="w-4 h-4" />
                <span>{t('اتصل بنا', 'Call Us')}</span>
              </a>

                            {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="md:hidden p-2.5 text-brand-navy bg-slate-50 rounded-xl active:scale-95 transition-all border border-slate-100 hover:bg-slate-100"
                aria-label="فتح القائمة"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[200] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        />
        
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[300px] bg-white shadow-2xl transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-2xl text-brand-navy">{t('القائمة', 'Menu')}</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-brand-navy hover:bg-red-50 hover:text-red-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 flex-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block p-4 rounded-2xl font-bold text-base transition-all ${
                      isActive 
                        ? 'bg-brand-green text-white shadow-md' 
                        : 'text-brand-navy hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label[lang]}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto space-y-4">
               <a
                href={`https://wa.me/${WA_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform hover:bg-[#128C7E]"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>{t('واتساب', 'WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
