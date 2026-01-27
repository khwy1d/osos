
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from '../components/BrandIcons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، أريد الاستعلام عن خدماتكم.");

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-6 h-6" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}?text=${msg}` },
    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-6 h-6" />, name: 'TikTok', link: '#' },
    { icon: <XIcon className="w-6 h-6" />, name: 'X (Twitter)', link: '#' }
  ];

  const contactCards = [
    { 
      icon: <WhatsAppIcon />, 
      title: t('واتساب', 'WhatsApp Support'), 
      value: t('محادثة فورية', 'Official Support'), 
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
      title: t('البريد الإلكتروني', 'Official Email'), 
      value: 'info@wasil-travel.com', 
      action: 'mailto:info@wasil-travel.com', 
      color: 'blue' 
    },
    { 
      icon: <Clock />, 
      title: t('ساعات العمل', 'Service Hours'), 
      value: t('24 ساعة / 7 أيام', '24 Hours / 7 Days'), 
      action: null, 
      color: 'blue' 
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray">
      {/* Header Section with Animated Gradient */}
      <section className="relative pt-32 pb-48 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white space-y-8">
           <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2.5 rounded-full border border-white/20 text-xs md:text-sm font-black uppercase tracking-widest">
              <span className="w-2.5 h-2.5 bg-brand-coral rounded-full animate-ping"></span>
              {t('متاحون الآن لخدمتكم من قلب تعز', 'Live Now From Taiz')}
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight drop-shadow-2xl">
              {t('تواصل مع خبراء السفر', 'Reach Our Travel Experts')}
           </h1>
           <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
             {t('فريقنا المتخصص في مكتب تعز متأهب للإجابة على كافة تساؤلاتكم وتسهيل رحلتكم في كل وقت.', 'Our dedicated team in Taiz HQ is ready to assist you and facilitate your journey 24/7.')}
           </p>
        </div>
      </section>

      {/* Grid Layout for Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 pb-32 relative z-20">
        <div className="grid lg:grid-cols-3 gap-10">
           
           {/* Direct Communication Cards */}
           <div className="lg:col-span-2 space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                 {contactCards.map((card, i) => (
                   <a 
                     key={i}
                     href={card.action || '#'}
                     target={card.action?.startsWith('http') ? "_blank" : undefined}
                     rel={card.action?.startsWith('http') ? "noopener noreferrer" : undefined}
                     className={`bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group block relative overflow-hidden ${card.color === 'green' ? 'hover:border-[#25D366]/30' : 'hover:border-brand-blue/20'}`}
                   >
                     <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-sm ${
                       card.color === 'green' ? 'bg-[#25D366]/10 text-[#25D366]' : `bg-brand-blue/10 text-brand-blue`
                     }`}>
                        {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8 fill-current' })}
                     </div>
                     <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{card.title}</h3>
                     <p className={`text-2xl font-black ${card.color === 'green' ? 'text-[#25D366]' : 'text-brand-blue'}`} dir="ltr">{card.value}</p>
                     
                     {/* Decoration */}
                     <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </a>
                 ))}
              </div>

              {/* HQ Location Details */}
              <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 group">
                 <div className="w-28 h-28 rounded-[2.5rem] bg-slate-100 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all duration-500 shadow-inner">
                    <MapPin className="w-12 h-12" />
                 </div>
                 <div className="flex-1 text-center md:text-right">
                    <h2 className="text-3xl font-black text-brand-blue mb-4 tracking-tight">{t('المقر الرئيسي في تعز', 'Taiz Headquarters')}</h2>
                    <p className="text-xl font-bold text-slate-500 leading-relaxed max-w-lg">
                       {t('اليمن، تعز - مكتب واصل للسياحة والسفر الرئيسي، وجهتك الأولى لخدمات السفر الاحترافية.', 'Yemen, Taiz - Wasil Travel HQ, your primary destination for professional travel services.')}
                    </p>
                 </div>
                 <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("أريد الحصول على إحداثيات المكتب في تعز.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white p-6 rounded-3xl shadow-2xl hover:bg-brand-blueLight hover:-translate-y-2 transition-all flex items-center justify-center gap-3 group/btn"
                  >
                    <ArrowUpRight className="w-7 h-7 group-hover/btn:rotate-45 transition-transform" />
                 </a>
              </div>
           </div>

           {/* Social and Sidebar Section */}
           <div className="space-y-10">
              <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl overflow-hidden relative group h-full flex flex-col">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-brand-coral/20 rounded-bl-full blur-3xl group-hover:scale-125 transition-transform"></div>
                 <h2 className="text-2xl font-black mb-12 relative z-10 border-r-4 border-brand-coral pr-4">{t('منصاتنا الرقمية', 'Digital Presence')}</h2>
                 
                 <div className="space-y-6 relative z-10 flex-1">
                    {socialLinks.map((social, i) => (
                      <a 
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 rounded-[2rem] bg-white border border-transparent hover:bg-slate-100 transition-all group/item hover:-translate-x-2 text-brand-blue"
                      >
                        <div className="flex items-center gap-5">
                           <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover/item:scale-110 group-hover/item:text-brand-coral transition-all">
                              {social.icon}
                           </div>
                           <span className="font-black text-lg text-slate-700 group-hover/item:text-brand-blue transition-colors">{social.name}</span>
                        </div>
                        <ArrowUpRight className="w-6 h-6 opacity-20 group-hover/item:opacity-100 transition-all group-hover/item:rotate-12 group-hover/item:text-brand-coral" />
                      </a>
                    ))}
                 </div>

                 <div className="mt-16 p-8 bg-brand-coral/15 rounded-3xl border border-brand-coral/30 backdrop-blur-sm relative z-10">
                    <p className="text-sm font-bold leading-relaxed text-center text-slate-300">
                       {t('تواصل معنا عبر أي منصة تفضلها، نحن نحدث عروضنا باستمرار لتناسب احتياجاتكم.', 'Connect with us on any platform, we update our offers constantly for you.')}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
