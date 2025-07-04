import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Salon images from public/images/salon folder
  const salonImages = [
    {
      src: '/images/salon/cekarna.jpg',
      title: 'Čekárna',
      alt: 'Čekárna salonu'
    },
    {
      src: '/images/salon/misto-pro-osetrovani.jpg',
      title: 'Místo pro ošetřování',
      alt: 'Místo pro ošetřování'
    },
    {
      src: '/images/salon/pedikura.jpg',
      title: 'Pedikúra',
      alt: 'Pedikúra'
    },
    {
      src: '/images/salon/recepce.jpg',
      title: 'Recepce',
      alt: 'Recepce salonu'
    },
    {
      src: '/images/salon/relaxacni-mistnost.jpg',
      title: 'Relaxační místnost',
      alt: 'Relaxační místnost'
    },
    {
      src: '/images/salon/salon-celkovy-pohled.jpg',
      title: 'Salon - celkový pohled',
      alt: 'Celkový pohled na salon'
    },
    {
      src: '/images/salon/specialni-zarizeni.jpg',
      title: 'Speciální zařízení',
      alt: 'Speciální zařízení'
    },
    {
      src: '/images/salon/vstup.jpg',
      title: 'Vstup',
      alt: 'Vstup do salonu'
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-5xl md:text-6xl font-serif text-center mb-12 tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Galerie našeho salonu
        <motion.span 
          className="block h-0.5 bg-[#d4af7a] w-24 mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {salonImages.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback for missing images
                e.currentTarget.src = '/images/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged salon image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
