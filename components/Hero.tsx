
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const bookingMsg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدمات وكالة أُسس.");
  
  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Minimalist Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-start transition-all duration-700 ease-out-expo ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}>
            
            

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-brand-navy leading-[1.2] mb-4 md:mb-6 tracking-tight font-tajawal">
              {lang === 'ar' 
                ? <>رحلتك تبدأ بـ <span className="text-brand-green">أُسس</span> صحيحة.</>
                : <>Your Journey Starts on Right <span className="text-brand-green">Osos</span>.</>}
            </h1>
            
            <p className="text-base sm:text-xl text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8">
              {t(
                'نقدم لك حلولاً ذكية للسفر، من الموافقات الأمنية وحتى الوصول لوجهتك. سهولة، أمان، واحترافية.',
                'Smart travel solutions, from security clearances to your destination. Ease, safety, and professionalism.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <a 
                href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white h-12 md:h-14 px-6 md:px-8 rounded-2xl font-bold text-base md:text-lg transition-all shadow-xl shadow-brand-green/20 hover:shadow-brand-green/30 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                {t('احجز الآن', 'Book Now')}
              </a>
              
              <Link 
                to="/services"
                className="bg-white border-2 border-slate-100 text-brand-navy h-12 md:h-14 px-6 md:px-8 rounded-2xl font-bold text-base md:text-lg transition-all hover:border-brand-navy hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                {t('خدماتنا', 'Services')}
                <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            <div className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm font-bold text-slate-500">
              {[
                t('سرعة في الإنجاز', 'Fast Processing'),
                t('دعم متواصل 24/7', '24/7 Support'),
                t('أسعار منافسة', 'Competitive Prices')
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-green" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`hidden lg:block flex-1 relative transition-all duration-1000 delay-100 ease-out-expo ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                   <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-50">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-4">
                         <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <p className="font-black text-brand-navy text-lg">99%</p>
                      <p className="text-slate-400 text-sm font-bold">{t('نسبة قبول', 'Approval Rate')}</p>
                   </div>
                   <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000" className="rounded-3xl shadow-lg object-cover h-64 w-full bg-slate-100" alt="Travel" />
                </div>
                <div className="space-y-4">
                   <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000" className="rounded-3xl shadow-lg object-cover h-64 w-full bg-slate-100" alt="Bus" />
                   <div className="bg-brand-navy p-6 rounded-3xl shadow-soft text-white">
                      <p className="font-bold text-white/80 text-sm mb-1">{t('خبرة تفوق', 'Experience')}</p>
                      <p className="font-black text-3xl">10+ {t('سنوات', 'Years')}</p>
                   </div>
                </div>
             </div>
             
             {/* Decor Dots */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pattern-dots opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
