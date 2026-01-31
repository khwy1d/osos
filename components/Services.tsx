
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES, WA_PHONE } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './BrandIcons';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-brand-coral font-black tracking-[0.2em] uppercase text-[10px]">
              {t('خدمات واصل المعتمدة', 'WASIL CERTIFIED SERVICES')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-brand-blue tracking-tighter leading-tight">
              {t('حلول ذكية لرحلتك القادمة', 'Smart Travel Solutions')}
            </h3>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-bold leading-relaxed opacity-80">
              {t('نحن نوفر لك الجسر اللازم لتسهيل كافة إجراءات السفر والخدمات اللوجستية بمهنية ووضوح تام.', 'We provide the bridge to facilitate all travel procedures and logistics professionally.')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.filter(s => !s.hidden).map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50}>
              <div className="group glass-card h-full p-6 rounded-3xl transition-all duration-500 flex flex-col transform hover:-translate-y-2 hover:shadow-2xl hover:border-brand-blue/30 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/5 rounded-bl-[100%] transition-all group-hover:bg-brand-blue/10"></div>
                
                <div className="relative w-11 h-11 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-blue mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-slate-50">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-5.5 h-5.5' })}
                </div>

                <h4 className="text-lg font-black text-brand-blue mb-2 tracking-tight group-hover:text-brand-coral transition-colors">
                  {service.title[lang]}
                </h4>
                <p className="text-slate-500 leading-relaxed text-xs mb-6 font-bold flex-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.description[lang]}
                </p>
                
                <div className="flex flex-col gap-2 mt-auto">
                  <Link 
                    to={service.link}
                    className="w-full text-center py-2.5 rounded-xl border-2 border-brand-blue text-brand-blue font-black text-[11px] transition-all hover:bg-brand-blue hover:text-white"
                  >
                    {t('عرض التفاصيل', 'View Details')}
                  </Link>
                  <a 
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم، " + service.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-white py-2.5 rounded-xl font-black text-[11px] transition-all hover:bg-[#128C7E] shadow-lg shadow-brand-accent/10 active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
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
