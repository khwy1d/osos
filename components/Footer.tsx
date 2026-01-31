
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { SERVICES, WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon, ThiqaLogo } from './BrandIcons';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-5 h-5" />, label: 'WhatsApp', link: `https://wa.me/${WA_PHONE}` },
    { icon: <FacebookIcon className="w-5 h-5" />, label: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok', link: '#' },
    { icon: <XIcon className="w-5 h-5" />, label: 'X (Twitter)', link: '#' }
  ];

  const footerServices = SERVICES.filter(s => !s.hidden).slice(0, 6);

  return (
    <footer id="contact" className="hidden bg-slate-950 text-white pt-16 pb-10 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Info Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-24 h-12 flex items-center justify-center">
                <ThiqaLogo className="w-full h-full" />
              </div>
              <div className={`flex flex-col ${lang === 'ar' ? 'leading-[1.1]' : 'leading-[0.85]'}`}>
                <span className={`font-black text-2xl uppercase ${lang === 'ar' ? 'font-cairo' : 'font-inter tracking-tighter'}`}>ثقة</span>
                <span className={`text-brand-green font-bold uppercase ${lang === 'ar' ? 'text-[11px] font-cairo mt-1' : 'text-[8px] tracking-[0.2em] font-inter mt-1.5'}`}>للسفر</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed font-medium text-base max-w-sm">
              {t(
                'ثقة للسفر، خيارك الأول والموثوق في خدمات السفر، الموافقات الأمنية، وحجوزات الطيران والنقل.',
                'Thiqa Travel, your primary and trusted choice for travel services, security clearances, and flight bookings.'
              )}
            </p>

            <div className="space-y-3">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{t('تابعنا على منصاتنا', 'Follow Us')}</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group text-slate-400 hover:text-brand-green"
                    aria-label={social.label}
                  >
                    <div className="transition-transform group-hover:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="space-y-8">
            <h4 className="text-lg font-black border-r-3 border-brand-green pr-3 flex items-center gap-2">
              {t('خدماتنا الأكثر طلباً', 'Most Requested')}
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {footerServices.map(service => (
                <li key={service.id}>
                  <Link 
                    to={service.link}
                    className="text-slate-400 hover:text-white transition-all flex items-center justify-between group p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                  >
                    <span className="font-bold text-sm flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green opacity-40 group-hover:opacity-100 transition-opacity"></div>
                      {service.title[lang]}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-40 transition-all ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-8">
            <h4 className="text-lg font-black border-r-3 border-brand-green pr-3">{t('تواصـل معنـا', 'Get in Touch')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 transition-transform shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-0.5">{t('مقرنا الرئيسي', 'Our HQ')}</p>
                  <p className="font-black text-lg text-slate-100">{t('اليمن، تعز', 'Yemen, Taiz')}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/20 flex items-center justify-center text-brand-navy flex-shrink-0 transition-transform shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div dir="ltr">
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-0.5 text-start">{t('اتصل بنا مباشرة', 'Call Direct')}</p>
                  <p className="font-black text-lg text-slate-100">{DISPLAY_PHONE}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {t('ثقة للسفر والسياحة. جميع الحقوق محفوظة.', 'Thiqa Travel & Tourism.')}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
             <Link to="/about" className="hover:text-white transition-colors">{t('عن ثقة', 'About')}</Link>
             <Link to="/contact" className="hover:text-white transition-colors">{t('اتصل بنا', 'Contact')}</Link>
             <Link to="/services" className="hover:text-white transition-colors">{t('الخدمات', 'Services')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
