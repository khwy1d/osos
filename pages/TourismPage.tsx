
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, Compass, MapPin, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن العروض السياحية المتوفرة.");

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-brand-blue py-12 md:py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-[10px] font-bold uppercase tracking-widest">
            <Palmtree className="w-3.5 h-3.5 text-brand-coral" />
            {t('رحلات ترفيهية واستكشافية', 'Leisure & Exploratory Trips')}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
            {t('السياحة', 'Tourism')}
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium">
            {t('استمتع بأجمل الوجهات السياحية في اليمن، تركيا، مصر، وماليزيا بباكجات متكاملة تشمل كافة احتياجاتك.', 'Enjoy top destinations in Yemen, Turkey, Egypt, and Malaysia with all-inclusive packages.')}
          </p>
          <div className="pt-2 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-black text-base flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              {t('استكشف عروضنا', 'Explore Our Offers')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-brand-blue">{t('وجهاتك المفضلة بلمسة واصِل', 'Your Favorite Destinations')}</h2>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك تجربة سياحية فريدة تبدأ من التخطيط وحتى العودة، نعتني بحجوزات الطيران، الفنادق، والجولات السياحية اليومية لضمان قضائك أجمل الأوقات.', 'Unique tourism experience from planning to return, we care for flights, hotels, and tours.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <MapPin />, title: t('رحلات استكشافية', 'Exploration Trips'), desc: t('رحلات استكشافية لأجمل محميات ومدن اليمن.', 'Exploratory trips to Yemen\'s beautiful cities.') },
                  { icon: <Plane />, title: t('وجهات عالمية', 'Global Destinations'), desc: t('عروض خاصة لتركيا، ماليزيا، جورجيا، ومصر.', 'Special offers for Turkey, Malaysia, and Egypt.') },
                  { icon: <Compass />, title: t('رحلات عائلية', 'Family Packages'), desc: t('باكجات مخصصة توفر الخصوصية والراحة للعائلات.', 'Custom packages for family privacy and comfort.') },
                  { icon: <Map />, title: t('جولات يومية', 'Daily Tours'), desc: t('تنسيق جولات سياحية منظمة مع مرشدين محليين.', 'Organized tours with local guides.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-brand-coral border border-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-slate-900 mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6 sticky top-24">
               <h3 className="text-xl font-black text-brand-blue">{t('مميزات الباكجات', 'Package Features')}</h3>
               <ul className="space-y-3">
                  {[
                    t('تذاكر طيران دولية ومحلية.', 'Intl & Domestic Flight Tickets.'),
                    t('إقامة فندقية بمستويات مختلفة.', 'Hotel accommodation (various levels).'),
                    t('استقبال وتوديع من المطار.', 'Airport pickup and drop-off.'),
                    t('تأشيرات سياحية ميسرة.', 'Simplified tourism visas.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 text-brand-coral flex-shrink-0" />
                       <span className="text-xs">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-sm">
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
