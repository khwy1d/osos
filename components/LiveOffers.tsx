
import React from 'react';
import { useLanguage } from './LanguageContext';
import { LIVE_OFFERS, WA_PHONE } from '../constants';
import { Plane, Bus, Calendar, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const LiveOffers: React.FC = () => {
  const { lang, t } = useLanguage();

  const getWaLink = (type: 'Flight' | 'Bus') => {
    const msg = type === 'Flight' 
      ? "السلام عليكم ، اريد الاستعلام عن خدمة تذاكر الطيران."
      : "السلام عليكم ، اريد الاستعلام عن خدمة حجز الباصات.";
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="offers" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-start mb-16 space-y-4">
          <h3 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight">
            {t('أحدث العروض والرحلات', 'Latest Offers & Trips')}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIVE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col"
            >
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <img 
                  src={offer.type === 'Flight' 
                    ? "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000" 
                    : "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={offer.route[lang]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                   <div className="p-2.5 rounded-xl backdrop-blur-md bg-white/20 text-white border border-white/30">
                    {offer.type === 'Flight' ? <Plane className="w-5 h-5" /> : <Bus className="w-5 h-5" />}
                  </div>
                  <span className="text-white font-black text-2xl tracking-tight">{offer.price}</span>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-brand-navy leading-tight">
                    {offer.route[lang]}
                  </h4>
                </div>
                
                <div className="flex items-center gap-3 text-slate-500 font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <span>{t('الموعد:', 'Time:')} {offer.day[lang]}</span>
                </div>

                <div className="mt-auto pt-6">
                  <a 
                    href={getWaLink(offer.type)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-brand-navy text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-red transition-all active:scale-95 shadow-lg group/btn"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('احجز الآن', 'Book Now')}
                    <ArrowRight className={`w-4 h-4 transition-transform ${lang === 'ar' ? 'group-hover/btn:-translate-x-1 rotate-180' : 'group-hover/btn:translate-x-1'}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveOffers;
