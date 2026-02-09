import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { FileCheck, Globe, Clock, Shield, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const VisaPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدمات التأشيرات.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('خدمات التأشيرات', 'Visa Services')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('ننجز معاملاتك بسرعة وموثوقية عالية. خدماتنا تشمل تأشيرات العمل، الزيارة، والسياحة لمختلف الوجهات.', 'Fast and reliable visa processing for work, visit, and tourism to various destinations.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('ابدأ معاملتك الآن', 'Start Process')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('لماذا تختار خدماتنا؟', 'Why Choose Us?')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نمتلك خبرة واسعة في تخليص المعاملات القنصلية، مما يضمن لك أعلى نسب قبول وتوفير وقتك وجهدك في الإجراءات الروتينية.', 'Extensive experience in consular processing ensuring high acceptance rates and saving your time.')}
                </p>
              </div>

              {/* Card Design Applied */}
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <FileCheck className="w-6 h-6" />, title: t('تجهيز الملفات', 'Document Prep'), desc: t('مراجعة دقيقة لكافة المستندات المطلوبة.', 'Precise review of all required documents.') },
                  { icon: <Globe className="w-6 h-6" />, title: t('وجهات متعددة', 'Global Access'), desc: t('تأشيرات للسعودية، الإمارات، الهند، والمزيد.', 'Visas for KSA, UAE, India, and more.') },
                  { icon: <Clock className="w-6 h-6" />, title: t('سرعة الإنجاز', 'Fast Processing'), desc: t('متابعة مستمرة لضمان سرعة الإصدار.', 'Continuous follow-up for fast issuance.') },
                  { icon: <Shield className="w-6 h-6" />, title: t('موثوقية عالية', 'High Reliability'), desc: t('تعامل رسمي وشفافية في الرسوم.', 'Official handling and transparent fees.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-start items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral border border-slate-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-start">
                      <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-2xl space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-blue text-center">{t('المستندات المطلوبة', 'Documents')}</h3>
               <ul className="space-y-4">
                  {[
                    t('جواز سفر ساري المفعول (6 أشهر).', 'Valid Passport (6 months).'),
                    t('صور شخصية حديثة بخلفية بيضاء.', 'Recent white-background photos.'),
                    t('الهوية الوطنية أو البطاقة الشخصية.', 'National ID card.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                       <span className="text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
               </ul>
               <div className="bg-brand-coral/5 p-4 rounded-xl border border-brand-coral/10">
                  <p className="text-[10px] text-brand-coral font-bold leading-relaxed">
                    {t('ملاحظة: المتطلبات قد تختلف حسب نوع التأشيرة والبلد المراد زيارته.', 'Note: Requirements vary by visa type and destination country.')}
                  </p>
               </div>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="mt-8 w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-xl">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('تواصل معنا للاستفسار', 'Contact Us')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaPage;
                 
