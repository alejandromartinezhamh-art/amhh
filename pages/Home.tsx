import React, { useState } from 'react';
import { ArrowRight, Star, Quote, XCircle, AlertCircle, HelpCircle, Check, MapPin, Target, Search, MessageSquare, TrendingUp, Calendar, Briefcase, Building2, Users, Trophy, Globe, Zap, Layout, Landmark, Compass, Eye, ShieldCheck, LockKeyhole, Layers, Minus, ChevronDown, ChevronUp, Video, CheckCircle2, Building, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIAdvisor from '../components/AIAdvisor';
import FadeInSection from '../components/FadeInSection';
import { Testimonial, PricingPlan } from '../types';

// USER CONFIGURATION
const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 
const PROFILE_VIDEO_URL = "https://videos.pexels.com/video-files/3252012/3252012-hd_1920_1080_25fps.mp4";

// DATA: Expanded Pain Points
const rawPains = [
  { text: "Mando 50 CVs y 0 respuestas", rotate: "-2deg", delay: "0s" },
  { text: "¿Soy demasiado Senior?", rotate: "1deg", delay: "2s" },
  { text: "Ghosting tras la final", rotate: "3deg", delay: "1s" },
  { text: "Me siento estancado", rotate: "-1deg", delay: "3s" },
  { text: "No sé negociar salario", rotate: "2deg", delay: "0.5s" },
  { text: "Me da pánico LinkedIn", rotate: "-3deg", delay: "2.5s" },
  { text: "¿Mi perfil es irrelevante?", rotate: "1deg", delay: "1.5s" },
  { text: "Feedback genérico", rotate: "4deg", delay: "3.5s" },
  { text: "Síndrome del Impostor", rotate: "-2deg", delay: "0.2s" },
  { text: "Burnout", rotate: "2deg", delay: "2.8s" },
  { text: "Odio las Cover Letters", rotate: "-1deg", delay: "1.2s" },
  { text: "Siento que mendigo trabajo", rotate: "3deg", delay: "0.8s" },
  { text: "¿Y si cambio de sector?", rotate: "-3deg", delay: "2.2s" },
  { text: "Mi inglés me frena", rotate: "1deg", delay: "3.2s" },
  { text: "Competencia feroz", rotate: "-2deg", delay: "1.8s" },
  { text: "El ATS me filtra", rotate: "2deg", delay: "0.3s" },
  { text: "¿Qué hago mal?", rotate: "0deg", delay: "4s" },
];

// DATA: Packs / Servicios
const packs: PricingPlan[] = [
  {
    id: 'consult',
    name: 'Consulta Rápida',
    price: '€35',
    description: 'Ideal para resolver dudas puntuales',
    features: [
      'Sesión de 30 minutos',
      'Resolución de dudas sobre CV',
      'Consejos para LinkedIn',
      'Estrategia básica de búsqueda',
      'Soporte por email'
    ],
    cta: 'Seleccionar Consulta'
  },
  {
    id: 'cv-pro',
    name: 'Pack CV Pro',
    price: '€99',
    description: 'Optimiza tu currículum profesional',
    features: [
      'Revisión completa de CV',
      'Rediseño profesional',
      'Optimización por ATS',
      '2 rondas de revisión',
      'Plantilla personalizada'
    ],
    cta: 'Seleccionar Pack'
  },
  {
    id: 'cv-linkedin',
    name: 'CV + LinkedIn',
    price: '€199',
    description: 'Presencia profesional completa',
    isPopular: true,
    features: [
      'Todo lo del Pack CV Pro',
      'Optimización de perfil LinkedIn',
      'Headline y resumen atractivos',
      'Estrategia de contenido',
      'Guía de networking'
    ],
    cta: 'Seleccionar CV + LK'
  },
  {
    id: 'strategy',
    name: 'Estrategia de Búsqueda',
    price: '€299',
    description: 'Plan de acción personalizado',
    features: [
      'Todo lo anterior incluido',
      'Plan de búsqueda personalizado',
      'Identificación de empresas objetivo',
      'Estrategia de approach',
      'Seguimiento de progreso'
    ],
    cta: 'Seleccionar Estrategia'
  },
  {
    id: 'coaching',
    name: 'Coaching',
    price: '€499',
    description: 'Descubre tu valor diferencial',
    features: [
      'Todos los servicios anteriores',
      'Sesiones de coaching 1:1',
      'Análisis de fortalezas',
      'Plan de desarrollo profesional',
      'Estrategia de reinvención'
    ],
    cta: 'Seleccionar Coaching'
  },
  {
    id: 'full',
    name: 'Full Package',
    price: 'TBD',
    description: 'Servicio premium personalizado',
    features: [
      'Todos los servicios incluidos',
      'Seguimiento continuo',
      'Preparación de entrevistas',
      'Apoyo en negociación',
      'Acceso prioritario'
    ],
    cta: 'Seleccionar Full'
  }
];

// DATA: Testimonios
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Abella',
    role: 'IT Program & Portfolio Manager',
    company: 'Pharma & Regulated Industries',
    content: 'Además de habérmelo pasado muy bien trabajando con Alejandro, me ayudó a tener nuevas perspectivas y herramientas para conseguir mis objetivos. ¡Gracias por todo!',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Alessandro Orru',
    role: 'Marketing Director (CMO)',
    company: 'Healthcare & Tech',
    content: 'Su método está validado y funciona. Conoce bien el mercado laboral y tiene un trato muy humano. Posiblemente eso fue lo que más me ayudó a encontrar trabajo.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Francisco Fernández',
    role: 'Retail Operations Manager',
    company: 'Retail',
    content: 'Alejandro me ha dado las pautas para llegar al éxito. Conseguí proyectar una imagen clara y con un valor diferencial para acceder a oportunidades ocultas.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '4',
    name: 'Carme Charles',
    role: 'Chief Digital Officer (CDO)',
    company: 'Martech',
    content: 'Alejandro es un crack como profesional y una mejor persona. No te deja indiferente. Te ayuda, te riñe, te enseña, te levanta si te caes y te pone un trampolín.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '5',
    name: 'Stefania Giorgi',
    role: 'Strategic Marketing',
    company: 'B2B & B2C Strategies',
    content: 'Nada de consejos genéricos: Alejandro te dice exactamente lo que necesitas saber y hacer, adaptado a tu perfil. Transmite cercanía, seguridad y preparación.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '6',
    name: 'Cecilia Peñaherrera',
    role: 'CEO with Purpose',
    company: 'Business Strategy',
    content: 'Hacer el proyecto contigo ha sido un privilegio. No solo tenemos un mejor CV, sino que somos mejores profesionales en todo sentido y mejores comunicadores.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '7',
    name: 'Judith Pío',
    role: 'Business Unit Director',
    company: 'FMCG & Pharma',
    content: 'Trabajamos codo con codo y apliqué sus consejos en la única entrevista que hice. Sí, me valió 1 única entrevista para que me contrataran y sigo aquí.',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '8',
    name: 'Sergio González',
    role: 'Agile Product Owner',
    company: 'Biotech',
    content: 'Me ha parecido cercano y con gran capacidad para transmitir ideas. Con lo aprendido con él, mi perspectiva en la búsqueda de empleo ha cambiado considerablemente.',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
   {
    id: '9',
    name: 'Marta Vázquez',
    role: 'Head of CX',
    company: 'PcComponentes',
    content: 'Alejandro fue el guía que me ayudó en el redescubrimiento y actualización del mercado laboral. Fue clave en el éxito de mi cambio profesional tras 12 años.',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200'
  }
];

