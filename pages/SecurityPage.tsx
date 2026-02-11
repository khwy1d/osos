
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
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Egypt Pyramids" 
          />
          {/* Strong Black Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            {t('الموافقات الأمنية لدخول مصر', 'Egypt Security Clearance')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            {t('نحن ننهي كافة إجراءات موافقتك الأمنية من الجهات المختصة بوضوح وسرعة ومتابعة مستمرة.', 'Completing all clearance procedures officially with continuous follow-up and clarity.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
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
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-navy">{t('بوابتك الرسمية لدخول جمهورية مصر', 'Your Official Gateway to Egypt')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('تعتبر الموافقة الأمنية متطلباً أساسياً للمواطنين اليمنيين الراغبين في زيارة مصر. نحن نوفر لك هذه الخدمة بعيداً عن التعقيدات، مع ضمان الدقة والالتزام بكافة الشروط القانونية.', 'Security clearance is a must for Yemeni citizens visiting Egypt. We provide this without complexity, ensuring accuracy and legal compliance.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <FileCheck />, title: t('تدقيق البيانات', 'Data Auditing'), desc: t('مراجعة دقيقة لبياناتك قبل التقديم لتجنب الرفض.', 'Careful data review before submission.') },
                  { icon: <CheckCircle />, title: t('متابعة دورية', 'Regular Follow-up'), desc: t('تحديثات مستمرة حول حالة طلبك حتى الصدور.', 'Continuous updates until issuance.') },
                  { icon: <FileCheck />, title: t('تنسيق الطيران', 'Flight Coordination'), desc: t('إمكانية ربط الموافقة بحجز التذاكر بأسعار خاصة.', 'Option to link clearance with flight bookings.') },
                  { icon: <CheckCircle />, title: t('وضوح مـالي', 'Financial Clarity'), desc: t('أسعار معلنة وواقعية دون تكاليف خفية.', 'Clear prices with no hidden costs.') },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-red shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-navy mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-navy">{t('المستندات المطلوبة', 'Required Docs')}</h3>
               <ul className="space-y-4">
                  {[
                    t('صورة واضحة لجواز السفر (ساري).', 'Clear passport copy (valid).'),
                    t('توضيح الغرض من الزيارة (علاج/سياحة).', 'Clarification of visit purpose.'),
                    t('تاريخ السفر المقترح.', 'Proposed travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-lg">
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
