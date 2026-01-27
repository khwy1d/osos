
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';
import { WhatsAppIcon, TikTokIcon, XIcon, FacebookIcon, InstagramIcon } from '../components/BrandIcons';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدماتكم.");

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-5 h-5" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}?text=${msg}` },
    { icon: <FacebookIcon className="w-5 h-5" />, name: 'Facebook', link: '#' },
    { icon: <InstagramIcon className="w-5 h-5" />, name: 'Instagram', link: '#' },
    { icon: <TikTokIcon className="w-5 h-5" />, name: 'TikTok', link: '#' },
    { icon: <XIcon className="w-5 h-5" />, name: 'X (Twitter)', link: '#' }
  ];

  const contactCards = [
    { 
      icon: <WhatsAppIcon />, 
      title: t('واتساب', 'WhatsApp'), 
      value: t('محادثة فورية', 'Live Chat'), 
      action: `https://wa.me/${WA_PHONE}?text=${msg}`, 
      color: 'green' 
    },
    { 
      icon: <Phone />, 
      title: t('اتصل بنا', 'Call Us'), 
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
      title: t('ساعات العمل', 'Working Hours'), 
      value: t('24 ساعة / 7 أيام', '24/7 Service'), 
      action: null, 
      color: 'blue' 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header Section */}
      <section className="relative pt-24 pb-32 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-brand-coral rounded-full blur-[80px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white space-y-6">
           <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-brand-coral rounded-full animate-pulse"></span>
              {t('متاحون الآن لخدمتكم من تعز', 'Live Support From Taiz')}
           </div>
           <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
              {t('تواصل مع خبراء السفر', 'Talk to Our Experts')}
           </h1>
           <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
             {t('فريقنا المتخصص متواجد دائماً للإجابة على استفساراتكم وتسهيل كافة إجراءات سفركم بمهنية عالية.', 'Our expert team is always available to answer your questions and facilitate your travel needs.')}
           </p>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 pb-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-6">
           
           {/* Primary Contact Cards */}
           <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <a 
                  key={i}
                  href={card.action || '#'}
                  target={card.action?.startsWith('http') ? "_blank" : undefined}
                  rel={card.action?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group block relative overflow-hidden ${card.color === 'green' ? 'hover:border-[#25D366]/30' : 'hover:border-brand-blue/20'}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    card.color === 'green' ? 'bg-[#25D366]/10 text-[#25D366]' : 'bg-brand-blue/5 text-brand-blue'
                  } group-hover:scale-110 group-hover:rotate-3`}>
                     {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 fill-current' })}
                  </div>
                  <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{card.title}</h3>
                  <p className={`text-xl font-black ${card.color === 'green' ? 'text-[#25D366]' : 'text-brand-blue'}`} dir="ltr">{card.value}</p>
                </a>
              ))}

              {/* HQ Map Card - Spans full width on tablet/desktop within its container */}
              <div className="sm:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 group">
                 <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-coral group-hover:text-white transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                 </div>
                 <div className="flex-1 text-center md:text-right">
                    <h2 className="text-xl font-black text-brand-blue mb-2">{t('المقر الرئيسي في تعز', 'Taiz Headquarters')}</h2>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-md">
                       {t('اليمن، تعز - مكتب واصل للسياحة والسفر الرئيسي، وجهتك الأولى لخدمات السفر الاحترافية.', 'Yemen, Taiz - Wasil Travel HQ, your primary destination for professional services.')}
                    </p>
                 </div>
                 <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("أريد الحصول على إحداثيات المكتب في تعز.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-blue text-white px-6 py-4 rounded-2xl shadow-lg hover:bg-brand-blueLight transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span className="font-bold text-sm">{t('موقعنا', 'Location')}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                 </a>
              </div>
           </div>

           {/* Socials Column */}
           <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl flex flex-col h-full overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/10 rounded-full blur-2xl"></div>
              <h2 className="text-lg font-black mb-8 relative z-10 border-r-2 border-brand-coral pr-3">{t('منصاتنا', 'Our Socials')}</h2>
              
              <div className="space-y-3 relative z-10 flex-1">
                 {socialLinks.map((social, i) => (
                   <a 
                     key={i}
                     href={social.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group/item hover:-translate-x-1"
                   >
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:text-brand-coral transition-colors">
                           {social.icon}
                        </div>
                        <span className="font-bold text-sm text-slate-300 group-hover/item:text-white transition-colors">{social.name}</span>
                     </div>
                     <ArrowUpRight className="w-4 h-4 opacity-20 group-hover/item:opacity-100 transition-all" />
                   </a>
                 ))}
              </div>

              <div className="mt-10 p-5 bg-white/5 rounded-2xl border border-white/10 relative z-10 text-center">
                 <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
                    {t('نحن دائماً بالقرب منك على كافة المنصات', 'Always close to you on all platforms')}
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