// DATA: FAQs Actualizadas (Discount FAQ Removed)
const faqs = [
  {
    q: "¿Cómo funcionan las sesiones 1 a 1?",
    a: "Son videollamadas intensivas donde analizamos tu caso. No es una charla teórica. Hacemos simulacros reales, revisamos tu pantalla, editamos textos en vivo y definimos tu estrategia semana a semana."
  },
  {
    q: "¿Me sirve si quiero cambiar totalmente de sector?",
    a: "Sí, de hecho es donde más valor aporto. Detectamos tus habilidades transferibles y construimos una narrativa que justifique el cambio ante los ojos de un reclutador escéptico."
  },
  {
    q: "¿Por qué no ofreces garantías de contratación?",
    a: "Porque la decisión final depende de la empresa y del mercado. Lo que yo garantizo es que tendrás las mejores herramientas posibles y que dejarás de cometer los errores que hoy te están descartando."
  },
  {
    q: "¿Revisas mi perfil de LinkedIn o también me dices qué publicar?",
    a: "Ambas cosas. Optimizamos el perfil para aparecer en búsquedas (SEO) y te doy una estrategia de contenido sencilla para que ganes autoridad sin pasarte el día escribiendo."
  },
  {
    q: "¿Trabajas con perfiles Junior o recién graduados?",
    a: "Mi especialidad son perfiles Mid-Senior y C-Level, pero si eres un Junior con mucha ambición y presupuesto para invertir en tu carrera, el pack de 'Consulta Rápida' o 'CV Pro' te dará una ventaja competitiva brutal desde el inicio."
  },
  {
    q: "¿Cuánto tiempo tardaré en encontrar trabajo?",
    a: "Es imposible dar una fecha exacta, pero mis clientes suelen reducir su tiempo de búsqueda a la mitad. Pasamos de 'tirar currículums' a ciegas a tener procesos de calidad en 3-4 semanas."
  },
  {
    q: "¿Qué pasa si no quedo satisfecho con la sesión?",
    a: "Mi objetivo es aportarte valor masivo. Si en los primeros 15 minutos de la primera sesión sientes que no es para ti, paramos y te devuelvo el dinero. Sin letra pequeña."
  }
];

