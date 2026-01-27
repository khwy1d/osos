
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { SERVICES, WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from './BrandIcons';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-6 h-6" />, label: 'WhatsApp', link: `https://wa.me/${WA_PHONE}` },
    { icon: <FacebookIcon className="w-6 h-6" />, label: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-6 h-6" />, label: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-6 h-6" />, label: 'TikTok', link: '#' },
    { icon: <XIcon className="w-6 h-6" />, label: 'X (Twitter)', link: '#' }
  ];

  // Filter out hidden services for the footer list
  const footerServices = SERVICES.filter(s => !s.hidden).slice(0, 6);

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-coral/5 rounded-full blur-[120px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          {/* Brand Info Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-blueLight rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-2xl">W</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-4xl tracking-tighter">واصِل</span>
                <span className="text-[10px] text-brand-coral font-bold uppercase tracking-[0.3em] mt-1">Premium Services</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed font-medium text-lg max-w-sm">
              {t(
                'مكتب سفر يمنية متخصصة في تقديم خدمات السفر وحجوزات الطيران، والسياحة، والسفر العلاجي، والخدمات اللوجستية في مصر.',
                'A Yemeni travel agency specialized in travel services, flight bookings, tourism, medical travel, and logistics services in Egypt.'
              )}
            </p>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('تابعنا على منصاتنا', 'Follow Our Platforms')}</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/95 border border-white/10 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group text-brand-blue hover:text-brand-coral"
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
          <div className="space-y-10">
            <h4 className="text-xl font-black border-r-4 border-brand-coral pr-4 flex items-center gap-3">
              {t('خدماتنا الأكثر طلباً', 'Most Requested')}
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {footerServices.map(service => (
                <li key={service.id}>
                  <Link 
                    to={service.link}
                    className="text-slate-400 hover:text-white transition-all flex items-center justify-between group p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10"
                  >
                    <span className="font-bold flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-coral opacity-40 group-hover:opacity-100 transition-opacity"></div>
                      {service.title[lang]}
                    </span>
                    <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-40 transition-all ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-10">
            <h4 className="text-xl font-black border-r-4 border-brand-coral pr-4">{t('تواصـل معنـا', 'Get in Touch')}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{t('مقرنا الرئيسي', 'Our HQ')}</p>
                  <p className="font-black text-xl text-slate-100">{t('اليمن، تعز', 'Yemen, Taiz')}</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone className="w-7 h-7" />
                </div>
                <div dir="ltr">
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1 text-start">{t('اتصل بنا مباشرة', 'Call Direct')}</p>
                  <p className="font-black text-xl text-slate-100">{DISPLAY_PHONE}</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{t('المراسلة البريدية', 'Email Support')}</p>
                  <p className="font-black text-xl text-slate-100">info@wasil-travel.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-black tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {t('واصِل للسياحة والسفر. جميع الحقوق محفوظة.', 'Wasil Travel & Tourism. All rights reserved.')}</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
             <Link to="/about" className="hover:text-white transition-colors">{t('من نحن', 'About')}</Link>
             <Link to="/contact" className="hover:text-white transition-colors">{t('اتصل بنا', 'Contact')}</Link>
             <Link to="/services" className="hover:text-white transition-colors">{t('الخدمات', 'Services')}</Link>
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-brand-coral hover:text-brand-coralLight transition-colors font-black">
               {t('العودة للأعلى', 'Scroll Up')}
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
