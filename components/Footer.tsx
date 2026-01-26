
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { SERVICES, WA_PHONE, DISPLAY_PHONE } from '../constants';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-blue font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">واصِل</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              {t(
                'وكالة سفر يمنية متخصصة في توفير كافة خدمات السفر والسياحة العلاجية والخدمات اللوجستية في مصر والأردن.',
                'A Yemeni travel agency specialized in providing all travel, medical tourism, and logistics services in Egypt and Jordan.'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t('استفسارات واتساب', 'WhatsApp Inquiries')}</h4>
            <ul className="space-y-3 text-white/70">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-coral transition-colors flex items-center gap-2 group text-sm font-medium"
                  >
                    <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    {service.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t('اتصل بنا', 'Contact Info')}</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-coral flex-shrink-0 mt-1" />
                <span>{t('صنعاء، اليمن - الدائري الغربي', 'Sana\'a, Yemen - Western Ring Road')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-coral flex-shrink-0 mt-1" />
                <div dir="ltr" className="text-start">
                  <p>{DISPLAY_PHONE}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-coral flex-shrink-0 mt-1" />
                <span>info@wasil-travel.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">{t('موقعنا', 'Our Location')}</h4>
            <div className="rounded-2xl overflow-hidden h-40 bg-white/5 relative group">
               <img 
                 src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1974" 
                 className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" 
                 alt="Map placeholder"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-brand-coral text-white px-4 py-2 rounded-lg text-sm font-bold">
                    {t('فتح في الخرائط', 'Open in Maps')}
                  </a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-white/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {t('واصِل للسياحة والسفر. جميع الحقوق محفوظة.', 'Wasil Travel & Tourism. All rights reserved.')}</p>
          <div className="flex gap-4">
             <Link to="/about" className="hover:text-brand-coral transition-colors">{t('عن واصل', 'About Us')}</Link>
             <Link to="/contact" className="hover:text-brand-coral transition-colors">{t('اتصل بنا', 'Contact Us')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
