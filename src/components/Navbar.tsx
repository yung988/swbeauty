import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  openModal: (modalId: string) => void;
}

const Navbar = ({ openModal }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  // Obnovené dynamické barvy
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(249, 250, 251, 0.85)", "rgba(249, 250, 251, 0.98)"] // Tailwind bg-gray-50 with opacity
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["#4B5563", "#1F2937"] // Tailwind gray-600 to gray-800
  );
  
  // Pro SVG logo není potřeba filtr, pokud je již ve správné barvě
  // const logoFilter = useTransform(scrollY, [0, 100], ["none", "none"]);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'kosmetika', 'testimonials', 'contact', '#career', '#shop', '#social'];
      const current = sections.find(section => {
        const element = document.getElementById(section.replace('#',''));
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 80; 
        }
        return false;
      }) || 'home';
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) { 
      setIsMenuOpen(false);
      // Zde bychom mohli implementovat logiku pro externí odkazy nebo jiné chování
      if (sectionId === "#shop") {
        // Například otevřít modal nebo přesměrovat
        // openModal('shop-modal'); 
      }
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { id: 'services', label: 'SLUŽBY' }, // Původní funkční odkaz
    { id: '#career', label: 'KARIÉRA' }, 
    { id: '#shop', label: 'OBCHOD' },   
    { id: '#social', label: 'SOCIÁLNÍ SÍTĚ' } 
  ];

  return (
    <motion.header 
      style={{ backgroundColor: navBackground }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm" // Změna na shadow-sm
    >
      <div className="container mx-auto px-6 py-3"> {/* Změna na py-3 */}
        <div className="flex justify-between items-center h-[110px]"> {/* Zvýšená výška */}
          
          {/* SVG Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="relative z-10 w-[400px] h-[100px] flex items-center justify-start" // Zvětšené logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img 
              src="/images/logo.svg" 
              alt="SW BEAUTY Logo" 
              className="w-full h-full object-contain"
              // style={{ filter: logoFilter }} // Pokud by SVG potřebovalo dynamický filtr
            />
          </motion.a>

          {/* Navigace pro desktop */}
          <motion.nav 
            className="hidden md:flex items-center" // Odebrán space-x-8, dáme ho na jednotlivé linky pro lepší kontrolu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map(({ id, label }) => (
              <motion.a // Změněno na motion.a pro konzistenci a případné animace
                key={id}
                href={id.startsWith('#') ? id : `#${id}`}
                onClick={(e) => {
                  if (!id.startsWith('#')) e.preventDefault();
                  scrollToSection(id.startsWith('#') ? id.replace('#','') : id);
                }}
                style={{ color: textColor }}
                className={`px-3 py-2 text-xs uppercase tracking-wider transition-colors duration-300 hover:opacity-70
                  ${activeSection === id.replace('#','') ? 'font-semibold' : 'font-normal'} 
                `} 
              >
                {label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Ikony a tlačítko vpravo pro desktop */}
          <div className="hidden md:flex items-center space-x-4"> {/* Snížen space-x */}
            <motion.button 
              className="transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={18} strokeWidth={1.5} style={{ color: "#1F2937" }} /> {/* Statická barva */}
            </motion.button>
            <motion.button 
              className="transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={18} strokeWidth={1.5} style={{ color: "#1F2937" }} /> {/* Statická barva */}
            </motion.button>
             <motion.button
                onClick={() => openModal('booking')}
                className="px-4 py-2 bg-[#FDFDFD] text-[#555555] border border-[#BBBBBB] rounded-none 
                           text-xs uppercase tracking-wider font-medium text-center leading-tight
                           transition-all duration-300 hover:bg-gray-100 hover:border-[#999999]"
                // Barvy jsou zde statické podle preferovaného vzhledu tlačítka
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Rezervovat
              </motion.button>
          </div>

          {/* Mobilní Menu Tlačítko */}
          <motion.button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div style={{ backgroundColor: textColor }} className={`w-5 h-[1.5px] transition-all duration-300 mb-1.5 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <motion.div style={{ backgroundColor: textColor }} className={`w-5 h-[1.5px] transition-all duration-300 mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <motion.div style={{ backgroundColor: textColor }} className={`w-5 h-[1.5px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </motion.button>
        </div>
      </div>

      {/* Mobilní Menu */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
        style={{ backgroundColor: navBackground }} // Použije dynamické pozadí
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : '100%'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="flex flex-col items-center space-y-5 text-lg">
          {navLinks.map(({ id, label }) => (
            <motion.a // Změněno na motion.a
              key={id}
              href={id.startsWith('#') ? id : `#${id}`}
              onClick={(e) => {
                if (!id.startsWith('#')) e.preventDefault();
                scrollToSection(id.startsWith('#') ? id.replace('#','') : id);
                setIsMenuOpen(false); // Zavřít menu po kliku
              }}
              className={`py-2 transition-colors duration-300 uppercase text-sm tracking-wider
                ${activeSection === id.replace('#','') ? 'font-bold' : 'font-normal'}
              `}
               style={{ color: textColor }}
            >
              {label}
            </motion.a>
          ))}
          <div className="flex items-center space-x-5 pt-5">
            <motion.button className="transition-colors">
              <Search size={22} strokeWidth={1.5} style={{ color: "#1F2937" }}/> {/* Statická barva */}
            </motion.button>
            <motion.button className="transition-colors">
              <ShoppingBag size={22} strokeWidth={1.5} style={{ color: "#1F2937" }}/> {/* Statická barva */}
            </motion.button>
          </div>
           <motion.button
              onClick={() => {
                openModal('booking');
                setIsMenuOpen(false);
              }}
              className="mt-6 px-5 py-2.5 bg-[#FDFDFD] text-[#555555] border border-[#BBBBBB] rounded-none 
                         text-xs uppercase tracking-wider font-medium text-center leading-tight
                         transition-all duration-300 hover:bg-gray-100 hover:border-[#999999]"
              // Barvy statické
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Rezervovat Termín
            </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
