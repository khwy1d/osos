
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
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-brand-gray">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] animate-float"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-coral/5 rounded-full blur-[120px] animate-float-delayed"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Compact Badge */}
              <div className={`inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-brand-blue text-xs md:text-sm font-black transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
                <ShieldCheck className="w-4 h-4 text-brand-coral animate-pulse" />
                {t('خيارك الأول للسفر والسياحة في اليمن', 'The #1 Travel Choice in Yemen')}
              </div>
              
              {/* Main Heading - Refined Size */}
              <div className="space-y-6">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-brand-blue leading-tight tracking-tighter transition-all duration-1000 delay-300 transform ${loaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  {lang === 'ar' 
                    ? <>خدمات سفر <br/><span className="text-brand-coral">بثقة واصِل.</span></>
                    : <>Travel Services <br/><span className="text-brand-coral">With Wasil Trust.</span></>}
                </h1>
                <p className={`text-lg md:text-xl text-slate-500 font-bold leading-relaxed max-w-xl transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                  {t(
                    'مكتب سفر يمني متخصص في خدمات الطيران، السفر العلاجي والسياحة، والخدمات اللوجستية في مصر بأسعار واقعية.',
                    'Yemeni travel office specialized in flights, medical travel & tourism, and logistics in Egypt at realistic rates.'
                  )}
                </p>
              </div>

              {/* Actions - Refined sizes */}
              <div className={`flex flex-col sm:flex-row gap-4 pt-2 transition-all duration-1000 delay-700 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <a 
                  href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-brand-blue text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-brand-blue/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  {t('تواصل الآن', 'Connect Now')}
                </a>
                
                <Link 
                  to="/services"
                  className="bg-white border border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
                >
                  {t('اكتشف خدماتنا', 'Explore Services')}
                  <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className={`hidden lg:block relative transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2500" 
                    className="w-full aspect-[4/5] object-cover"
                    alt="Travel Illustration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Compacted */}
      <div className="relative z-20 -mt-8">
        <div className="max-w-[1200px] mx-auto px-4">
           <div className="bg-white rounded-3xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100 overflow-hidden">
              {[
                { icon: <ShieldCheck />, title: t('خدمة رسمية', 'Official'), sub: '100% Guaranteed' },
                { icon: <Heart />, title: t('سفر علاجي وسياحة', 'Medical Travel'), sub: 'Expert Care' },
                { icon: <Bus />, title: t('نقل بري حديث', 'Land Transport'), sub: 'Modern Fleet' },
                { icon: <ClipboardCheck />, title: t('حجز طيران', 'Flight Bookings'), sub: 'Instant Tickets' }
              ].map((item, i) => (
                <div key={i} className="p-6 flex flex-col items-center text-center gap-3 hover:bg-slate-50 transition-colors cursor-default group">
                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-50">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                   </div>
                   <div className="space-y-0.5">
                      <h4 className="font-black text-slate-900 text-sm md:text-base">{item.title}</h4>
                      <p className="text-brand-coral text-[9px] font-black uppercase tracking-widest">{item.sub}</p>
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
