
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Stethoscope, Hospital, ClipboardList, ShieldCheck, CheckCircle2, Award, ArrowLeft } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const MedicalPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة السفر العلاجي.");

  return (
    <div className="pt-10">
      <section className="bg-brand-teal py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                {t('تنسيق سفر طبي ومواعيد علاجية في مصر والأردن', 'Medical Travel Coordination in Egypt & Jordan')}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                {t('نحن نوفر لك الجسر اللازم لتنسيق رحلتك العلاجية مع أفضل المراكز الطبية والاستشاريين، مع التركيز على السرعة والمصداقية.', 'We provide the bridge to coordinate your medical journey with top centers and consultants, focusing on speed and credibility.')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                  {t('استفسر عن التنسيق الطبي', 'Inquire About Coordination')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-brand-coral font-black text-sm uppercase tracking-widest">{t('خدمات التنسيق الطبي', 'MEDICAL COORDINATION SERVICES')}</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">{t('نهتم بكافة تفاصيل رحلتك الطبية', 'We Handle Your Medical Journey Details')}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope />, title: t('تنسيق مواعيد الأطباء', 'Appointment Coordination'), desc: t('نقوم بحجز مواعيدك مع أفضل الاستشاريين المتخصصين حسب حالتك.', 'We book appointments with top specialists based on your condition.') },
              { icon: <Award />, title: t('خصومات على الفحوصات', 'Discounts on Exams'), desc: t('نوفر لك خصومات خاصة وحصرية على التحاليل والأشعة في مراكز معتمدة.', 'We provide exclusive discounts on lab tests and radiology in certified centers.') },
              { icon: <ShieldCheck />, title: t('تسهيلات السفر للمرضى', 'Patient Travel Ease'), desc: t('ننهي إجراءات الموافقات الأمنية وتذاكر الطيران للمريض ومرافقيه.', 'We handle security clearances and flight tickets for patients and companions.') },
              { icon: <ClipboardList />, title: t('متابعة إدارية', 'Administrative Follow-up'), desc: t('نتابع كافة الأوراق والتقارير الطبية اللازمة لإتمام رحلتك.', 'We follow up on all necessary medical papers and reports.') },
              { icon: <Hospital />, title: t('تنسيق المستشفيات', 'Hospital Coordination'), desc: t('تنسيق الدخول والعمليات الجراحية في كبرى المستشفيات الرسمية.', 'Coordinating admissions and surgeries in major official hospitals.') },
              { icon: <CheckCircle2 />, title: t('وضوح ومصداقية', 'Clarity & Credibility'), desc: t('نقدم معلومات دقيقة وواقعية حول التكاليف والمدة الزمنية.', 'We provide accurate and realistic info about costs and timeframes.') },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all flex flex-col">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-1">{item.desc}</p>
                <a 
                  href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-teal font-black hover:text-brand-coral transition-colors mt-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  {t('طلب الخدمة', 'Request Service')}
                  <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? '' : 'rotate-180'}`} />
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
