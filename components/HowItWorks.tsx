
import React from 'react';
import { useLanguage } from './LanguageContext';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm">
            {t('سهولة الإجراءات', 'EASY PROCESS')}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight">
            {t('كيف نبدأ رحلتك؟', 'How We Start Your Journey')}
          </h3>
          <p className="text-brand-text/60 max-w-2xl mx-auto text-lg font-medium">
            {t('أربع خطوات بسيطة تفصلك عن وجهتك القادمة بكل أمان وراحة.', 'Four simple steps to get you to your destination safely.')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={step.id} className="group flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-brand-blue text-3xl font-black shadow-xl group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:-translate-y-2 border-2 border-slate-100 group-hover:border-brand-blue">
                  {step.id}
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black text-brand-blue">
                    {step.title[lang]}
                  </h4>
                  <p className="text-brand-text/60 font-medium leading-relaxed">
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
