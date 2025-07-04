const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">SWBEAUTY</h3>
            <p className="text-gray-600 font-light">
              Váš luxusní beauty salon, kde se snoubí nejmodernější technologie s péčí o vaši krásu a zdraví.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Kontakt</h4>
            <p className="text-gray-600 font-light mb-2">
              Nádražní 25<br />
              150 00 Praha 5
            </p>
            <p className="text-gray-600 font-light mb-2">
              +420 777 888 999
            </p>
            <p className="text-gray-600 font-light">
              info@swbeauty.cz
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Otevírací doba</h4>
            <p className="text-gray-600 font-light">
              Pondělí - Pátek: 9:00 - 20:00<br />
              Sobota: 10:00 - 18:00<br />
              Neděle: Zavřeno
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
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
