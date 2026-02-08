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
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('تأجير السيارات (مصر)', 'Car Rental in Egypt')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نحن نسهل لك عملية تأجير السيارات بأسعار منافسة وشروط واضحة لضمان راحتك خلال إقامتك في مصر.', 'Facilitating car rentals with competitive rates and clear conditions for your comfort in Egypt.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('اطلب سيارة الآن', 'Request a Car')}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Info Side */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-brand-blue">{t('خيارات متنوعة تناسب احتياجاتك', 'Options for Every Need')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('نوفر لك تشكيلة واسعة من السيارات الحديثة، سواء كانت للأفراد أو للعائلات الكبيرة، مع التركيز على السلامة الفنية والشفافية في أسعار التأجير اليومي والأسبوعي.', 'Wide range of modern cars for individuals or families, with focus on safety and pricing transparency.')}
                </p>
              </div>

              {/* Grid Features with Card Design applied */}
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Car className="w-6 h-6" />, title: t('سيارات حديثة', 'Modern Fleet'), desc: t('موديلات حديثة وحالات فنية ممتازة.', 'Modern models and excellent conditions.') },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: t('تأمين شامل', 'Full Insurance'), desc: t('خيارات تأمين متنوعة لراحة بالك.', 'Various insurance options for peace of mind.') },
                  { icon: <MapPin className="w-6 h-6" />, title: t('استلام مرن', 'Flexible Pickup'), desc: t('تنسيق الاستلام في المطار أو مقر إقامتك.', 'Coordination at airport or your stay.') },
                  { icon: <AlertTriangle className="w-6 h-6" />, title: t('دعم 24 ساعة', '24h Support'), desc: t('فريق دعم فني جاهز للرد على اتصالاتكم.', 'Support team ready for your calls.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-start items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                    {/* Icon Box */}
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral border border-slate-50 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    {/* Text Box */}
                    <div className="text-start">
                      <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Requirements */}
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 sticky top-28">
               <h3 className="text-2xl font-black text-brand-blue">{t('المتطلبات الأساسية', 'Basic Requirements')}</h3>
               <ul className="space-y-4">
                  {[
                    t('رخصة قيادة سارية المفعول.', 'Valid driver\'s license.'),
                    t('صورة جواز السفر.', 'Passport copy.'),
                    t('دفع مبلغ التأمين المتفق عليه.', 'Agreed insurance deposit.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-bold text-slate-700">
                       <CheckCircle className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                       <span className="text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
               </ul>
               <div className="bg-brand-coral/5 p-4 rounded-xl border border-brand-coral/10">
                  <p className="text-[10px] text-brand-coral font-bold leading-relaxed">
                    {t('ملاحظة: تختلف الأسعار والشروط بناءً على نوع السيارة وفترة التأجير.', 'Note: Prices and conditions vary by car type and rental period.')}
                  </p>
               </div>
               <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-xl">
                 <WhatsAppIcon className="w-5 h-5 fill-current mt-6" />
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
