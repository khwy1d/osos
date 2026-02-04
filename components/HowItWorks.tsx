
import React from 'react';
import { useLanguage } from './LanguageContext';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 md:py-32 relative bg-brand-blue/[0.02]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h3 className="text-3xl sm:text-4xl font-black text-brand-blue tracking-tight">
            {t('أربع خطوات لرحلة آمنة', 'Four Steps to a Safe Trip')}
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line - Optimized for different screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-16 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={step.id} className="group flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-blue text-xl font-black shadow-xl group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:-translate-y-2 border border-slate-100 group-hover:border-brand-blue">
                  {step.id}
                </div>
                <div className="space-y-3 px-2">
                  <h4 className="text-lg md:text-xl font-black text-brand-blue transition-colors group-hover:text-brand-coral">
                    {step.title[lang]}
                  </h4>
                  <p className="text-slate-400 text-sm md:text-base font-bold leading-relaxed max-w-[220px] mx-auto opacity-80">
                    {step.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
