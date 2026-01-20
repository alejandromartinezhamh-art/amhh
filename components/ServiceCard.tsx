import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 border border-gray-100 flex flex-col h-full group"
    >
      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      
      <div className="mb-6 space-y-2">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
            <span className="text-xs text-gray-600 font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
         <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Reservar ahora <ArrowRight size={16} />
         </a>
      </div>
    </div>
  );
};

export default ServiceCard;