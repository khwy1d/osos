
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MessageCircle } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE, DISPLAY_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-0' : 'bg-white border-b border-slate-100 py-1'}`}>
      {/* Top Utility Bar (Desktop only) */}
      <div className={`bg-brand-blue text-white px-4 text-xs font-medium hidden md:block transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-8 py-1.5 opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 hover:text-brand-coral transition-colors cursor-default">
              <Phone className="w-3 h-3" /> {DISPLAY_PHONE}
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-coral transition-colors cursor-default">
              <MessageCircle className="w-3 h-3" /> واتساب: {DISPLAY_PHONE}
            </span>
          </div>
          <p className="animate-pulse-soft font-bold">{t('ثقة عملائنا هي رأس مالنا', 'Our clients\' trust is our capital')}</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-brand-blue rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand-coral shadow-lg shadow-brand-blue/20">
              <span className="text-white font-black text-lg md:text-2xl">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-brand-blue font-black text-xl md:text-3xl tracking-tighter transition-colors group-hover:text-brand-coral">
                {t('واصِل', 'Wasil')}
              </span>
              <span className="text-[8px] md:text-[10px] text-brand-coral font-bold uppercase tracking-widest hidden sm:block group-hover:text-brand-blue transition-colors mt-0.5">Travel & Tourism</span>
            </div>
          </Link>

          {/* Center Navigation - Optimized for Tablet/Desktop/TV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 h-full">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                to={link.href}
                className={({ isActive }) => 
                  `text-brand-text hover:text-brand-blue font-bold text-sm lg:text-lg transition-all py-2 relative group ${isActive ? 'text-brand-blue' : ''}`
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

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-brand-text hover:bg-slate-100 transition-all font-bold text-sm lg:text-base border border-slate-200 hover:border-brand-blue"
            >
              <Globe className="w-5 h-5 text-brand-blue" />
              {lang === 'ar' ? 'English' : 'عربي'}
            </button>
            <a
              href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-coral hover:bg-brand-coralLight text-white px-5 py-3 lg:px-6 lg:py-3.5 rounded-xl md:rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-coral/20 hover:shadow-brand-coral/40 text-sm lg:text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current animate-pulse" />
              {t('احجز الآن', 'Book Now')}
            </a>
          </div>

          {/* Mobile UI Buttons */}
          <div className="md:hidden flex items-center gap-2">
             <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="p-2 text-brand-text bg-slate-100 rounded-lg active:bg-brand-blue active:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-blue bg-slate-100 rounded-lg transition-transform duration-300 hover:scale-110 active:bg-brand-blue active:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Drawer - Balanced text sizes */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white animate-in slide-in-from-top duration-300 overflow-y-auto">
          <div className="p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-lg">W</span>
                </div>
                <span className="text-brand-blue font-black text-xl tracking-tighter">
                  {t('واصِل', 'Wasil')}
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-brand-blue bg-slate-100 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-lg font-black p-4 rounded-xl transition-all ${isActive ? 'bg-brand-blue text-white shadow-lg translate-x-2' : 'text-brand-text hover:bg-slate-50'}`
                  }
                >
                  {link.label[lang]}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-8 space-y-3">
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-black text-lg shadow-lg active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                {t('تواصل عبر واتساب', 'WhatsApp Us')}
              </a>
              <a
                href={`tel:+${WA_PHONE}`}
                className="flex items-center justify-center gap-3 border-2 border-brand-blue text-brand-blue py-4 rounded-xl font-black text-lg hover:bg-brand-blue hover:text-white transition-all"
              >
                <Phone className="w-6 h-6" />
                {t('اتصل بنا هاتفياً', 'Call Us Now')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
