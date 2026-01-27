
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle2, Award, ArrowLeft } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي والسياحة.");

  return (
    <div className="pt-6">
      <section className="bg-brand-blue py-16 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            {t('السفر العلاجي والسياحة في مصر والأردن', 'Medical Travel & Tourism in Egypt & Jordan')}
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-2xl mx-auto">
            {t('نحن نوفر لك الجسر اللازم لتنسيق رحلتك العلاجية مع أفضل المراكز الطبية والاستشاريين، مع التركيز على السرعة والمصداقية.', 'We provide the bridge to coordinate your medical journey with top centers and consultants.')}
          </p>
          <div className="pt-2">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-xl font-black text-lg inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              {t('استفسر عن السفر العلاجي', 'Inquire About Medical Travel')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-brand-coral font-black text-[10px] uppercase tracking-[0.2em]">{t('خدمات السفر العلاجي', 'MEDICAL TRAVEL')}</h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">{t('نهتم بكافة تفاصيل رحلتك الطبية والسياحية', 'We Handle Your Medical & Tourism Details')}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Stethoscope className="w-5 h-5" />, title: t('تنسيق مواعيد الأطباء', 'Appointment Coordination'), desc: t('نقوم بحجز مواعيدك مع أفضل الاستشاريين المتخصصين حسب حالتك.', 'We book appointments with top specialists.') },
              { icon: <Award className="w-5 h-5" />, title: t('خصومات على الفحوصات', 'Discounts on Exams'), desc: t('نوفر لك خصومات خاصة وحصرية على التحاليل والأشعة في مراكز معتمدة.', 'Exclusive discounts on lab tests.') },
              { icon: <ShieldCheck className="w-5 h-5" />, title: t('تسهيلات السفر للمرضى', 'Patient Travel Ease'), desc: t('ننهي إجراءات الموافقات الأمنية وتذاكر الطيران للمريض ومرافقيه.', 'We handle security clearances.') },
              { icon: <ClipboardList className="w-5 h-5" />, title: t('متابعة إدارية', 'Administrative Follow-up'), desc: t('نتابع كافة الأوراق والتقارير الطبية اللازمة لإتمام رحلتك.', 'We follow up on medical reports.') },
              { icon: <Hospital className="w-5 h-5" />, title: t('تنسيق المستشفيات', 'Hospital Coordination'), desc: t('تنسيق الدخول والعمليات الجراحية في كبرى المستشفيات الرسمية.', 'Coordinating admissions in major hospitals.') },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: t('وضوح ومصداقية', 'Clarity & Credibility'), desc: t('نقدم معلومات دقيقة وواقعية حول التكاليف والمدة الزمنية.', 'Accurate info about costs.') },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all flex flex-col">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-blue shadow-sm mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed text-sm flex-1">{item.desc}</p>
                <a 
                  href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-blue font-black text-xs hover:text-brand-coral transition-colors mt-6"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                  {t('طلب الخدمة', 'Request Now')}
                  <ArrowLeft className={`w-3 h-3 ${lang === 'ar' ? '' : 'rotate-180'}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalPage;
