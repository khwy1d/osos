
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, MessageCircle, Star, CalendarDays } from 'lucide-react';
import { WA_PHONE } from '../constants';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن العروض السياحية الدولية.");

  const destinations = [
    { 
      name: { ar: 'تركيا', en: 'Turkey' }, 
      desc: { ar: 'اسطنبول، طرابزون، بورصة - طبيعة خلابة وتاريخ عريق.', en: 'Istanbul, Trabzon, Bursa - Nature & History.' },
      img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800'
    },
    { 
      name: { ar: 'ماليزيا', en: 'Malaysia' }, 
      desc: { ar: 'كوالالمبور، لنكاوي - سحر الشرق والشواطئ الاستوائية.', en: 'Kuala Lumpur, Langkawi - Tropical Magic.' },
      img: 'https://images.unsplash.com/photo-1596422846543-75c6a19a2c7d?auto=format&fit=crop&q=80&w=800'
    },
    { 
      name: { ar: 'جورجيا', en: 'Georgia' }, 
      desc: { ar: 'تبليسي، باتومي - جبال القوقاز والطبيعة البكر.', en: 'Tbilisi, Batumi - Caucasus Mountains.' },
      img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=800'
    },
    { 
      name: { ar: 'مصر', en: 'Egypt' }, 
      desc: { ar: 'شرم الشيخ، الغردقة - منتجعات فاخرة وأجواء مشمسة.', en: 'Sharm El Sheikh, Hurghada - Luxury Resorts.' },
      img: 'https://images.unsplash.com/photo-1566376518171-46452292f704?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-10">
      <section className="bg-brand-teal py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-black mb-4">{t('اكتشف العالم مع باقاتنا السياحية', 'Discover the World with Our Tour Packages')}</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto px-4">
              {t('عروض متكاملة تشمل الطيران، الفنادق، والجولات السياحية لأجمل الوجهات العالمية بأسعار تنافسية.', 'Integrated offers including flights, hotels, and tours to the most beautiful global destinations at competitive prices.')}
            </p>
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
               <MessageCircle className="w-6 h-6" />
               {t('صمم رحلتك الآن', 'Customize Your Trip')}
            </a>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="text-center mb-16">
              <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm mb-2">{t('وجهاتنا المميزة', 'TOP DESTINATIONS')}</h2>
              <h3 className="text-3xl font-black text-slate-900">{t('اختر وجهتك القادمة', 'Choose Your Next Destination')}</h3>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {destinations.map((dest, idx) => (
                <div key={idx} className="group relative rounded-[2rem] overflow-hidden shadow-lg h-96 cursor-pointer">
                   <img src={dest.img} alt={dest.name.en} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h4 className="text-2xl font-black mb-2">{t(dest.name.ar, dest.name.en)}</h4>
                      <p className="text-sm text-white/80 font-medium mb-4">{t(dest.desc.ar, dest.desc.en)}</p>
                      <a 
                         href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص رحلة إلى ${t(dest.name.ar, dest.name.en)}`)}`}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 bg-brand-coral text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-coralLight transition-colors"
                      >
                         <MessageCircle className="w-4 h-4" />
                         {t('احجز الآن', 'Book Now')}
                      </a>
                   </div>
                </div>
              ))}
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Plane />, title: t('حجوزات طيران وفنادق', 'Flights & Hotels'), desc: t('نضمن لك أفضل الأسعار على تذاكر الطيران وأرقى الفنادق.', 'We guarantee best rates on flights and finest hotels.') },
                { icon: <Map />, title: t('برامج سياحية منظمة', 'Organized Tours'), desc: t('جولات يومية مع مرشدين سياحيين لاستكشاف المعالم.', 'Daily tours with guides to explore landmarks.') },
                { icon: <CalendarDays />, title: t('رحلات شهر العسل', 'Honeymoon Trips'), desc: t('باقات خاصة للعرسان مع خدمات VIP وخصوصية تامة.', 'Special packages for newlyweds with VIP services.') },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center space-y-4 hover:shadow-lg transition-all flex flex-col items-center">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm text-brand-coral">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
