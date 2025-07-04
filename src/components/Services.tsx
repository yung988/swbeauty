import { motion } from 'framer-motion';

interface ServicesProps {
  openModal: (modalId: string) => void;
}

const Services = ({ openModal }: ServicesProps) => {
  const services = [
    {
      id: 'kosmetika',
      name: 'KOSMETIKA',
      description: 'Kompletní péče o pleť a specializované kosmetické procedury',
      image: '/images/service-hair.jpg',
      benefits: ['14 různých procedur', 'Mikrojehlání a dermapen', 'Laminace řas a obočí']
    },
    {
      id: 'budovani-svalu',
      name: 'BUDOVÁNÍ SVALŮ',
      description: 'Revoluční technologie pro stimulaci svalů a tvarování těla',
      image: '/images/service-hifu.jpg',
      benefits: ['30 000 stahů za 30 minut', 'Náhrada až 5 hodin posilování', 'Regenerace svalů']
    },
    {
      id: 'hifu',
      name: 'HIFU FACELIFT',
      description: 'Neinvazivní lifting a zpevnění pokožky pomocí fokusovaného ultrazvuku',
      image: '/images/service-hifu.jpg',
      benefits: ['Lifting obličeje', 'Vypnutí pleti', 'Stimulace kolagenu']
    },
    {
      id: 'endosphere',
      name: 'ENDOS-ROLLER',
      description: 'Pokročilá technologie kompresní mikrovibrace pro redukci celulitidy',
      image: '/images/service-endosphere.jpg',
      benefits: ['Redukce celulitidy', 'Lymfatická drenáž', 'Tvarování postavy']
    },
    {
      id: 'kavitace',
      name: 'KAVITACE',
      description: 'Bezbolestné ošetření ultrazukem rozbíjející tukové buňky',
      image: '/images/service-endosphere.jpg',
      benefits: ['Rozbíjení tukových buněk', 'Odvádění tuků lymfou', 'Zštíhlení partií']
    },
    {
      id: 'ostatni-sluzby',
      name: 'OSTATNÍ SLUŽBY',
      description: 'Speciální balíčky procedur pro komplexní péči za výhodné ceny',
      image: '/images/service-hifu.jpg',
      benefits: ['3 výhodné balíčky', 'Kombinace procedur', 'Maximální efekt']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      {/* Odstranění dekorativních elementů pro čistší vzhled 
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gray-100/30 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      */}
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.p 
            className="subtitle mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Exkluzivní péče
          </motion.p>
          
          <motion.h2 
            className="section-title text-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Naše služby
          </motion.h2>
          
          <motion.div
            className="max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              Nabízíme špičkové procedury s využitím nejmodernějších technologií a prémiových produktů pro dokonalé výsledky.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group subtle-hover"
            >
              <motion.div 
                className="mb-8 mx-auto rounded-full overflow-hidden aspect-square cursor-pointer relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7 }}
                onClick={() => openModal(service.id)}
              >
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
              
              <h3 className="text-2xl font-serif mb-4 tracking-wide">{service.name}</h3>
              <p className="text-gray-700 mb-6 font-light text-sm leading-relaxed">{service.description}</p>
              
              <div className="mb-8">
                <ul className="flex flex-col space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      className="text-gray-700 font-light flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="decorative-dot"></span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                onClick={() => openModal(service.id)}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Více informací
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="thin-divider mx-auto max-w-md mb-16"></div>
          
          <motion.button
            onClick={() => openModal('booking')}
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Rezervovat proceduru
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
