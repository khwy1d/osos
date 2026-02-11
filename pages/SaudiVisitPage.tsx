
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Briefcase, Users, FileCheck, CheckCircle, Globe, ShieldCheck } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const SaudiVisitPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن تأشيرات زيارة المملكة العربية السعودية وإنجاز المعاملات.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Saudi Arabia" 
          />
          {/* Strong Black Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            {t('تأشيرات زيارة السعودية (عائلية - عمل)', 'Saudi Arabia Visit Visas')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            {t('تسهيل كافة إجراءات الزيارة العائلية، الشخصية، والأعمال، بالإضافة إلى تسديد رسوم إنجاز بدقة وسرعة.', 'Facilitating family, personal, and business visits, plus Enjaz fees payment quickly.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('ابدأ معاملتك الآن', 'Start Your Process')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('حلول متكاملة للسفر إلى المملكة', 'Integrated Saudi Travel Solutions')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك الجسر الإداري اللازم لتجهيز طلبات الزيارة للمملكة العربية السعودية، نعتني بتعبئة النماذج، سداد الرسوم الرسمية، وإصدار التأمين الطبي المطلوب.', 'We provide the admin bridge for Saudi visits, caring for form filling, fee payment, and insurance issuance.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Users />, title: t('زيارة عائلية', 'Family Visit'), desc: t('إنجاز طلبات استقدام الأقارب والزيارات الشخصية.', 'Processing relative sponsorship and personal visits.') },
                  { icon: <Briefcase />, title: t('زيارة أعمال', 'Business Visit'), desc: t('تسهيل زيارات الوفود والشركات التجارية.', 'Facilitating business and corporate visits.') },
                  { icon: <FileCheck />, title: t('منصة إنجاز', 'Enjaz Services'), desc: t('سداد رسوم التأشيرات والتأمين الطبي الرسمي.', 'Paying official visa fees and medical insurance.') },
                  { icon: <ShieldCheck />, title: t('ضمان الإجراءات', 'Verified Process'), desc: t('مراجعة دقيقة لكافة البيانات لضمان القبول.', 'Careful data review ensuring acceptance.') },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-coral shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-blue">{t('الأوراق المطلوبة', 'Required Docs')}</h3>
               <ul className="space-y-4">
                  {[
                    t('صورة جواز السفر (ساري).', 'Passport copy (valid).'),
                    t('صورة شخصية بخلفية بيضاء.', 'Photo with white background.'),
                    t('مستند التأشيرة أو الدعوة.', 'Visa document or invitation.'),
                    t('رقم الجوال الخاص بصاحب الطلب.', 'Applicant phone number.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('ابدأ المعاملة الآن', 'Start Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudiVisitPage;
