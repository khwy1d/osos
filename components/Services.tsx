
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES, WA_PHONE } from '../constants';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-12 md:py-40 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-32 space-y-3 md:space-y-6">
            <h2 className="text-brand-coral font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-base animate-pulse-soft">
              {t('خدماتنا المعتمدة', 'CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-2xl md:text-6xl lg:text-7xl font-black text-brand-blue tracking-tight leading-tight">
              {t('حلول متكاملة ومهنية لكافة احتياجاتكم', 'Integrated Professional Solutions')}
            </h3>
            <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-2xl font-medium">
              {t('نحن نوفر لك الجسر اللازم لتسهيل كافة إجراءات السفر والخدمات اللوجستية بمهنية عالية.', 'We provide the necessary bridge to facilitate all travel procedures and logistics professionally.')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {SERVICES.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50} direction="up">
              <div
                className="group relative h-full p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-brand-gray border border-slate-100 hover:border-brand-blue hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-3"
              >
                {/* Accent Background */}
                <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-brand-blue/5 rounded-bl-[100%] transition-transform group-hover:scale-125 duration-700"></div>
                
                {/* Large Icon Container */}
                <div className="relative w-14 h-14 md:w-24 md:h-24 bg-white shadow-lg rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 mb-6 md:mb-8 group-hover:rotate-12 group-hover:scale-110">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7 md:w-12 md:h-12' })}
                </div>

                <h4 className="relative text-lg md:text-3xl font-black text-brand-blue mb-2 md:mb-4 tracking-tight transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="relative text-brand-text/70 leading-relaxed text-sm md:text-lg mb-6 md:mb-8 font-semibold flex-1">
                  {service.description[lang]}
                </p>
                
                <div className="relative flex flex-col gap-2 md:gap-3 mt-auto">
                  {/* WhatsApp Quick Action */}
                  <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم، " + service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white px-5 py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg transition-all hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                    {service.cta[lang]}
                  </a>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center justify-center gap-1.5 text-slate-400 font-black text-[10px] md:text-sm group-hover:text-brand-blue py-1 md:py-2 transition-colors uppercase tracking-widest"
                  >
                    {t('عرض التفاصيل', 'View Details')}
                    <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
