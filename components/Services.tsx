
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES, WA_PHONE } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Link, useNavigate } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  // Filter out hidden services
  const visibleServices = SERVICES.filter(service => !service.hidden);

  return (
    <section id="services" className="py-12 md:py-32 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-24 space-y-3 md:space-y-4">
            <h2 className="text-brand-coral font-black tracking-[0.2em] uppercase text-[10px] md:text-xs animate-pulse-soft">
              {t('خدماتنا المعتمدة', 'CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-blue tracking-tight leading-tight">
              {t('حلول متكاملة لكافة احتياجاتكم', 'Integrated Solutions')}
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
              {t('نحن نوفر لك الجسر اللازم لتسهيل كافة إجراءات السفر والخدمات اللوجستية بمهنية عالية.', 'Professional travel procedures and logistics facilitation.')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {visibleServices.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50} direction="up">
              {/* Entire Card is a Link */}
              <Link
                to={service.link}
                className="group relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-blue hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-2"
              >
                {/* Accent Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-[100%] transition-transform group-hover:scale-110 duration-700"></div>
                
                {/* Icon Container */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white shadow-sm rounded-xl md:rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 mb-5 group-hover:rotate-6">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 md:w-8 md:h-8' })}
                </div>

                <h4 className="relative text-base md:text-xl font-black text-brand-blue mb-2 tracking-tight transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="relative text-slate-500 leading-relaxed text-xs md:text-sm mb-6 font-bold flex-1">
                  {service.description[lang]}
                </p>
                
                <div className="relative mt-auto">
                  {/* WhatsApp Action - Stop Propagation ensures it doesn't trigger the parent Link */}
                  <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم، " + service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 md:py-3.5 rounded-xl font-black text-xs md:text-sm transition-all hover:bg-[#128C7E] shadow-md shadow-[#25D366]/10 active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    {service.cta[lang]}
                  </a>
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
