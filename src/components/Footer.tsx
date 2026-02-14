import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Resina Art</h3>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Transformando resina em memórias tangíveis. Cada peça é única, feita à mão com dedicação e materiais de alta qualidade.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Início</a></li>
              <li><a href="#products" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Catálogo</a></li>
              <li><a href="#about" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Quem Somos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Política de Envio (FAQ)</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-rose-500 focus:text-white"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-blue-600 focus:text-white"
                aria-label="Curta nossa página no Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-slate-700 focus:text-white"
                aria-label="Entre em contato por E-mail"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-4">
              Enviamos para todo o Brasil.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Resina Art. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
