
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, LayoutGrid, Info, PhoneCall, Globe, ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE, DISPLAY_PHONE, EMAIL_ADDRESS } from '../constants';
import { WhatsAppIcon, OsosLogo } from './BrandIcons';

const LanguageToggle: React.FC<{ variant?: 'nav' | 'sidebar' | 'topbar' }> = ({ variant = 'nav' }) => {
  const { lang, setLang } = useLanguage();

  const isTopbar = variant === 'topbar';

  return (
    <button
      onClick={(e) => { 
        e.preventDefault(); 
        setLang(lang === 'ar' ? 'en' : 'ar'); 
      }}
      className={`group flex items-center justify-center transition-all duration-300 hover:opacity-80 ${
        variant === 'sidebar' 
          ? 'bg-white p-3 rounded-xl border border-slate-100 shadow-sm w-full gap-2' 
          : isTopbar 
            ? 'flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white'
            : 'p-1.5'
      }`}
      aria-label="Change Language"
      title={lang === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
    >
      <Globe 
        className={`transition-colors duration-300 ${
          variant === 'sidebar' ? 'w-6 h-6 text-brand-navy' : 'w-4 h-4'
        } ${isTopbar ? 'text-white' : 'text-brand-navy group-hover:text-brand-green'} stroke-[1.5]`} 
      />
      
      <span className={`font-bold text-xs tracking-wide uppercase ${isTopbar ? 'text-white' : 'text-slate-700'}`}>
        {lang === 'ar' ? 'English' : 'العربية'}
      </span>
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

  const defaultMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات وكالة أُسس.");

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
      <nav className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-500 flex flex-col ${scrolled ? 'shadow-xl' : 'border-b border-slate-50'}`}>
        
        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block bg-brand-navy text-white py-2.5 transition-all">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center text-xs font-medium">
              <div className="flex items-center gap-6">
                 <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 hover:text-brand-green transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    <span dir="ltr">{EMAIL_ADDRESS}</span>
                 </a>
                 <a href={`tel:${WA_PHONE}`} className="flex items-center gap-2 hover:text-brand-green transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    <span dir="ltr">{DISPLAY_PHONE}</span>
                 </a>
              </div>
              <div>
                 <LanguageToggle variant="topbar" />
              </div>
           </div>
        </div>

        {/* Main Navbar */}
        <div className={`bg-white transition-all duration-500 ${scrolled ? 'py-1' : 'py-2 md:py-3'}`}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-between items-center h-14 md:h-16">
              {/* Logo Section */}
              <Link to="/" className="flex items-center gap-2 md:gap-4 group shrink-0">
                <div className="w-12 h-10 md:w-16 md:h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                  <OsosLogo className="w-full h-full" />
                </div>
                <div className={`flex flex-col ${lang === 'ar' ? 'leading-[0.9] md:leading-[0.9]' : 'leading-[0.8] md:leading-[0.8]'}`}>
                  <span className={`text-brand-navy font-black text-xl md:text-3xl uppercase ${lang === 'ar' ? 'font-cairo tracking-tight' : 'font-inter tracking-tighter'}`}>
                    {lang === 'ar' ? 'أُسس' : 'OSOS'}
                  </span>
                  <span className={`text-brand-green font-black uppercase ${lang === 'ar' ? 'text-[9px] md:text-[12px] font-cairo mt-1' : 'text-[7px] md:text-[10px] font-inter tracking-[0.4em] mt-1 md:mt-1.5'}`}>
                    {lang === 'ar' ? 'للسفر' : 'TRAVEL'}
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 lg:gap-10">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.key}
                    to={link.href}
                    className={({ isActive }) => 
                      `text-sm lg:text-[15px] font-extrabold transition-all relative group py-2 ${isActive ? 'text-brand-navy' : 'text-slate-500 hover:text-brand-navy'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label[lang]}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 md:gap-6">
                {/* Mobile Language Toggle */}
                <div className="md:hidden">
                  <LanguageToggle />
                </div>
                
                <a
                  href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex bg-brand-green text-white px-5 lg:px-7 py-2.5 lg:py-3.5 rounded-2xl font-black transition-all hover:bg-brand-navy shadow-lg shadow-brand-green/20 items-center gap-2 lg:gap-2.5 text-xs lg:text-sm active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 lg:w-4.5 lg:h-4.5 fill-current" />
                  <span>{t('احجز الآن', 'Book Now')}</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setIsOpen(true)} 
                  className="md:hidden p-2 text-brand-navy bg-slate-100 rounded-xl border border-slate-200 active:scale-95 transition-all"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[200] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-3xl transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full bg-brand-gray/30">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <OsosLogo className="w-16 h-10" />
                <div className={`flex flex-col ${lang === 'ar' ? 'leading-[0.9]' : 'leading-none'}`}>
                  <span className={`text-brand-navy font-black text-xl uppercase ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>{t('أُسس', 'OSOS')}</span>
                  <span className={`text-brand-green font-bold uppercase ${lang === 'ar' ? 'text-[11px] font-cairo' : 'text-[8px] tracking-[0.2em] font-inter mt-1'}`}>{t('للسفر', 'TRAVEL')}</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2.5 text-slate-400 bg-white border border-slate-100 rounded-xl shadow-sm active:rotate-90 transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto pr-2 flex-1 scrollbar-hide">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-3 mb-3">{t('القائمة الرئيسية', 'Navigation')}</span>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center justify-between p-4.5 rounded-2xl transition-all border group ${
                      isActive 
                        ? 'bg-brand-navy text-white border-brand-navy shadow-xl scale-[1.02]' 
                        : 'text-slate-600 border-transparent hover:bg-white hover:border-slate-100'
                    }`
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="transition-transform group-hover:scale-110">{getIcon(link.key)}</span>
                    <span className="text-sm font-black tracking-tight">{link.label[lang]}</span>
                  </div>
                  {lang === 'ar' ? <ArrowLeft className="w-4 h-4 opacity-30" /> : <ArrowRight className="w-4 h-4 opacity-30" />}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100 space-y-5">
              <LanguageToggle variant="sidebar" />
              
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-brand-green text-white font-black text-sm shadow-2xl active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
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
