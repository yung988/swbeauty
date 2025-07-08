import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Karolína M.',
      text: 'Úžasné místo! Služby byly perfektní a personál velmi profesionální. Výsledky jsou viditelné již po prvním ošetření a určitě se vrátím pro další procedury.',
      service: 'Prodlužování vlasů',
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: 'Tereza K.',
      text: 'Nejlepší procedura, jakou jsem kdy měla. Endosphere terapie mi pomohla zbavit se celulitidy, kterou jsem řešila roky. Po sérii ošetření je moje pokožka hladší a pevnější.',
      service: 'Endosphere',
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: 'Martina V.',
      text: 'Děkuji! Měla jsem skvělý zážitek a výsledky předčily moje očekávání. HIFU procedura byla naprosto bezbolestná a efekt je viditelný okamžitě. Doporučuji všem!',
      service: 'HIFU',
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 right-10 w-96 h-96 rounded-full bg-[#f8e1e6]/20 blur-3xl z-0"
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
      
      <motion.div 
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[#d4af7a]/10 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-[#d4af7a] text-xl md:text-2xl font-light tracking-widest block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            NAŠI KLIENTI
          </motion.span>
          
          <motion.h2 
            className="text-7xl md:text-9xl lg:text-[10rem] font-serif tracking-tighter mb-8 text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            REFERENCE
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Přečtěte si, co o našich službách říkají naši spokojení klienti. Jejich zkušenosti jsou tím nejlepším důkazem kvality našich služeb.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-xl relative"
            >
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#f8e1e6] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d4af7a" stroke="none">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.31-.606.81-1.155 1.5-1.65l1.12.77c.14.09.29.13.45.13.22 0 .43-.07.6-.2.33-.25.48-.7.34-1.06l-.44-1.1c-.13-.33-.44-.56-.78-.63l-1.2-.21c-.1-.02-.21-.03-.32-.03-.76 0-1.45.46-1.77 1.09-.4.76-.94 1.78-1.18 2.75-.26 1.04-.27 1.97-.01 2.87.01.04.02.07.03.11.16.61.5 1.16.96 1.6.41.38.89.65 1.41.83.42.15.84.23 1.26.23.63 0 1.25-.14 1.83-.41.61-.28 1.13-.69 1.56-1.21.43-.52.76-1.12.99-1.8.06-.19.1-.38.12-.58zm8.9 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.126-1.07-.12-1.54-.01-.07-.5.03-1.52.4-2.227.31-.606.81-1.155 1.5-1.65l1.12.77c.14.09.29.13.45.13.22 0 .43-.07.6-.2.33-.25.48-.7.34-1.06l-.44-1.1c-.13-.33-.44-.56-.78-.63l-1.2-.21c-.1-.02-.21-.03-.32-.03-.76 0-1.45.46-1.77 1.09-.4.76-.94 1.78-1.18 2.75-.24.97-.27 1.96-.05 2.87.02.09.05.17.08.25.17.6.5 1.15.97 1.57.41.38.89.65 1.41.83.42.15.84.23 1.26.23.63 0 1.25-.14 1.83-.41.61-.28 1.13-.69 1.56-1.21.43-.52.76-1.12.99-1.8.07-.21.12-.42.13-.63z"/>
                </svg>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif">{testimonial.name}</h3>
                  <p className="text-[#d4af7a] text-sm">{testimonial.service}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic font-light leading-relaxed">"{testimonial.text}"</p>
              
              <div className="mt-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af7a" stroke="none">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="border-2 border-black px-10 py-4 text-xl font-light tracking-wider hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">ZOBRAZIT VÍCE REFERENCÍ</span>
            <span className="absolute top-0 left-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full -z-0"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
