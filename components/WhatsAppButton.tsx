
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { WA_PHONE } from '../constants';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // General inquiry message as per instructions
  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <div className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 text-slate-700 font-black text-sm animate-bounce opacity-0 sm:opacity-100">
        {t('كيف يمكننا مساعدتك؟', 'How can we help?')}
      </div>
      <a
        href={`https://wa.me/${WA_PHONE}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group"
        aria-label="Contact Wasil on WhatsApp"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:animate-none"></div>
        
        <div className="relative bg-[#25D366] text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
