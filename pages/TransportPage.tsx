
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Bus, Users, ShieldCheck, MessageCircle, MapPin, BadgeDollarSign } from 'lucide-react';
import { WA_PHONE } from '../constants';

const TransportPage: React.FC = () => {
  const { t } = useLanguage();

  const busMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة حجز الباصات.");
  const privateMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة النقل الخاص او الباصات الصغيرة.");

  return (
    <div className="pt-10">
      <section className="bg-brand-teal py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
           <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t('خدمات النقل البري وتأجير الحافلات', 'Land Transport & Bus Rentals')}
           </h1>
           <p className="text-xl text-white/80 font-medium leading-relaxed">
              {t('حجز باصات دولية ومحلية، حافلات صغيرة، ونقل خاص بأسعار منافسة وتنسيق دقيق يلبي كافة احتياجاتكم.', 'Internal and external bus bookings, small buses, and private transport coordination at competitive rates.')}
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WA_PHONE}?text=${busMsg}`} className="inline-flex items-center gap-2 bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform">
                 <MessageCircle className="w-6 h-6" />
                 {t('حجز باص', 'Book Bus')}
              </a>
              <a href={`https://wa.me/${WA_PHONE}?text=${privateMsg}`} className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform">
                 <MessageCircle className="w-6 h-6" />
                 {t('نقل خاص / حافلة صغيرة', 'Private / Small Bus')}
              </a>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <Bus />, title: t('باصات دولية ومحلية', 'Intl & Local Buses'), desc: t('رحلات منظمة عبر أحدث الأساطيل وبأسعار منافسة.', 'Organized trips via modern fleets at competitive prices.'), msg: busMsg },
                { icon: <Users />, title: t('حافلات صغيرة', 'Small Buses'), desc: t('تنسيق حافلات صغيرة للمجموعات والعائلات بخصوصية تامة.', 'Small bus coordination for groups and families with full privacy.'), msg: privateMsg },
                { icon: <ShieldCheck />, title: t('نقل خاص', 'Private Transport'), desc: t('خدمات نقل خاص للأفراد وكبار الشخصيات بمهنية وسرعة.', 'Private transport services for individuals and VIPs professionally.'), msg: privateMsg },
              ].map((item, idx) => (
                <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed mb-4">{item.desc}</p>
                   <a href={`https://wa.me/${WA_PHONE}?text=${item.msg}`} className="text-brand-coral font-black flex items-center gap-2 hover:underline">
                      <MessageCircle className="w-5 h-5" />
                      {t('استفسر الآن', 'Inquire Now')}
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-black">{t('تنسيق دقيق وأسعار واقعية', 'Precise Coordination & Realistic Rates')}</h2>
                 <p className="text-slate-400 text-lg">
                    {t('نحن في واصل نضمن لك تجربة نقل مريحة من خلال التنسيق المباشر مع شركات النقل الموثوقة، مع التركيز على السلامة والالتزام بالمواعيد.', 'At Wasil, we ensure a comfortable transport experience through direct coordination with trusted companies.')}
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3"><MapPin className="text-brand-coral" /> {t('تغطية واسعة لكافة الخطوط الرئيسية.', 'Wide coverage for all main routes.')}</li>
                    <li className="flex items-center gap-3"><BadgeDollarSign className="text-brand-coral" /> {t('أسعار منافسة تناسب الجميع.', 'Competitive rates for everyone.')}</li>
                 </ul>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2069" alt="Transport Services" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPage;
