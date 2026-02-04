
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MedicalPage from './pages/MedicalPage';
import SecurityPage from './pages/SecurityPage';
import TransportPage from './pages/TransportPage';
import FlightsPage from './pages/FlightsPage';
import UmrahPage from './pages/UmrahPage';
import RealEstatePage from './pages/RealEstatePage';
import CarRentalPage from './pages/CarRentalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SaudiVisitPage from './pages/SaudiVisitPage';
import TourismPage from './pages/TourismPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-brand-coral selection:text-white">
          <Navbar />
          <div className="mt-16 md:mt-32 flex-1 flex flex-col">
            <Breadcrumbs />
            <main className="flex-1">
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
