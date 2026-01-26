
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  
  if (pathname === '/') return null;

  const pathnames = pathname.split('/').filter((x) => x);

  const getLabel = (slug: string) => {
    switch(slug) {
      case 'services': return t('خدماتنا', 'Services');
      case 'medical-tourism': return t('تنسيق طبي', 'Medical Coordination');
      case 'security-clearance-egypt': return t('الموافقات الأمنية', 'Security Clearance');
      case 'saudi-visit': return t('زيارة السعودية', 'Saudi Visit');
      case 'tourism': return t('سياحة دولية', 'Tourism');
      case 'transport': return t('النقل والمواصلات', 'Transport');
      case 'flights': return t('تذاكر طيران', 'Flight Tickets');
      case 'umrah': return t('تأشيرات عمرة', 'Umrah Visas');
      case 'real-estate': return t('خدمات عقارية', 'Real Estate');
      case 'domestic-tourism': return t('سياحة داخلية', 'Domestic Tourism');
      case 'car-rental': return t('تأجير سيارات', 'Car Rental');
      case 'about': return t('عن واصل', 'About Us');
      case 'contact': return t('اتصل بنا', 'Contact');
      default: return slug;
    }
  };

  return (
    <nav className="bg-slate-50 border-b border-slate-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm font-bold text-slate-500">
        <Link to="/" className="hover:text-brand-teal flex items-center gap-1 transition-colors">
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">{t('الرئيسية', 'Home')}</span>
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              {isLast ? (
                <span className="text-brand-teal">{getLabel(name)}</span>
              ) : (
                <Link to={routeTo} className="hover:text-brand-teal transition-colors">
                  {getLabel(name)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
