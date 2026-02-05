
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import { useLanguage } from '../components/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { WA_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK } from '../constants';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, TikTokIcon, XIcon } from '../components/BrandIcons';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <WhatsAppIcon className="w-6 h-6" />, name: 'WhatsApp', link: `https://wa.me/${WA_PHONE}`, color: 'hover:bg-[#25D366] hover:text-white' },
    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook', link: FACEBOOK_LINK, color: 'hover:bg-[#1877F2] hover:text-white' },
    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram', link: INSTAGRAM_LINK, color: 'hover:bg-[#E4405F] hover:text-white' },
    { icon: <TikTokIcon className="w-6 h-6" />, name: 'TikTok', link: '#', color: 'hover:bg-[#000000] hover:text-white' },
    { icon: <XIcon className="w-5 h-5" />, name: 'X', link: '#', color: 'hover:bg-slate-900 hover:text-white' }
  ];

  return (
    <>
      <Hero />
      <div className="bg-white border-y border-slate-100 py-10 md:py-12 overflow-hidden">
        <ScrollReveal direction="up" className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <p className="text-slate-500 font-black text-base md:text-xl text-center lg:text-start max-w-2xl leading-relaxed">
              {t('نوفر لك كافة خدمات السفر والعقارات في مكان واحد بمهنية عالية', 'We provide all travel and real estate services in one place professionally')}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto">
               <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 hover:border-brand-blue transition-all shadow-sm group">
                  <p className="text-brand-blue font-black text-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">100%</p>
                  <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-wider text-center mt-1">{t('تنفيذ رسمي', 'Official')}</p>
               </div>
               <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 hover:border-brand-blue transition-all shadow-sm group">
                  <p className="text-brand-blue font-black text-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">24/7</p>
                  <p className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-wider text-center mt-1">{t('دعم ومتابعة', 'Support')}</p>
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      <Services />

      {/* Social Media Card Section - Moved Here */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          <ScrollReveal direction="up">
            <div className="bg-white rounded-[3rem] p-10 md:p-14 text-center shadow-lg border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-32 h-32 bg-brand-coral/5 rounded-br-full"></div>
               <div className="absolute bottom-0 right-0 w-40 h-40 bg-brand-navy/5 rounded-tl-full"></div>
               
               <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-black text-brand-navy">
                      {t('ابقَ على تواصل معنا', 'Stay Connected')}
                    </h3>
                    <p className="text-slate-500 font-bold max-w-xl mx-auto">
                      {t('تابعنا على منصات التواصل الاجتماعي للحصول على أحدث العروض والأخبار الحصرية.', 'Follow us on social media for the latest offers and exclusive news.')}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-110 ${social.color}`}
                          title={social.name}
                        >
                          {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7 fill-current' })}
                        </a>
                    ))}
                  </div>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
