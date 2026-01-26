
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { FileCheck, ShieldCheck, MessageCircle, ClipboardCheck, Landmark, Star, Heart } from 'lucide-react';
import { WA_PHONE } from '../constants';

const UmrahPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات الحج والعمرة.");

  return (
    <div className="pt-10">
      <section className="bg-brand-teal py-20 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
         <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/20">
               <Landmark className="w-10 h-10 text-brand-coral" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black">{t('خدمات الحج والعمرة بإجراءات ميسرة', 'Hajj & Umrah Services')}</h1>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
               {t('نحن متخصصون في استخراج وتجهيز كافة تأشيرات الحج والعمرة عبر القنوات الرسمية لضمان رحلة إيمانية خالية من العوائق.', 'We specialize in all Hajj & Umrah visa processing via official channels for a smooth journey.')}
            </p>
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2">
               <MessageCircle className="w-6 h-6" />
               {t('اطلب خدمتك الآن', 'Request Service Now')}
            </a>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <FileCheck className="text-brand-teal" />, title: t('إجراءات رسمية للحج', 'Official Hajj Procedures'), desc: t('كافة معاملات الحج والعمرة تتم عبر المسار الإلكتروني المعتمد لضمان الأمان والشرعية.', 'All transactions are done via the approved electronic path for safety.') },
                { icon: <ShieldCheck className="text-brand-coral" />, title: t('ضمان الصدور', 'Issuance Guarantee'), desc: t('نحرص على دقة البيانات لضمان صدور التأشيرات وتصاريح الحج في المواعيد المحددة.', 'We ensure data accuracy for timely issuance of all pilgrimage permits.') },
                { icon: <ClipboardCheck className="text-brand-teal" />, title: t('برامج سكن ونقل', 'Lodging & Transport'), desc: t('نوفر خيارات سكن متنوعة قريبة من الحرمين مع خدمات نقل مريحة ومنظمة.', 'We provide lodging options near the Harams with organized transport services.') },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-4 hover:bg-slate-50 p-8 rounded-3xl transition-colors group border border-transparent hover:border-slate-100">
                   <div className="mx-auto w-16 h-16 bg-brand-canvas group-hover:bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-100 transition-colors">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-brand-grey">{item.title}</h3>
                   <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                   <div className="pt-4">
                      <a 
                        href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص: ${item.title}`)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-teal font-black text-sm flex items-center justify-center gap-1 hover:text-brand-coral transition-colors"
                      >
                         <MessageCircle className="w-4 h-4" />
                         {t('تفاصيل أكثر', 'More Details')}
                      </a>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahPage;
