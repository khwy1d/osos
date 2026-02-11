
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { MapPin, Compass, Users, MessageCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';

const DomesticTourismPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة السياحة الداخلية.");

  return (
    <div className="pt-10">
      <section className="relative min-h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1627133912781-8079df939227?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover" 
              alt="Yemen Nature" 
            />
            {/* Strong Black Overlay for Readability */}
            <div className="absolute inset-0 bg-black/50"></div>
         </div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 pt-20">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 drop-shadow-lg leading-tight">
               {t('اكتشف جمال اليمن مع خدماتنا للسياحة الداخلية', 'Explore Yemen with Our Domestic Tourism Services')}
             </h1>
             <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto px-4 mb-8 drop-shadow-md">
               {t('نقدم خدمات سياحية محلية مبسطة وعملية لاستكشاف أجمل المناطق والمدن اليمنية.', 'Simple and practical local tourism services to explore beautiful Yemeni regions.')}
             </p>
             <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral hover:bg-brand-coralLight text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                {t('تواصل معنا للترتيب', 'Contact Us to Arrange')}
             </a>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <MapPin />, title: t('رحلات استكشافية', 'Exploration Trips'), desc: t('تنظيم رحلات محلية للمناطق السياحية والتاريخية بأسعار منافسة.', 'Organizing local trips to tourist and historical sites at competitive rates.') },
                { icon: <Compass />, title: t('إرشادات سياحية', 'Tourism Guidance'), desc: t('تزويدكم بالمعلومات الكافية حول أفضل الوجهات المحلية وطرق الوصول.', 'Providing info on best local destinations and how to get there.') },
                { icon: <Users />, title: t('تنسيق المجموعات', 'Group Coordination'), desc: t('تنسيق السكن والنقل للمجموعات والعائلات بمهنية عالية.', 'Coordinating stay and transport for groups and families professionally.') },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all flex flex-row items-start gap-6 text-start">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm flex-shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                   </div>
                   <div className="flex-1 space-y-2">
                       <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.title}</h3>
                       <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                       <a 
                          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص: ${item.title}`)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-coral font-bold text-xs flex items-center gap-1 hover:underline mt-2"
                       >
                         <MessageCircle className="w-3.5 h-3.5" />
                         {t('استفسر الآن', 'Inquire Now')}
                       </a>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticTourismPage;
