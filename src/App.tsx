import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import KosmetikaSection from './components/KosmetikaSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import KosmetikaServiceDetail from './components/KosmetikaServiceDetail';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Mírně prodloužíme pro lepší vjem loga
    
    return () => clearTimeout(timer);
  }, []);
  
  const closeModal = () => {
    setActiveModal(null);
  };
  
  const openModal = (modalId: string) => {
    setActiveModal(modalId);
  };

  // Rozpoznání, zda je to detail kosmetické služby
  const isKosmetikaDetail = activeModal ? activeModal.startsWith('kosmetika-') : false;
  const kosmetikaServiceId = isKosmetikaDetail && activeModal ? activeModal.replace('kosmetika-', '') : null;

  return (
    <>
      {/* Initial loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 }}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <motion.img 
                src="/images/logo.svg"
                alt="SWBEAUTY Logo"
                className="w-64 h-auto md:w-80"
                // Ponecháme jednoduchou animaci opacity a scale pro logo
                // Můžeme experimentovat s dalšími efekty, pokud budete chtít
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ 
                  duration: 1, // Doba trvání animace loga samotného
                  delay: 0.2 // Malé zpoždění po zobrazení pozadí
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar openModal={openModal} />
        
        <main className="flex-grow">
          <section id="home" className="min-h-screen">
            <Hero openModal={openModal} />
          </section>
          
          {/* Spojená sekce Služby a Kosmetika */}
          <div className="bg-white">
            <section id="services" className="py-16 md:py-24">
              <Services openModal={openModal} />
            </section>
            
            {/* Kosmetika sekce s menším horním paddingem pro napojení */}
            <section id="kosmetika" className="pb-16 md:pb-24 pt-8 md:pt-12">
              <KosmetikaSection openModal={openModal} />
            </section>
          </div>
          
          <section id="testimonials" className="py-20 bg-gray-50">
            <Testimonials />
          </section>
          
          <section id="contact" className="py-20 bg-white">
            <Contact />
          </section>
        </main>
        
        <Footer />
        
        {/* Modals */}
        <AnimatePresence>
          {isKosmetikaDetail && kosmetikaServiceId && (
            <Modal onClose={closeModal} title="Detail kosmetické služby">
              <KosmetikaServiceDetail 
                serviceId={kosmetikaServiceId} 
                onClose={closeModal} 
                openModal={openModal} 
              />
            </Modal>
          )}
          
          {(activeModal === 'endosphere' || activeModal === 'hifu' || activeModal === 'hair-extensions') && (
            <Modal onClose={closeModal} title={activeModal.toUpperCase().replace('-', ' ')}>
              <ServiceDetail serviceId={activeModal} onClose={closeModal} openModal={openModal} />
            </Modal>
          )}
          
          {activeModal === 'booking' && (
            <Modal onClose={closeModal} title="REZERVACE">
              <BookingForm onClose={closeModal} />
            </Modal>
          )}
          
          {activeModal === 'about' && (
            <Modal onClose={closeModal} title="O NÁS">
              <AboutSection />
            </Modal>
          )}
          
          {activeModal === 'contact' && (
            <Modal onClose={closeModal} title="KONTAKT">
              <Contact />
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, onClose, title }: ModalProps) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      ></motion.div>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full z-10 p-10 relative max-h-[90vh] overflow-y-auto"
      >
        <motion.button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors duration-300 z-20"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </motion.button>
        
        <motion.h2 
          className="text-6xl md:text-7xl font-serif tracking-tighter mb-10 text-center relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
          <motion.span 
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#d4af7a] w-24"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>
        
        {children}
      </motion.div>
    </motion.div>
  );
};

export default App;
