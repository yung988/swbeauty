import React from 'react';
import { motion } from 'framer-motion';
import { kosmetikaServicesData } from '../data/kosmetikaData';

interface KosmetikaSectionProps {
  openModal: (modalId: string) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const KosmetikaSection: React.FC<KosmetikaSectionProps> = ({ openModal }) => {
  return (
    <section id="kosmetika" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-title mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Kosmetika
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {kosmetikaServicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer group"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => openModal(`kosmetika-${service.id}`)}
            >
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3">{service.name}</h3>
              <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                {service.duration && (
                  <span className="font-medium">{service.duration}</span>
                )}
                <span className="font-bold text-lg text-[#d4af7a]">{service.price}</span>
              </div>
              {service.description && (
                <p className="text-gray-700 text-sm leading-relaxed mt-2 flex-grow">
                  {service.description.length > 100 ? `${service.description.substring(0, 100)}...` : service.description}
                </p>
              )}
              <motion.button
                className="mt-4 self-start px-5 py-2 bg-gray-100 text-gray-700 border border-gray-300 
                           text-xs uppercase tracking-wider font-medium rounded-md
                           transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400"
              >
                Více informací
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KosmetikaSection;
