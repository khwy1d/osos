
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Briefcase, Users, FileCheck, CheckCircle, Globe, ShieldCheck } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const SaudiVisitPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن تأشيرات زيارة المملكة العربية السعودية وإنجاز المعاملات.");

  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
           <h1 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
              {t('إجراءات الزيارة إلى المملكة العربية السعودية', 'Saudi Arabia Visit Visa Procedures')}
           </h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t('خدمات متكاملة لاستخراج تأشيرات الزيارة العائلية، الشخصية، والأعمال، بالإضافة إلى إنجاز المعاملات عبر منصة إنجاز.', 'Integrated services for family, personal, and business visit visas, plus Enjaz platform processing.')}
           </p>
           <div className="pt-4">
              <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 w-fit mx-auto">
                 <WhatsAppIcon className="w-6 h-6 fill-current" />
                 {t('ابدأ معاملتك الآن', 'Start Your Process Now')}
              </a>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-3xl font-black text-slate-900">{t('خدماتنا للزيارة', 'Our Visit Services')}</h2>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    {t('نقوم بتسهيل كافة الإجراءات المتعلقة بالسفر إلى المملكة، بدءاً من تعبئة النماذج وحتى صدور التأشيرة والتأمين الطبي.', 'We facilitate all procedures related to traveling to the Kingdom, from filling forms to visa issuance and medical insurance.')}
                  </p>
               </div>

               <div className="grid gap-6">
                  {[
                    { icon: <Users className="text-brand-teal" />, title: t('زيارة عائلية وشخصية', 'Family & Personal Visit'), desc: t('إنجاز طلبات الزيارة للأقارب والأصدقاء بدقة وسرعة.', 'Processing visit requests for relatives and friends accurately and quickly.') },
                    { icon: <Briefcase className="text-brand-coral" />, title: t('زيارة أعمال', 'Business Visit'), desc: t('تسهيل إجراءات زيارات العمل والوفود التجارية.', 'Facilitating procedures for business visits and delegations.') },
                    { icon: <Globe className="text-brand-teal" />, title: t('خدمات إنجاز (Enjaz)', 'Enjaz Services'), desc: t('تسديد رسوم التأشيرات والتأمين الطبي عبر منصة إنجاز الرسمية.', 'Paying visa fees and medical insurance via the official Enjaz platform.') },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start p-6 rounded-3xl bg-slate-50 hover:shadow-md transition-all border border-slate-100">
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="font-black text-xl text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                          <a 
                            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${item.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#25D366] font-bold text-xs mt-3 hover:underline"
                          >
                            <WhatsAppIcon className="w-3 h-3 fill-current" />
                            {t('استفسر عن هذه الخدمة', 'Inquire')}
                          </a>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-bl-full"></div>
               <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                  <ShieldCheck className="w-8 h-8 text-brand-teal" />
                  {t('المستندات المطلوبة', 'Required Documents')}
               </h3>
               
               <ul className="space-y-4 relative z-10">
                  {[
                    t('صورة جواز السفر (ساري المفعول).', 'Passport copy (valid).'),
                    t('صورة شخصية بخلفية بيضاء.', 'Personal photo with white background.'),
                    t('رقم التأشيرة أو مستند التأشيرة.', 'Visa number or visa document.'),
                    t('خطاب الدعوة (للزيارات التجارية).', 'Invitation letter (for business).'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="font-bold text-slate-700 text-sm">{text}</span>
                    </li>
                  ))}
               </ul>

               <div className="mt-10">
                 <a 
                   href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-[#25D366] text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] shadow-lg"
                 >
                   <WhatsAppIcon className="w-5 h-5 fill-current" />
                   {t('ابدأ المعاملة عبر واتساب', 'Submit Documents')}
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiVisitPage;
