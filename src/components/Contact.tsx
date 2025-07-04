import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h3 className="text-2xl font-serif mb-4 text-center md:text-left">KONTAKTNÍ INFORMACE</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 font-light mb-2">
                <strong className="font-medium">Adresa:</strong>
              </p>
              <p className="text-gray-700 font-light mb-4">
                SW Beauty s.r.o.<br />
                Velkomoravská 40<br />
                695 04 Hodonín
              </p>
              
              <p className="text-gray-700 font-light mb-2">
                <strong className="font-medium">Telefon:</strong>
              </p>
              <p className="text-gray-700 font-light mb-4">
                +420 773 577 899
              </p>
              
              <p className="text-gray-700 font-light mb-2">
                <strong className="font-medium">Email:</strong>
              </p>
              <p className="text-gray-700 font-light mb-4">
                info@swbeauty.cz
              </p>
              
              <p className="text-gray-700 font-light mb-2">
                <strong className="font-medium">Otevírací doba:</strong>
              </p>
              <p className="text-gray-700 font-light mb-1">Pondělí - Pátek: 7:00 - 20:00</p>
              <p className="text-gray-700 font-light mb-1">Sobota: 9:00 - 16:00</p>
              <p className="text-gray-700 font-light">Neděle: dle dohody</p>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-light">Jméno a příjmení</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af7a]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-light">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af7a]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-light">Zpráva</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af7a] h-32"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 font-light tracking-wider hover:bg-gray-800 transition-colors"
                >
                  ODESLAT
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8">
          <h3 className="text-2xl font-serif mb-4 text-center md:text-left">JAK SE K NÁM DOSTANETE</h3>
          <div className="aspect-w-16 aspect-h-9 h-72 md:h-96 bg-gray-200 rounded-lg">
            {/* Here you would typically embed a Google Map */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Mapa bude zobrazena zde</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
