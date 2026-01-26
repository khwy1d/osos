
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Target, Eye, ShieldCheck, Zap, Briefcase, HeartHandshake, MessageCircle, Building2, Plane, FileCheck, Bus } from 'lucide-react';
import { WA_PHONE } from '../constants';

const AboutPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const contactMsg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  const features = [
    { icon: <Briefcase className="w-6 h-6" />, label: { ar: 'الاحترافية', en: 'Professionalism' } },
    { icon: <HeartHandshake className="w-6 h-6" />, label: { ar: 'الثقة', en: 'Trust' } },
    { icon: <Zap className="w-6 h-6" />, label: { ar: 'السرعة والدقة', en: 'Speed & Accuracy' } },
    { icon: <ShieldCheck className="w-6 h-6" />, label: { ar: 'خدمة شاملة', en: 'Comprehensive Service' } },
  ];

  const serviceIcons = [
    { icon: <Plane className="w-6 h-6" />, label: { ar: 'طيران', en: 'Flights' } },
    { icon: <Bus className="w-6 h-6" />, label: { ar: 'نقل', en: 'Transport' } },
    { icon: <FileCheck className="w-6 h-6" />, label: { ar: 'تأشيرات', en: 'Visas' } },
    { icon: <Building2 className="w-6 h-6" />, label: { ar: 'عقارات', en: 'Real Estate' } },
  ];

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
            {t('شريكك الموثوق', 'Your Trusted Partner')}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            {t('عنّا – واصِل', 'About Us – Wasil')}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            {t(
              'واصِل هو مكتب متكامل يقدم خدمات السفر، النقل، التأشيرات، الحجوزات السياحية والعقارية بسرعة وبأسعار تنافسية. نهدف لتسهيل رحلتك من البداية حتى الوصول، مع توفير استشارات ودعم مباشر لجميع خدماتنا.',
              'Wasil is an integrated office providing travel, transport, visa, tourism, and real estate booking services quickly and at competitive prices. We aim to facilitate your journey from start to arrival, providing consultation and direct support for all our services.'
            )}
          </p>

          {/* Service Icons Strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
             {serviceIcons.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group">
                   <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal transition-all duration-300 shadow-sm">
                      {item.icon}
                   </div>
                   <span className="text-xs font-bold text-slate-500">{item.label[lang]}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('رؤيتنا', 'Our Vision')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t(
                    'تقديم أفضل تجربة سفر متكاملة وموثوقة لجميع عملائنا.',
                    'Providing the best integrated and reliable travel experience for all our clients.'
                  )}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-coral/10 rounded-2xl flex items-center justify-center text-brand-coral mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">{t('مهمتنا', 'Our Mission')}</h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {t(
                    'تسهيل جميع خطوات السفر، الحجز، النقل، والموافقات الإدارية بطريقة سريعة وشفافة.',
                    'Facilitating all steps of travel, booking, transport, and administrative clearances quickly and transparently.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-brand-coral font-black tracking-widest uppercase text-sm mb-3">
               {t('لماذا واصِل؟', 'WHY WASIL?')}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">
               {t('قيمنا الأساسية', 'Our Core Values')}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-800 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  {feature.icon}
                </div>
                <h4 className="font-black text-xl text-slate-900">{feature.label[lang]}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
               {t('جاهز لبدء رحلتك معنا؟', 'Ready to Start Your Journey?')}
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
               {t('فريقنا متاح للرد على استفساراتكم ومتابعة معاملاتكم بوضوح.', 'Our team is available to answer your questions and follow up clearly.')}
            </p>
            <div className="pt-4">
               <a 
                  href={`https://wa.me/${WA_PHONE}?text=${contactMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-coral hover:bg-brand-coralLight text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
               >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  {t('تواصل معنا', 'Contact Us')}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
