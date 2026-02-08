import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

// --- 1. استيراد الصفحة الرئيسية بشكل "عادي" (لأقصى سرعة عند الفتح) ---
import HomePage from './pages/HomePage';

// --- 2. استيراد باقي الصفحات بشكل "كسول" (لتوفير حجم البيانات وتسريع الموقع) ---
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const MedicalPage = React.lazy(() => import('./pages/MedicalPage'));
const SecurityPage = React.lazy(() => import('./pages/SecurityPage'));
const TransportPage = React.lazy(() => import('./pages/TransportPage'));
const FlightsPage = React.lazy(() => import('./pages/FlightsPage'));
const UmrahPage = React.lazy(() => import('./pages/UmrahPage'));
const RealEstatePage = React.lazy(() => import('./pages/RealEstatePage'));
const CarRentalPage = React.lazy(() => import('./pages/CarRentalPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SaudiVisitPage = React.lazy(() => import('./pages/SaudiVisitPage'));
const TourismPage = React.lazy(() => import('./pages/TourismPage'));

// --- 3. تصميم شاشة الانتظار (تظهر فقط عند التنقل بين الصفحات الداخلية) ---
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    {/* دائرة تحميل باللون الأحمر الخاص بهويتك */}
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-red"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        
        {/* تم تحديث لون التحديد (Selection) ليصبح أحمر بدلاً من الأخضر القديم */}
        <div className="min-h-screen flex flex-col selection:bg-brand-red selection:text-white bg-white">
          <Navbar />
          
          <div className="mt-[80px] flex-1 flex flex-col">
            <Breadcrumbs />
            <main className="flex-1">
              
              {/* Suspense: العنصر المسؤول عن عرض دائرة التحميل أثناء جلب الصفحات */}
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* الصفحة الرئيسية تظهر فوراً */}
                  <Route path="/" element={<HomePage />} />
                  
                  {/* الصفحات الداخلية يتم تحميلها عند الطلب */}
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/medical-tourism" element={<MedicalPage />} />
                  <Route path="/security-clearance-egypt" element={<SecurityPage />} />
                  <Route path="/saudi-visit" element={<SaudiVisitPage />} />
                  <Route path="/tourism" element={<TourismPage />} />
                  <Route path="/transport" element={<TransportPage />} />
                  <Route path="/flights" element={<FlightsPage />} />
                  <Route path="/umrah" element={<UmrahPage />} />
                  <Route path="/real-estate" element={<RealEstatePage />} />
                  <Route path="/car-rental" element={<CarRentalPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* صفحة الخطأ تعود للرئيسية */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
          
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
