
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm animate-pulse-soft">
              {t('خدماتنا المعتمدة', 'CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-brand-blue tracking-tight">
              {t('حلول متكاملة ومهنية لكافة احتياجاتكم', 'Integrated Professional Solutions')}
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50} direction="up">
              <Link
                to={service.link}
                className="group relative h-full p-8 rounded-[2.5rem] bg-brand-gray border border-slate-100 hover:border-brand-blue hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer transform hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full transition-transform group-hover:scale-150"></div>
                
                <div className="relative w-16 h-16 bg-white shadow-inner rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mb-6 group-hover:rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>

                <h4 className="relative text-xl font-black text-brand-blue mb-3 tracking-tight transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="relative text-brand-text/80 leading-relaxed text-sm mb-6 font-medium flex-1">
                  {service.description[lang]}
                </p>
                
                <div className="relative flex flex-col gap-2 mt-auto">
                  <div className="inline-flex items-center justify-center gap-2 bg-brand-coral text-white px-5 py-3 rounded-xl font-black text-sm transition-all group-hover:bg-brand-coralLight shadow-lg shadow-brand-coral/10 group-hover:shadow-brand-coral/30">
                    <ArrowUpRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    {service.cta[lang]}
                  </div>
                  <div className="inline-flex items-center justify-center gap-1 text-slate-400 font-bold text-[10px] group-hover:text-brand-blue py-1 transition-colors uppercase tracking-widest">
                    {t('عرض التفاصيل', 'View Details')}
                    <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
