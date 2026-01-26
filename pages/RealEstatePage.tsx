
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Building2, Key, LayoutDashboard, FileText, CheckCircle, MessageCircle, Landmark } from 'lucide-react';
import { WA_PHONE } from '../constants';

const RealEstatePage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات العقارات.");

  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white text-center">
         <h1 className="text-4xl md:text-5xl font-black mb-4">{t('خدمات عقارية وإدارة أملاك احترافية', 'Professional Real Estate & Property Management')}</h1>
         <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto px-4">
           {t('تأجير، بيع، شراء وإدارة إدارية متكاملة لعقاراتكم بوضوح وأمان.', 'Rentals, sales, purchases, and integrated administrative property management.')}
         </p>
         <div className="mt-8">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 w-fit mx-auto shadow-xl hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
              {t('تواصل مع مستشار عقاري', 'Contact Real Estate Advisor')}
            </a>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <LayoutDashboard />, title: t('إدارة الأملاك', 'Property Management'), desc: t('إدارة شاملة للعقارات لضمان الحفاظ على قيمتها وتحقيق عوائد مجزية.', 'Comprehensive management to preserve property value and achieve returns.') },
                { icon: <Key />, title: t('إدارة التأجير', 'Rental Management'), desc: t('البحث عن المستأجرين الموثوقين وإدارة العقود والتحصيل.', 'Finding reliable tenants, managing contracts, and collection.') },
                { icon: <Landmark />, title: t('بيع وشراء الشقق', 'Apt Sale & Purchase'), desc: t('تسهيل عمليات البيع والشراء بوضوح تام ومتابعة قانونية.', 'Facilitating sales and purchases with full clarity and legal follow-up.') },
                { icon: <FileText />, title: t('إدارة إدارية', 'Admin Handling'), desc: t('تخليص كافة الأوراق القانونية والإدارية المتعلقة بالعقار.', 'Clearing all legal and administrative papers related to the property.') },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center space-y-4 hover:shadow-lg transition-all flex flex-col">
                   <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm">
                      {item.icon}
                   </div>
                   <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed flex-1">{item.desc}</p>
                   <a 
                      href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${item.title}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-coral font-bold text-sm flex items-center justify-center gap-1 hover:underline mt-4"
                   >
                     <MessageCircle className="w-4 h-4" />
                     {t('استفسر الآن', 'Inquire Now')}
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
           <h3 className="text-3xl font-black text-brand-teal">{t('لماذا تختار واصل في إدارة عقارك؟', 'Why Choose Wasil for Your Property?') }</h3>
           <div className="grid sm:grid-cols-2 gap-6 text-start">
              {[
                t('خبرة في السوق المحلي بوضوح تام.', 'Local market expertise with total clarity.'),
                t('التزام بالشفافية في كافة المعاملات.', 'Commitment to transparency in all transactions.'),
                t('تقارير إدارية دورية لمالك العقار.', 'Periodic administrative reports for owners.'),
                t('فريق عمل متخصص في صيانة ومتابعة العقارات.', 'Dedicated team for maintenance and follow-up.'),
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700 bg-white p-4 rounded-xl shadow-sm">
                   <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                   {text}
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
