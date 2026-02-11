
import React from 'react';
import Services from '../components/Services';
import { useLanguage } from '../components/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10">
      <div className="relative py-16 text-white text-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Travel Services" />
            <div className="absolute inset-0 bg-black/50"></div>
         </div>
         <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h1 className="text-4xl md:text-5xl font-black mb-4">{t('حلول متكاملة لسفرك واحتياجاتك العقارية', 'Integrated Travel & Real Estate Solutions')}</h1>
             <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto px-4">
               {t('نحن نعتني بكافة الإجراءات الرسمية والتنسيقات اللازمة لضمان خدمة احترافية وسريعة بأسعار منافسة.', 'We handle all official procedures and necessary coordination to ensure professional and fast service at competitive rates.')}
             </p>
         </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
