
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { SERVICES, WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from './BrandIcons';

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
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-10 overflow-hidden relative">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Info Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blueLight rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-xl">W</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-2xl tracking-tighter">واصِل</span>
                <span className="text-[8px] text-brand-coral font-bold uppercase tracking-[0.2em] mt-0.5">Premium Services</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed font-medium text-base max-w-sm">
              {t(
                'مكتب سفر يمني متخصص في خدمات السفر وحجوزات الطيران، والسياحة، والسفر العلاجي، والخدمات اللوجستية في مصر.',
                'Yemeni travel agency specialized in travel services, flight bookings, tourism, medical travel, and logistics services in Egypt.'
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
                    className="w-10 h-10 rounded-xl bg-white border border-white/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group text-brand-blue hover:text-brand-coral"
                    aria-label={social.label}
                  >
                    <div className="transition-transform group-hover:scale-105">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="space-y-8">
            <h4 className="text-lg font-black border-r-3 border-brand-coral pr-3 flex items-center gap-2">
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
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral opacity-40 group-hover:opacity-100 transition-opacity"></div>
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
            <h4 className="text-lg font-black border-r-3 border-brand-coral pr-3">{t('تواصـل معنـا', 'Get in Touch')}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center text-brand-coral flex-shrink-0 transition-transform shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-0.5">{t('مقرنا الرئيسي', 'Our HQ')}</p>
                  <p className="font-black text-lg text-slate-100">{t('اليمن، تعز', 'Yemen, Taiz')}</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 transition-transform shadow-sm">
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
          <p>© {new Date().getFullYear()} {t('واصِل للسياحة والسفر. جميع الحقوق محفوظة.', 'Wasil Travel & Tourism.')}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
             <Link to="/about" className="hover:text-white transition-colors">{t('من نحن', 'About')}</Link>
             <Link to="/contact" className="hover:text-white transition-colors">{t('اتصل بنا', 'Contact')}</Link>
             <Link to="/services" className="hover:text-white transition-colors">{t('الخدمات', 'Services')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
