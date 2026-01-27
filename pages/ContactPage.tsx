
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from '../components/BrandIcons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدماتكم.");

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-3.5 h-3.5" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}?text=${msg}` },
    { icon: <FacebookIcon className="w-3.5 h-3.5" />, name: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-3.5 h-3.5" />, name: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-3.5 h-3.5" />, name: 'TikTok', link: '#' },
    { icon: <XIcon className="w-3.5 h-3.5" />, name: 'X (Twitter)', link: '#' }
  ];

  const contactCards = [
    { 
      icon: <WhatsAppIcon />, 
      title: t('واتساب', 'WhatsApp'), 
      value: t('دعم فوري', 'Live Support'), 
      action: `https://wa.me/${WA_PHONE}?text=${msg}`, 
      color: 'green' 
    },
    { 
      icon: <Phone />, 
      title: t('اتصل بنا', 'Direct Call'), 
      value: DISPLAY_PHONE, 
      action: `tel:${WA_PHONE}`, 
      color: 'blue' 
    },
    { 
      icon: <Mail />, 
      title: t('البريد الإلكتروني', 'Email'), 
      value: 'info@wasil-travel.com', 
      action: 'mailto:info@wasil-travel.com', 
      color: 'blue' 
    },
    { 
      icon: <Clock />, 
      title: t('ساعات العمل', 'Service Hours'), 
      value: t('متاحون 24/7', 'Available 24/7'), 
      action: null, 
      color: 'blue' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/20">
      {/* Header Section - Refined sizes */}
      <section className="relative pt-16 pb-20 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-[-5%] right-[-2%] w-60 h-60 bg-white rounded-full blur-[60px]"></div>
          <div className="absolute bottom-[-5%] left-[-2%] w-52 h-52 bg-brand-coral rounded-full blur-[50px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white space-y-4">
           <div className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 text-[9px] font-bold uppercase tracking-wider">
              <span className="w-1 h-1 bg-brand-coral rounded-full"></span>
              {t('خدمة عملاء تعز', 'Taiz Support')}
           </div>
           <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
              {t('تواصل مع خبراء السفر', 'Get in Touch')}
           </h1>
           <p className="text-xs md:text-sm text-white/70 max-w-lg mx-auto font-medium leading-relaxed">
             {t('نحن دائماً بالقرب منكم، تواصل معنا عبر أي وسيلة تفضلها وسيقوم فريقنا بالرد عليكم فوراً.', 'We are always close, reach out through any channel and we will respond.')}
           </p>
        </div>
      </section>

      {/* Compact Cards Layout */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 pb-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-4">
           
           {/* Info Cards */}
           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {contactCards.map((card, i) => (
                <a 
                  key={i}
                  href={card.action || '#'}
                  target={card.action?.startsWith('http') ? "_blank" : undefined}
                  rel={card.action?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group flex flex-col items-start"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-all ${
                    card.color === 'green' ? 'bg-[#25D366]/10 text-[#25D366]' : 'bg-brand-blue/5 text-brand-blue'
                  }`}>
                     {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 fill-current' })}
                  </div>
                  <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-wider mb-0.5">{card.title}</h3>
                  <p className={`text-sm md:text-base font-black ${card.color === 'green' ? 'text-[#25D366]' : 'text-brand-blue'}`} dir="ltr">{card.value}</p>
                </a>
              ))}

              {/* Compact Map Card */}
              <div className="sm:col-span-2 bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-5 group">
                 <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <div className="flex-1 text-center sm:text-right">
                    <h2 className="text-base font-black text-brand-blue mb-0.5">{t('المقر الرئيسي في تعز', 'Taiz Headquarters')}</h2>
                    <p className="text-[10px] font-bold text-slate-500 leading-relaxed max-w-sm">
                       {t('اليمن، تعز - مكتب واصل الرئيسي لخدمات السفر المتكاملة.', 'Yemen, Taiz - Wasil Main HQ for travel services.')}
                    </p>
                 </div>
                 <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("أريد الحصول على إحداثيات المكتب في تعز.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white px-4 py-2 rounded-lg shadow-sm hover:bg-brand-blueLight transition-all flex items-center justify-center gap-1.5 group/btn shrink-0"
                  >
                    <span className="font-bold text-[10px]">{t('الموقع', 'Map')}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                 </a>
              </div>
           </div>

           {/* Slim Socials Sidebar */}
           <div className="bg-slate-900 rounded-xl p-5 text-white shadow-md flex flex-col h-full overflow-hidden relative group">
              <h2 className="text-xs font-black mb-5 relative z-10 border-r-2 border-brand-coral pr-2">{t('منصاتنا', 'Socials')}</h2>
              
              <div className="space-y-2 relative z-10 flex-1">
                 {socialLinks.map((social, i) => (
                   <a 
                     key={i}
                     href={social.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item"
                   >
                     <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center group-hover/item:text-brand-coral transition-colors">
                           {social.icon}
                        </div>
                        <span className="font-bold text-[10px] text-slate-300 group-hover:text-white">{social.name}</span>
                     </div>
                     <ArrowUpRight className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-all" />
                   </a>
                 ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-center">
                 <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">
                    {t('واصِل للسياحة والسفر', 'Wasil Travel')}
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
