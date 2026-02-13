import React from 'react';
import { MousePointerClick, MessageCircle, Gift } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-2 block">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Como fazer seu pedido
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-50 group-hover:border-rose-100 transition-all duration-300 shadow-sm">
              <MousePointerClick className="w-10 h-10 text-slate-400 group-hover:text-rose-500 transition-colors" />
            </div>
            <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mb-4">1</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Escolha o Modelo</h3>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              Navegue pelo catálogo e escolha a peça que mais combina com você ou com quem vai presentear.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-whatsapp/10 group-hover:border-whatsapp/20 transition-all duration-300 shadow-sm">
              <MessageCircle className="w-10 h-10 text-slate-400 group-hover:text-whatsapp transition-colors" />
            </div>
            <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mb-4">2</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Personalize</h3>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              Clique em "Pedir" para abrir o WhatsApp. Lá combinamos cores, nomes, glitters e todos os detalhes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all duration-300 shadow-sm">
              <Gift className="w-10 h-10 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            </div>
            <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mb-4">3</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Receba em Casa</h3>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              Após a produção (7-10 dias), enviamos seu pedido com todo carinho e segurança para seu endereço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};