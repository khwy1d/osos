import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import { Loader2 } from 'lucide-react'; // تأكد أن لديك هذه الأيقونة أو استخدم أي شكل آخر

// --- Lazy Loading Imports (التحميل الكسول) ---
// يتم استيراد الصفحات فقط عند الحاجة إليها لتسريع فتح الموقع
const HomePage = React.lazy(() => import('./pages/HomePage'));
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

// مكون التحميل الذي يظهر أثناء الانتقال بين الصفحات
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-4">
      {/* دائرة تحميل بألوان الهوية */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      <span className="text-brand-dark font-medium animate-pulse">جاري التحميل...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        {/* تم تحديث لون التحديد (Selection) ليطابق هويتك الحمراء */}
        <div className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-white bg-white">
          <Navbar />
          <div className="mt-[80px] flex-1 flex flex-col">
            <Breadcrumbs />
            <main className="flex-1">
              {/* Suspense يغلف كل المسارات لعرض التحميل */}
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
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
                  {/* Fallback to Home */}
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
