import { motion } from 'framer-motion';

const Hero = ({ openModal }: { openModal: (modalId: string) => void }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#f8f8f8] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#f9f0f2]/30 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Buďte svou vlastní <br />
              <span className="italic">inspirací</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl font-light text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Dopřejte si luxusní péči v našem salonu, kde kombinujeme nejmodernější technologie s osobním přístupem pro dokonalé výsledky.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                onClick={() => openModal('booking')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezervovat termín
              </motion.button>
              
              <motion.a
                href="#services"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prozkoumat služby
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/images/hero-image.jpg" 
                alt="Luxusní péče" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-sm font-light text-gray-600 mb-2">Naše klientka</p>
              <p className="text-lg font-serif mb-2">"Nejlepší péče, jakou jsem kdy zažila. Výsledky jsou naprosto úžasné!"</p>
              <p className="text-sm font-medium">Karolína H.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
