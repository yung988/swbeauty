import { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceData } from '../pages/ServicesPage';

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual submission logic to a backend
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="subtitle mb-2">REZERVACE</p>
          <h1 className="section-title">Objednávka procedury</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Vyberte si službu a termín, který vám vyhovuje, a my se vám ozveme pro potvrzení rezervace.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f8f3f0] p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-light text-gray-800 mb-6">Děkujeme za vaši objednávku</h2>
            <p className="text-gray-700 mb-8 font-light">
              Vaše objednávka byla úspěšně odeslána. Brzy vás budeme kontaktovat pro potvrzení termínu.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setSelectedService('');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  date: '',
                  time: '',
                  message: ''
                });
              }}
              className="btn-primary"
            >
              VYTVOŘIT NOVOU OBJEDNÁVKU
            </button>
          </motion.div>
        ) : (
          <>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-light mb-8 text-center">Vyberte službu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {serviceData.map(service => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -5 }}
                      className="bg-white shadow-sm overflow-hidden cursor-pointer"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="h-48 overflow-hidden bg-[#f8f3f0]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-light mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6 font-light">{service.description}</p>
                        <button className="btn-primary w-full">
                          VYBRAT
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <button 
                  onClick={handleBack}
                  className="flex items-center text-[#d4af7a] hover:text-[#c09a65] mb-8 font-light tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  ZPĚT NA VÝBĚR SLUŽBY
                </button>

                <h2 className="text-2xl font-light mb-8">
                  Vyplňte své údaje
                </h2>

                <div className="bg-[#f8f3f0] p-8 mb-8">
                  <h3 className="text-lg font-light mb-4">
                    Vybraná služba: {serviceData.find(s => s.id === selectedService)?.title}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {serviceData.find(s => s.id === selectedService)?.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Vaše jméno a příjmení"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Váš email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Váš telefon"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="form-label">
                        Preferovaný datum *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="form-label">
                      Preferovaný čas *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    >
                      <option value="">Vyberte čas</option>
                      <option value="9:00">9:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">
                      Poznámka (nepovinné)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input"
                      placeholder="Vaše poznámka k objednávce"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn-primary px-12 py-3">
                      ODESLAT OBJEDNÁVKU
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
