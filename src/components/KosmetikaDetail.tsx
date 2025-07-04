import { motion } from 'framer-motion';
import { kosmetikaServices } from '../data/kosmetika';

interface KosmetikaDetailProps {
  serviceId: string;
  onClose: () => void;
}

const KosmetikaDetail = ({ serviceId, onClose }: KosmetikaDetailProps) => {
  const id = serviceId.replace('kosmetika-', '');
  const service = kosmetikaServices.find(s => s.id === id);
  
  if (!service) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-8 max-w-4xl mx-auto relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#f9f0f2]/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f0f5f9]/10 blur-3xl -z-10"></div>
      
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mb-8">
        <h2 className="text-3xl font-serif mb-2 text-gray-800">{service.name}</h2>
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{service.duration}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{service.price}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-serif mb-4 text-gray-800">Popis procedury</h3>
          <p className="text-gray-600 font-light leading-relaxed">{service.fullDescription}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-serif mb-4 text-gray-800">Benefity</h3>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 font-light">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.button
          onClick={() => {
            onClose();
            setTimeout(() => {
              document.getElementById('booking-button')?.click();
            }, 300);
          }}
          className="btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Rezervovat proceduru
        </motion.button>
      </div>
    </motion.div>
  );
};

export default KosmetikaDetail;
