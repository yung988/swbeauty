import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import KosmetikaSection from '../components/KosmetikaSection';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ServiceDetail from '../components/ServiceDetail';
import KosmetikaDetail from '../components/KosmetikaDetail';
import BookingForm from '../components/BookingForm';
import AboutSection from '../components/AboutSection';
import { AnimatePresence, motion } from 'framer-motion';

const HomePage = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white text-gray-800 font-light">
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <AboutSection />
      <Services openModal={openModal} />
      <KosmetikaSection openModal={openModal} />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Modal overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              {activeModal === 'booking' && (
                <BookingForm onClose={closeModal} />
              )}
              
              {activeModal.startsWith('kosmetika-') && (
                <KosmetikaDetail serviceId={activeModal} onClose={closeModal} />
              )}
              
              {(activeModal === 'hifu' || activeModal === 'endosphere' || activeModal === 'hair-extensions') && (
                <ServiceDetail serviceId={activeModal} onClose={closeModal} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hidden button for booking from other components */}
      <button 
        id="booking-button" 
        className="hidden" 
        onClick={() => openModal('booking')}
      ></button>
    </div>
  );
};

export default HomePage;
