
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, Compass, MapPin, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن العروض السياحية الداخلية والدولية المتوفرة.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">
            <Palmtree className="w-4 h-4 text-brand-coral" />
            {t('رحلات ترفيهية واستكشافية', 'Leisure & Exploratory Trips')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('السياحة (داخلية ودولية)', 'Tourism (Domestic & Intl)')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('استمتع بأجمل الوجهات السياحية في اليمن، تركيا، مصر، وماليزيا بباكجات متكاملة تشمل كافة احتياجاتك.', 'Enjoy top destinations in Yemen, Turkey, Egypt, and Malaysia with all-inclusive packages.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('استكشف عروضنا', 'Explore Our Offers')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('وجهاتك المفضلة بلمسة واصِل', 'Your Favorite Destinations')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك تجربة سياحية فريدة تبدأ من التخطيط وحتى العودة، نعتني بحجوزات الطيران، الفنادق، والجولات السياحية اليومية لضمان قضائك أجمل الأوقات.', 'Unique tourism experience from planning to return, we care for flights, hotels, and tours.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <MapPin />, title: t('سياحة داخلية', 'Domestic Tourism'), desc: t('رحلات استكشافية لأجمل محميات ومدن اليمن.', 'Exploratory trips to Yemen\'s beautiful cities.') },
                  { icon: <Plane />, title: t('سياحة خارجية', 'Intl Tourism'), desc: t('عروض خاصة لتركيا، ماليزيا، جورجيا، ومصر.', 'Special offers for Turkey, Malaysia, and Egypt.') },
                  { icon: <Compass />, title: t('رحلات عائلية', 'Family Packages'), desc: t('باكجات مخصصة توفر الخصوصية والراحة للعائلات.', 'Custom packages for family privacy and comfort.') },
                  { icon: <Map />, title: t('جولات يومية', 'Daily Tours'), desc: t('تنسيق جولات سياحية منظمة مع مرشدين محليين.', 'Organized tours with local guides.') },
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
               <h3 className="text-2xl font-black text-brand-blue">{t('مميزات الباكجات', 'Package Features')}</h3>
               <ul className="space-y-4">
                  {[
                    t('تذاكر طيران دولية ومحلية.', 'Intl & Domestic Flight Tickets.'),
                    t('إقامة فندقية بمستويات مختلفة.', 'Hotel accommodation (various levels).'),
                    t('استقبال وتوديع من المطار.', 'Airport pickup and drop-off.'),
                    t('تأشيرات سياحية ميسرة.', 'Simplified tourism visas.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('طلب عرض سياحي', 'Request a Quote')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
