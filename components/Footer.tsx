import React from 'react';
import { Linkedin, Mail, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1917] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Alejandro Martínez</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              EMEA Talent Advisor + Career Strategist. Ayudo a empresas a construir equipos de alto rendimiento y a individuos a convertirse en el talento que esas empresas quieren contratar.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alejandromartinezh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors text-stone-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://amheadhunting.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors text-stone-300 hover:text-white">
                <Globe size={20} />
              </a>
              <a href="mailto:alejandro.hernandez.ext@adevinta.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors text-stone-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-stone-100">Estrategia</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="hover:text-primary-500 cursor-pointer transition-colors">Claridad y Propósito</li>
              <li className="hover:text-primary-500 cursor-pointer transition-colors">Storytelling Profesional</li>
              <li className="hover:text-primary-500 cursor-pointer transition-colors">Posicionamiento en LinkedIn</li>
              <li className="hover:text-primary-500 cursor-pointer transition-colors">Negociación Salarial</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-stone-100">Legal</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link to="/privacidad" className="hover:text-primary-500 cursor-pointer transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-primary-500 cursor-pointer transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary-500 cursor-pointer transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6 text-stone-100">Ubicación</h4>
             <div className="space-y-4 text-sm text-stone-400">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0 text-primary-500" size={16} />
                  <span>Barcelona, Spain<br/>Disponible globalmente (Remote)</span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Alejandro Martínez Hernández.
          </p>
          <p className="text-stone-600 text-xs">
            AM Headhunting & Talent Advisory
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;