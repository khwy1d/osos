
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from '../components/BrandIcons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدماتكم.");

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-4 h-4" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}?text=${msg}` },
    { icon: <FacebookIcon className="w-4 h-4" />, name: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-4 h-4" />, name: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-4 h-4" />, name: 'TikTok', link: '#' },
    { icon: <XIcon className="w-4 h-4" />, name: 'X (Twitter)', link: '#' }
  ];

  const contactCards = [
    { 
      icon: <WhatsAppIcon />, 
      title: t('واتساب', 'WhatsApp'), 
      value: t('محادثة فورية', 'Live Support'), 
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
      value: t('24 ساعة / 7 أيام', 'Available 24/7'), 
      action: null, 
      color: 'blue' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/30">
      {/* Header Section - Reduced heights and sizes */}
      <section className="relative pt-20 pb-24 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-white rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-60 h-60 bg-brand-coral rounded-full blur-[60px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-5">
           <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-brand-coral rounded-full"></span>
              {t('متاحون لخدمتكم من تعز', 'Live From Taiz')}
           </div>
           <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {t('تواصل مع فريقنا', 'Get in Touch')}
           </h1>
           <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto font-medium leading-relaxed">
             {t('نحن دائماً بالقرب منكم، تواصل معنا عبر أي وسيلة تفضلها وسيقوم فريقنا بالرد عليكم فوراً.', 'We are always close to you, connect with us and our team will respond instantly.')}
           </p>
        </div>
      </section>

      {/* Grid Layout - Compacted spacing */}
      <section className="max-w-5xl mx-auto px-4 -mt-10 pb-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-5">
           
           {/* Primary Cards Column */}
           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <a 
                  key={i}
                  href={card.action || '#'}
                  target={card.action?.startsWith('http') ? "_blank" : undefined}
                  rel={card.action?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group flex flex-col items-start"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all ${
                    card.color === 'green' ? 'bg-[#25D366]/10 text-[#25D366]' : 'bg-brand-blue/5 text-brand-blue'
                  }`}>
                     {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 fill-current' })}
                  </div>
                  <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-wider mb-0.5">{card.title}</h3>
                  <p className={`text-base md:text-lg font-black ${card.color === 'green' ? 'text-[#25D366]' : 'text-brand-blue'}`} dir="ltr">{card.value}</p>
                </a>
              ))}

              {/* HQ Map Card - More Compact */}
              <div className="sm:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6 group">
                 <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-colors">
                    <MapPin className="w-7 h-7" />
                 </div>
                 <div className="flex-1 text-center sm:text-right">
                    <h2 className="text-lg font-black text-brand-blue mb-1">{t('المقر الرئيسي في تعز', 'Taiz Headquarters')}</h2>
                    <p className="text-xs font-bold text-slate-500 leading-relaxed max-w-md">
                       {t('اليمن، تعز - مكتب واصل الرئيسي، وجهتك الأولى لخدمات السفر.', 'Yemen, Taiz - Wasil Main HQ, your destination for travel services.')}
                    </p>
                 </div>
                 <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("أريد الحصول على إحداثيات المكتب في تعز.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white px-5 py-3 rounded-xl shadow hover:bg-brand-blueLight transition-all flex items-center justify-center gap-2 group/btn shrink-0"
                  >
                    <span className="font-bold text-xs">{t('الموقع', 'Map')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                 </a>
              </div>
           </div>

           {/* Socials Column - More refined */}
           <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg flex flex-col h-full overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-coral/5 rounded-full blur-xl"></div>
              <h2 className="text-sm font-black mb-6 relative z-10 border-r-2 border-brand-coral pr-2.5">{t('منصاتنا', 'Our Socials')}</h2>
              
              <div className="space-y-2.5 relative z-10 flex-1">
                 {socialLinks.map((social, i) => (
                   <a 
                     key={i}
                     href={social.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item"
                   >
                     <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:text-brand-coral transition-colors">
                           {social.icon}
                        </div>
                        <span className="font-bold text-xs text-slate-300 group-hover:text-white">{social.name}</span>
                     </div>
                     <ArrowUpRight className="w-3.5 h-3.5 opacity-20 group-hover:opacity-100 transition-all" />
                   </a>
                 ))}
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                 <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    {t('نحن دائماً بالقرب منك', 'Always Near You')}
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
