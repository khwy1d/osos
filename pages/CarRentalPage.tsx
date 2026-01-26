
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Car, ShieldCheck, MapPin, MessageCircle, AlertTriangle } from 'lucide-react';
import { WA_PHONE } from '../constants';

const CarRentalPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة تاجير السيارات في مصر.");

  return (
    <div className="pt-10">
      <section className="bg-slate-50 py-20 text-center">
         <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
               {t('تنسيق تأجير سيارات في مصر', 'Car Rental Coordination in Egypt')}
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
               {t('نحن نسهل لك عملية تأجير السيارات بأسعار منافسة وشروط واضحة لضمان راحتك خلال إقامتك.', 'We facilitate car rentals with competitive rates and clear conditions for your comfort.')}
            </p>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                 <h2 className="text-3xl font-black text-slate-900 border-r-4 border-brand-coral pr-6">{t('مميزات الخدمة', 'Service Features')}</h2>
                 <div className="space-y-8">
                    {[
                      { icon: <Car className="text-brand-teal" />, title: t('تنوع الخيارات', 'Diverse Options'), desc: t('سيارات متنوعة تناسب الأفراد والعائلات.', 'Various cars suitable for individuals and families.') },
                      { icon: <ShieldCheck className="text-brand-coral" />, title: t('دعم فني', 'Technical Support'), desc: t('متابعة مستمرة ودعم في حال حدوث أي عطل أو طارئ.', 'Continuous follow-up and support for any issues.') },
                      { icon: <MapPin className="text-brand-teal" />, title: t('تنسيق الاستلام', 'Pickup Coordination'), desc: t('تنسيق مكان وتوقيت استلام السيارة بمرونة.', 'Flexible coordination of car pickup location and time.') },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                         <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                            {item.icon}
                         </div>
                         <div>
                            <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-slate-600 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 space-y-8">
                 <h3 className="text-2xl font-black text-brand-teal">{t('شروط ومتطلبات عامة', 'General Requirements')}</h3>
                 <ul className="space-y-4">
                    {[
                      t('وجود رخصة قيادة سارية المفعول.', 'Valid driver\'s license.'),
                      t('الالتزام بشروط التأجير الموقعة.', 'Compliance with signed rental terms.'),
                      t('دفع مبالغ التأجير والتأمين المتفق عليها.', 'Payment of agreed rental and insurance amounts.'),
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                         {text}
                      </li>
                    ))}
                 </ul>
                 <div className="bg-brand-coral/10 p-6 rounded-2xl border border-brand-coral/20 flex gap-4">
                    <AlertTriangle className="w-8 h-8 text-brand-coral flex-shrink-0" />
                    <p className="text-brand-coral font-bold text-sm leading-relaxed">
                      {t('ملاحظة: تختلف الشروط والأسعار بناءً على نوع السيارة وفترة التأجير.', 'Note: Conditions and rates vary based on car type and rental period.')}
                    </p>
                 </div>
                 <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} className="w-full bg-brand-teal text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-brand-tealLight transition-all">
                    <MessageCircle className="w-5 h-5" />
                    {t('اطلب سيارة الآن', 'Request Car Now')}
                 </a>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CarRentalPage;
