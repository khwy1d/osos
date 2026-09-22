import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, X_LINK } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon, OsosLogo } from './BrandIcons';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-5 h-5" />, label: 'WhatsApp', link: `https://wa.me/${WA_PHONE}` },
    { icon: <FacebookIcon className="w-5 h-5" />, label: 'Facebook', link: FACEBOOK_LINK },
    { icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', link: INSTAGRAM_LINK },
    { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok', link: TIKTOK_LINK },
    { icon: <XIcon className="w-5 h-5" />, label: 'X (Twitter)', link: X_LINK }
  ];

  // رابط الاتصال المباشر: يبني tel: من WA_PHONE (يفترض أنه بدون + مثل 967776200190)
  const telLink = `tel:+${WA_PHONE.replace(/\D/g, '')}`;

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-14 pb-8 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/15 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {/* Brand Info Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
            </div>

            <p className="text-slate-400 leading-relaxed font-medium text-base max-w-sm">
              {t(
                'أُسس للسفر، خيارك الأول والموثوق في خدمات السفر، الموافقات الأمنية، وحجوزات الطيران والنقل.',
                'Osos Travel, your primary and trusted choice for travel services, security clearances, and flight bookings.'
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
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-brand-green/15 hover:border-brand-green/40 group text-slate-300 hover:text-brand-green"
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

          {/* Contact Details Section */}
          <div className="space-y-5 lg:border-r lg:border-white/5 lg:pr-10">
            <h4 className="text-lg font-black border-r-3 border-brand-green pr-3">{t('تواصـل معنـا', 'Get in Touch')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 transition-transform shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="font-black text-lg text-slate-100 pt-2">{t('اليمن، تعز', 'Yemen, Taiz')}</p>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 transition-transform shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href={telLink}
                  dir="ltr"
                  className="font-black text-lg text-slate-100 pt-2 hover:text-brand-green transition-colors inline-block"
                >
                  {DISPLAY_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-black tracking-widest uppercase">
          <p>
            {t('أُسس للسفر والسياحة. جميع الحقوق محفوظة.', 'Osos Travel & Tourism. All rights reserved.')}
            {' '}
            <span className="text-sm">©</span> {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
             <Link to="/about" className="hover:text-white transition-colors">{t('عن أُسس', 'About')}</Link>
             <Link to="/contact" className="hover:text-white transition-colors">{t('اتصل بنا', 'Contact')}</Link>
             <Link to="/services" className="hover:text-white transition-colors">{t('الخدمات', 'Services')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
