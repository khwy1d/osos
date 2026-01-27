
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { WA_PHONE } from '../constants';
import { WhatsAppIcon } from './BrandIcons';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      // Show tooltip after a small delay once visible
      setTimeout(() => setShowTooltip(true), 2500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const msg = encodeURIComponent("السلام عليكم ، اريد الاستعلام عن خدماتكم.");

  return (
    <div className="fixed bottom-6 left-6 z-[150] flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-3xl shadow-2xl border border-slate-100 text-brand-blue font-black text-xs md:text-sm animate-in fade-in slide-in-from-bottom-6 duration-700 flex items-center gap-3 pointer-events-auto relative group max-w-[280px]">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-3 -right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-brand-coral transition-colors shadow-lg border border-slate-100"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="relative">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white flex-shrink-0">
               <span className="font-black text-lg">W</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">{t('دعم مباشر', 'Live Support')}</span>
            <p className="leading-tight">{t('مرحباً بك، كيف يمكننا مساعدتك اليوم؟', 'Hello, how can we help you today?')}</p>
          </div>
          
          <div className="absolute bottom-[-8px] left-10 w-4 h-4 bg-white rotate-45 border-b border-r border-slate-100"></div>
        </div>
      )}
      
      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${WA_PHONE}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group"
        aria-label="Contact Wasil on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
        <div className="absolute inset-[-4px] border-2 border-[#25D366]/20 rounded-full"></div>
        
        {/* Main Button Body */}
        <div className="relative bg-gradient-to-tr from-[#25D366] to-[#4ADE80] text-white p-4 md:p-6 rounded-full shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12 group-active:scale-90 flex items-center justify-center border-[6px] border-white">
          <WhatsAppIcon className="w-8 h-8 md:w-10 md:h-10 fill-current" />
          
          {/* Unread Badge effect */}
          <span className="absolute top-0 right-0 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-coral border-2 border-white"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
