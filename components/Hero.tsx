
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
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden bg-brand-gray">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-brand-coral/5 rounded-full blur-[100px] animate-float-delayed"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              {/* Compact Badge */}
              <div className={`inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-100 text-brand-blue text-[10px] md:text-xs font-black transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-brand-coral" />
                {t('خيارك الأول للسفر والسياحة في اليمن', 'The #1 Travel Choice in Yemen')}
              </div>
              
              {/* Main Heading - Downscaled */}
              <div className="space-y-4">
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-black text-brand-blue leading-tight tracking-tighter transition-all duration-1000 delay-300 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  {lang === 'ar' 
                    ? <>خدمات سفر <br/><span className="text-brand-coral">بثقة واصِل.</span></>
                    : <>Travel Services <br/><span className="text-brand-coral">With Wasil Trust.</span></>}
                </h1>
                <p className={`text-base md:text-lg text-slate-500 font-bold leading-relaxed max-w-lg transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                  {t(
                    'مكتب سفر يمني متخصص في خدمات الطيران، السفر العلاجي، والخدمات اللوجستية في مصر بأسعار واقعية.',
                    'Yemeni travel office specialized in flights, medical travel, and logistics in Egypt at realistic rates.'
                  )}
                </p>
              </div>

              {/* Actions - Refined sizes */}
              <div className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-1000 delay-700 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <a 
                  href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-brand-blue text-white px-6 py-3 rounded-xl font-black text-base transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t('تواصل الآن', 'Connect Now')}
                </a>
                
                <Link 
                  to="/services"
                  className="bg-white border border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue px-6 py-3 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                >
                  {t('اكتشف خدماتنا', 'Explore Services')}
                  <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2500" 
                    className="w-full aspect-[4/5] object-cover"
                    alt="Travel Illustration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/30 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Compacted */}
      <div className="relative z-20 -mt-6">
        <div className="max-w-[1100px] mx-auto px-4">
           <div className="bg-white rounded-2xl shadow-lg border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 overflow-hidden">
              {[
                { icon: <ShieldCheck />, title: t('خدمة رسمية', 'Official'), sub: '100% Guaranteed' },
                { icon: <Heart />, title: t('سفر علاجي', 'Medical Travel'), sub: 'Expert Care' },
                { icon: <Bus />, title: t('نقل آمن', 'Safe Transport'), sub: 'Modern Fleet' },
                { icon: <ClipboardCheck />, title: t('حجز طيران', 'Flight Bookings'), sub: 'Instant Tickets' }
              ].map((item, i) => (
                <div key={i} className="p-4 flex flex-col items-center text-center gap-2 hover:bg-slate-50 transition-colors cursor-default group">
                   <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-50">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                   </div>
                   <div className="space-y-0">
                      <h4 className="font-black text-slate-900 text-xs md:text-sm">{item.title}</h4>
                      <p className="text-brand-coral text-[8px] font-black uppercase tracking-widest">{item.sub}</p>
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
