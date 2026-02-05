
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { WA_PHONE, DISPLAY_PHONE } from '../constants';
import { useLanguage } from './LanguageContext';
import { WhatsAppIcon } from './BrandIcons';

const MobileContactBar: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-3 z-[140] shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3">
        <a 
          href={`tel:${WA_PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          {t('اتصال', 'Call')}
        </a>
        <a 
          href={`https://wa.me/${WA_PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-green-100"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
          {t('واتساب', 'WhatsApp')}
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;
