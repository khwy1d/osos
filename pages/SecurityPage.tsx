import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { FileCheck, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const SecurityPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدمة الموافقات الأمنية لمصر.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('الموافقات الأمنية لدخول مصر', 'Egypt Security Clearance')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن ننهي كافة إجراءات موافقتك الأمنية من الجهات المختصة بوضوح وسرعة ومتابعة مستمرة.', 'Completing all clearance procedures officially with continuous follow-up and clarity.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('اطلب موافقتك الرسمية', 'Request Official Clearance')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Info Side */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-navy">{t('بوابتك الرسمية لدخول جمهورية مصر', 'Your Official Gateway to Egypt')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('تعتبر الموافقة الأمنية متطلباً أساسياً للمواطنين اليمنيين الراغبين في زيارة مصر. نحن نوفر لك هذه الخدمة بعيداً عن التعقيدات، مع ضمان الدقة والالتزام بكافة الشروط القانونية.', 'Security clearance is a must for Yemeni citizens visiting Egypt. We provide this without complexity, ensuring accuracy and legal compliance.')}
                </p>
              </div>

              {/* Grid Features with Card Design Applied */}
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <FileCheck className="w-6 h-6" />, title: t('تدقيق البيانات', 'Data Auditing'), desc: t('مراجعة دقيقة لبياناتك قبل التقديم لتجنب الرفض.', 'Careful data review before submission.') },
                  { icon: <CheckCircle className="w-6 h-6" />, title: t('متابعة دورية', 'Regular Follow-up'), desc: t('تحديثات مستمرة حول حالة طلبك حتى الصدور.', 'Continuous updates until issuance.') },
                  { icon: <FileCheck className="w-6 h-6" />, title: t('تنسيق الطيران', 'Flight Coordination'), desc: t('إمكانية ربط الموافقة بحجز التذاكر بأسعار خاصة.', 'Option to link clearance with flight bookings.') },
                  { icon: <CheckCircle className="w-6 h-6" />, title: t('وضوح مـالي', 'Financial Clarity'), desc: t('أسعار معلنة وواقعية دون تكاليف خفية.', 'Clear prices with no hidden costs.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-start items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-red border border-slate-50 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    {/* Text Box */}
                    <div className="text-start">
                      <h4 className="font-black text-xl text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar (Updated Design) */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-navy">{t('المستندات المطلوبة', 'Required Docs')}</h3>
               <ul className="space-y-4">
                  {[
                    t('صورة واضحة لجواز السفر (ساري).', 'Clear passport copy (valid).'),
                    t('توضيح الغرض من الزيارة (علاج/سياحة).', 'Clarification of visit purpose.'),
                    t('تاريخ السفر المقترح.', 'Proposed travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                       <span className="text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-lg shadow-xl">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('ابدأ الإجراءات الآن', 'Start Procedures Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
