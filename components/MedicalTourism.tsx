
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Stethoscope, Hospital, UserCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';

const MedicalTourism: React.FC = () => {
  const { t } = useLanguage();
  const medicalWaLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمة السفر العلاجي والسياحة.")}`;

  const trustPoints = [
    { icon: <Stethoscope className="w-4 h-4" />, ar: 'تنسيق مواعيد مع أفضل الاستشاريين في القاهرة', en: 'Consultant appointments in Cairo' },
    { icon: <Hospital className="w-4 h-4" />, ar: 'خصومات حصرية تصل لـ 20% على التحاليل والأشعة', en: 'Up to 20% off on diagnostic tests' },
    { icon: <UserCheck className="w-4 h-4" />, ar: 'مرافق طبي متخصص لاستقبالك ومتابعة حالتك', en: 'Dedicated medical coordinator' },
    { icon: <ShieldCheck className="w-4 h-4" />, ar: 'إجراءات سفر ميسرة وسريعة للمرضى ومرافقيهم', en: 'Simplified travel for patients' },
  ];

  return (
    <section id="medical" className="py-20 bg-brand-blue relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053"
              className="rounded-3xl shadow-2xl border border-white/10 object-cover aspect-[4/3]"
              alt="Medical Care"
            />
          </div>

          <div className="text-white space-y-8">
            <div className="space-y-3">
              <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                {t('السفر العلاجي والسياحة.. رعاية بلا حدود', 'Medical Travel & Tourism.. Boundless Care')}
              </h3>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed font-semibold italic border-r-2 border-brand-coral pr-5">
              {t('نوفر لكم جسراً آمناً للرعاية الطبية المتميزة في مصر، لضمان نتائج مطمئنة وراحة تامة.', 'A secure bridge to premium medical care in Egypt.')}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3 items-start p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-brand-coral/20 flex items-center justify-center text-brand-coral flex-shrink-0">
                    {point.icon}
                  </div>
                  <span className="text-xs font-bold leading-snug text-white/90">{t(point.ar, point.en)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href={medicalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-coral hover:bg-brand-coralLight text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t('استفسر الآن عبر واتساب', 'Inquire Now')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTourism;
