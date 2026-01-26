
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, MessageCircle, ChevronDown, Plane, FileCheck, HeartPulse, Bus, Building2, Landmark, Car, MapPin, Briefcase, Palmtree } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, WA_PHONE, DISPLAY_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  const SERVICE_LINKS = [
    { href: '/security-clearance-egypt', label: { ar: 'موافقات أمنية لمصر', en: 'Egypt Clearance' }, icon: FileCheck },
    { href: '/medical-tourism', label: { ar: 'السفر العلاجي', en: 'Medical Travel' }, icon: HeartPulse },
    { href: '/flights', label: { ar: 'تذاكر طيران', en: 'Flight Tickets' }, icon: Plane },
    { href: '/saudi-visit', label: { ar: 'زيارة السعودية', en: 'Saudi Visit' }, icon: Briefcase },
    { href: '/umrah', label: { ar: 'الحج والعمرة', en: 'Hajj & Umrah' }, icon: Landmark },
    { href: '/tourism', label: { ar: 'سياحة خارجية', en: 'Intl Tourism' }, icon: Palmtree },
    { href: '/domestic-tourism', label: { ar: 'سياحة داخلية', en: 'Domestic Tourism' }, icon: MapPin },
    { href: '/transport', label: { ar: 'حجز باصات', en: 'Buses' }, icon: Bus },
    { href: '/car-rental', label: { ar: 'تأجير سيارات', en: 'Car Rental' }, icon: Car },
    { href: '/real-estate', label: { ar: 'خدمات عقارية', en: 'Real Estate' }, icon: Building2 },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 py-0' : 'bg-white border-b border-slate-100 py-1'}`}>
      <div className={`bg-brand-blue text-white px-4 text-xs font-medium hidden sm:block transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-8 py-1.5 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-brand-coral transition-colors cursor-default"><Phone className="w-3 h-3" /> {DISPLAY_PHONE}</span>
            <span className="flex items-center gap-1 hover:text-brand-coral transition-colors cursor-default"><MessageCircle className="w-3 h-3" /> واتساب: {DISPLAY_PHONE}</span>
          </div>
          <p className="animate-pulse-soft">{t('ثقة عملائنا هي رأس مالنا', 'Our clients\' trust is our capital')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-brand-blue rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand-coral shadow-lg shadow-brand-blue/20">
              <span className="text-white font-black text-xl md:text-2xl">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-brand-blue font-black text-xl md:text-2xl tracking-tighter transition-colors group-hover:text-brand-coral">
                {t('واصِل', 'Wasil')}
              </span>
              <span className="text-[10px] text-brand-coral font-bold uppercase tracking-widest hidden sm:block group-hover:text-brand-blue transition-colors">Travel & Tourism</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {NAV_LINKS.map((link) => {
              if (link.key === 'services') {
                return (
                  <div key={link.key} className="relative group h-full flex items-center">
                    <NavLink
                      to={link.href}
                      className={({ isActive }) => 
                        `flex items-center gap-1 text-brand-text hover:text-brand-blue font-bold text-sm xl:text-base transition-all duration-300 py-2 relative group-hover:text-brand-blue ${isActive ? 'text-brand-blue' : ''}`
                      }
                    >
                      {link.label[lang]}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </NavLink>
                    
                    <div className="absolute top-[calc(100%-1px)] right-0 w-72 bg-white rounded-b-2xl shadow-2xl border-t-4 border-brand-blue opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-3 grid gap-1 z-50 grid-cols-1">
                      {SERVICE_LINKS.map((service, idx) => (
                        <NavLink
                          key={idx}
                          to={service.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item hover:translate-x-1"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover/item:bg-brand-blue group-hover/item:text-white transition-all duration-300">
                            <service.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-bold text-brand-text group-hover/item:text-brand-blue">
                            {service.label[lang]}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.key}
                  to={link.href}
                  className={({ isActive }) => 
                    `text-brand-text hover:text-brand-blue font-semibold text-sm xl:text-base transition-colors py-2 relative group ${isActive ? 'text-brand-blue' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label[lang]}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-coral transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-brand-text hover:bg-slate-100 transition-all font-bold text-sm border border-slate-200 hover:border-brand-blue"
            >
              <Globe className="w-4 h-4 text-brand-blue" />
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <a
              href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-coral hover:bg-brand-coralLight text-white px-5 py-2.5 rounded-xl font-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-coral/20 hover:shadow-brand-coral/40 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current animate-pulse" />
              {t('واتساب الآن', 'WhatsApp Now')}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="p-2 text-brand-text">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-blue transition-transform duration-300 hover:scale-110">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 h-[calc(100vh-64px)] overflow-y-auto pb-20 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-2 px-6 py-6">
            {NAV_LINKS.map((link) => {
              if (link.key === 'services') {
                 return (
                   <div key={link.key} className="border-b border-slate-50 pb-2">
                     <div 
                        className="flex items-center justify-between text-xl font-bold text-slate-800 py-2 cursor-pointer active:text-brand-blue"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                       <span>{link.label[lang]}</span>
                       <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-brand-coral' : ''}`} />
                     </div>
                     {mobileServicesOpen && (
                       <div className="flex flex-col gap-2 pr-4 bg-slate-50/50 rounded-xl p-2 mt-2 animate-in slide-in-from-top-2 duration-200">
                          {SERVICE_LINKS.map((service, idx) => (
                            <NavLink
                              key={idx}
                              to={service.href}
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) => 
                                `flex items-center gap-3 py-2 px-3 rounded-lg text-sm font-bold transition-all ${isActive ? 'bg-brand-blue/10 text-brand-blue translate-x-1' : 'text-slate-600 hover:text-brand-blue'}`
                              }
                            >
                              <service.icon className="w-4 h-4" />
                              {service.label[lang]}
                            </NavLink>
                          ))}
                       </div>
                     )}
                   </div>
                 );
              }
              return (
                <NavLink
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-xl font-bold text-brand-text border-b border-slate-50 pb-2 py-2 transition-colors ${isActive ? 'text-brand-blue border-brand-blue pl-2' : 'hover:text-brand-blue'}`
                  }
                >
                  {link.label[lang]}
                </NavLink>
              );
            })}
            <div className="pt-6 space-y-3">
              <a
                href={`https://wa.me/${WA_PHONE}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-black text-lg shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                {t('تواصل عبر واتساب', 'WhatsApp Us')}
              </a>
              <a
                href={`tel:+${WA_PHONE}`}
                className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue py-4 rounded-2xl font-black text-lg"
              >
                <Phone className="w-6 h-6" />
                {t('اتصل بنا', 'Call Us')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
