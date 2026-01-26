
import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent("Hello, I have an inquiry from your contact page.");

  return (
    <div className="pt-20">
      <section className="bg-brand-teal py-20 text-white text-center">
         <h1 className="text-4xl md:text-5xl font-black mb-4">{t('نحن دائماً بالقرب منك', 'We Are Always Near You')}</h1>
         <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto px-4">
           {t('تواصل معنا للاستفسار عن أي خدمة، فريقنا جاهز للرد على مدار الساعة.', 'Contact us for any inquiry, our team is ready to respond 24/7.')}
         </p>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div className="space-y-8">
                    <h2 className="text-3xl font-black text-slate-900">{t('معلومات التواصل', 'Contact Information')}</h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                       <div className="flex gap-4">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal flex-shrink-0">
                             <Phone className="w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-black text-lg text-slate-900">{t('اتصل بنا', 'Call Us')}</p>
                             <p className="text-slate-500 font-bold" dir="ltr">{DISPLAY_PHONE}</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#25D366] flex-shrink-0">
                             <a href={`https://wa.me/${WA_PHONE}?text=${msg}`}>
                                <MessageCircle className="w-6 h-6" />
                             </a>
                          </div>
                          <div>
                             <p className="font-black text-lg text-slate-900">{t('واتساب', 'WhatsApp')}</p>
                             <p className="text-slate-500 font-bold" dir="ltr">{DISPLAY_PHONE}</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal flex-shrink-0">
                             <Mail className="w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-black text-lg text-slate-900">{t('البريد الإلكتروني', 'Email')}</p>
                             <p className="text-slate-500 font-bold">info@wasil-travel.com</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal flex-shrink-0">
                             <Clock className="w-6 h-6" />
                          </div>
                          <div>
                             <p className="font-black text-lg text-slate-900">{t('ساعات العمل', 'Working Hours')}</p>
                             <p className="text-slate-500 font-bold">{t('24 ساعة / 7 أيام', '24 Hours / 7 Days')}</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-slate-900">{t('مكتبنا الرئيسي', 'Our Head Office')}</h2>
                    <div className="flex gap-4 items-start">
                       <MapPin className="w-6 h-6 text-brand-coral mt-1" />
                       <p className="text-xl font-bold text-slate-600 leading-relaxed">
                          {t('صنعاء، اليمن - الدائري الغربي - عمارة واصل، الطابق الأول', 'Sana\'a, Yemen - Western Ring Road - Wasil Building, 1st Floor')}
                       </p>
                    </div>
                    <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
                       <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.668032742967!2d44.185244!3d15.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db459b66236b%3A0xc47e33a696515b!2zU2FuY'Y!5e0!3m2!1sen!2sye!4v1620000000000!5m2!1sen!2sye" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={true} 
                          loading="lazy"
                       ></iframe>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                 <h2 className="text-3xl font-black text-brand-teal">{t('أرسل لنا استفسارك', 'Send Us Your Inquiry')}</h2>
                 <form className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-sm font-black text-slate-500 uppercase">{t('الاسم بالكامل', 'Full Name')}</label>
                       <input type="text" className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-black text-slate-500 uppercase">{t('رقم الهاتف', 'Phone Number')}</label>
                       <input type="tel" className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-black text-slate-500 uppercase">{t('الموضوع', 'Subject')}</label>
                       <select className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none font-bold">
                          <option>{t('سياحة علاجية', 'Medical Tourism')}</option>
                          <option>{t('موافقة أمنية', 'Security Clearance')}</option>
                          <option>{t('حجز طيران', 'Flight Booking')}</option>
                          <option>{t('نقل بري', 'Land Transport')}</option>
                          <option>{t('أخرى', 'Other')}</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-black text-slate-500 uppercase">{t('رسالتك', 'Your Message')}</label>
                       <textarea rows={4} className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:ring-2 focus:ring-brand-teal outline-none font-bold"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-coral text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-brand-coral/20 hover:scale-[1.02] transition-transform">
                       {t('إرسال الرسالة', 'Send Message')}
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
