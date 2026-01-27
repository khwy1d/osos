
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from './BrandIcons';

const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const msg = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدماتكم.");

  return (
    <div className="fixed bottom-4 left-4 z-[150]">
      <a
        href={`https://wa.me/${WA_PHONE}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block"
        aria-label="Contact Wasil on WhatsApp"
      >
        {/* Subtle Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-10 group-hover:opacity-30"></div>
        
        {/* Optimized Small Button Body */}
        <div className="relative bg-[#25D366] text-white p-3 md:p-3.5 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-105 active:scale-90 border-2 border-white">
          <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
