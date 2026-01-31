
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, LayoutGrid, Info, PhoneCall, Globe, ArrowLeft, ArrowRight } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE } from '../constants';
import { WhatsAppIcon, ThiqaLogo } from './BrandIcons';

const LanguageToggle: React.FC<{ variant?: 'nav' | 'sidebar' }> = ({ variant = 'nav' }) => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={(e) => { 
        e.preventDefault(); 
        setLang(lang === 'ar' ? 'en' : 'ar'); 
      }}
      className={`group flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
        variant === 'sidebar' ? 'bg-white p-3 rounded-xl border border-slate-100 shadow-sm w-full gap-2' : 'p-1.5'
      }`}
      aria-label="Change Language"
      title={lang === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
    >
      <Globe 
        className={`transition-colors duration-300 ${
          variant === 'sidebar' ? 'w-6 h-6' : 'w-5 h-5 md:w-5.5 md:h-5.5'
        } text-brand-navy group-hover:text-brand-green stroke-[1.5]`} 
      />
      {variant === 'sidebar' && (
        <span className="font-black text-slate-700 text-xs tracking-widest uppercase">
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات وكالة ثقة.");

  const getIcon = (key: string) => {
    switch(key) {
      case 'home': return <Home className="w-4 h-4" />;
      case 'services': return <LayoutGrid className="w-4 h-4" />;
      case 'about': return <Info className="w-4 h-4" />;
      case 'contact': return <PhoneCall className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-1' : 'bg-white py-2 border-b border-slate-50'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 md:gap-4 group shrink-0">
              <div className="w-12 h-10 md:w-16 md:h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                <ThiqaLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col leading-[0.85] md:leading-[0.85]">
                <span className="text-brand-navy font-black text-lg md:text-2xl tracking-tighter uppercase font-inter">
                  {lang === 'ar' ? 'ثقـة' : 'THIQA'}
                </span>
                <span className="text-[7px] md:text-[9px] text-brand-green font-bold uppercase tracking-[0.3em] mt-1 md:mt-1.5 font-inter">
                  {lang === 'ar' ? 'للسفر' : 'TRAVEL'}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  className={({ isActive }) => 
                    `text-sm font-bold transition-all relative group py-1.5 ${isActive ? 'text-brand-navy' : 'text-slate-600 hover:text-brand-navy'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[lang]}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-5">
              <LanguageToggle />
              
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex bg-brand-green text-white px-5 py-2.5 rounded-xl font-black transition-all hover:bg-brand-navy shadow-lg shadow-brand-green/20 items-center gap-2 text-xs md:text-sm active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>{t('احجز الآن', 'Book Now')}</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="lg:hidden p-2 text-brand-navy bg-slate-50 rounded-xl border border-slate-200 active:scale-95 transition-all"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 md:p-8 flex flex-col h-full bg-brand-gray/30">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ThiqaLogo className="w-14 h-8" />
                <div className="flex flex-col leading-none">
                  <span className="text-brand-navy font-black text-lg uppercase font-inter">{t('ثقة', 'THIQA')}</span>
                  <span className="text-[7px] text-brand-green font-bold uppercase tracking-[0.2em] mt-1 font-inter">{t('للسفر', 'TRAVEL')}</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 bg-white border border-slate-50 rounded-lg shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 overflow-y-auto pr-2 flex-1">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">{t('القائمة الرئيسية', 'Navigation')}</span>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center justify-between p-3.5 rounded-xl transition-all border group ${
                      isActive 
                        ? 'bg-brand-navy text-white border-brand-navy shadow-md' 
                        : 'text-slate-600 border-transparent hover:bg-white hover:border-slate-100'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="transition-transform group-hover:scale-105">{getIcon(link.key)}</span>
                    <span className="text-xs font-black">{link.label[lang]}</span>
                  </div>
                  {lang === 'ar' ? <ArrowLeft className="w-3.5 h-3.5 opacity-30" /> : <ArrowRight className="w-3.5 h-3.5 opacity-30" />}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 space-y-4">
              <LanguageToggle variant="sidebar" />
              
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand-green text-white font-black text-xs shadow-lg active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                {t('واتساب سريع', 'Quick WhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
