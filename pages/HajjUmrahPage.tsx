import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Landmark, MapPin, Star, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { WA_PHONE } from '../constants'; // تأكد من استيراد الثوابت
import { WhatsAppIcon } from '../components/BrandIcons'; // تأكد من استيراد الأيقونة

const HajjUmrahPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن باقات الحج والعمرة.");

  return (
    <div className="pb-20">
      {/* Hero Section - Image Background */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Makkah" />
            <div className="absolute inset-0 bg-black/60"></div> {/* زيادة التعتيم قليلاً للقراءة */}
         </div>
         <div className="relative z-10 max-w-3xl px-4 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">{t('رحلة العمر بإجراءات ميسرة', 'Journey of a Lifetime with Ease')}</h1>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
               {t('نعتز بخدمتكم في زيارة بيت الله الحرام، نوفر باقات متكاملة تشمل التأشيرة، السكن القريب، والنقل المنظم.', 'We take pride in serving you to visit Allah\'s House, providing packages with visas, nearby stay, and transport.')}
            </p>
            <div className="pt-4">
              <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3">
                 <WhatsAppIcon className="w-7 h-7 fill-current" />
                 {t('استفسر عن الباقات', 'Inquire About Packages')}
              </a>
            </div>
         </div>
      </section>

      {/* Features Section - Card Design Applied */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8"> {/* تم تعديل الفجوة لتناسب الكروت */}
              {[
                { icon: <Star className="w-6 h-6" />, title: t('سكن قريب ومريح', 'Nearby Lodging'), desc: t('فنادق مصنفة قريبة من الحرم لضمان راحتكم في العبادة.', 'Rated hotels near the Haram for your worship comfort.') },
                { icon: <ShieldCheck className="w-6 h-6" />, title: t('تأشيرات مضمونة', 'Guaranteed Visas'), desc: t('إصدار تأشيرات العمرة والحج في أسرع وقت وبالطرق الرسمية.', 'Issuing Umrah & Hajj visas fast via official channels.') },
                { icon: <Heart className="w-6 h-6" />, title: t('إشراف متخصص', 'Expert Supervision'), desc: t('طاقم متخصص لمتابعة احتياجات الحجاج والمعتمرين طوال الرحلة.', 'Dedicated staff to follow up on your needs throughout the trip.') },
              ].map((item, idx) => (
                /* --- بداية تصميم الصندوق الجديد --- */
                <div key={idx} className="flex justify-start items-start gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                   
                   {/* حاوية الأيقونة */}
                   <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral border border-slate-50 group-hover:bg-brand-coral group-hover:text-white transition-colors">
                      {item.icon}
                   </div>
                   
                   {/* النصوص */}
                   <div className="text-start">
                      <h3 className="text-xl font-black text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                   </div>
                   
                </div>
                /* --- نهاية تصميم الصندوق --- */
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default HajjUmrahPage;
