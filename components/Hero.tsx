
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
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center pb-12 md:pb-24 overflow-hidden bg-brand-gray">
        {/* Responsive Background with better TV scaling */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 h-full w-full transition-transform duration-[10s] ease-in-out ${loaded ? 'scale-110' : 'scale-100'}`}>
            <img
              src="https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=2500"
              className="w-full h-full object-cover object-center opacity-[0.12]"
              alt="Background"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-brand-gray/95 md:via-brand-gray/80 to-transparent"></div>
          
          {/* Enhanced decorative blurs for large displays */}
          <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-brand-blue/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] bg-brand-coral/10 rounded-full blur-[120px] animate-float-delayed"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 md:pt-24">
          <div className="max-w-5xl space-y-6 md:space-y-10">
            {/* Animated Badge */}
            <div className={`inline-flex items-center gap-3 bg-brand-blue/10 border border-brand-blue/20 px-5 py-2 rounded-full text-brand-blue text-sm md:text-base font-black transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <ShieldCheck className="w-5 h-5 text-brand-coral animate-pulse" />
              {t('الخيار الأول للسفر العلاجي والموافقات', 'The #1 Choice for Medical Travel & Visas')}
            </div>
            
            {/* Massive Responsive Typography */}
            <div className="space-y-4 md:space-y-8">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-brand-text leading-[1.1] tracking-tight transition-all duration-1000 delay-300 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                {lang === 'ar' 
                  ? <>سفرك، علاجك، وتراخيصك.. <br/><span className="text-brand-blue">بضمان واصِل.</span></>
                  : <>Your Travel & Treatment.. <br/><span className="text-brand-blue">Secured by Wasil.</span></>}
              </h1>
              <p className={`text-xl md:text-3xl lg:text-4xl text-brand-text/70 font-semibold leading-relaxed max-w-3xl transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {t(
                  'نحن نعتني بكافة الإجراءات الرسمية والتنسيقات اللازمة لضمان خدمة احترافية وسريعة بأسعار منافسة.',
                  'We handle all official procedures and coordination to ensure professional and fast service at competitive rates.'
                )}
              </p>
            </div>

            {/* High Impact Actions */}
            <div className={`flex flex-col sm:flex-row gap-5 pt-4 transition-all duration-1000 delay-700 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <a 
                href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-coral text-white px-10 py-6 md:px-14 md:py-8 rounded-[2rem] font-black text-xl md:text-2xl transition-all shadow-2xl shadow-brand-coral/30 hover:shadow-brand-coral/50 flex items-center justify-center gap-3 transform hover:-translate-y-2 active:scale-95 hover:bg-brand-coralLight"
              >
                <MessageCircle className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform" />
                {t('ابدأ حجزك الآن', 'Start Your Booking Now')}
              </a>
              
              <Link 
                to="/services"
                className="group bg-white border-4 border-slate-100 text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white px-10 py-6 md:px-12 md:py-8 rounded-[2rem] font-black text-xl md:text-2xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl hover:shadow-brand-blue/20"
              >
                {t('اطلع على خدماتنا', 'View Our Services')}
                <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Features Grid for Large Displays */}
      <div className="relative z-20 -mt-16 md:-mt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 overflow-hidden">
            {[
              { icon: <ShieldCheck />, title: t('موافقات مضمونة', 'Guaranteed Visas'), color: 'blue' },
              { icon: <Heart />, title: t('رعاية طبية VIP', 'VIP Medical Care'), color: 'coral' },
              { icon: <Bus />, title: t('أسطول حديث', 'Modern Fleet'), color: 'blue' },
              { icon: <ClipboardCheck />, title: t('سرعة الإنجاز', 'Fast Execution'), color: 'coral' }
            ].map((feature, i) => (
              <div key={i} className="p-8 md:p-12 flex flex-col items-center text-center gap-4 hover:bg-brand-gray transition-colors group cursor-default">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-brand-${feature.color}/10 rounded-[1.5rem] flex items-center justify-center text-brand-${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                </div>
                <div>
                  <h4 className="font-black text-brand-text text-lg md:text-2xl">{feature.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm mt-1 uppercase tracking-[0.2em] font-bold">{t('رسمي وموثوق', 'Official & Trusted')}</p>
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
