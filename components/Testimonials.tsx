import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ana Pereira",
    text: "O chaveiro ficou perfeito! Exatamente como eu imaginava. O atendimento foi super atencioso e me ajudaram a escolher as cores certas.",
    role: "Cliente Verificada"
  },
  {
    id: 2,
    name: "Mariana Silva",
    text: "Encomendei as lembrancinhas do batizado do meu filho e todos amaram. Qualidade impecável e entrega dentro do prazo combinado.",
    role: "Mãe do Pedro"
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "A caneta é linda, super brilhante e escreve muito bem. Já quero encomendar outra para presentear minha mãe no aniversário dela.",
    role: "Apaixonada por Papelaria"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <span className="text-xs text-slate-400 uppercase tracking-wide">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};