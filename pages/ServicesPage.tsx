
import React from 'react';
import Services from '../components/Services';
import { useLanguage } from '../components/LanguageContext';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10">
      <div className="bg-brand-teal py-16 text-white text-center">
         <h1 className="text-4xl md:text-5xl font-black mb-4">{t('حلول متكاملة لسفرك واحتياجاتك العقارية', 'Integrated Travel & Real Estate Solutions')}</h1>
         <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto px-4">
           {t('نحن نعتني بكافة الإجراءات الرسمية والتنسيقات اللازمة لضمان خدمة احترافية وسريعة بأسعار منافسة.', 'We handle all official procedures and necessary coordination to ensure professional and fast service at competitive rates.')}
         </p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
