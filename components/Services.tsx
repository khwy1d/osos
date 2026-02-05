
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 tracking-tight">
              {t('خدماتنا المميزة', 'Our Services')}
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-medium">
              {t('نغطي كافة احتياجاتك من الألف إلى الياء، بأسلوب عصري وإجراءات رسمية.', 'Covering all your needs from A to Z, with modern style and official procedures.')}
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.filter(s => !s.hidden).map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 50}>
              <Link 
                to={service.link}
                className="group block bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-full transition-transform group-hover:scale-110"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6 transition-colors group-hover:bg-brand-green group-hover:text-white shadow-sm">
                    {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                  </div>

                  <h3 className="text-2xl font-black text-brand-navy mb-3 group-hover:text-brand-green transition-colors">
                    {service.title[lang]}
                  </h3>
                  
                  <p className="text-slate-500 font-bold text-base leading-relaxed mb-6">
                    {service.description[lang]}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-brand-green font-black text-sm">
                    <span>{t('تفاصيل الخدمة', 'Service Details')}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
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
