
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Calendar, MapPin, Info } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const FlightsPage: React.FC = () => {
  const { t } = useLanguage();
  
  // State for form inputs
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');

  // Construct dynamic WhatsApp message
  const getWhatsAppLink = () => {
    const baseMessage = "السلام عليكم، أريد الاستعلام عن خدمة حجز تذاكر الطيران.";
    // Using \n which encodeURIComponent converts to %0A for line breaks
    const message = `${baseMessage}\nمن: ${fromCity}\nإلى: ${toCity}\nتاريخ السفر: ${travelDate}`;
    
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-10">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-start">
                 <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                    {t('حجز تذاكر طيران محلية ودولية', 'Domestic & International Flight Tickets')}
                 </h1>
                 <p className="text-xl text-slate-600 font-medium leading-relaxed">
                    {t('نحن نسهل لك عملية حجز التذاكر عبر الخطوط الجوية اليمنية وفلاي أدين بأسعار منافسة وتنسيق دقيق.', 'We facilitate ticket booking via Yemenia Airways and Fly Aden with competitive rates.')}
                 </p>
                 <div className="flex gap-8 pt-4 justify-center lg:justify-start grayscale opacity-70">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Yemenia_Logo.svg/1200px-Yemenia_Logo.svg.png" className="h-10 object-contain" alt="Yemenia" />
                    <img src="https://www.flyaden.com/assets/images/logo.png" className="h-10 object-contain" alt="Fly Aden" />
                 </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-6">
                 <h3 className="text-2xl font-black text-brand-teal text-center">{t('استعلام عن توفر رحلة', 'Check Flight Availability')}</h3>
                 <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1">
                          <label className="text-xs font-black text-slate-400 uppercase">{t('من', 'From')}</label>
                          <div className="relative">
                             <MapPin className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                             <input 
                                type="text" 
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                placeholder={t('المنطقة', 'Region')} 
                                className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-teal outline-none" 
                             />
                          </div>
                       </div>
                       <div className="space-y-1">
                          <label className="text-xs font-black text-slate-400 uppercase">{t('إلى', 'To')}</label>
                          <div className="relative">
                             <MapPin className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                             <input 
                                type="text" 
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                placeholder={t('الوجهة', 'Destination')} 
                                className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-teal outline-none" 
                             />
                          </div>
                       </div>
                    </div>
                    <div className="space-y-1">
                       <label className="text-xs font-black text-slate-400 uppercase">{t('التاريخ المفضل', 'Preferred Date')}</label>
                       <div className="relative">
                          <Calendar className="absolute right-3 top-3 w-4 h-4 text-brand-coral" />
                          <input 
                             type="date" 
                             value={travelDate}
                             onChange={(e) => setTravelDate(e.target.value)}
                             className="w-full bg-slate-50 border border-slate-200 p-3 pr-10 rounded-xl focus:ring-2 focus:ring-brand-teal outline-none" 
                          />
                       </div>
                    </div>
                    <a 
                       href={getWhatsAppLink()} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="w-full bg-brand-teal text-white py-4 rounded-xl font-black text-lg hover:bg-brand-tealLight transition-colors flex items-center justify-center gap-2"
                    >
                       <WhatsAppIcon className="w-5 h-5 fill-current" />
                       {t('استفسر الآن عبر واتساب', 'Inquire via WhatsApp')}
                    </a>
                    <div className="flex gap-2 p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-xs font-bold leading-relaxed">
                       <Info className="w-5 h-5 flex-shrink-0" />
                       <p>{t('نحن نقوم بالبحث عن أفضل الرحلات المتاحة ونوافيك بالنتائج والأسعار فوراً.', 'We search for the best available flights and provide results and rates instantly.')}</p>
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
