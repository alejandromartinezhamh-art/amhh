import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiesPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary-900 bg-[#fafaf9] selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-8">Política de Cookies</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-gray-600">
          <p className="lead text-xl text-gray-500 font-light mb-8">
            En esta web utilizo cookies propias y de terceros para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales y para obtener estadísticas de los usuarios.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">¿Qué es una cookie?</h3>
          <p>
            Una cookie es un fichero de texto inofensivo que se almacena en tu navegador cuando visitas casi cualquier página web. La utilidad de la cookie es que la web sea capaz de recordar tu visita cuando vuelvas a navegar por esa página. Las cookies no suelen almacenar información sensible sobre ti.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">Cookies utilizadas en este sitio web</h3>
          <p>
            Siguiendo las directrices de la Agencia Española de Protección de Datos procedo a detallar el uso de cookies que hace esta web con el fin de informarte con la máxima exactitud posible.
          </p>

          <h4 className="text-xl font-bold text-secondary-900 mt-6 mb-2">Cookies propias:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies de sesión:</strong> Para garantizar que los usuarios que escriben comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</li>
            <li><strong>Preferencias:</strong> Recordar ajustes de visualización (como aceptación de avisos legales).</li>
          </ul>

          <h4 className="text-xl font-bold text-secondary-900 mt-6 mb-2">Cookies de terceros:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Analytics:</strong> Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web estás consintiendo el tratamiento de información acerca de ti por Google.</li>
            <li><strong>Redes sociales:</strong> Cada red social utiliza sus propias cookies para que puedas pinchar en botones del tipo Me gusta o Compartir.</li>
          </ul>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">Desactivación o eliminación de cookies</h3>
          <p>
            En cualquier momento podrás ejercer tu derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que estés usando (Chrome, Safari, Firefox, Explorer, etc.).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;