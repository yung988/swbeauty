import React from 'react';
import { motion } from 'framer-motion';
import { kosmetikaServicesData, KosmetikaService } from '../data/kosmetikaData';

interface KosmetikaServiceDetailProps {
  serviceId: string; // Např. 'klasicke-osetreni'
  onClose: () => void;
  openModal: (modalId: string) => void;
}

const KosmetikaServiceDetail: React.FC<KosmetikaServiceDetailProps> = ({ serviceId, onClose, openModal }) => {
  const service = kosmetikaServicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="p-6 md:p-10 text-center">
        <p className="text-gray-700">Služba nebyla nalezena.</p>
        <button 
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors text-sm font-medium"
        >
          Zavřít
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    onClose(); // Zavře aktuální modální okno
    openModal('booking'); // Otevře rezervační formulář
  };

  return (
    <div className="p-4 md:p-8 max-h-[80vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-4 text-center">{service.name}</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200/80">
            <div className="flex justify-between items-center text-gray-700 mb-1">
                {service.duration && (
                    <p><strong className="font-medium">Doba trvání:</strong> {service.duration}</p>
                )}
                <p className="text-xl font-semibold text-[#d4af7a]">{service.price}</p>
            </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{service.description}</p>

        {/* Zde můžete v budoucnu přidat další detaily ze service.details, pokud budou */} 

        <div className="mt-8 text-center">
          <motion.button
            onClick={handleBookNow}
            className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-base font-medium tracking-wide"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Rezervovat tuto službu
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default KosmetikaServiceDetail; 