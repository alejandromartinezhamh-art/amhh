import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalNotice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary-900 bg-[#fafaf9] selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-8">Aviso Legal</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-gray-600">
          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">1. Datos Identificativos</h3>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
          </p>
          <p className="mt-4">
            El titular de este sitio web es <strong>Alejandro Martínez Hernández</strong>, actuando bajo la marca personal "AM Talent Advisor".
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">2. Usuarios</h3>
          <p>
            El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">3. Uso del portal</h3>
          <p>
            Esta página web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Alejandro Martínez o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">4. Propiedad Intelectual e Industrial</h3>
          <p>
            Alejandro Martínez por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
          </p>
          <p className="mt-4">
            Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Alejandro Martínez.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">5. Exclusión de Garantías y Responsabilidad</h3>
          <p>
            Alejandro Martínez no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">6. Modificaciones</h3>
          <p>
            Alejandro Martínez se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;