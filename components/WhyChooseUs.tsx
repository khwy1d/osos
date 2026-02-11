
import React from 'react';
import { useLanguage } from './LanguageContext';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="bg-brand-blue rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decor Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-pattern-cubes"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 text-center mb-16 space-y-2">
            <h3 className="text-3xl font-black text-white tracking-tighter">
              {t('نحن شريكك الموثوق في كل خطوة', 'Your Trusted Partner Every Step')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="text-center space-y-4 group">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-coral border border-white/10 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-black text-white">
                    {item.title[lang]}
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
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
