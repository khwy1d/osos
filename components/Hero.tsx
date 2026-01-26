
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle, ShieldCheck, Heart, ClipboardCheck, ArrowRight, Bus } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const bookingMsg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدماتكم وبدء الحجز.");
  
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pb-20 overflow-hidden bg-brand-gray">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 h-full w-full transition-transform duration-[10s] ease-in-out ${loaded ? 'scale-105' : 'scale-100'}`}>
            <img
              src="https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=2070"
              className="w-full h-full object-cover object-top opacity-10"
              alt="Egypt Travel"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-brand-gray/90 to-transparent"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-coral/5 rounded-full blur-[100px] animate-float-delayed"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl space-y-8">
            <div className={`inline-flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 rounded-full text-brand-blue text-xs md:text-sm font-bold transition-all transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <ShieldCheck className="w-4 h-4 text-brand-coral animate-pulse" />
              {t('الخيار الأول للسفر العلاجي والموافقات', 'The #1 Choice for Medical Travel & Visas')}
            </div>
            
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-brand-text leading-[1.2] tracking-tight transition-all transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                {lang === 'ar' 
                  ? <>سفرك، علاجك، وتراخيصك.. <br/><span className="text-brand-blue">بضمان واصِل.</span></>
                  : <>Your Travel & Treatment.. <br/><span className="text-brand-blue">Secured by Wasil.</span></>}
              </h1>
              <p className={`text-lg md:text-2xl text-brand-text/80 font-medium leading-relaxed max-w-2xl transition-all transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {t(
                  'خدمات متكاملة للمواطن اليمني: تنسيق طبي، موافقات أمنية، ونقل VIP بأعلى معايير الأمان والثقة.',
                  'Integrated services for Yemeni citizens: Medical coordination, security clearances, and VIP transport with total trust.'
                )}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <a 
                href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-coral text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-brand-coral/20 hover:shadow-brand-coral/40 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95 hover:bg-brand-coralLight"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                {t('ابدأ حجزك الآن', 'Start Your Booking Now')}
              </a>
              
              <Link 
                to="/services"
                className="group bg-white border-2 border-slate-200 text-brand-blue hover:border-brand-blue hover:bg-slate-50 px-8 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {t('اطلع على خدماتنا', 'View Our Services')}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse divide-slate-100">
            {[
              { icon: <ShieldCheck />, title: t('موافقات مضمونة', 'Guaranteed Visas'), color: 'blue' },
              { icon: <Heart />, title: t('رعاية طبية VIP', 'VIP Medical Care'), color: 'coral' },
              { icon: <Bus />, title: t('أسطول حديث', 'Modern Fleet'), color: 'blue' },
              { icon: <ClipboardCheck />, title: t('سرعة الإنجاز', 'Fast Execution'), color: 'coral' }
            ].map((feature, i) => (
              <div key={i} className="p-6 flex flex-col items-center text-center gap-3 hover:bg-brand-gray transition-colors group cursor-default">
                <div className={`w-12 h-12 bg-brand-${feature.color}/10 rounded-2xl flex items-center justify-center text-brand-${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-sm md:text-base">{feature.title}</h4>
                  <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-widest">{t('رسمي وموثوق', 'Official & Trusted')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
