
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Calendar, MapPin, Info, CheckCircle, Plane } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const FlightsPage: React.FC = () => {
  const { t } = useLanguage();
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const getWhatsAppLink = (isGeneral = false) => {
    const baseMessage = "السلام عليكم، أريد الاستعلام عن خدمة حجز تذاكر الطيران.";
    if (isGeneral || (!fromCity && !toCity)) {
        return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(baseMessage)}`;
    }
    const message = `${baseMessage}\nمن: ${fromCity}\nإلى: ${toCity}\nتاريخ السفر: ${travelDate}`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">
            <Plane className="w-4 h-4 text-brand-coral" />
            {t('تأكيد فوري للحجوزات', 'Instant Ticket Confirmation')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            {t('حجز تذاكر طيران محلية ودولية', 'Flight Tickets Worldwide')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            {t('نوفر لك أفضل الأسعار والخيارات للسفر عبر الخطوط اليمنية وفلاي أدين، مع دعم فني متواصل.', 'Top rates and options via Yemenia & Fly Aden with continuous support.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a href={getWhatsAppLink(true)} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all">
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('احجز تذكرتك الآن', 'Book Your Ticket')}
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
                <h2 className="text-3xl font-black text-brand-blue">{t('لماذا تحجز معنا؟', 'Why Book With Us?')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t('بصفتنا وكلاء معتمدون، نوفر لك إمكانية الوصول المباشر لأنظمة الحجز العالمية والمحلية، مما يضمن لك الحصول على أقل سعر متاح مع إمكانية التعديل والإلغاء الميسر.', 'As certified agents, we provide direct access to global booking systems ensuring the best prices.')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: t('رحلات يومية', 'Daily Flights'), desc: t('تغطية شاملة لكافة الرحلات من وإلى اليمن.', 'Full coverage for all flights from/to Yemen.') },
                  { title: t('تأكيد فوري', 'Instant Booking'), desc: t('إصدار التذاكر فور الدفع بوضوح تـام.', 'Tickets issued immediately upon payment.') },
                  { title: t('دعم فني', '24/7 Support'), desc: t('نحن معك في حال حدوث أي تغييرات في الرحلة.', 'We are with you for any flight changes.') },
                  { title: t('أسعار منافسة', 'Best Prices'), desc: t('عروض حصرية وخصومات للمجموعات والعائلات.', 'Exclusive offers and group discounts.') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-coral flex-shrink-0 border border-slate-100">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-slate-100 space-y-8 sticky top-28">
              <h3 className="text-2xl font-black text-brand-blue text-center">{t('استعلام سريع', 'Quick Inquiry')}</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('من', 'From')}</label>
                    <input type="text" value={fromCity} onChange={(e) => setFromCity(e.target.value)} placeholder={t('الإقلاع', 'Origin')} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('إلى', 'To')}</label>
                    <input type="text" value={toCity} onChange={(e) => setToCity(e.target.value)} placeholder={t('الوجهة', 'Destination')} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('التاريخ المفضل', 'Date')}</label>
                  <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold text-slate-500" />
                </div>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-[#128C7E] transition-all">
                  <WhatsAppIcon className="w-6 h-6 fill-current" />
                  {t('إرسال الاستفسار', 'Send via WhatsApp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightsPage;
