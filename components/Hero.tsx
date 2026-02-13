import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-200/50 text-slate-600 text-sm font-medium mb-6 animate-fade-in-up">
            ✨ Arte feita à mão com amor
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Sua Ideia, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
              Eternizada em Resina
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Peças exclusivas feitas à mão: Chaveiros, Canetas e Lembranças que contam a sua história.
            Design único, durabilidade e acabamento premium.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton 
              message="Olá! Vim pelo site e gostaria de um orçamento personalizado."
              label="Fazer Orçamento no WhatsApp"
              className="w-full sm:w-auto text-lg !px-8 !py-4"
              location="hero_cta"
            />
            <a 
              href="#products" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm hover:shadow-md"
            >
              Ver Catálogo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
