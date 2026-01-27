
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowLeft, ArrowRight, Home, LayoutGrid, Info, PhoneCall, Globe } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon } from './BrandIcons';

const LanguageToggle: React.FC<{ variant?: 'nav' | 'sidebar' }> = ({ variant = 'nav' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={(e) => { 
        e.preventDefault(); 
        setLang(lang === 'ar' ? 'en' : 'ar'); 
      }}
      className={`group flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
        variant === 'sidebar' ? 'bg-white p-4 rounded-2xl border border-slate-100 shadow-sm w-full gap-3' : 'p-2'
      }`}
      aria-label="Change Language"
      title={lang === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
    >
      <Globe 
        className={`transition-colors duration-300 ${
          variant === 'sidebar' ? 'w-8 h-8' : 'w-6 h-6 md:w-7 md:h-7'
        } text-brand-blue group-hover:text-brand-coral stroke-[1.5]`} 
      />
      {variant === 'sidebar' && (
        <span className="font-black text-slate-700 text-sm tracking-widest uppercase">
          {lang === 'ar' ? 'English' : 'العربية'}
        </span>
      )}
    </button>
  );
};

const Navbar: React.FC = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  const getIcon = (key: string) => {
    switch(key) {
      case 'home': return <Home className="w-5 h-5" />;
      case 'services': return <LayoutGrid className="w-5 h-5" />;
      case 'about': return <Info className="w-5 h-5" />;
      case 'contact': return <PhoneCall className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand-coral shadow-lg shadow-brand-blue/20">
                <span className="text-white font-black text-xl md:text-2xl">W</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-brand-blue font-black text-xl md:text-3xl tracking-tighter">
                  {t('واصِل', 'Wasil')}
                </span>
                <span className="text-[10px] text-brand-coral font-bold uppercase tracking-widest mt-0.5">Travel & Tourism</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  className={({ isActive }) => 
                    `text-base font-bold transition-all relative group py-2 ${isActive ? 'text-brand-blue' : 'text-slate-600 hover:text-brand-blue'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[lang]}
                      <span className={`absolute -bottom-1 left-0 h-1 bg-brand-coral transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-8">
              {/* Language Globe Toggle */}
              <LanguageToggle />
              
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex bg-brand-blue text-white px-6 py-3 rounded-2xl font-black transition-all hover:scale-105 hover:bg-brand-blueLight shadow-xl shadow-brand-blue/20 items-center gap-2 text-sm md:text-base"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>{t('احجز الآن', 'Book Now')}</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="lg:hidden p-3 text-brand-blue bg-slate-50 rounded-2xl border border-slate-200 hover:scale-105 active:scale-95 transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 md:p-10 flex flex-col h-full bg-brand-gray/30">
            <div className="flex justify-between items-center mb-12 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">W</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-brand-blue font-black text-xl">{t('واصِل', 'Wasil')}</span>
                  <span className="text-[8px] text-brand-coral font-bold uppercase tracking-[0.2em] mt-1">Premium Travel</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2.5 text-slate-400 bg-white border border-slate-100 rounded-xl hover:text-brand-coral transition-all shadow-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto pr-2 flex-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 mb-3">{t('القائمة الرئيسية', 'Navigation Menu')}</span>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center justify-between p-4 rounded-2xl transition-all border group ${
                      isActive 
                        ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' 
                        : 'text-slate-600 border-transparent hover:bg-white hover:shadow-md hover:border-slate-100'
                    }`
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="transition-transform duration-300 group-hover:scale-110">{getIcon(link.key)}</span>
                    <span className="text-sm font-black">{link.label[lang]}</span>
                  </div>
                  {lang === 'ar' ? <ArrowLeft className="w-4 h-4 opacity-30" /> : <ArrowRight className="w-4 h-4 opacity-30" />}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-slate-100 space-y-5">
              <div className="flex flex-col items-center gap-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('اختر اللغة', 'SELECT LANGUAGE')}</span>
                 <LanguageToggle variant="sidebar" />
              </div>
              
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#25D366] text-white font-black text-sm shadow-xl shadow-[#25D366]/20 active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current animate-pulse" />
                {t('واتساب سريع', 'Quick WhatsApp')}
              </a>
              
              <p className="text-center text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                {t('تعز، اليمن - واصل للسياحة', 'Taiz, Yemen - Wasil Travel')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
