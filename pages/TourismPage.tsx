
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, MessageCircle, Compass, MapPin } from 'lucide-react';
import { WA_PHONE } from '../constants';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن العروض السياحية الداخلية والدولية المتوفرة.");

  return (
    <div className="pt-10">
      <section className="bg-brand-blue py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t('السياحة الداخلية والدولية مع واصِل', 'Domestic & Intl Tourism with Wasil')}
            </h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto px-4">
              {t('نأخذك في رحلات لا تُنسى لاستكشاف جمال اليمن أو الوجهات العالمية الرائدة بأسعار واقعية وخدمة متكاملة.', 'Taking you on unforgettable journeys to explore Yemen or top global destinations.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                 <MessageCircle className="w-6 h-6" />
                 {t('استفسر عن الرحلات', 'Inquire About Trips')}
              </a>
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="text-center mb-16">
              <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm mb-2">{t('خدماتنا السياحية', 'TOURISM SERVICES')}</h2>
              <h3 className="text-3xl font-black text-slate-900">{t('خيارات متنوعة تناسب تطلعاتكم', 'Diverse Options to Suit You')}</h3>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <MapPin className="text-brand-coral" />, 
                  title: t('سياحة داخلية (اليمن)', 'Domestic Tourism (Yemen)'), 
                  desc: t('استكشاف المحميات الطبيعية، المدن التاريخية، والمناطق الجبلية الساحرة في اليمن مع تنسيق كامل للنقل والسكن.', 'Exploring reserves, historical cities, and mountains in Yemen with full coordination.') 
                },
                { 
                  icon: <Plane className="text-brand-blue" />, 
                  title: t('سياحة دولية', 'International Tourism'), 
                  desc: t('باكجات سياحية متكاملة إلى تركيا، مصر، ماليزيا، وجورجيا تشمل الطيران، الفنادق، والجولات اليومية.', 'Full tour packages to Turkey, Egypt, Malaysia, and Georgia including flights and hotels.') 
                },
                { 
                  icon: <Compass className="text-brand-coral" />, 
                  title: t('رحلات خاصة وعائلية', 'Private & Family Trips'), 
                  desc: t('تنسيق رحلات مخصصة للعائلات والمجموعات بخصوصية تامة وبرامج مرنة تلبي رغباتكم الخاصة.', 'Customizing trips for families and groups with full privacy and flexible programs.') 
                },
                { 
                  icon: <Map className="text-brand-blue" />, 
                  title: t('حجوزات فندقية', 'Hotel Bookings'), 
                  desc: t('توفير خيارات سكن متنوعة تناسب ميزانيتكم في أفضل المواقع السياحية حول العالم.', 'Providing various accommodation options in top tourist locations worldwide.') 
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center space-y-4 hover:shadow-lg transition-all flex flex-col items-center group">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed flex-1">{item.desc}</p>
                   <a 
                      href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص خدمة: ${item.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-coral font-bold text-sm flex items-center justify-center gap-1 hover:underline mt-4"
                    >
                     <MessageCircle className="w-4 h-4" />
                     {t('طلب عرض سعر', 'Request a Quote')}
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
