import { motion } from 'framer-motion';

const Gallery = () => {
  // You can update this array with the actual image names from your public folder
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    '/images/gallery7.jpg',
    '/images/gallery8.jpg',
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2 
        className="text-5xl md:text-6xl font-serif text-center mb-12 tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Galerie
        <motion.span 
          className="block h-0.5 bg-[#d4af7a] w-24 mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                // Fallback for missing images
                e.currentTarget.src = '/images/placeholder.jpg';
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
