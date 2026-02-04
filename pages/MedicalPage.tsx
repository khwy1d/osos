
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي في واصل.");

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-brand-blue py-14 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-topo"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
            {t('السفر العلاجي (مصر)', 'Medical Travel (Egypt)')}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-bold opacity-90">
            {t('نحن بوابتك لأفضل المستشفيات والاستشاريين في القاهرة بأسعار مدروسة وتنسيق دقيق يضمن راحتك.', 'Your gateway to top hospitals in Cairo with professional coordination.')}
          </p>
          <div className="pt-2 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              {t('ابدأ رحلتك العلاجية', 'Start Medical Journey')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-brand-blue">{t('رعاية شاملة للمريض ومرافقه', 'Comprehensive Patient Care')}</h2>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  {t('نحن في واصل ندرك حساسية الرحلات العلاجية، لذا نوفر لك تنسيقاً كاملاً يشمل اختيار الطبيب المناسب، حجز المواعيد، وتسهيل إجراءات السفر والسكن القريب من المراكز الطبية.', 'We coordinate your doctor choice, appointments, and travel logistics including nearby stays.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Stethoscope />, title: t('تنسيق الاستشاريين', 'Top Consultants'), desc: t('حجز مواعيد مع أفضل الأطباء في كافة التخصصات.', 'Booking with best specialists.') },
                  { icon: <Hospital />, title: t('خصومات المستشفيات', 'Exclusive Discounts'), desc: t('خصومات خاصة لعملاء واصل في كبرى المستشفيات.', 'Special rates in top hospitals.') },
                  { icon: <ClipboardList />, title: t('متابعة التقارير', 'Medical Reports'), desc: t('مراجعة وتنسيق كافة التقارير الطبية الرسمية.', 'Coordinating all official reports.') },
                  { icon: <ShieldCheck />, title: t('تسهيلات لوجستية', 'Logistics Ease'), desc: t('استقبال من المطار وسكن مجهز بالقرب من المركز.', 'Airport pickup and nearby stays.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-black text-base text-brand-blue mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 font-bold text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] shadow-sm space-y-6 sticky top-24 border-brand-blue/10">
               <h3 className="text-xl font-black text-brand-blue">{t('خطوات البدء', 'How to Start')}</h3>
               <ul className="space-y-3">
                  {[
                    t('إرسال التقارير الطبية عبر الواتساب.', 'Send medical reports via WhatsApp.'),
                    t('تنسيق الملف مع الاستشاري المختص.', 'Coordinate file with specialist.'),
                    t('تحديد الموعد والحصول على الموافقات.', 'Set appointment & get clearances.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 text-brand-coral flex-shrink-0" />
                       <span className="text-[11px]">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent text-white py-3.5 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-sm shadow-lg shadow-brand-accent/20">
                 <WhatsAppIcon className="w-4 h-4 fill-current" />
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
