
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle, HeartPulse } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي والسياحة.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">
            <HeartPulse className="w-4 h-4 text-brand-coral" />
            {t('رعاية طبية متكاملة', 'Integrated Medical Care')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('السفر العلاجي والسياحة (مصر والأردن)', 'Medical Travel & Tourism')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن بوابتك لأفضل المستشفيات والاستشاريين في القاهرة وعمان بأسعار واقعية وتنسيق دقيق.', 'Your gateway to top hospitals in Cairo & Amman with realistic rates and precise coordination.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('ابدأ رحلتك العلاجية', 'Start Medical Journey')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('رعاية شاملة للمريض ومرافقه', 'Comprehensive Care')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن في واصل ندرك حساسية الرحلات العلاجية، لذا نوفر لك تنسيقاً كاملاً يشمل اختيار الطبيب المناسب، حجز المواعيد، وتسهيل إجراءات السفر والسكن.', 'We understand medical trip sensitivity, providing full coordination from picking the doctor to travel facilitation.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Stethoscope />, title: t('تنسيق الاستشاريين', 'Top Consultants'), desc: t('حجز مواعيد مع أفضل الأطباء في كافة التخصصات.', 'Booking with best doctors in all specialties.') },
                  { icon: <Hospital />, title: t('خصومات المستشفيات', 'Hospital Discounts'), desc: t('خصومات حصرية على الفحوصات والعمليات الجراحية.', 'Exclusive discounts on tests and surgeries.') },
                  { icon: <ClipboardList />, title: t('متابعة التقارير', 'Medical Reports'), desc: t('مراجعة وتنسيق كافة التقارير الطبية الرسمية.', 'Reviewing and coordinating all official medical reports.') },
                  { icon: <ShieldCheck />, title: t('تسهيلات لوجستية', 'Logistics Ease'), desc: t('تنسيق الاستقبال من المطار والسكن القريب من المركز الطبي.', 'Airport pickup and nearby accommodation coordination.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral flex-shrink-0 border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
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
               <h3 className="text-2xl font-black text-brand-blue">{t('متطلبات البدء', 'Getting Started')}</h3>
               <ul className="space-y-4">
                  {[
                    t('إرسال التقارير الطبية الحالية.', 'Current medical reports.'),
                    t('صور جوازات السفر للمريض والمرافق.', 'Passport copies (Patient & Companion).'),
                    t('تحديد الموعد التقريبي للسفر.', 'Preferred travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all">
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
