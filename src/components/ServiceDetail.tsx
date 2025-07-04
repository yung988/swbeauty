import { useState } from 'react';
import { motion } from 'framer-motion';
import { procedures } from '../data/procedures';

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
  openModal: (modalId: string) => void;
}

const ServiceDetail = ({ serviceId, onClose, openModal }: ServiceDetailProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'faq' | 'packages' | 'comparison'>('overview');
  
  // Find the procedure data
  const procedure = procedures.find(p => p.id === serviceId);
  
  if (!procedure) {
    return (
      <div className="p-6 md:p-10 text-center">
        <p>Procedura nebyla nalezena.</p>
        <button 
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          Zavřít
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    onClose();
    openModal('booking');
  };

  return (
    <div className="p-4 md:p-8 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-center mb-12">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
          <img 
            src={procedure.image} 
            alt={procedure.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-wide">{procedure.name}</h2>
      </motion.div>
      
      {/* Tab navigation */}
      <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
        <button 
          className={`px-4 py-2 mx-2 font-light text-sm md:text-base transition-all ${activeTab === 'overview' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => setActiveTab('overview')}
        >
          Přehled
        </button>
        <button 
          className={`px-4 py-2 mx-2 font-light text-sm md:text-base transition-all ${activeTab === 'benefits' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => setActiveTab('benefits')}
        >
          Výhody
        </button>
        <button 
          className={`px-4 py-2 mx-2 font-light text-sm md:text-base transition-all ${activeTab === 'faq' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => setActiveTab('faq')}
        >
          Časté dotazy
        </button>
        <button 
          className={`px-4 py-2 mx-2 font-light text-sm md:text-base transition-all ${activeTab === 'packages' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => setActiveTab('packages')}
        >
          Ceník
        </button>
        {procedure.comparison && (
          <button 
            className={`px-4 py-2 mx-2 font-light text-sm md:text-base transition-all ${activeTab === 'comparison' ? 'border-b-2 border-black' : 'text-gray-500 hover:text-black'}`}
            onClick={() => setActiveTab('comparison')}
          >
            Srovnání
          </button>
        )}
      </div>
      
      {/* Tab content */}
      <div className="mb-12">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 font-light text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              {procedure.fullDescription}
            </p>
            
            <div className="bg-gray-50 p-6 border border-gray-200/80 mb-8 rounded-md">
              <h3 className="text-xl font-serif mb-3 tracking-wide text-center text-gray-700">Doba trvání</h3>
              <p className="text-gray-600 font-light text-center">{procedure.duration}</p>
            </div>
            
            <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-md">
              <h3 className="text-xl font-serif mb-3 tracking-wide text-center text-gray-700">Výsledky</h3>
              <p className="text-gray-600 font-light text-center">{procedure.results}</p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-serif mb-6 tracking-wide text-center">Výhody procedury</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procedure.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="decorative-dot mt-1.5 mr-3"></span>
                    <div>
                      <h4 className="font-medium">{benefit.title}</h4>
                      {benefit.description && (
                        <p className="text-gray-700 font-light text-sm">{benefit.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-serif mb-6 tracking-wide text-center">Kontraindikace</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procedure.contraindications.map((contraindication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-1.5 mr-3"></span>
                    <div>
                      <h4 className="font-medium">{contraindication.title}</h4>
                      {contraindication.description && (
                        <p className="text-gray-700 font-light text-sm">{contraindication.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {procedure.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 p-6 border border-gray-200/80 rounded-md"
              >
                <h3 className="text-lg font-serif mb-2 tracking-wide text-gray-700">{faq.question}</h3>
                <p className="text-gray-600 font-light">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-serif mb-6 tracking-wide text-center text-gray-700">Ceník</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {procedure.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 border border-gray-200/80 rounded-md"
                >
                  <h4 className="text-lg font-serif mb-2 tracking-wide">{pkg.name}</h4>
                  <p className="text-xl font-light mb-2">{pkg.price}</p>
                  <p className="text-gray-700 font-light text-sm mb-3">{pkg.description}</p>
                  <p className="text-gray-600 text-xs">Počet sezení: {pkg.sessions}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {activeTab === 'comparison' && procedure.comparison && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-serif mb-6 tracking-wide text-center">{procedure.comparison.title}</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left font-serif font-normal border border-gray-200 text-gray-700">Vlastnost</th>
                    {procedure.comparison.competitors.map((competitor, index) => (
                      <th key={index} className="p-3 text-left font-serif font-normal border border-gray-200 text-gray-700">
                        {competitor.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {procedure.comparison && procedure.comparison.competitors[0].features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3 border border-gray-200 font-medium">{feature.title}</td>
                      {procedure.comparison && procedure.comparison.competitors.map((competitor, competitorIndex) => (
                        <td key={competitorIndex} className="p-3 border border-gray-200 font-light">
                          {competitor.features[featureIndex].value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="mt-10 text-center">
        <motion.button
          onClick={handleBookNow}
          className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors text-base font-medium tracking-wide"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Rezervovat tuto proceduru
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceDetail;
