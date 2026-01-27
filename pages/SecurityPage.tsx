
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { FileCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from '../components/BrandIcons';

const SecurityPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("السلام عليكم، أريد الاستعلام عن خدمة الموافقات الأمنية لمصر.");

  return (
    <div className="pt-10">
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h1 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
              {t('استخراج الموافقات الأمنية لمصر بوضوح وسرعة', 'Security Clearances for Egypt with Clarity & Speed')}
           </h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {t('نحن نتولى كافة الإجراءات الرسمية لاستخراج موافقتك الأمنية بطريقة رسمية ومضمونة، مع متابعة دقيقة لكل حالة.', 'We handle all official procedures to issue your security clearance officially, with careful follow-up.')}
           </p>
           <div className="pt-4">
              <a href={`https://wa.me/${WA_PHONE}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 w-fit mx-auto">
                 <WhatsAppIcon className="w-6 h-6 fill-current" />
                 {t('اطلب موافقتك الرسمية', 'Request Official Clearance')}
              </a>
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-3xl font-black text-slate-900">{t('لماذا تحتاج للموافقة الأمنية؟', 'Why Do You Need Security Clearance?')}</h2>
                  <p className="text-slate-600 font-medium leading-relaxed text-lg">
                    {t('تعتبر الموافقة الأمنية شرطاً أساسياً لدخول المواطنين اليمنيين إلى جمهورية مصر العربية. نحن نوفر لك هذه الخدمة بعيداً عن التعقيدات وبطرق رسمية وموثقة.', 'Security clearance is a prerequisite for Yemeni citizens entering Egypt. We provide this service without complications via official and documented channels.')}
                  </p>
               </div>

               <div className="space-y-6">
                  {[
                    { title: t('دقة المعلومات', 'Info Accuracy'), desc: t('نراجع بياناتك بدقة لتجنب أي تأخير في الصدور.', 'We review your data carefully to avoid any issuance delays.') },
                    { title: t('متابعة مستمرة', 'Constant Follow-up'), desc: t('نطلعك على حالة طلبك حتى صدور الموافقة.', 'We keep you updated on your request status until issuance.') },
                    { title: t('تعامل رسمي', 'Official Handling'), desc: t('كافة الإجراءات تتم عبر القنوات الرسمية المعتمدة.', 'All procedures are done via approved official channels.') },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal flex-shrink-0">
                          <CheckCircle className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-black text-xl text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-slate-600 font-medium">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
               <h3 className="text-2xl font-black text-brand-teal flex items-center gap-2">
                  <FileCheck className="w-6 h-6" />
                  {t('المتطلبات الأساسية', 'Required Documents')}
               </h3>
               <ul className="space-y-4">
                  {[
                    t('صورة واضحة من جواز السفر الساري.', 'Clear copy of valid passport.'),
                    t('توضيح الغرض من السفر.', 'Purpose of travel clarification.'),
                    t('تاريخ السفر التقريبي.', 'Approximate travel date.'),
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-coral"></div>
                       {text}
                    </li>
                  ))}
               </ul>
               <div className="bg-brand-coral/10 p-6 rounded-2xl border border-brand-coral/20 flex gap-4">
                  <AlertCircle className="w-10 h-10 text-brand-coral flex-shrink-0" />
                  <p className="text-brand-coral font-bold text-sm leading-relaxed">
                    {t('ملاحظة: تختلف مدة الصدور حسب الإجراءات الرسمية المتبعة.', 'Note: Issuance duration varies based on official procedures.')}
                  </p>
               </div>
               
               <a 
                 href={`https://wa.me/${WA_PHONE}?text=${msg}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-[#25D366] text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2 hover:bg-[#128C7E] shadow-lg"
               >
                 <WhatsAppIcon className="w-5 h-5 fill-current" />
                 {t('ابدأ الإجراءات الآن', 'Start Procedures Now')}
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
