import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { kosmetikaServices } from '../data/kosmetika';
import { procedures } from '../data/procedures';

interface BookingFormProps {
  onClose: () => void;
}

type ServiceType = 'kosmetika' | 'procedury' | null;
type ServiceItem = typeof kosmetikaServices[0] | typeof procedures[0] | null;

const BookingForm = ({ onClose }: BookingFormProps) => {
  // Multi-step booking state
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    note: ''
  });

  // Available time slots
  const timeSlots = [
    '9:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle service type selection
  const handleServiceTypeSelect = (type: ServiceType) => {
    setServiceType(type);
    setSelectedService(null);
    setStep(2);
  };

  // Handle specific service selection
  const handleServiceSelect = (service: ServiceItem) => {
    setSelectedService(service);
    setStep(3);
  };

  // Go to previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Submit booking
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { serviceType, selectedService, ...formData });
    
    // Show confirmation
    setStep(5);
  };

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

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="w-full h-1 bg-gray-200 relative">
          <div 
            className="absolute top-0 left-0 h-full bg-gray-800 transition-all duration-300"
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Select service type */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-serif mb-6 text-center">Vyberte typ služby</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#f8f5f0] p-6 rounded-lg text-center cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => handleServiceTypeSelect('kosmetika')}
              >
                <h3 className="text-xl font-serif mb-2">Kosmetika</h3>
                <p className="text-gray-600 font-light">Profesionální péče o pleť a kosmetické ošetření</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#f8f5f0] p-6 rounded-lg text-center cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => handleServiceTypeSelect('procedury')}
              >
                <h3 className="text-xl font-serif mb-2">Procedury</h3>
                <p className="text-gray-600 font-light">Specializované procedury pro tělo a pokročilé ošetření</p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Select specific service */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={handleBack}
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zpět
              </button>
              <h2 className="text-3xl font-serif">Vyberte službu</h2>
              <div className="w-20"></div> {/* Spacer for alignment */}
            </div>
            
            <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-2">
              {serviceType === 'kosmetika' && kosmetikaServices.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-[#f8f5f0] p-4 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300"
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-serif mb-1">{service.name}</h3>
                      <p className="text-gray-600 text-sm font-light">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg">{service.price}</p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {serviceType === 'procedury' && procedures.map((procedure) => (
                <motion.div
                  key={procedure.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="bg-[#f8f5f0] p-4 rounded-lg cursor-pointer hover:shadow-md transition-all duration-300"
                  onClick={() => handleServiceSelect(procedure)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-serif mb-1">{procedure.name}</h3>
                      <p className="text-gray-600 text-sm font-light">{procedure.shortDescription}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg">{procedure.packages[0]?.price || ''}</p>
                      <p className="text-sm text-gray-500">{procedure.duration}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Select date and time */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={handleBack}
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zpět
              </button>
              <h2 className="text-3xl font-serif">Vyberte termín</h2>
              <div className="w-20"></div> {/* Spacer for alignment */}
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-serif mb-2">Vybraná služba</h3>
              <div className="bg-[#f8f5f0] p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-serif mb-1">
                      {'name' in selectedService! ? selectedService!.name : ''}
                    </h4>
                    <p className="text-gray-600 text-sm font-light">
                      {'description' in selectedService! ? selectedService!.description : 
                       'shortDescription' in selectedService! ? selectedService!.shortDescription : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg">
                      {'price' in selectedService! ? selectedService!.price : 
                       'packages' in selectedService! ? selectedService!.packages[0]?.price : ''}
                    </p>
                    <p className="text-sm text-gray-500">
                      {'duration' in selectedService! ? selectedService!.duration : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-1">Datum</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-light text-gray-700 mb-1">Čas</label>
                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-200 rounded-md"
                  required
                >
                  <option value="">Vyberte čas</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                onClick={() => setStep(4)}
                disabled={!formData.date || !formData.time}
              >
                Pokračovat
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact information */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={handleBack}
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zpět
              </button>
              <h2 className="text-3xl font-serif">Kontaktní údaje</h2>
              <div className="w-20"></div> {/* Spacer for alignment */}
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Jméno a příjmení</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Telefon</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-light text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-light text-gray-700 mb-1">Poznámka (nepovinné)</label>
                  <textarea 
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-200 rounded-md h-24"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Odeslat rezervaci
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-serif mb-2">Rezervace odeslána</h2>
              <p className="text-gray-600 mb-6">
                Děkujeme za vaši rezervaci. Potvrzení bylo odesláno na váš email.
                Brzy vás budeme kontaktovat.
              </p>
              
              <div className="bg-[#f8f5f0] p-4 rounded-lg text-left mb-6">
                <h3 className="text-lg font-serif mb-2">Shrnutí rezervace</h3>
                <p><strong>Služba:</strong> {'name' in selectedService! ? selectedService!.name : ''}</p>
                <p><strong>Datum:</strong> {formData.date}</p>
                <p><strong>Čas:</strong> {formData.time}</p>
                <p><strong>Jméno:</strong> {formData.name}</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
                onClick={onClose}
              >
                Zavřít
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BookingForm;
