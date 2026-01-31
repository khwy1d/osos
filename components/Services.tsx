
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES, WA_PHONE } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-brand-coral font-black tracking-[0.2em] uppercase text-xs">
              {t('خدمات واصل المعتمدة', 'WASIL CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue tracking-tight leading-tight">
              {t('حلول ذكية لرحلتك القادمة', 'Smart Travel Solutions')}
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-bold leading-relaxed opacity-80 px-4">
              {t('نحن نوفر لك الجسر اللازم لتسهيل كافة إجراءات السفر والخدمات اللوجستية بمهنية ووضوح تام.', 'We provide the bridge to facilitate all travel procedures and logistics professionally.')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.filter(s => !s.hidden).map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50}>
              <div className="group glass-card h-full p-6 sm:p-8 rounded-3xl md:rounded-[2.5rem] transition-all duration-500 flex flex-col transform hover:-translate-y-2 hover:shadow-2xl hover:border-brand-blue/30 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 rounded-bl-[100%] transition-all group-hover:bg-brand-blue/10"></div>
                
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-slate-50">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 md:w-7 md:h-7' })}
                </div>

                <h4 className="text-xl md:text-2xl font-black text-brand-blue mb-3 tracking-tight group-hover:text-brand-coral transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm mb-8 font-bold flex-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.description[lang]}
                </p>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <Link 
                    to={service.link}
                    className="w-full text-center py-3.5 rounded-2xl border-2 border-brand-blue text-brand-blue font-black text-sm transition-all hover:bg-brand-blue hover:text-white active:scale-95"
                  >
                    {t('عرض التفاصيل', 'View Details')}
                  </Link>
                  <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم، " + service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-white py-3.5 rounded-2xl font-black text-sm transition-all hover:bg-[#128C7E] shadow-xl shadow-brand-accent/20 active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    {service.cta[lang]}
                  </a>
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
