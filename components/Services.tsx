
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-40 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-24 md:mb-32 space-y-6">
            <h2 className="text-brand-coral font-black tracking-[0.3em] uppercase text-sm md:text-base animate-pulse-soft">
              {t('خدماتنا المعتمدة', 'CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-blue tracking-tight">
              {t('حلول متكاملة ومهنية لكافة احتياجاتكم', 'Integrated Professional Solutions')}
            </h3>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-2xl font-medium">
              {t('نحن نوفر لك الجسر اللازم لتسهيل كافة إجراءات السفر والخدمات اللوجستية بمهنية عالية.', 'We provide the necessary bridge to facilitate all travel procedures and logistics professionally.')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50} direction="up">
              <Link
                to={service.link}
                className="group relative h-full p-10 md:p-12 rounded-[3rem] bg-brand-gray border border-slate-100 hover:border-brand-blue hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer transform hover:-translate-y-3"
              >
                {/* Accent Background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 rounded-bl-[100%] transition-transform group-hover:scale-125 duration-700"></div>
                
                {/* Large Icon Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white shadow-xl rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 mb-8 group-hover:rotate-12 group-hover:scale-110">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-10 h-10 md:w-12 md:h-12' })}
                </div>

                <h4 className="relative text-2xl md:text-3xl font-black text-brand-blue mb-4 tracking-tight transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="relative text-brand-text/70 leading-relaxed text-base md:text-lg mb-8 font-semibold flex-1">
                  {service.description[lang]}
                </p>
                
                <div className="relative flex flex-col gap-3 mt-auto">
                  {/* Unified Action Button */}
                  <div className="inline-flex items-center justify-center gap-3 bg-brand-coral text-white px-6 py-4 md:py-5 rounded-2xl font-black text-lg transition-all group-hover:bg-brand-coralLight shadow-xl shadow-brand-coral/10 group-hover:shadow-brand-coral/40">
                    <ArrowUpRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''} transition-transform group-hover:scale-125`} />
                    {service.cta[lang]}
                  </div>
                  
                  <div className="inline-flex items-center justify-center gap-2 text-slate-400 font-black text-xs md:text-sm group-hover:text-brand-blue py-2 transition-colors uppercase tracking-widest">
                    {t('عرض التفاصيل', 'View Details')}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
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