const companies = [
  "Klarna.", "Adevinta", "InfoJobs", "pwc", "ElevenLabs", "Michael Page", "Hays", "Kantox", "Adecco", "Revolut", "TravelPerk"
];

// Componente individual para FAQ
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/10' : 'hover:bg-white/10'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
      >
        <h3 className="text-lg font-bold flex items-center gap-3 text-primary-100 font-serif">
           <HelpCircle size={20} className="text-primary-500 flex-shrink-0" />
           {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-primary-500 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
        )}
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-300 leading-relaxed pl-9 text-base font-light border-l border-primary-500/30 ml-2">
           {answer}
        </p>
      </div>
    </div>
  );
};

// Componente Home Principal
const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'roles' | 'sectors' | 'markets'>('experience');

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary-900 bg-[#fafaf9] selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#fafaf9]">
        {/* Background Gradients (Subtle Light Effects Only) */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary-100/30 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-orange-100/20 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Copy */}
            <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
              
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-primary-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
                <span className="text-secondary-900 text-xs font-bold tracking-wide uppercase">EMEA Talent Advisor & Strategist</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-secondary-900 leading-snug">
                Te ayudo a reposicionar tu perfil, contar tu historia con propósito y tomar acción alineada para crear <span className="text-primary-600 italic relative inline-block">
                  oportunidades reales
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed font-light">
                Te ayudo a identificar tus fortalezas reales, pulir tu currículum y defender tu valor en las entrevistas con sesiones 1 a 1 totalmente personalizadas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packs" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  Ver mis Servicios <ArrowRight size={18} />
                </a>
                <a href="#sobre-mi" className="px-8 py-4 bg-white border border-gray-200 hover:border-primary-300 text-gray-700 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                  Mi Experiencia
                </a>
                <a 
                  href="https://www.linkedin.com/in/alejandromartinezh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-gray-200 hover:border-[#0a66c2] text-gray-600 hover:text-[#0a66c2] rounded-full transition-all flex items-center justify-center hover:shadow-lg hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="order-1 lg:order-2 relative">
               <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-primary-50 h-[600px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <video 
                  className="w-full h-full object-cover object-center"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={PROFILE_IMAGE_URL}
                >
                  <source src={PROFILE_VIDEO_URL} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
                
                {/* Overlay Gradient (Inside video only) */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent pointer-events-none"></div>
               </div>
               
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / LOGOS SECTION */}
      <section className="py-12 bg-[#fafaf9] overflow-hidden">
         <FadeInSection>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                Experiencia trabajando con y para líderes de la industria
                </p>
            </div>
            
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                    {companies.concat(companies).map((company, i) => (
                        <li key={i} className="text-2xl md:text-3xl font-serif font-bold text-gray-300 hover:text-secondary-900 transition-colors cursor-default whitespace-nowrap">
                        {company}
                        </li>
                    ))}
                </ul>
            </div>
         </FadeInSection>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-24 bg-[#fafaf9] relative overflow-hidden">
        <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
                 ¿Te suena este <span className="italic text-primary-600">ruido mental</span>?
              </h2>
              <p className="text-gray-500 text-lg font-light">
                 Si estos pensamientos rondan tu cabeza, es hora de poner orden.
              </p>
           </div>

           {/* Cloud Container */}
           <div className="relative max-w-6xl mx-auto py-10 min-h-[400px] flex items-center justify-center">
              {/* Subtle radial glow behind clouds */}
              <div className="absolute inset-0 bg-white opacity-40 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  {rawPains.map((item, idx) => {
                      const animClass = idx % 3 === 0 ? 'animate-float' : idx % 3 === 1 ? 'animate-float-slow' : 'animate-float-fast';
                      // Added white bg to cards to pop against #fafaf9
                      const unifiedStyle = "px-8 py-4 text-xl font-medium bg-white border border-gray-100 text-gray-600 shadow-md hover:border-gray-300 hover:scale-105 transition-all duration-300 rounded-full cursor-default z-10";

                      return (
                        <div 
                          key={idx}
                          className={`${unifiedStyle} ${animClass}`}
                          style={{ 
                            transform: `rotate(${item.rotate})`,
                            animationDelay: item.delay 
                          }}
                        >
                          {item.text}
                        </div>
                      );
                  })}
              </div>
           </div>
           
           <div className="mt-12 flex justify-center animate-fade-in-up">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-16 w-[1px] bg-gray-300"></div>
                  <div className="bg-white px-6 py-3 rounded-full border border-gray-200 text-sm text-gray-500 font-medium shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Podemos silenciar todo esto juntos
                  </div>
                </div>
           </div>
        </FadeInSection>
      </section>

      {/* NEW SECTION: IMPACT */}
      <section className="py-24 bg-[#fafaf9] relative">
          <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
                      ¿Qué <span className="text-primary-600 italic">ganas</span> realmente?
                  </h2>
                  <p className="text-gray-500 text-lg font-light">
                      Te ayudo a <strong>identificar tus fortalezas reales</strong>, <strong>pulir tu currículum</strong> y <strong>defender tu valor</strong> en las entrevistas con sesiones 1 a 1 totalmente personalizadas.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 0 (New): Consultoría 1:1 */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg shadow-purple-500/10 border-2 border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-10 -mt-10"></div>
                      <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                          <Video size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-secondary-900 mb-6 relative z-10">Consultoría 1:1 Personalizada</h3>
                      
                      <ul className="space-y-4 relative z-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Sesiones intensivas por videollamada para analizar tu caso a fondo</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Nada de cursos genéricos: resolvemos tus bloqueos reales en vivo</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Feedback honesto y directo cara a cara</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Plan de acción adaptado 100% a tus tiempos y objetivos</span>
                        </li>
                      </ul>
                  </div>

                  {/* Other Cards */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Target size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-secondary-900 mb-6">Claridad y Posicionamiento</h3>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Descubre tu diferencial y construye una propuesta de valor sólida</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Redirige tu carrera sin perder credibilidad</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Aprende a contar tu historia con estrategia y seguridad</span>
                        </li>
                      </ul>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 group">
                       <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Eye size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-secondary-900 mb-6">Visibilidad con Intención</h3>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">CV estratégico que destaca en segundos</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">LinkedIn optimizado para que te encuentren</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Multiplica tu visibilidad en los canales adecuados</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Construye una marca personal coherente y memorable</span>
                        </li>
                      </ul>
                  </div>

                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 group">
                      <div className="w-14 h-14 bg-secondary-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <ShieldCheck size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-secondary-900 mb-6">Confianza y Acción</h3>
                      
                       <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Deja de justificar huecos o cambios</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Camina con confianza en procesos de selección</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Negocia desde el valor, no desde la necesidad</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-base text-gray-600 font-light leading-relaxed">Haz que tu perfil trabaje incluso mientras duermes</span>
                        </li>
                      </ul>
                  </div>
              </div>
          </FadeInSection>
      </section>

      {/* MERGED SECTION: ABOUT ME (Refactored with Tabs) */}
      <section id="sobre-mi" className="py-24 bg-[#1c1917] text-white relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px]"></div>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

         <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* 1. HEADER & BIO */}
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                <div className="lg:flex-1">
                   <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
                      <span className="text-primary-500 text-xs font-bold tracking-wide uppercase">Sobre Mí</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                      Trabajo desde el <span className="italic text-primary-500">otro lado</span> de la mesa.
                   </h2>
                   <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                      <p className="font-medium text-xl text-white">
                         Sé cómo se toman realmente las decisiones.
                      </p>
                      <p>
                         Mi mayor ventaja competitiva no es solo mi experiencia en PwC o Startups. Es que <strong>veo patrones que los candidatos no ven</strong>.
                      </p>
                      <p>
                         Llevo casi <strong>10 años en el espacio de reclutamiento</strong>. He visto miles de perfiles. Sé exactamente por qué un candidato brillante es descartado en 5 segundos y por qué otro con menos experiencia consigue el puesto y un 20% más de salario.
                      </p>
                   </div>
                </div>

                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                   <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-primary-500 rounded-full blur-2xl opacity-30 scale-110"></div>
                      <img 
                        src={PROFILE_IMAGE_URL} 
                        alt="Alejandro Martínez" 
                        className="relative w-full h-full object-cover object-top rounded-full border-[6px] border-white/10 shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute bottom-6 -right-2 bg-[#292524] p-3 rounded-2xl shadow-xl z-20 border border-white/10 animate-bounce-slow">
                         <Quote className="text-primary-500 w-5 h-5" fill="currentColor" />
                      </div>
                   </div>
                </div>
            </div>

            {/* 2. KPIs BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 border-y border-white/10 py-10">
               <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-white mb-1">+10</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Años Experiencia</p>
               </div>
               <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-white mb-1">+5k</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Entrevistas</p>
               </div>
               <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-white mb-1">+400</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Hires Exitosos</p>
               </div>
               <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-white mb-1">EMEA</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Alcance Global</p>
               </div>
            </div>

            {/* 3. EXPERTISE TABS SYSTEM */}
            <div>
               <div className="text-center mb-12">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Mi Ecosistema Profesional</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">Explora mi trayectoria y las áreas donde puedo aportarte mayor valor estratégico.</p>
               </div>

               {/* Tab Navigation */}
               <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {[
                     { id: 'experience', label: 'Trayectoria', icon: Building },
                     { id: 'roles', label: 'Roles', icon: Briefcase },
                     { id: 'sectors', label: 'Sectores', icon: Landmark },
                     { id: 'markets', label: 'Mercados', icon: Globe }
                  ].map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`
                           flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
                           ${activeTab === tab.id 
                              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20 scale-105' 
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}
                        `}
                     >
                        <tab.icon size={16} />
                        {tab.label}
                     </button>
                  ))}
               </div>

               {/* Tab Content */}
               <div className="bg-[#292524] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl min-h-[400px]">
                  
                  {activeTab === 'experience' && (
                     <div className="animate-fade-in-up">
                        <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                           <Building className="text-primary-500" /> Experiencia Corporativa
                        </h4>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                           
                           {/* Item 1: Adevinta (Current) */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-white text-lg">Adevinta</h5>
                                    <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded">Actual</span>
                                 </div>
                                 <p className="text-base text-gray-400 mb-2">Talent Acquisition Partner & Advisor</p>
                                 <p className="text-sm text-gray-500">Gestión de talento para marketplaces líderes (InfoJobs, Coches.net, Fotocasa).</p>
                              </div>
                           </div>

                           {/* Item 2: Kantox */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <h5 className="font-bold text-white text-lg mb-1">Kantox</h5>
                                 <p className="text-base text-gray-400 mb-2">Senior Talent Acquisition</p>
                                 <p className="text-sm text-gray-500">Fintech líder en automatización de gestión de divisas.</p>
                              </div>
                           </div>

                           {/* Item 3: Adevinta (Previous) */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <h5 className="font-bold text-white text-lg mb-1">Adevinta</h5>
                                 <p className="text-base text-gray-400 mb-2">Talent Acquisition</p>
                                 <p className="text-sm text-gray-500">Primera etapa gestionando perfiles Tech & Product.</p>
                              </div>
                           </div>

                            {/* Item 4: Improved Corporate Finance */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <h5 className="font-bold text-white text-lg mb-1">Improved Corporate Finance</h5>
                                 <p className="text-base text-gray-400 mb-2">Global Talent Manager</p>
                                 <p className="text-sm text-gray-500">M&A Boutique. Foco en Corporate Finance y banca de inversión.</p>
                              </div>
                           </div>

                           {/* Item 5: Klarna */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <h5 className="font-bold text-white text-lg mb-1">Klarna</h5>
                                 <p className="text-base text-gray-400 mb-2">Senior Recruiter EMEA</p>
                                 <p className="text-sm text-gray-500">Escalado de equipos Tech y Product durante la fase de hipercrecimiento.</p>
                              </div>
                           </div>

                           {/* Item 6: Michael Page & Wyser */}
                           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1c1917] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                              </div>
                              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors">
                                 <h5 className="font-bold text-white text-lg mb-1">Michael Page & Wyser</h5>
                                 <p className="text-base text-gray-400 mb-2">Recruitment Consultant</p>
                                 <p className="text-sm text-gray-500">Base sólida en consultoría de selección tradicional y headhunting.</p>
                              </div>
                           </div>

                        </div>
                     </div>
                  )}

                  {activeTab === 'roles' && (
                     <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                           <div className="flex items-center gap-3 text-orange-400 font-bold uppercase tracking-wider text-sm mb-4">
                              <Layout size={18} /> Corporate & G&A
                           </div>
                           {['Finance & CFO', 'Legal Counsel', 'Compliance', 'People & HR', 'Talent BP'].map((role, i) => (
                              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-base text-gray-300 hover:text-white hover:border-white/20 transition-all cursor-default">
                                 {role}
                              </div>
                           ))}
                        </div>
                        <div className="space-y-4">
                           <div className="flex items-center gap-3 text-orange-400 font-bold uppercase tracking-wider text-sm mb-4">
                              <TrendingUp size={18} /> Go-to-Market
                           </div>
                           {['Growth Marketing', 'Sales Leadership', 'CS & Account Mgmt', 'Revenue Ops', 'Business Dev'].map((role, i) => (
                              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-base text-gray-300 hover:text-white hover:border-white/20 transition-all cursor-default">
                                 {role}
                              </div>
                           ))}
                        </div>
                        <div className="space-y-4">
                           <div className="flex items-center gap-3 text-orange-400 font-bold uppercase tracking-wider text-sm mb-4">
                              <Zap size={18} /> Tech Pro
                           </div>
                           {['Data Analytics', 'Solutions Arch', 'Product Mgmt', 'Engineering Mgr', 'CTO / VP Eng'].map((role, i) => (
                              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-base text-gray-300 hover:text-white hover:border-white/20 transition-all cursor-default">
                                 {role}
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {activeTab === 'sectors' && (
                     <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors">
                           <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <Landmark className="text-orange-500" /> Fintech & Payments
                           </h4>
                           <p className="text-gray-400 text-base mb-6 leading-relaxed">
                              Experiencia profunda en entornos altamente regulados, gestión de riesgos y escalado rápido. Conocimiento de players clave como Klarna, Kantox, Revolut.
                           </p>
                           <div className="flex gap-2">
                              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Compliance</span>
                              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Banking</span>
                              <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Lending</span>
                           </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                           <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <Zap className="text-blue-500" /> AI & SaaS
                           </h4>
                           <p className="text-gray-400 text-base mb-6 leading-relaxed">
                              Foco en modelos de suscripción (ARR/MRR), Product-Led Growth y tecnologías emergentes. Experiencia con ElevenLabs y Adevinta.
                           </p>
                           <div className="flex gap-2">
                              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">GenAI</span>
                              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Marketplaces</span>
                              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">B2B SaaS</span>
                           </div>
                        </div>
                     </div>
                  )}

                  {activeTab === 'markets' && (
                     <div className="animate-fade-in-up flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                           <h4 className="text-2xl font-bold text-white">Alcance Geográfico</h4>
                           <p className="text-gray-400 text-base leading-relaxed">
                              Mi red y experiencia no se limitan a España. He liderado procesos de búsqueda en los principales hubs tecnológicos de Europa.
                           </p>
                           <ul className="space-y-4 text-base">
                              <li className="flex items-center gap-3 text-gray-300">
                                 <Globe className="text-primary-500" size={20} />
                                 <span><strong>UK & London:</strong> Mercado financiero y Fintech.</span>
                              </li>
                              <li className="flex items-center gap-3 text-gray-300">
                                 <Globe className="text-primary-500" size={20} />
                                 <span><strong>DACH (Berlín):</strong> Ecosistema Startup maduro.</span>
                              </li>
                              <li className="flex items-center gap-3 text-gray-300">
                                 <Globe className="text-primary-500" size={20} />
                                 <span><strong>Nordics (Estocolmo):</strong> Cultura de innovación y diseño.</span>
                              </li>
                              <li className="flex items-center gap-3 text-gray-300">
                                 <Globe className="text-primary-500" size={20} />
                                 <span><strong>España (BCN/MAD):</strong> Hubs de talento Tech en el sur de Europa.</span>
                              </li>
                           </ul>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-2xl p-8 flex items-center justify-center border border-white/5">
                            <div className="text-center">
                               <Quote size={32} className="text-primary-500 mb-4 mx-auto opacity-50" />
                               <p className="text-lg text-white font-serif italic leading-relaxed">
                                  "Entender los matices culturales y legales de contratar en diferentes jurisdicciones es clave para el éxito de una carrera internacional."
                               </p>
                            </div>
                        </div>
                     </div>
                  )}

               </div>
            </div>

         </FadeInSection>
      </section>

      {/* SOLUTIONS SECTION - Packs (UPDATED to 6 packs) */}
      <section id="packs" className="py-24 bg-[#fafaf9] relative">
         <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">Packs <span className="text-primary-600 italic">Profesionales</span></h2>
               <p className="text-gray-500 text-lg font-light">
                  Elige el mejor pack que te funcione.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
               {packs.map((pack) => (
                  <div 
                     key={pack.id} 
                     className={`
                        relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 h-full
                        ${pack.isPopular 
                           ? 'border-2 border-primary-500 shadow-xl transform md:-translate-y-2 z-10' 
                           : 'border border-gray-200 shadow-sm hover:shadow-lg'}
                     `}
                  >
                     {pack.isPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg w-max">
                           Popular
                        </div>
                     )}
                     
                     <div className="mb-4 text-center">
                        <h3 className="text-xl font-bold text-secondary-900 font-serif mb-2">{pack.name}</h3>
                        <div className="text-4xl font-bold text-secondary-900 mb-2">{pack.price}</div>
                        <p className="text-gray-500 text-sm">{pack.description}</p>
                     </div>
                     
                     <div className="w-full h-px bg-gray-100 my-6"></div>

                     <div className="space-y-4 mb-8 flex-grow">
                        {pack.features.map((feature, i) => (
                           <div key={i} className="flex items-start gap-3">
                              <Check size={16} className="text-primary-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 font-light">{feature}</span>
                           </div>
                        ))}
                     </div>

                     <div className="mt-auto pt-4">
                         <a 
                            href="#contacto" 
                            className={`block w-full py-3.5 rounded-lg font-bold text-sm text-center transition-all ${
                               pack.isPopular 
                               ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30' 
                               : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                            }`}
                         >
                            {pack.cta}
                         </a>
                     </div>
                  </div>
               ))}
            </div>
         </FadeInSection>
      </section>

      {/* COMPARISON TABLE (UPDATED) */}
      <section className="py-24 bg-[#fafaf9]">
         <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">Comparativa de <span className="text-primary-600 italic">Servicios</span></h2>
               <p className="text-gray-500 text-lg font-light">Encuentra el pack que mejor se adapte a tus necesidades profesionales.</p>
            </div>
            
            <div className="overflow-x-auto pb-4">
               <table className="w-full text-left border-collapse bg-[#1c1917] text-white rounded-3xl overflow-hidden shadow-2xl">
                  <thead>
                     <tr className="border-b border-gray-800">
                        <th className="p-6 text-lg font-bold font-serif w-1/4 text-white">Servicio Incluido</th>
                        <th className="p-6 text-center text-base font-bold w-[12%]">
                           <div className="flex flex-col"><span className="text-gray-400">Consulta</span><span className="text-xl text-white">35€</span></div>
                        </th>
                        <th className="p-6 text-center text-base font-bold w-[12%]">
                           <div className="flex flex-col"><span className="text-gray-400">CV Pro</span><span className="text-xl text-white">99€</span></div>
                        </th>
                        <th className="p-6 text-center text-base font-bold w-[12%] bg-primary-600 relative">
                           <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white text-primary-600 text-[9px] px-2 py-0.5 rounded-b-md font-bold uppercase">Naranja</div>
                           <div className="flex flex-col mt-1"><span className="text-white">CV + LK</span><span className="text-xl text-white">199€</span></div>
                        </th>
                        <th className="p-6 text-center text-base font-bold w-[12%]">
                           <div className="flex flex-col"><span className="text-gray-400">Estrategia</span><span className="text-xl text-white">299€</span></div>
                        </th>
                        <th className="p-6 text-center text-base font-bold w-[12%]">
                           <div className="flex flex-col"><span className="text-gray-400">Coaching</span><span className="text-xl text-white">499€</span></div>
                        </th>
                        <th className="p-6 text-center text-base font-bold w-[12%]">
                           <div className="flex flex-col"><span className="text-gray-400">Full</span><span className="text-xl text-white">TBD*</span></div>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="text-base font-light text-gray-300">
                     {/* Row 1 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Revisión de CV</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 2 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Optimización de LinkedIn</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 3 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Estrategia de búsqueda personalizada</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 4 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Coaching de propósito</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 5 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Seguimiento de posiciones</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 6 */}
                     <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Preparación de entrevistas</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                     {/* Row 7 */}
                     <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="p-6 font-bold text-primary-400">Apoyo en negociación</td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center bg-gray-900"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><XCircle size={18} className="text-red-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                        <td className="p-6 text-center"><div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto"><Check size={18} className="text-emerald-500"/></div></td>
                     </tr>
                  </tbody>
               </table>
               <p className="text-right text-xs text-gray-500 mt-4">*To be discussed</p>
            </div>
         </FadeInSection>
      </section>

      {/* SOCIAL PROOF - UPDATED TARGET (CAROUSEL) */}
      <section id="testimonios" className="py-24 bg-[#fafaf9] overflow-hidden">
         <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 text-center leading-tight">
               Gente <span className="italic text-primary-600">como tú</span> que ha conseguido sus objetivos
            </h2>
            <p className="text-center text-gray-500 text-lg font-light max-w-2xl mx-auto">
               Historias reales de crecimiento, transición y éxito.
            </p>
         </FadeInSection>

         {/* Carousel Container */}
         <div className="relative w-full">
            {/* Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

            {/* Track */}
            <div className="flex animate-scroll hover-pause w-max">
               {[...testimonials, ...testimonials].map((t, idx) => (
                  <div key={`${t.id}-${idx}`} className="w-[350px] md:w-[450px] mx-4 md:mx-6 flex-shrink-0">
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300">
                        {/* 5-STAR RATING REMOVED HERE AS REQUESTED */}
                        
                        <p className="text-gray-700 italic mb-8 text-base leading-relaxed flex-grow font-light">"{t.content}"</p>
                        <div className="flex items-center gap-4 mt-auto border-t border-gray-200 pt-4">
                           <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full bg-gray-200 object-cover" />
                           <div>
                              <p className="font-bold text-secondary-900 text-sm">{t.name}</p>
                              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                              <p className="text-xs text-primary-600">@ {t.company}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-secondary-900 text-white relative overflow-hidden">
         <FadeInSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">Preguntas Frecuentes</h2>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.q} answer={faq.a} />
               ))}
            </div>
         </FadeInSection>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section id="contacto" className="py-24 bg-primary-600 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <FadeInSection className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
               ¿Hablamos?
            </h2>
            <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto font-light">
               No pierdes nada por escribirme y contarme tu situación. Si veo que no puedo ayudarte, te lo diré honestamente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="mailto:alejandro.hernandez.ext@adevinta.com" className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Agendar Consulta Inicial
               </a>
               <a href="https://www.linkedin.com/in/alejandromartinezh/" target="_blank" rel="noreferrer" className="bg-primary-700 text-white border border-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-800 transition-all">
                  Ver mi LinkedIn
               </a>
            </div>
         </FadeInSection>
      </section>

      <Footer />
      <AIAdvisor />
    </div>
  );
};

export default Home;