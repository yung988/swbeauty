const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-serif mb-6">SWBEAUTY</h3>
            <p className="text-gray-600 font-normal leading-relaxed">
              Váš luxusní beauty salon, kde se snoubí nejmodernější technologie s péčí o vaši krásu a zdraví.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 font-normal hover:text-black transition-colors">Domů</a></li>
              <li><a href="#services" className="text-gray-600 font-normal hover:text-black transition-colors">Služby</a></li>
              <li><a href="#about" className="text-gray-600 font-normal hover:text-black transition-colors">O nás</a></li>
              <li><a href="#testimonials" className="text-gray-600 font-normal hover:text-black transition-colors">Recenze</a></li>
              <li><a href="#gallery" className="text-gray-600 font-normal hover:text-black transition-colors">Galerie</a></li>
              <li><a href="#pricing" className="text-gray-600 font-normal hover:text-black transition-colors">Ceník</a></li>
              <li><a href="#contact" className="text-gray-600 font-normal hover:text-black transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-600 font-normal">
              <p>SW Beauty s.r.o.</p>
              <p>U Cihelny 1326/2</p>
              <p>695 01 Hodonín</p>
              <p className="pt-2">
                <a href="tel:+420773577899" className="hover:text-black transition-colors">+420 773 577 899</a>
              </p>
              <p>
                <a href="mailto:info@swbeauty.cz" className="hover:text-black transition-colors">info@swbeauty.cz</a>
              </p>
            </div>
          </div>
            
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-4">Otevírací doba</h4>
            <div className="space-y-2 text-gray-600 font-normal">
              <p>Pondělí - Pátek: 9:00 - 20:00</p>
              <p>Sobota: 10:00 - 18:00</p>
              <p>Neděle: Zavřeno</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 SW Beauty. Všechna práva vyhrazena.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
