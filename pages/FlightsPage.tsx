
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Calendar, MapPin, Info, MessageCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const FlightsPage: React.FC = () => {
  const { t } = useLanguage();
  
  // State for form inputs
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');

  // Construct dynamic WhatsApp message
  const getWhatsAppLink = (isGeneral = false) => {
    const baseMessage = "السلام عليكم، أريد الاستعلام عن خدمة حجز تذاكر الطيران.";
    if (isGeneral || (!fromCity && !toCity)) {
        return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(baseMessage)}`;
    }
    const message = `${baseMessage}\nمن: ${fromCity}\nإلى: ${toCity}\nتاريخ السفر: ${travelDate}`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-6">
      {/* Hero Section with Integrated WhatsApp Button */}
      <section className="bg-brand-blue py-16 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            {t('حجز تذاكر طيران محلية ودولية', 'Domestic & International Flight Tickets')}
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-2xl mx-auto">
            {t('نحن نسهل لك عملية حجز التذاكر عبر الخطوط الجوية اليمنية وفلاي أدين بأسعار منافسة وتنسيق دقيق وفوري.', 'We facilitate ticket booking via Yemenia Airways and Fly Aden with competitive rates and instant coordination.')}
          </p>
          <div className="pt-4 flex justify-center">
            <a 
              href={getWhatsAppLink(true)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl inline-flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-transform"
            >
              <WhatsAppIcon className="w-7 h-7 fill-current" />
              {t('احجز تذكرتك الآن عبر واتساب', 'Book Your Ticket via WhatsApp')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                 <div className="space-y-4">
                    <h2 className="text-3xl font-black text-slate-900">
                        {t('رحلات يومية وأسعار منافسة', 'Daily Flights & Competitive Rates')}
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        {t('سواء كنت تبحث عن رحلات داخلية بين المدن اليمنية أو رحلات دولية إلى القاهرة، عمان، أو جدة، نحن نوفر لك أفضل الخيارات المتاحة.', 'Whether you are looking for domestic Yemeni flights or international ones to Cairo, Amman, or Jeddah, we provide the best options.')}
                    </p>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue">
                            <Info className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm text-slate-700">{t('تأكيد فوري للحجز', 'Instant Confirmation')}</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm text-slate-700">{t('دعم خلال الرحلة', 'Support During Trip')}</span>
                    </div>
                 </div>

                 <div className="flex gap-10 pt-4 grayscale opacity-60">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Yemenia_Logo.svg/1200px-Yemenia_Logo.svg.png" className="h-12 object-contain" alt="Yemenia" />
                    <img src="https://www.flyaden.com/assets/images/logo.png" className="h-12 object-contain" alt="Fly Aden" />
                 </div>
              </div>

              {/* Interactive Booking Inquiry Form */}
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-8 relative">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-br-full -z-0"></div>
                 <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-black text-brand-blue text-center">{t('طلب استعلام عن رحلة', 'Flight Inquiry Request')}</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('من', 'From')}</label>
                            <div className="relative">
                                <MapPin className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                                <input 
                                    type="text" 
                                    value={fromCity}
                                    onChange={(e) => setFromCity(e.target.value)}
                                    placeholder={t('المنطقة', 'Region')} 
                                    className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold" 
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('إلى', 'To')}</label>
                            <div className="relative">
                                <MapPin className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                                <input 
                                    type="text" 
                                    value={toCity}
                                    onChange={(e) => setToCity(e.target.value)}
                                    placeholder={t('الوجهة', 'Destination')} 
                                    className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold" 
                                />
                            </div>
                        </div>
                        </div>
                        <div className="space-y-1">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('التاريخ المفضل', 'Preferred Date')}</label>
                        <div className="relative">
                            <Calendar className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                            <input 
                                type="date" 
                                value={travelDate}
                                onChange={(e) => setTravelDate(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none font-bold" 
                            />
                        </div>
                        </div>
                        
                        <a 
                        href={getWhatsAppLink()} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full bg-[#25D366] text-white py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/20 active:scale-95"
                        >
                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                        {t('إرسال الاستفسار الآن', 'Send Inquiry Now')}
                        </a>
                        
                        <div className="flex gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-800 text-[11px] font-bold leading-relaxed">
                        <Info className="w-6 h-6 flex-shrink-0" />
                        <p>{t('نحن نقوم بالبحث في أنظمة الحجز عن أفضل الرحلات المتاحة ونوافيك بالنتائج والأسعار عبر الواتساب فوراً.', 'We search the booking systems for the best flights and provide results via WhatsApp instantly.')}</p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FlightsPage;
