import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${scrolled ? 'bg-primary-600' : 'bg-secondary-900'}`}>
               <Briefcase size={20} />
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight ${scrolled ? 'text-secondary-900' : 'text-secondary-900'}`}>
              AM <span className="text-primary-600">.</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Sobre Mí', 'Packs', 'Testimonios'].map((item) => (
               <a 
                 key={item} 
                 href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`} 
                 className={`text-sm font-medium transition-colors hover:text-primary-600 ${scrolled ? 'text-gray-600' : 'text-gray-700'}`}
               >
                 {item}
               </a>
            ))}
            <a 
              href="#contacto"
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2 ${
                scrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-500/20' 
                  : 'bg-secondary-900 text-white hover:bg-gray-800 shadow-lg'
              }`}
            >
              Agendar Sesión <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Sobre Mí', 'Packs', 'Testimonios'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contacto"
              className="block w-full text-center mt-4 px-5 py-4 rounded-xl bg-primary-600 text-white font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              ¡Empecemos ahora!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;