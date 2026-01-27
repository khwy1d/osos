
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
    <div className="fixed bottom-5 left-5 z-[150]">
      <a
        href={`https://wa.me/${WA_PHONE}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block"
        aria-label="Contact Wasil on WhatsApp"
      >
        {/* Subtle Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        
        {/* Shrunken Button Body */}
        <div className="relative bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-90 border-4 border-white">
          <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
