
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Building2, Key, LayoutDashboard, FileText, CheckCircle, Landmark } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const RealEstatePage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات العقارات.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Real Estate" 
          />
          {/* Strong Black Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6 md:space-y-8 pt-16 md:pt-20">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            {t('خدمات عقارية متكاملة (بيع - شراء - تأجير)', 'Real Estate Services')}
          </h1>
          <p className="text-base md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            {t('نحن نعتني بعقاراتكم بوضوح وأمان، نوفر خدمات إدارة الأملاك والوساطة العقارية في مصر واليمن بمهنية عالية.', 'Caring for your properties with clarity and safety, providing management and brokerage in Egypt & Yemen.')}
          </p>
          <div className="pt-2 md:pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-5 h-5 md:w-7 md:h-7 fill-current" />
              {t('استشرنا عقارياً الآن', 'Consult Us Now')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-brand-blue">{t('حلول ذكية لإدارة وتنمية عقاراتك', 'Smart Real Estate Solutions')}</h2>
                <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                  {t('سواء كنت ترغب في شراء شقة أحلامك في القاهرة، أو تبحث عن إدارة محترفة لأملاكك، فنحن نوفر لك الجسر اللازم لإتمام كافة المعاملات القانونية والإدارية بوضوح تام.', 'Whether buying your dream apartment in Cairo or seeking professional management, we provide the legal and admin bridge.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <LayoutDashboard />, title: t('إدارة الأملاك', 'Property Management'), desc: t('إشراف كامل وتطوير مستمر للعقار.', 'Full supervision and continuous property development.') },
                  { icon: <Key />, title: t('إدارة التأجير', 'Rental Admin'), desc: t('تحصيل الإيجارات ومتابعة عقود المستأجرين.', 'Collecting rent and following tenant contracts.') },
                  { icon: <Landmark />, title: t('بيع وشراء', 'Sale & Purchase'), desc: t('وساطة عقارية شفافة في أفضل المواقع.', 'Transparent brokerage in the best locations.') },
                  { icon: <FileText />, title: t('تخليص قانوني', 'Legal Clearance'), desc: t('إتمام كافة الأوراق والإجراءات الإدارية.', 'Completing all legal papers and admin procedures.') },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 md:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-brand-coral shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl text-slate-900 mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm space-y-6 md:space-y-8 sticky top-28">
               <h3 className="text-xl md:text-2xl font-black text-brand-blue">{t('لماذا تختارنا؟', 'Why Choose Us?')}</h3>
               <ul className="space-y-3 md:space-y-4">
                  {[
                    t('خبرة عميقة في السوق العقاري المحلي.', 'Deep local market expertise.'),
                    t('شفافية مطلقة في العقود والمعاملات.', 'Absolute transparency in contracts.'),
                    t('تقارير دورية لأصحاب الأملاك.', 'Periodic reports for property owners.'),
                    t('فريق قانوني مختص بمراجعة الأوراق.', 'Legal team specialized in paper review.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 md:py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('طلب استشارة عقارية', 'Request Consultation')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
