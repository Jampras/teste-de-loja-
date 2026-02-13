import React from 'react';
import { PenTool, Key, Heart, Coffee, PawPrint } from 'lucide-react';

// A11y: Updated colors to 600/700 shades for better contrast against light backgrounds
const categories = [
  { name: 'Acessórios', icon: Key, color: 'text-amber-700', bg: 'bg-amber-50' },
  { name: 'Papelaria', icon: PenTool, color: 'text-indigo-700', bg: 'bg-indigo-50' },
  { name: 'Decoração', icon: Coffee, color: 'text-rose-700', bg: 'bg-rose-50' },
  { name: 'Lembranças', icon: Heart, color: 'text-pink-700', bg: 'bg-pink-50' },
  { name: 'Pets', icon: PawPrint, color: 'text-emerald-700', bg: 'bg-emerald-50' },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50" aria-label="Categorias de produtos">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat) => (
            <a 
              key={cat.name}
              href="#products"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              <div className={`p-2 rounded-lg ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                <cat.icon size={20} />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
