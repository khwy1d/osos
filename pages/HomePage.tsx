
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import { useLanguage } from '../components/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <div className="bg-white border-y border-slate-100 py-10 md:py-12 overflow-hidden">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <p className="text-slate-500 font-black text-base md:text-xl text-center lg:text-start max-w-2xl leading-relaxed">
              {t('نوفر لك كافة خدمات السفر والعقارات في مكان واحد بمهنية عالية', 'We provide all travel and real estate services in one place professionally')}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto">
               <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 hover:border-brand-blue transition-all shadow-sm group">
                  <p className="text-brand-blue font-black text-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">100%</p>
                  <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-wider text-center mt-1">{t('تنفيذ رسمي', 'Official')}</p>
               </div>
               <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 hover:border-brand-blue transition-all shadow-sm group">
                  <p className="text-brand-blue font-black text-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">24/7</p>
                  <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-wider text-center mt-1">{t('دعم ومتابعة', 'Support')}</p>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <Services />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
