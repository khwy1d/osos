
import React from 'react';
import { useLanguage } from './LanguageContext';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-coral/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-12 space-y-3">
            <h2 className="text-brand-coral font-black text-sm uppercase tracking-widest">
              {t('لماذا تختار واصِل؟', 'Why Choose Wasil?')}
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {t('نحن شريكك الموثوق في كل خطوة', 'Your Trusted Partner Every Step of the Way')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-coral border border-white/10 group-hover:scale-105 group-hover:bg-brand-coral group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-white">
                    {item.title[lang]}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                    {item.desc[lang]}
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

export default WhyChooseUs;
