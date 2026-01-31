
import React from 'react';
import { useLanguage } from './LanguageContext';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 relative bg-brand-blue/[0.02]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-brand-coral font-black tracking-widest uppercase text-[9px]">
            {t('سهولة الإجراءات', 'EASY PROCESS')}
          </h2>
          <h3 className="text-3xl font-black text-brand-blue tracking-tighter">
            {t('أربع خطوات لرحلة آمنة', 'Four Steps to a Safe Trip')}
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-12 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={step.id} className="group flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-blue text-lg font-black shadow-lg group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:-translate-y-1 border border-slate-100 group-hover:border-brand-blue">
                  {step.id}
                </div>
                <div className="space-y-1.5 px-2">
                  <h4 className="text-base font-black text-brand-blue transition-colors group-hover:text-brand-coral">
                    {step.title[lang]}
                  </h4>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed max-w-[180px] mx-auto">
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
