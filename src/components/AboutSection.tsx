import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2 
          className="text-7xl md:text-9xl lg:text-[10rem] font-serif tracking-tighter mb-16 text-center text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          O NÁS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-serif mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              O SWBEAUTY
              <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Vítejte v SWBeauty, vašem luxusním beauty salonu, kde se snoubí nejmodernější technologie s péčí o vaši krásu a zdraví. Naše studio bylo založeno s vizí poskytovat ty nejkvalitnější služby v oblasti péče o tělo a vlasy v příjemném a elegantním prostředí.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Specializujeme se na inovativní procedury jako Endosphere, HIFU a profesionální prodlužování vlasů. Všechny naše služby jsou prováděny certifikovanými odborníky s mnohaletými zkušenostmi, kteří neustále sledují nejnovější trendy a technologie v beauty průmyslu.
            </motion.p>
          </div>
          
          <div>
            <motion.div 
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src="/images/salon/recepce.jpg" 
                alt="SW Beauty Salon" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="order-2 md:order-1">
            <motion.div 
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src="/images/salon/kreslomistnostnaprocedury.jpg" 
                alt="SW Beauty Salon" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.h3 
              className="text-2xl md:text-3xl font-serif mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              NAŠE FILOZOFIE
              <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              V SWBeauty věříme, že každý klient je jedinečný, a proto přistupujeme ke každému individuálně. Naším cílem je nejen zlepšit váš vzhled, ale také posílit vaše sebevědomí a celkovou pohodu. Používáme pouze prémiové produkty a nejmodernější technologie, abychom zajistili ty nejlepší výsledky.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Klademe důraz na profesionalitu, diskrétnost a vytváření příjemné atmosféry, kde se budete cítit uvolněně a v péči odborníků, kterým můžete důvěřovat.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-serif mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MAJITELKA SALONU
              <span className="absolute -bottom-3 left-0 h-0.5 bg-[#d4af7a] w-16"></span>
            </motion.h3>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Salon SW Beauty založila a vede Sabina, která osobně provádí všechny procedury a stará se o chod celého salonu. Díky jejím mnohaletým zkušenostem a neustálému vzdělávání v oblasti nejnovějších kosmetických postupů a technologií můžeme našim klientům nabídnout služby té nejvyšší kvality.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Sabina se specializuje na pokročilé procedury jako HIFU Facelift, Endos-roller a další inovativní ošetření. Její přístup ke každému klientovi je vždy individuální a profesionální, s důrazem na dosažení nejlepších možných výsledků a maximální spokojenosti.
            </motion.p>
          </div>
          
          <div>
            <motion.div 
              className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img 
                src="/images/team/sabina.jpg" 
                alt="Sabina - Majitelka SW Beauty" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
          <motion.h3 
            className="text-2xl md:text-3xl font-serif mb-8 relative text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            PROČ SI VYBRAT SWBEAUTY
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#d4af7a] w-16"></span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Luxusní prostředí a profesionální péče',
              'Nejmodernější technologie a prémiové produkty',
              'Individuální přístup ke každému klientovi',
              'Certifikovaná odbornice s mnohaletými zkušenostmi',
              'Komplexní služby pod jednou střechou',
              'Diskrétnost a příjemná atmosféra'
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-[#d4af7a] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700 font-light">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
