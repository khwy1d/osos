
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Landmark, MapPin, Star, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

const HajjUmrahPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Star className="text-yellow-500" />, title: t('سكن قريب ومريح', 'Nearby Lodging'), desc: t('فنادق مصنفة قريبة من الحرم لضمان راحتكم في العبادة.', 'Rated hotels near the Haram for your worship comfort.') },
                { icon: <ShieldCheck className="text-brand-teal" />, title: t('تأشيرات مضمونة', 'Guaranteed Visas'), desc: t('إصدار تأشيرات العمرة والحج في أسرع وقت وبالطرق الرسمية.', 'Issuing Umrah & Hajj visas fast via official channels.') },
                { icon: <Heart className="text-brand-coral" />, title: t('إشراف متخصص', 'Expert Supervision'), desc: t('طاقم متخصص لمتابعة احتياجات الحجاج والمعتمرين طوال الرحلة.', 'Dedicated staff to follow up on your needs throughout the trip.') },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-4">
                   <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl shadow-sm border border-slate-100">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                   <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default HajjUmrahPage;
