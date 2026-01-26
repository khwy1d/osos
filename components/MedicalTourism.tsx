
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Stethoscope, Hospital, UserCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';

const MedicalTourism: React.FC = () => {
  const { t } = useLanguage();
  const medicalWaLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمة السفر العلاجي.")}`;

  const trustPoints = [
    { icon: <Stethoscope className="w-5 h-5" />, ar: 'تنسيق مواعيد مع أفضل الاستشاريين في القاهرة وعمان', en: 'Consultant appointments in Cairo & Amman' },
    { icon: <Hospital className="w-5 h-5" />, ar: 'خصومات حصرية تصل لـ 20% على التحاليل والأشعة', en: 'Up to 20% off on diagnostic tests' },
    { icon: <UserCheck className="w-5 h-5" />, ar: 'مرافق طبي متخصص لاستقبالك ومتابعة حالتك', en: 'Dedicated medical coordinator for follow-ups' },
    { icon: <ShieldCheck className="w-5 h-5" />, ar: 'إجراءات سفر ميسرة وسريعة للمرضى ومرافقيهم', en: 'Simplified travel for patients & companions' },
  ];

  return (
    <section id="medical" className="py-24 bg-brand-blue relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-coral/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-2xl group-hover:bg-brand-coral/20 transition-all"></div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053"
              className="relative rounded-[2.5rem] shadow-2xl border-4 border-white/10 object-cover aspect-[4/5] md:aspect-auto"
              alt="Elite Medical Care"
            />
          </div>

          <div className="text-white space-y-10">
            <div className="space-y-4">
              <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm">
                {t('صحتكم أمانة', 'YOUR HEALTH, OUR PRIORITY')}
              </h2>
              <h3 className="text-4xl md:text-6xl font-black leading-[1.15] tracking-tight">
                {t('رحلتك للشفاء تبدأ من هنا.. رعاية طبية بلا حدود', 'Your Healing Journey Starts Here')}
              </h3>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed font-semibold italic border-r-4 border-brand-coral pr-6">
              {t('نوفر لكم جسراً آمناً للرعاية الطبية المتميزة في مصر والأردن، لضمان نتائج مطمئنة وراحة تامة.', 'A secure bridge to premium medical care in Egypt & Jordan.')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/20 flex items-center justify-center text-brand-coral flex-shrink-0">
                    {point.icon}
                  </div>
                  <span className="text-base font-bold leading-snug">{t(point.ar, point.en)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={medicalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-coral hover:bg-brand-coralLight text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-brand-coral/30 transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                {t('استفسر الآن عبر واتساب', 'Inquire via WhatsApp Now')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTourism;
