
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, Compass, MapPin, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن عروض السياحة المتوفرة في واصل.");

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-brand-blue py-14 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-topo"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter">
            {t('السياحة', 'Tourism')}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-bold opacity-90">
            {t('استكشف سحر اليمن وجمال العالم معنا، نقدم باكجات سياحية متكاملة إلى أفضل الوجهات السياحية العالمية بأفضل الأسعار.', 'Explore Yemen and the world with our integrated tour packages to top global destinations.')}
          </p>
          <div className="pt-2 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center gap-2.5 shadow-xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              {t('اكتشف عروضنا', 'Explore Offers')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-brand-blue">{t('وجهاتك المفضلة بلمسة واصِل', 'Your Destinies, Wasil Touch')}</h2>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  {t('نحن نوفر لك تجربة سياحية فريدة تبدأ من التخطيط وحتى العودة، نعتني بحجوزات الطيران، الفنادق، والجولات اليومية لضمان قضائك أجمل الأوقات.', 'Unique tourism experience caring for flights, hotels, and daily tours.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <MapPin />, title: t('سياحة اليمن', 'Yemen Tours'), desc: t('رحلات استكشافية لأجمل المحميات والمدن اليمنية.', 'Trips to Yemen\'s beautiful nature.') },
                  { icon: <Plane />, title: t('وجهات عالمية', 'Global Destinations'), desc: t('عروض حصرية لأجمل الوجهات السياحية.', 'Exclusive global tour offers.') },
                  { icon: <Compass />, title: t('رحلات عائلية', 'Family Packages'), desc: t('باكجات مخصصة توفر الخصوصية والراحة.', 'Custom family packages.') },
                  { icon: <Map />, title: t('جولات يومية', 'Daily Tours'), desc: t('تنسيق جولات مع مرشدين سياحيين محليين.', 'Organized tours with guides.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-brand-coral group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <h4 className="font-black text-base text-brand-blue mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 font-bold text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] shadow-sm space-y-6 sticky top-24 border-brand-blue/10">
               <h3 className="text-xl font-black text-brand-blue">{t('مميزات الباكجات', 'Package Perks')}</h3>
               <ul className="space-y-3">
                  {[
                    t('إقامة فندقية بمستويات فاخرة.', 'Luxury hotel accommodation.'),
                    t('تأشيرات سياحية ميسرة.', 'Simplified tourism visas.'),
                    t('استقبال وتوديع من المطارات.', 'Airport pickup and drop-off.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 text-brand-coral flex-shrink-0" />
                       <span className="text-[11px]">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-accent text-white py-3.5 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-sm shadow-lg shadow-brand-accent/20">
                 <WhatsAppIcon className="w-4 h-4 fill-current" />
                 {t('اطلب عرضك الآن', 'Request a Quote')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismPage;
