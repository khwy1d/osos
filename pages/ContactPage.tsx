
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE, EMAIL_ADDRESS, FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, X_LINK } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from '../components/BrandIcons';

const ContactPage: React.FC = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-6 h-6" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}`, color: 'hover:bg-[#25D366] hover:text-white' },
    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook', link: FACEBOOK_LINK, color: 'hover:bg-[#1877F2] hover:text-white' },
    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram', link: INSTAGRAM_LINK, color: 'hover:bg-[#E4405F] hover:text-white' },
    { icon: <TikTokIcon className="w-6 h-6" />, name: 'TikTok', link: TIKTOK_LINK, color: 'hover:bg-[#000000] hover:text-white' },
    { icon: <XIcon className="w-5 h-5" />, name: 'X', link: X_LINK, color: 'hover:bg-slate-900 hover:text-white' }
  ];

  const contactCards = [
    { 
      icon: <WhatsAppIcon />, 
      title: t('واتساب', 'WhatsApp'), 
      value: t('دعم فوري ومباشر', 'Instant & Direct Support'), 
      display: t('راسلنا الآن', 'Chat Now'),
      action: `https://wa.me/${WA_PHONE}`, 
    },
    { 
      icon: <Phone />, 
      title: t('اتصل بنا', 'Call Us'), 
      value: t('متاحون للرد على استفسارك', 'Available to answer'), 
      display: DISPLAY_PHONE,
      action: `tel:${WA_PHONE}`, 
    },
    { 
      icon: <Mail />, 
      title: t('البريد الإلكتروني', 'Email'), 
      value: t('للتعاملات الرسمية والشركات', 'For Official Business'), 
      display: EMAIL_ADDRESS,
      action: `mailto:${EMAIL_ADDRESS}`, 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative pt-20 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
           <h1 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight">
              {t('تواصل معنا', 'Contact Us')}
           </h1>
           <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
             {t('نحن هنا لمساعدتك في كل خطوة. اختر الوسيلة الأنسب لك وتواصل مع فريق أُسس.', 'We are here to help you every step of the way. Choose the method that suits you best.')}
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* 1. Top Section: 3 Columns Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, i) => (
            <a 
              key={i}
              href={card.action}
              target={card.action.startsWith('http') ? "_blank" : undefined}
              rel={card.action.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-coral/5 flex items-center justify-center text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-colors duration-300 shadow-sm">
                {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 fill-current' })}
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-navy mb-2">{card.title}</h3>
                <p className="text-sm font-bold text-slate-400">{card.value}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-brand-coral font-black text-base group-hover:underline decoration-2 underline-offset-4" dir="ltr">
                {card.display}
                <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:-translate-y-0.5 ${lang === 'ar' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
              </span>
            </a>
          ))}
        </div>

        {/* 2. Middle Section: Socials & Hours */}
        <div className="grid md:grid-cols-2 gap-6">
           
           {/* Professional Social Media Card */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
              <div>
                <h3 className="text-xl font-black text-brand-navy">{t('منصات التواصل الاجتماعي', 'Social Media Channels')}</h3>
                <p className="text-sm font-bold text-slate-400 mt-1">{t('تابعنا لمعرفة آخر العروض والأخبار', 'Follow us for latest offers and news')}</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                 {socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                       {social.icon}
                    </a>
                 ))}
              </div>
           </div>

           {/* Working Hours Card */}
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                 <Clock className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="text-xl font-black text-brand-navy">{t('ساعات العمل', 'Working Hours')}</h3>
                 <p className="text-lg font-black text-brand-coral mt-2">{t('متاحون 24 ساعة / 7 أيام', 'Available 24/7')}</p>
                 <p className="text-sm font-bold text-slate-400 mt-1">{t('فريقنا جاهز لخدمتكم في أي وقت', 'Our team is ready to serve you anytime')}</p>
              </div>
           </div>

        </div>

        {/* 3. Map Section (Hidden as requested, but code preserved) */}
        <div className="hidden">
           <div className="bg-slate-100 rounded-3xl overflow-hidden relative min-h-[400px] border border-slate-200 group">
               {/* Decorative Map Placeholder */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/map-cube.png')] opacity-10"></div>
               <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-16 h-16 mx-auto bg-brand-coral rounded-full flex items-center justify-center shadow-xl animate-bounce">
                       <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-brand-navy font-black text-xl">{t('تعز، الجمهورية اليمنية', 'Taiz, Yemen')}</p>
                    <p className="text-slate-500 font-bold text-sm max-w-xs mx-auto">
                      {t('شارع جمال - جولة المسبح - جوار مكتب التربية', 'Jamal St. - Al-Masbah Roundabout - Next to Education Office')}
                    </p>
                    <a 
                       href="https://maps.google.com" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-brand-coral font-black text-sm shadow-md hover:bg-brand-navy hover:text-white transition-all"
                    >
                       {t('فتح في خرائط جوجل', 'Open in Google Maps')}
                       <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
