
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Bus, Users, ShieldCheck, BadgeDollarSign, CheckCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const TransportPage: React.FC = () => {
  const { t } = useLanguage();
  const busMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة حجز الباصات.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('خدمات النقل البري وحجز الباصات', 'Land Transport Services')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('رحلات يومية منظمة وحجز باصات دولية ومحلية بأحدث الأساطيل وأسعار تناسب الجميع.', 'Daily organized trips and bus bookings via modern fleets at affordable prices.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${busMsg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('احجز رحلتك البرية', 'Book Your Trip')}
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
                <h2 className="text-3xl font-black text-brand-navy">{t('حلول نقل متكاملة لكافة الخطوط', 'Integrated Transport Solutions')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('سواء كنت تبحث عن حجز باصات دولية بين اليمن والدول المجاورة، أو نقل محلي داخل المدن، أو حتى حافلات خاصة للمجموعات، فنحن نوفر لك التنسيق الكامل بمهنية عالية.', 'International or local bus bookings, or private group buses, we provide professional coordination.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Bus />, title: t('باصات دولية', 'Intl Buses'), desc: t('رحلات منظمة عبر الخطوط البرية الدولية.', 'Organized international land routes.') },
                  { icon: <Users />, title: t('نقل مجموعات', 'Group Transport'), desc: t('تنسيق حافلات خاصة للرحلات العائلية.', 'Private bus coordination for family trips.') },
                  { icon: <ShieldCheck />, title: t('أمان وراحة', 'Safety & Comfort'), desc: t('التعاون مع أفضل شركات النقل الموثوقة.', 'Partnering with the best trusted transport companies.') },
                  { icon: <BadgeDollarSign />, title: t('أسعار واقعية', 'Realistic Rates'), desc: t('عروض أسعار منافسة لكافة الخطوط والوجهات.', 'Competitive rates for all routes and destinations.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-red border border-slate-100 group-hover:bg-brand-navy group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-navy text-center">{t('طلب حجز سريع', 'Quick Booking')}</h3>
               <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('منطقة الإقلاع', 'Origin')}</label>
                    <input type="text" placeholder={t('المدينة', 'City')} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-navy outline-none font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('الوجهة النهائية', 'Destination')}</label>
                    <input type="text" placeholder={t('الوجهة', 'Destination')} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-navy outline-none font-bold" />
                  </div>
                  <div className="pt-2">
                    <a href={`https://wa.me/${WA_PHONE}?text=${busMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all text-lg">
                      <WhatsAppIcon className="w-5 h-5 fill-current" />
                      {t('استفسر الآن', 'Inquire Now')}
                    </a>
                  </div>
               </div>
               <div className="pt-4 border-t border-slate-200">
                  <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                    {t('* نضمن لك التنسيق المباشر مع شركات النقل فور استلام طلبك.', '* We ensure direct coordination with carriers upon receiving your request.')}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportPage;
