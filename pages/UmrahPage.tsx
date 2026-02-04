
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Landmark, CheckCircle, MessageCircle, FileCheck, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const UmrahPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات الحج والعمرة.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('تأشيرات وخدمات الحج والعمرة', 'Hajj & Umrah Visas')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نعتز بخدمتكم في استخراج تأشيرات العمرة والحج وتنسيق رحلاتكم الإيمانية بكل يسر وأمان.', 'Proudly serving you in issuing Umrah & Hajj visas and coordinating your journeys with ease.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('اطلب خدمتك الآن', 'Request Service Now')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('رحلة إيمانية خالية من العوائق', 'Smooth Faith Journey')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك كافة التسهيلات اللازمة لزيارة بيت الله الحرام، بدءاً من استخراج التأشيرات الرسمية وحتى تنظيم السكن والنقل، لضمان تفرغك الكامل للعبادة.', 'We provide all facilities for visiting Allah\'s House, from visas to lodging and transport, ensuring your focus remains on worship.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <FileCheck />, title: t('تأشيرات رسمية', 'Official Visas'), desc: t('إصدار التأشيرات عبر المسار الإلكتروني المعتمد.', 'Issuing visas via the approved electronic path.') },
                  { icon: <ShieldCheck />, title: t('ضمان الإجراءات', 'Guaranteed Process'), desc: t('دقة عالية في رفع البيانات لضمان الصدور السريع.', 'High accuracy in data entry for fast issuance.') },
                  { icon: <ClipboardCheck />, title: t('تنسيق السكن', 'Lodging Support'), desc: t('توفير خيارات سكن متنوعة قريبة من الحرم.', 'Providing various lodging options near the Haram.') },
                  { icon: <Landmark />, title: t('خدمة متكاملة', 'Integrated Service'), desc: t('دعم ومتابعة منذ التقديم وحتى إتمام المناسك.', 'Support from application until completion of rituals.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
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
               <h3 className="text-2xl font-black text-brand-blue">{t('المتطلبات الأساسية', 'Basic Requirements')}</h3>
               <ul className="space-y-4">
                  {[
                    t('صورة جواز سفر ساري (6 أشهر على الأقل).', 'Valid passport (at least 6 months).'),
                    t('صورة شخصية حديثة بخلفية بيضاء.', 'Recent photo with white background.'),
                    t('تحديد موعد السفر المفضل.', 'Preferred travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('ابدأ إجراءات التأشيرة', 'Start Visa Process')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahPage;
