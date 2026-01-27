
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Heart, ClipboardCheck, ArrowRight, Bus, Play } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const bookingMsg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدماتكم وبدء الحجز.");
  
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-gray">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] animate-float"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-coral/5 rounded-full blur-[120px] animate-float-delayed"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Badge */}
              <div className={`inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-100 text-brand-blue text-sm md:text-base font-black transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                <div className="w-8 h-8 bg-brand-coral/20 rounded-xl flex items-center justify-center text-brand-coral">
                  <ShieldCheck className="w-5 h-5 animate-pulse" />
                </div>
                {t('الخيار الأول للسياحة والسفر في اليمن', 'The #1 Travel & Tourism Choice in Yemen')}
              </div>
              
              {/* Main Heading */}
              <div className="space-y-8">
                <h1 className={`text-5xl md:text-8xl lg:text-9xl font-black text-brand-blue leading-[1.1] tracking-tighter transition-all duration-1000 delay-300 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  {lang === 'ar' 
                    ? <>خدمات سفر <br/><span className="text-brand-coral">بثقة واصِل.</span></>
                    : <>Travel Services <br/><span className="text-brand-coral">With Wasil Trust.</span></>}
                </h1>
                <p className={`text-xl md:text-3xl text-slate-500 font-bold leading-relaxed max-w-2xl transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  {t(
                    'مكتب سفر يمني متخصص في خدمات الطيران، السياحة العلاجية، والخدمات اللوجستية في مصر بأسعار واقعية.',
                    'Yemeni travel office specialized in flights, medical tourism, and logistics in Egypt at realistic rates.'
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className={`flex flex-col sm:flex-row gap-5 pt-4 transition-all duration-1000 delay-700 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <a 
                  href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-brand-blue text-white px-10 py-6 rounded-3xl font-black text-xl md:text-2xl transition-all shadow-2xl shadow-brand-blue/20 hover:shadow-brand-blue/40 flex items-center justify-center gap-3 transform hover:-translate-y-2 active:scale-95"
                >
                  <WhatsAppIcon className="w-7 h-7" />
                  {t('تواصل الآن', 'Connect Now')}
                </a>
                
                <Link 
                  to="/services"
                  className="bg-white border-2 border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue px-10 py-6 rounded-3xl font-black text-xl md:text-2xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                >
                  {t('اكتشف خدماتنا', 'Explore Services')}
                  <ArrowRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
               <div className="relative rounded-[5rem] overflow-hidden shadow-5xl border-[12px] border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2500" 
                    className="w-full aspect-[4/5] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    alt="Travel Illustration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>
                  
                  {/* Floating Elements on Image */}
                  <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md p-8 rounded-4xl shadow-2xl border border-white/20">
                     <div className="flex items-center justify-between">
                        <div className="space-y-1">
                           <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{t('مكتب تعز الرئيسي', 'Taiz Main HQ')}</p>
                           <h4 className="text-2xl font-black text-brand-blue">{t('اليمن، تعز', 'Yemen, Taiz')}</h4>
                        </div>
                        <div className="w-14 h-14 bg-brand-coral rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-coral/30">
                           <Play className="w-6 h-6 fill-current" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="relative z-20 -mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
           <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 overflow-hidden">
              {[
                { icon: <ShieldCheck />, title: t('خدمة رسمية', 'Official Service'), sub: '100% Guaranteed' },
                { icon: <Heart />, title: t('سياحة علاجية', 'Medical Travel'), sub: 'Expert Care' },
                { icon: <Bus />, title: t('نقل بري حديث', 'Land Transport'), sub: 'Modern Fleet' },
                { icon: <ClipboardCheck />, title: t('حجز طيران', 'Flight Bookings'), sub: 'Instant Tickets' }
              ].map((item, i) => (
                <div key={i} className="p-8 md:p-12 flex flex-col items-center text-center gap-4 hover:bg-slate-50 transition-colors cursor-default group">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                      {/* Fix: Explicitly typed React.ReactElement to include className prop to fix TS error */}
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                   </div>
                   <div className="space-y-1">
                      <h4 className="font-black text-slate-900 text-lg md:text-xl">{item.title}</h4>
                      <p className="text-brand-coral text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{item.sub}</p>
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
