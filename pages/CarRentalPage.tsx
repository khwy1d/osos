
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Car, ShieldCheck, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const CarRentalPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة تاجير السيارات في مصر.");

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Car Rental" 
          />
          {/* Strong Black Overlay for Readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6 md:space-y-8 pt-16 md:pt-20">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter drop-shadow-lg">
            {t('تأجير السيارات (مصر)', 'Car Rental in Egypt')}
          </h1>
          <p className="text-base md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md leading-relaxed">
            {t('نحن نسهل لك عملية تأجير السيارات بأسعار منافسة وشروط واضحة لضمان راحتك خلال إقامتك في مصر.', 'Facilitating car rentals with competitive rates and clear conditions for your comfort in Egypt.')}
          </p>
          <div className="pt-2 md:pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-5 h-5 md:w-7 md:h-7 fill-current" />
              {t('اطلب سيارة الآن', 'Request a Car')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-16 items-start">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-brand-blue">{t('خيارات متنوعة تناسب احتياجاتك', 'Options for Every Need')}</h2>
                <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نوفر لك تشكيلة واسعة من السيارات الحديثة، سواء كانت للأفراد أو للعائلات الكبيرة، مع التركيز على السلامة الفنية والشفافية في أسعار التأجير اليومي والأسبوعي.', 'Wide range of modern cars for individuals or families, with focus on safety and pricing transparency.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Car />, title: t('سيارات حديثة', 'Modern Fleet'), desc: t('موديلات حديثة وحالات فنية ممتازة.', 'Modern models and excellent conditions.') },
                  { icon: <ShieldCheck />, title: t('تأمين شامل', 'Full Insurance'), desc: t('خيارات تأمين متنوعة لراحة بالك.', 'Various insurance options for peace of mind.') },
                  { icon: <MapPin />, title: t('استلام مرن', 'Flexible Pickup'), desc: t('تنسيق الاستلام في المطار أو مقر إقامتك.', 'Coordination at airport or your stay.') },
                  { icon: <AlertTriangle />, title: t('دعم 24 ساعة', '24h Support'), desc: t('فريق دعم فني جاهز للرد على اتصالاتكم.', 'Support team ready for your calls.') },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 md:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4 group hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-brand-coral shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-lg md:text-xl text-slate-900 mb-1 md:mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm space-y-6 md:space-y-8 sticky top-28">
               <h3 className="text-xl md:text-2xl font-black text-brand-blue">{t('المتطلبات الأساسية', 'Basic Requirements')}</h3>
               <ul className="space-y-3 md:space-y-4">
                  {[
                    t('رخصة قيادة سارية المفعول.', 'Valid driver\'s license.'),
                    t('صورة جواز السفر.', 'Passport copy.'),
                    t('دفع مبلغ التأمين المتفق عليه.', 'Agreed insurance deposit.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-brand-coral flex-shrink-0" />
                       <span className="text-sm">{text}</span>
                    </li>
                  ))}
               </ul>
               <div className="bg-brand-coral/5 p-4 rounded-xl border border-brand-coral/10">
                  <p className="text-[10px] text-brand-coral font-bold leading-relaxed">
                    {t('ملاحظة: تختلف الأسعار والشروط بناءً على نوع السيارة وفترة التأجير.', 'Note: Prices and conditions vary by car type and rental period.')}
                  </p>
               </div>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 md:py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all">
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('احجز سيارتك الآن', 'Book Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRentalPage;
