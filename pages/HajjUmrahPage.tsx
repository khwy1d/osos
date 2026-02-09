import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Landmark, MapPin, Star, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const HajjUmrahPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section (لم يتم تعديله) */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Makkah" />
            <div className="absolute inset-0 bg-black/50"></div>
         </div>
         <div className="relative z-10 max-w-3xl px-4 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black">{t('رحلة العمر بإجراءات ميسرة', 'Journey of a Lifetime with Ease')}</h1>
            <p className="text-xl text-white/90 font-medium leading-relaxed">
               {t('نعتز بخدمتكم في زيارة بيت الله الحرام، نوفر باقات متكاملة تشمل التأشيرة، السكن القريب، والنقل المنظم.', 'We take pride in serving you to visit Allah\'s House, providing packages with visas, nearby stay, and transport.')}
            </p>
            <a href="https://wa.me/967000000000" className="bg-brand-coral text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2">
               <MessageCircle className="w-6 h-6" />
               {t('استفسر عن الباقات', 'Inquire About Packages')}
            </a>
         </div>
      </section>

      {/* Content Section (تم تعديل الصناديق فقط) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8"> {/* تم تقليل gap-12 إلى gap-8 ليتناسب مع الصناديق */}
              {[
                { icon: <Star className="text-yellow-500" />, title: t('سكن قريب ومريح', 'Nearby Lodging'), desc: t('فنادق مصنفة قريبة من الحرم لضمان راحتكم في العبادة.', 'Rated hotels near the Haram for your worship comfort.') },
                { icon: <ShieldCheck className="text-brand-teal" />, title: t('تأشيرات مضمونة', 'Guaranteed Visas'), desc: t('إصدار تأشيرات العمرة والحج في أسرع وقت وبالطرق الرسمية.', 'Issuing Umrah & Hajj visas fast via official channels.') },
                { icon: <Heart className="text-brand-coral" />, title: t('إشراف متخصص', 'Expert Supervision'), desc: t('طاقم متخصص لمتابعة احتياجات الحجاج والمعتمرين طوال الرحلة.', 'Dedicated staff to follow up on your needs throughout the trip.') },
              ].map((item, idx) => (
                /* --- بداية التعديل: تصميم الصناديق --- */
                <div key={idx} className="flex justify-start items-start gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                   <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {/* استنساخ الأيقونة لإضافة كلاسات الحجم الموحدة w-6 h-6 */}
                      {React.cloneElement(item.icon as React.ReactElement, { className: `w-6 h-6 ${item.icon.props.className}` })}
                   </div>
                   <div className="text-start">
                      <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
                /* --- نهاية التعديل --- */
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default HajjUmrahPage;
