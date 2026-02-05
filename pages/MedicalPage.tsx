
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي في أُسس.");

  return (
    <div className="pb-16">
      {/* Hero Section - Standardized */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('السفر العلاجي (مصر)', 'Medical Travel (Egypt)')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن بوابتك لأفضل المستشفيات والاستشاريين في القاهرة بأسعار مدروسة وتنسيق دقيق يضمن راحتك.', 'Your gateway to top hospitals in Cairo with professional coordination.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              {t('ابدأ رحلتك العلاجية', 'Start Medical Journey')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-navy">{t('رعاية شاملة للمريض ومرافقه', 'Comprehensive Patient Care')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن في أُسس ندرك حساسية الرحلات العلاجية، لذا نوفر لك تنسيقاً كاملاً يشمل اختيار الطبيب المناسب، حجز المواعيد، وتسهيل إجراءات السفر والسكن القريب من المراكز الطبية.', 'We coordinate your doctor choice, appointments, and travel logistics including nearby stays.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Stethoscope />, title: t('تنسيق الاستشاريين', 'Top Consultants'), desc: t('حجز مواعيد مع أفضل الأطباء في كافة التخصصات.', 'Booking with best specialists.') },
                  { icon: <Hospital />, title: t('خصومات المستشفيات', 'Exclusive Discounts'), desc: t('خصومات خاصة لعملاء أُسس في كبرى المستشفيات.', 'Special rates in top hospitals.') },
                  { icon: <ClipboardList />, title: t('متابعة التقارير', 'Medical Reports'), desc: t('مراجعة وتنسيق كافة التقارير الطبية الرسمية.', 'Coordinating all official reports.') },
                  { icon: <ShieldCheck />, title: t('تسهيلات لوجستية', 'Logistics Ease'), desc: t('استقبال من المطار وسكن مجهز بالقرب من المركز.', 'Airport pickup and nearby stays.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-red border border-slate-100 group-hover:bg-brand-navy group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm space-y-8 sticky top-28 border border-slate-100">
               <h3 className="text-2xl font-black text-brand-navy">{t('خطوات البدء', 'How to Start')}</h3>
               <ul className="space-y-4">
                  {[
                    t('إرسال التقارير الطبية عبر الواتساب.', 'Send medical reports via WhatsApp.'),
                    t('تنسيق الملف مع الاستشاري المختص.', 'Coordinate file with specialist.'),
                    t('تحديد الموعد والحصول على الموافقات.', 'Set appointment & get clearances.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-lg shadow-lg">
                 <WhatsAppIcon className="w-6 h-6 fill-current" />
                 {t('أرسل تقاريرك الآن', 'Send Reports Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalPage;
