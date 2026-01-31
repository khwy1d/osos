
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, HeartPulse, ClipboardCheck, ArrowRight } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const bookingMsg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدمات وكالة ثقة وبدء الحجز.");
  
  return (
    <section className="relative min-h-[70vh] flex items-center pt-12 overflow-hidden bg-white/50 border-b border-slate-100">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-5">
            <div className={`inline-flex items-center gap-2 bg-brand-navy/5 px-3 py-1.5 rounded-lg text-brand-navy text-[10px] font-black uppercase tracking-widest transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              {t('شريكك الموثوق للسفر والخدمات اللوجستية', 'Your Trusted Travel & Logistics Partner')}
            </div>
            
            <div className="space-y-3">
              <h1 className={`text-4xl md:text-5xl font-black text-brand-navy leading-[1.1] tracking-tighter transition-all duration-1000 delay-300 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                {lang === 'ar' 
                  ? <>خدمات سفر <span className="text-brand-green">بمعايير الثقة.</span></>
                  : <>Travel Services <span className="text-brand-green">By Thiqa Standards.</span></>}
              </h1>
              <p className={`text-base text-slate-500 font-bold leading-relaxed max-w-lg transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                {t(
                  'وكالة ثقة توفر لك كافة حلول السفر من موافقات أمنية، تنسيق طبي، وحجوزات طيران بوضوح تام وأمان مطلق.',
                  'Thiqa Agency provides all travel solutions from security clearances, medical coordination, and flight bookings with full clarity.'
                )}
              </p>
            </div>

            <div className={`flex flex-wrap gap-3 pt-3 transition-all duration-1000 delay-700 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <a 
                href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-green text-white px-7 py-3 rounded-xl font-black text-sm transition-all shadow-lg hover:shadow-brand-green/30 flex items-center gap-2 transform hover:-translate-y-1 active:scale-90"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                {t('احجز رحلتك الآن', 'Book Now')}
              </a>
              
              <Link 
                to="/services"
                className="bg-white border-2 border-brand-navy text-brand-navy px-7 py-3 rounded-xl font-black text-sm transition-all flex items-center gap-2 hover:bg-brand-navy hover:text-white active:scale-95 shadow-sm"
              >
                {t('اكتشف خدماتنا', 'Explore Services')}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          {/* Trust Indicators Column */}
          <div className="lg:col-span-2 hidden lg:flex flex-col gap-3">
             {[
               { icon: <HeartPulse className="w-5 h-5" />, title: t('سفر علاجي موثوق', 'Trusted Medical Travel'), desc: t('تنسيق طبي متكامل', 'Full Medical Coordination') },
               { icon: <ShieldCheck className="w-5 h-5" />, title: t('موافقات أمنية', 'Security Clearance'), desc: t('إجراءات رسمية وسريعة', 'Official & Fast Procedures') },
               { icon: <ClipboardCheck className="w-5 h-5" />, title: t('حجز طيران ميسر', 'Flight Bookings'), desc: t('أسعار تنافسية وتأكيد فوري', 'Competitive Rates') }
             ].map((item, i) => (
               <div key={i} className={`p-4 glass-card rounded-2xl flex items-start gap-4 transition-all duration-1000 delay-[1000ms] transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: `${1000 + (i*150)}ms` }}>
                  <div className="w-10 h-10 bg-brand-navy/10 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-brand-navy text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-[10px] font-bold">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
