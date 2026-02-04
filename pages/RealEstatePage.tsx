
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
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('خدمات عقارية متكاملة (بيع - شراء - تأجير)', 'Real Estate Services')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن نعتني بعقاراتكم بوضوح وأمان، نوفر خدمات إدارة الأملاك والوساطة العقارية في مصر واليمن بمهنية عالية.', 'Caring for your properties with clarity and safety, providing management and brokerage in Egypt & Yemen.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('استشرنا عقارياً الآن', 'Consult Us Now')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-blue">{t('حلول ذكية لإدارة وتنمية عقاراتك', 'Smart Real Estate Solutions')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('سواء كنت ترغب في شراء شقة أحلامك في القاهرة، أو تبحث عن إدارة محترفة لأملاكك، فنحن نوفر لك الجسر اللازم لإتمام كافة المعاملات القانونية والإدارية بوضوح تام.', 'Whether buying your dream apartment in Cairo or seeking professional management, we provide the legal and admin bridge.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <LayoutDashboard />, title: t('إدارة الأملاك', 'Property Management'), desc: t('إشراف كامل وتطوير مستمر للعقار.', 'Full supervision and continuous property development.') },
                  { icon: <Key />, title: t('إدارة التأجير', 'Rental Admin'), desc: t('تحصيل الإيجارات ومتابعة عقود المستأجرين.', 'Collecting rent and following tenant contracts.') },
                  { icon: <Landmark />, title: t('بيع وشراء', 'Sale & Purchase'), desc: t('وساطة عقارية شفافة في أفضل المواقع.', 'Transparent brokerage in the best locations.') },
                  { icon: <FileText />, title: t('تخليص قانوني', 'Legal Clearance'), desc: t('إتمام كافة الأوراق والإجراءات الإدارية.', 'Completing all legal papers and admin procedures.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-blue">{t('لماذا تختارنا؟', 'Why Choose Us?')}</h3>
               <ul className="space-y-4">
                  {[
                    t('خبرة عميقة في السوق العقاري المحلي.', 'Deep local market expertise.'),
                    t('شفافية مطلقة في العقود والمعاملات.', 'Absolute transparency in contracts.'),
                    t('تقارير دورية لأصحاب الأملاك.', 'Periodic reports for property owners.'),
                    t('فريق قانوني مختص بمراجعة الأوراق.', 'Legal team specialized in paper review.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all">
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
