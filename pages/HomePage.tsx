
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
      <div className="bg-white border-y border-slate-100 py-10 overflow-hidden">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-black text-lg text-center md:text-start max-w-2xl">
            {t('نوفر لك كافة خدمات السفر والعقارات في مكان واحد بمهنية عالية', 'We provide all travel and real estate services in one place professionally')}
          </p>
          <div className="flex gap-4">
             <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:border-brand-teal transition-colors">
                <p className="text-brand-teal font-black text-center text-xl">100%</p>
                <p className="text-slate-400 text-xs font-bold">{t('تنفيذ رسمي', 'Official Execution')}</p>
             </div>
             <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:border-brand-teal transition-colors">
                <p className="text-brand-teal font-black text-center text-xl">24/7</p>
                <p className="text-slate-400 text-xs font-bold">{t('دعم ومتابعة', 'Support & Follow-up')}</p>
             </div>
          </div>
        </ScrollReveal>
      </div>
      <Services />
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
    </>
  );
};

export default HomePage;
