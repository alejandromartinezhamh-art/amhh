import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary-900 bg-[#fafaf9] selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-stone prose-lg max-w-none text-gray-600">
          <p className="lead text-xl text-gray-500 font-light mb-8">
            Tu privacidad es importante para mí. En esta declaración de privacidad te explico qué datos personales recopilo de mis usuarios y cómo los utilizo.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">1. Responsable del Tratamiento</h3>
          <p>
            <strong>Identidad:</strong> Alejandro Martínez Hernández<br />
            <strong>Actividad:</strong> Talent Advisory & Headhunting<br />
            <strong>Email de contacto:</strong> alejandro.hernandez.ext@adevinta.com
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">2. Finalidad del tratamiento</h3>
          <p>
            Trato la información que me facilitas con el fin de prestarte el servicio solicitado, realizar la facturación del mismo y enviarte comunicaciones relacionadas con mis servicios profesionales.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Formulario de contacto:</strong> Responder a tus consultas y dudas.</li>
            <li><strong>Contratación de servicios:</strong> Gestionar la relación profesional y administrativa.</li>
          </ul>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">3. Legitimación</h3>
          <p>
            La base legal para el tratamiento de tus datos es la ejecución del contrato de prestación de servicios o el consentimiento explícito que me das al contactar conmigo a través de los formularios de la web.
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">4. Destinatarios</h3>
          <p>
            Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea necesario para la prestación del servicio (ej. gestoría fiscal, herramientas de videollamada como Google Meet/Zoom).
          </p>

          <h3 className="text-2xl font-serif font-bold text-secondary-900 mt-8 mb-4">5. Derechos</h3>
          <p>
            Tienes derecho a acceder a tus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios. Para ejercer estos derechos, puedes enviar un email a la dirección de contacto indicada arriba.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;