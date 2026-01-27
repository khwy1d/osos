
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle, HeartPulse } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي.");

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-brand-blue py-12 md:py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-[10px] font-bold uppercase tracking-widest">
            <HeartPulse className="w-3.5 h-3.5 text-brand-coral" />
            {t('رعاية طبية متكاملة', 'Integrated Medical Care')}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
            {t('السفر العلاجي (مصر والأردن)', 'Medical Travel')}
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن بوابتك لأفضل المستشفيات والاستشاريين في القاهرة وعمان بأسعار واقعية وتنسيق دقيق.', 'Your gateway to top hospitals in Cairo & Amman with realistic rates and precise coordination.')}
          </p>
          <div className="pt-2 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-black text-base flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              {t('ابدأ رحلتك العلاجية', 'Start Medical Journey')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-brand-blue">{t('رعاية شاملة للمريض ومرافقه', 'Comprehensive Care')}</h2>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {t('نحن في واصل ندرك حساسية الرحلات العلاجية، لذا نوفر لك تنسيقاً كاملاً يشمل اختيار الطبيب المناسب، حجز المواعيد، وتسهيل إجراءات السفر والسكن.', 'We understand medical trip sensitivity, providing full coordination from picking the doctor to travel facilitation.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Stethoscope />, title: t('تنسيق الاستشاريين', 'Top Consultants'), desc: t('حجز مواعيد مع أفضل الأطباء في كافة التخصصات.', 'Booking with best doctors in all specialties.') },
                  { icon: <Hospital />, title: t('خصومات المستشفيات', 'Hospital Discounts'), desc: t('خصومات حصرية على الفحوصات والعمليات الجراحية.', 'Exclusive discounts on tests and surgeries.') },
                  { icon: <ClipboardList />, title: t('متابعة التقارير', 'Medical Reports'), desc: t('مراجعة وتنسيق كافة التقارير الطبية الرسمية.', 'Reviewing and coordinating all official medical reports.') },
                  { icon: <ShieldCheck />, title: t('تسهيلات لوجستية', 'Logistics Ease'), desc: t('تنسيق الاستقبال من المطار والسكن القريب من المركز الطبي.', 'Airport pickup and nearby accommodation coordination.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-brand-coral flex-shrink-0 border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-slate-900 mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 sticky top-24">
               <h3 className="text-xl font-black text-brand-blue">{t('متطلبات البدء', 'Getting Started')}</h3>
               <ul className="space-y-3">
                  {[
                    t('إرسال التقارير الطبية الحالية.', 'Current medical reports.'),
                    t('صور جوازات السفر للمريض والمرافق.', 'Passport copies (Patient & Companion).'),
                    t('تحديد الموعد التقريبي للسفر.', 'Preferred travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 text-brand-coral flex-shrink-0" />
                       <span className="text-xs">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-sm">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('إرسال التقارير الآن', 'Send Reports Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalPage;
