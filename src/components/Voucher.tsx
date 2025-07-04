import { motion } from 'framer-motion';
import { Gift, Heart, Star, Clock } from 'lucide-react';

interface VoucherProps {
  openModal: (modalId: string) => void;
}

const Voucher = ({ openModal }: VoucherProps) => {
  const vouchers = [
    {
      id: 1,
      title: "Dárkový poukaz na libovolnou službu",
      description: "Perfektní dárek pro vaše blízké. Poukaz lze využít na jakoukoliv službu v našem salonu.",
      price: "od 1000 Kč",
      validity: "12 měsíců",
      image: "/images/voucher-general.jpg",
      popular: false,
      icon: <Gift size={24} />
    },
    {
      id: 2,
      title: "Relax balíček",
      description: "Kompletní kosmetické ošetření s relaxační masáží. Ideální pro odpočinek a regeneraci.",
      price: "2500 Kč",
      validity: "12 měsíců",
      image: "/images/voucher-relax.jpg",
      popular: true,
      icon: <Heart size={24} />
    },
    {
      id: 3,
      title: "Premium péče",
      description: "Luxusní balíček zahrnující nejnovější technologie péče o pleť a tělo.",
      price: "4000 Kč",
      validity: "12 měsíců",
      image: "/images/voucher-premium.jpg",
      popular: false,
      icon: <Star size={24} />
    }
  ];

  const benefits = [
    "Platnost 12 měsíců od zakoupení",
    "Možnost využití na jakoukoliv službu",
    "Elegantní fyzická podoba poukazu",
    "Možnost osobního vyzvednutí nebo zaslání poštou",
    "Individuální hodnota dle vašeho přání"
  ];

  return (
    <section id="vouchers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Hlavní nadpis */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Dárkové poukazy
          </h2>
          <div className="w-20 h-px bg-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Darujte svým blízkým zážitek krásy a relaxace. Naše dárkové poukazy jsou 
            perfektním dárkem pro každou příležitost.
          </p>
        </motion.div>

        {/* Voucher karty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vouchers.map((voucher, index) => (
            <motion.div
              key={voucher.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                voucher.popular ? 'ring-2 ring-pink-400' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {voucher.popular && (
                <div className="absolute top-4 right-4 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Nejoblíbenější
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 mx-auto">
                  <div className="text-pink-600">
                    {voucher.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 mb-4 text-center">
                  {voucher.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {voucher.description}
                </p>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-light text-gray-800 mb-2">
                    {voucher.price}
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1" />
                    Platnost: {voucher.validity}
                  </div>
                </div>
                
                <motion.button
                  onClick={() => openModal('voucher-order')}
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg font-medium transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Objednat poukaz
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Výhody */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-light text-gray-800 mb-8 text-center">
            Výhody našich dárkových poukazů
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-light text-gray-800 mb-6">
            Máte dotazy k dárkovým poukazům?
          </h3>
          <motion.button
            onClick={() => openModal('contact')}
            className="px-8 py-3 border-2 border-pink-400 text-pink-400 rounded-lg font-medium transition-all duration-300 hover:bg-pink-400 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontaktujte nás
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Voucher;
