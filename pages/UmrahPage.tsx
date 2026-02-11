
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
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565552684383-bc2383be07d6?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Kaaba - Makkah" 
          />
          {/* Strong Black Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6 md:space-y-8 pt-16 md:pt-20">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            {t('تأشيرات وخدمات الحج والعمرة', 'Hajj & Umrah Visas')}
          </h1>
          <p className="text-base md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            {t('نعتز بخدمتكم في استخراج تأشيرات العمرة والحج وتنسيق رحلاتكم الإيمانية بكل يسر وأمان.', 'Proudly serving you in issuing Umrah & Hajj visas and coordinating your journeys with ease.')}
          </p>
          <div className="pt-2 md:pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-5 h-5 md:w-7 md:h-7 fill-current" />
              {t('اطلب خدمتك الآن', 'Request Service Now')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-brand-blue">{t('رحلة إيمانية خالية من العوائق', 'Smooth Faith Journey')}</h2>
                <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك كافة التسهيلات اللازمة لزيارة بيت الله الحرام، بدءاً من استخراج التأشيرات الرسمية وحتى تنظيم السكن والنقل، لضمان تفرغك الكامل للعبادة.', 'We provide all facilities for visiting Allah\'s House, from visas to lodging and transport, ensuring your focus remains on worship.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <FileCheck />, title: t('تأشيرات رسمية', 'Official Visas'), desc: t('إصدار التأشيرات عبر المسار الإلكتروني المعتمد.', 'Issuing visas via the approved electronic path.') },
                  { icon: <ShieldCheck />, title: t('ضمان الإجراءات', 'Guaranteed Process'), desc: t('دقة عالية في رفع البيانات لضمان الصدور السريع.', 'High accuracy in data entry for fast issuance.') },
                  { icon: <ClipboardCheck />, title: t('تنسيق السكن', 'Lodging Support'), desc: t('توفير خيارات سكن متنوعة قريبة من الحرم.', 'Providing various lodging options near the Haram.') },
                  { icon: <Landmark />, title: t('خدمة متكاملة', 'Integrated Service'), desc: t('دعم ومتابعة منذ التقديم وحتى إتمام المناسك.', 'Support from application until completion of rituals.') },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 md:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-brand-coral shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl text-slate-900 mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm space-y-6 md:space-y-8 sticky top-28">
               <h3 className="text-xl md:text-2xl font-black text-brand-blue">{t('المتطلبات الأساسية', 'Basic Requirements')}</h3>
               <ul className="space-y-3 md:space-y-4">
                  {[
                    t('صورة جواز سفر ساري (6 أشهر على الأقل).', 'Valid passport (at least 6 months).'),
                    t('صورة شخصية حديثة بخلفية بيضاء.', 'Recent photo with white background.'),
                    t('تحديد موعد السفر المفضل.', 'Preferred travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-3 md:py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-base md:text-lg">
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
