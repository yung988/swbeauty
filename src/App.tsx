import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
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
          
          {/* Služby sekce */}
          <div className="bg-white">
            <section id="services" className="py-16 md:py-24">
              <Services openModal={openModal} />
            </section>
          </div>
          
          {/* O nás sekce */}
          <section id="about" className="py-20 bg-gray-50">
            <AboutSection />
          </section>
          
          {/* Recenze sekce */}
          <section id="testimonials" className="py-20 bg-white">
            <Testimonials />
          </section>
          
          {/* Galerie sekce */}
          <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <motion.h2 
                className="text-7xl md:text-9xl lg:text-[10rem] font-serif tracking-tighter mb-16 text-center text-black"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                GALERIE
              </motion.h2>
              
              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Nahlédněte do našeho luxusního salonu a prohlédněte si prostředí, kde poskytujeme naše služby.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: '/images/salon/recepce.jpg', alt: 'Recepce SW Beauty', title: 'Recepce' },
                  { src: '/images/salon/cekarna.jpg', alt: 'Čekárna SW Beauty', title: 'Čekárna' },
                  { src: '/images/salon/cekarnaDetail.jpg', alt: 'Detail čekárny', title: 'Detail čekárny' },
                  { src: '/images/salon/kreslomistnostnaprocedury.jpg', alt: 'Místnost na procedury', title: 'Místnost na procedury' },
                  { src: '/images/salon/stul_detail.jpg', alt: 'Detail pracovního stolu', title: 'Detail pracovního stolu' },
                  { src: '/images/salon/logonazdi.jpg', alt: 'Logo na zdi', title: 'Logo na zdi' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg group relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4">
                      <h3 className="text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Ceník sekce */}
          <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <motion.h2 
                className="text-7xl md:text-9xl lg:text-[10rem] font-serif tracking-tighter mb-16 text-center text-black"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                CENÍK
              </motion.h2>
              
              <motion.p
                className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Kompletní ceník všech našich služeb a procedur
              </motion.p>
              
              <div className="space-y-16">
                {/* Kosmetika */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    Kosmetika
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Doba trvání</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Základní ošetření pro suchou pleť</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 150 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Ošetření s collagenem nebo pro rozšířené póry</td>
                          <td className="py-3 px-2 text-right text-gray-600">50 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 350 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Ošetření problematické pleti</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 490 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Luxusní ošetření</td>
                          <td className="py-3 px-2 text-right text-gray-600">75 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 700 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Mikrojehlování</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 800 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Dermapen obličej</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">800 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Dermapen krk</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Dermapen dekolt</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">750 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Dermapen rty</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">700 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Laminace řas</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 000 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Laminace obočí</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">600 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Laminace řas + obočí</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 000 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kosmetické ošetření pro muže</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 250 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Mikrojehlování bez kosmetického ošetření</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 500 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* HIFU Facelift */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    HIFU Facelift
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Neinvazivní facelift pomocí fokusovaného ultrazvuku</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Doba trvání</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift celý obličej</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">5 500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift celý obličej + krk</td>
                          <td className="py-3 px-2 text-right text-gray-600">90 min</td>
                          <td className="py-3 px-2 text-right font-medium">6 500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift spodní část obličeje</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">3 900 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift oční okolí</td>
                          <td className="py-3 px-2 text-right text-gray-600">30 min</td>
                          <td className="py-3 px-2 text-right font-medium">2 900 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift horní část obličeje</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">4 500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">HIFU facelift krk</td>
                          <td className="py-3 px-2 text-right text-gray-600">30 min</td>
                          <td className="py-3 px-2 text-right font-medium">2 000 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* Endos-roller */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    Endos-roller
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Pokročilá technologie kompresní mikrovibrace</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Doba trvání</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller 1 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">30 min</td>
                          <td className="py-3 px-2 text-right font-medium">850 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller 2 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 050 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller 3 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 050 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller 4 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">75 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 050 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller - celý zadek a nohy</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller - celé tělo</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 900 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Endos-roller - paže</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">600 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* Kavitace */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    Kavitace
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Bezbolestné ošetření pomocí nízkofrekvenčního ultrazvuku</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Doba trvání</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kavitace 1 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">30 min</td>
                          <td className="py-3 px-2 text-right font-medium">900 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kavitace 2 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 100 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kavitace 3 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 100 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kavitace 4 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">75 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 100 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Kavitace - celé tělo</td>
                          <td className="py-3 px-2 text-right text-gray-600">-</td>
                          <td className="py-3 px-2 text-right font-medium">1 700 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* Budování svalů */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    Budování svalů
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <p className="text-gray-600 mb-6 italic">Elektrická stimulace svalů - 30 000 stahů za 30 minut</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Doba trvání</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Budování svalů 1 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">30 min</td>
                          <td className="py-3 px-2 text-right font-medium">900 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Budování svalů 2 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">45 min</td>
                          <td className="py-3 px-2 text-right font-medium">1 300 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Budování svalů 3 partie</td>
                          <td className="py-3 px-2 text-right text-gray-600">60 min</td>
                          <td className="py-3 px-2 text-right font-medium">2 100 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
                
                {/* Balíčky */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 relative">
                    Balíčky
                    <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-4 px-2 font-medium">Služba</th>
                          <th className="text-right py-4 px-2 font-medium">Cena</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Balíček: 3x procedura endos 2 partie + 1x HIFU budování svalů zdarma</td>
                          <td className="py-3 px-2 text-right font-medium">4 500 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Balíček 2</td>
                          <td className="py-3 px-2 text-right font-medium">2 700 Kč</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-2">Balíček 3</td>
                          <td className="py-3 px-2 text-right font-medium">7 200 Kč</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="mt-16 bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-xl font-serif mb-4">Platební podmínky</h3>
                <p className="text-gray-600 mb-2">Přijímáme platby v hotovosti, platební kartou nebo převodem na účet.</p>
                <p className="text-gray-600 mb-2">Pro rezervaci termínu je vyžadována záloha ve výši 20% z ceny služby.</p>
                <p className="text-gray-600">Storno podmínky: Zrušení rezervace méně než 24 hodin před termínem může být zpoplatněno.</p>
              </motion.div>
            </div>
          </section>
          
          <section id="contact" className="py-20 bg-gray-50">
            <Contact />
          </section>
        </main>
        
        <Footer />
        
        {/* Modals */}
        <AnimatePresence>
          {(activeModal === 'budovani-svalu' || activeModal === 'hifu' || activeModal === 'endosphere' || activeModal === 'kavitace' || activeModal === 'ostatni-sluzby') && (
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
