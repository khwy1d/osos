
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import { useLanguage } from '../components/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import { WA_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, X_LINK } from '../constants';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, TikTokIcon, XIcon } from '../components/BrandIcons';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <FacebookIcon className="w-6 h-6" />, name: 'Facebook', link: FACEBOOK_LINK, color: 'hover:bg-[#1877F2] hover:text-white' },
    { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram', link: INSTAGRAM_LINK, color: 'hover:bg-[#E4405F] hover:text-white' },
    { icon: <TikTokIcon className="w-6 h-6" />, name: 'TikTok', link: TIKTOK_LINK, color: 'hover:bg-[#000000] hover:text-white' },
    { icon: <XIcon className="w-5 h-5" />, name: 'X', link: X_LINK, color: 'hover:bg-slate-900 hover:text-white' }
  ];

  return (
    <>
      <Hero />
      
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
                          className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-110 ${social.color}`}
                          title={social.name}
                        >
                          {React.cloneElement(social.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 md:w-7 md:h-7 fill-current' })}
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
