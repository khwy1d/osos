
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Palmtree, Map, Plane, Compass, MapPin, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const TourismPage: React.FC = () => {
  const { t } = useLanguage();
  const mainMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن عروض السياحة المتوفرة في أُسس.");

  return (
    <div className="pb-16">
      {/* Hero Section - Standardized */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('خدمات السياحة', 'Tourism Services')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('استكشف سحر اليمن وجمال العالم معنا، نقدم باكجات سياحية متكاملة إلى أفضل الوجهات السياحية العالمية بأفضل الأسعار.', 'Explore Yemen and the world with our integrated tour packages to top global destinations.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              {t('اكتشف عروضنا', 'Explore Offers')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-navy">{t('وجهاتك المفضلة بلمسة أُسس', 'Your Destinies, Osos Touch')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نحن نوفر لك تجربة سياحية فريدة تبدأ من التخطيط وحتى العودة، نعتني بحجوزات الطيران، الفنادق، والجولات اليومية لضمان قضائك أجمل الأوقات.', 'Unique tourism experience caring for flights, hotels, and daily tours.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <MapPin />, title: t('سياحة اليمن', 'Yemen Tours'), desc: t('رحلات استكشافية لأجمل المحميات والمدن اليمنية.', 'Trips to Yemen\'s beautiful nature.') },
                  { icon: <Plane />, title: t('وجهات عالمية', 'Global Destinations'), desc: t('عروض حصرية لأجمل الوجهات السياحية.', 'Exclusive global tour offers.') },
                  { icon: <Compass />, title: t('رحلات عائلية', 'Family Packages'), desc: t('باكجات مخصصة توفر الخصوصية والراحة.', 'Custom family packages.') },
                  { icon: <Map />, title: t('جولات يومية', 'Daily Tours'), desc: t('تنسيق جولات مع مرشدين سياحيين محليين.', 'Organized tours with guides.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-red border border-slate-100 group-hover:bg-brand-navy group-hover:text-white transition-all">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm space-y-8 sticky top-28 border border-slate-100">
               <h3 className="text-2xl font-black text-brand-navy">{t('مميزات الباكجات', 'Package Perks')}</h3>
               <ul className="space-y-4">
                  {[
                    t('إقامة فندقية بمستويات فاخرة.', 'Luxury hotel accommodation.'),
                    t('تأشيرات سياحية ميسرة.', 'Simplified tourism visas.'),
                    t('استقبال وتوديع من المطارات.', 'Airport pickup and drop-off.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <a href={`https://wa.me/${WA_PHONE}?text=${mainMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-lg shadow-lg">
                 <WhatsAppIcon className="w-6 h-6 fill-current" />
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
