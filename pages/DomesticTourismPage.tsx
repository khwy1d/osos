
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { MapPin, Compass, Users, MessageCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';

const DomesticTourismPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة السياحة الداخلية.");

  return (
    <div className="pt-10">
      <section className="bg-brand-teal py-20 text-white text-center">
         <h1 className="text-4xl md:text-5xl font-black mb-4">{t('اكتشف جمال اليمن مع خدماتنا للسياحة الداخلية', 'Explore Yemen with Our Domestic Tourism Services')}</h1>
         <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto px-4 mb-8">
           {t('نقدم خدمات سياحية محلية مبسطة وعملية لاستكشاف أجمل المناطق والمدن اليمنية.', 'Simple and practical local tourism services to explore beautiful Yemeni regions.')}
         </p>
         <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-brand-coral text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            {t('تواصل معنا للترتيب', 'Contact Us to Arrange')}
         </a>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <MapPin />, title: t('رحلات استكشافية', 'Exploration Trips'), desc: t('تنظيم رحلات محلية للمناطق السياحية والتاريخية بأسعار منافسة.', 'Organizing local trips to tourist and historical sites at competitive rates.') },
                { icon: <Compass />, title: t('إرشادات سياحية', 'Tourism Guidance'), desc: t('تزويدكم بالمعلومات الكافية حول أفضل الوجهات المحلية وطرق الوصول.', 'Providing info on best local destinations and how to get there.') },
                { icon: <Users />, title: t('تنسيق المجموعات', 'Group Coordination'), desc: t('تنسيق السكن والنقل للمجموعات والعائلات بمهنية عالية.', 'Coordinating stay and transport for groups and families professionally.') },
              ].map((item, idx) => (
                <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center space-y-4 hover:shadow-lg transition-all flex flex-col">
                   <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm">
                      {item.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                   <p className="text-slate-600 font-medium leading-relaxed flex-1">{item.desc}</p>
                   <a 
                      href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`السلام عليكم، استفسار بخصوص: ${item.title}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-coral font-bold text-sm flex items-center justify-center gap-1 hover:underline mt-4"
                   >
                     <MessageCircle className="w-4 h-4" />
                     {t('استفسر الآن', 'Inquire Now')}
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticTourismPage;
