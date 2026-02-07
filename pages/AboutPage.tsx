
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Target, Eye, ShieldCheck, Zap, Briefcase, HeartHandshake, MessageCircle, Building2, Plane, FileCheck, Bus } from 'lucide-react';
import { WA_PHONE } from '../constants';

const AboutPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const contactMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدمات وكالة أُسس.");

  const features = [
    { icon: <Briefcase className="w-6 h-6" />, label: { ar: 'الاحترافية', en: 'Professionalism' } },
    { icon: <HeartHandshake className="w-6 h-6" />, label: { ar: 'الثقة المطلقة', en: 'Absolute Trust' } },
    { icon: <Zap className="w-6 h-6" />, label: { ar: 'السرعة والدقة', en: 'Speed & Accuracy' } },
    { icon: <ShieldCheck className="w-6 h-6" />, label: { ar: 'خدمة شاملة', en: 'Comprehensive Service' } },
  ];

  return (
    <div className="pt-10">
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            {t('عنّا – وكالة أُسس', 'About Us – Osos Agency')}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            {t(
              'أُسس هي وكالة سفر يمنية رائدة متخصصة في تقديم خدمات السفر المتكاملة، نؤمن بأن الثقة هي أساس كل رحلة ناجحة، لذا نكرس جهودنا لتوفير أفضل الحلول اللوجستية والطبية والسياحية لعملائنا بمهنية عالية.',
              'Osos is a leading Yemeni travel agency specialized in providing integrated travel services. We believe that trust is the foundation of every successful trip.'
            )}
          </p>
        </div>
      </section>

      {/* Vision & Mission Card Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('رؤيتنا', 'Our Vision')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t(
                    'أن نكون الخيار الأول والاسم الأكثر ثقة في قطاع السفر والسياحة في اليمن والمنطقة.',
                    'To be the first choice and the most trusted name in travel and tourism sector in Yemen.'
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center text-brand-navy mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('مهمتنا', 'Our Mission')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t(
                    'تبسيط إجراءات السفر والخدمات اللوجستية عبر تقديم حلول واقعية، شفافة، وسريعة تحت شعار أُسس.',
                    'Simplifying travel procedures and logistics by providing realistic, transparent, and fast solutions under Osos banner.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black">{t('سافر بثقة.. سافر معنا', 'Travel with Trust.. Travel with Us')}</h2>
            <div className="pt-4">
               <a 
                  href={`https://wa.me/${WA_PHONE}?text=${contactMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-gradient text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3"
               >
                  <MessageCircle className="w-6 h-6" />
                  {t('تواصل مع فريق أُسس', 'Contact Osos Team')}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
