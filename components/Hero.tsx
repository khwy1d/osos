import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Plane, Bus } from 'lucide-react';
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
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* زخرفة خفيفة جداً بدون صور - ما تبطئ الموقع */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-slate-50 rounded-bl-[100px] -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-green/[0.04] rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* خليته في الوسط دائماً عشان يكون متزن */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out-expo ${loaded? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <h1 className="text-[32px] sm:text-5xl lg:text-[68px] font-black text-brand-navy tracking-tight font-tajawal leading-[1.35] lg:leading-[1.3] mb-5 md:mb-6">
            {lang === 'ar'
             ? <>رحلتك تبدأ بـ <span className="text-brand-green inline-block pb-2">أُسس</span> صحيحة.</>
              : <>Your Journey Starts on Right <span className="text-brand-green">OSOS</span>.</>}
          </h1>

          <p className="text-[16px] sm:text-xl text-slate-500 font-medium leading-8 max-w-2xl mx-auto mb-8 md:mb-10">
            {t(
              'نقدم لك حلولاً للسفر، من الموافقات الأمنية وحتى الوصول لوجهتك. سهولة، أمان، واحترافية.',
              'Smart travel solutions, from security clearances to your destination. Ease, safety, and professionalism.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={`https://wa.me/${WA_PHONE}?text=${bookingMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white h-14 md:h-14 px-8 rounded-2xl font-bold text-[17px] transition-all shadow-xl shadow-brand-green/20 hover:shadow-brand-green/30 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 order-1"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              {t('احجز الآن', 'Book Now')}
            </a>

            <Link
              to="/services"
              className="bg-white border border-slate-200 text-brand-navy h-14 md:h-14 px-8 rounded-2xl font-bold text-[17px] transition-all hover:border-brand-navy hover:bg-slate-50 flex items-center justify-center gap-2 order-2"
            >
              {t('خدماتنا', 'Our Services')}
              <ArrowRight className={`w-5 h-5 ${lang === 'ar'? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* ميزات صادقة بدل الإحصائيات الكاذبة */}
          <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] md:text-sm font-bold text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <span>{t('موافقات أمنية', 'Security Clearances')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center">
                <Plane className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <span>{t('حجوزات طيران', 'Flight Booking')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center">
                <Bus className="w-3.5 h-3.5 text-brand-green" />
              </div>
              <span>{t('نقل بري', 'Ground Transport')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green" />
              <span>{t('دعم 24/7', '24/7 Support')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
