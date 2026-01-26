
import React from 'react';
import { useLanguage } from './LanguageContext';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-16 space-y-4">
            <h2 className="text-brand-coral font-bold text-xl">
              {t('لماذا تختار واصِل؟', 'Why Choose Wasil?')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              {t('نحن شريكك الموثوق في كل خطوة', 'Your Trusted Partner Every Step of the Way')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-brand-coral border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">
                    {item.title[lang]}
                  </h4>
                  <p className="text-slate-400 text-lg leading-relaxed">
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
