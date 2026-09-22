import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, ArrowUpLeft } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, X_LINK } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon, OsosLogo } from './BrandIcons';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-5 h-5" />, label: 'WhatsApp', link: `https://wa.me/${WA_PHONE}`, color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
    { icon: <FacebookIcon className="w-5 h-5" />, label: 'Facebook', link: FACEBOOK_LINK, color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
    { icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', link: INSTAGRAM_LINK, color: 'hover:bg-[#E4405F] hover:border-[#E4405F]' },
    { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok', link: TIKTOK_LINK, color: 'hover:bg-slate-800 hover:border-slate-700' },
    { icon: <XIcon className="w-5 h-5" />, label: 'X (Twitter)', link: X_LINK, color: 'hover:bg-slate-700 hover:border-slate-600' }
  ];

  const telLink = `tel:+${WA_PHONE.replace(/\D/g, '')}`;

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-28 md:pb-10 overflow-hidden relative border-t border-white/5">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-32 w-96 h-96 bg-brand-navy/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 pb-12">
          {/* Brand Section */}
          <div className="space-y-7 text-center lg:text-start">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label={t('العودة إلى الرئيسية', 'Back to home')}>
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <OsosLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className={`font-black text-3xl md:text-4xl text-white ${lang === 'ar' ? 'font-cairo' : 'font-inter tracking-tight'}`}>
                  {lang === 'ar' ? 'أُسس' : 'OSOS'}
                </span>
                <span className="text-brand-green font-black text-sm md:text-base tracking-[0.18em] uppercase mt-2">
                  {lang === 'ar' ? 'للسفر' : 'TRAVEL'}
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-8 font-medium text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              {t(
                'أُسس للسفر، خيارك الأول والموثوق في خدمات السفر، الموافقات الأمنية، وحجوزات الطيران والنقل.',
                'Osos Travel, your trusted choice for travel services, security clearances, and flight bookings.'
              )}
            </p>

            <div className="space-y-4">
              <p className="text-xs font-black text-slate-500 tracking-widest uppercase">
                {t('تابعنا على منصات التواصل', 'Follow us on social media')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:border-r lg:border-white/10 lg:pr-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-7 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-1.5 h-8 bg-brand-green rounded-full"></span>
              {t('تواصل معنا', 'Get in Touch')}
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 md:p-5 hover:bg-white/[0.07] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-1">{t('مقرنا الرئيسي', 'Our headquarters')}</p>
                  <p className="font-black text-lg text-slate-100">{t('اليمن، تعز', 'Yemen, Taiz')}</p>
                </div>
              </div>

              <a href={telLink} dir="ltr" className="flex items-center gap-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 md:p-5 hover:bg-white/[0.07] transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-start">
                  <p className="text-xs font-bold text-slate-500 mb-1">{t('اتصل بنا مباشرة', 'Call us directly')}</p>
                  <p className="font-black text-lg text-slate-100 group-hover:text-brand-green transition-colors">{DISPLAY_PHONE}</p>
                </div>
              </a>
            </div>

            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-brand-green font-black text-sm hover:text-white transition-colors">
              {t('جميع طرق التواصل', 'All contact options')}
              <ArrowUpLeft className={`w-4 h-4 ${lang === 'en' ? 'rotate-90' : ''}`} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-5 text-slate-500">
          <p className="text-center md:text-start text-[11px] md:text-xs font-bold leading-relaxed" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <span className="text-slate-300">© {new Date().getFullYear()} {t('أُسس للسفر والسياحة', 'Osos Travel & Tourism')}</span>
            <span className="mx-2 text-brand-green/70">•</span>
            {t('جميع الحقوق محفوظة', 'All rights reserved')}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-1 text-[11px] font-bold" aria-label={t('روابط التذييل', 'Footer links')}>
            <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">{t('عن أُسس', 'About')}</Link>
            <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">{t('اتصل بنا', 'Contact')}</Link>
            <Link to="/services" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">{t('الخدمات', 'Services')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
