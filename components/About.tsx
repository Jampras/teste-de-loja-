import React from 'react';
import Image from 'next/image';
import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 w-24 h-24 bg-rose-100 rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 w-32 h-32 bg-indigo-100 rounded-full -z-10 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[400px] lg:h-[500px]">
              <Image 
                src="https://picsum.photos/seed/artisan/800/600" 
                alt="Artesã trabalhando cuidadosamente com resina epóxi" 
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-50 hidden md:block z-10">
              <div className="flex items-center gap-4">
                <div className="bg-rose-50 p-3 rounded-full text-rose-500">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Feito à Mão</p>
                  <p className="text-xs text-slate-500">Cada peça é única</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-2 block">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Arte que Eterniza Momentos
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A <strong>Resina Art</strong> nasceu da paixão por transformar memórias líquidas em objetos sólidos e eternos. O que começou como um hobby se tornou uma missão: entregar peças exclusivas que contam histórias.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Utilizamos resina epóxi de alta viscosidade com proteção UV (não amarela), pigmentos importados e muito carinho em cada etapa, desde a mistura até o polimento final.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-indigo-50 p-2 rounded-lg text-indigo-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Exclusividade</h4>
                  <p className="text-sm text-slate-600">Nenhuma peça é igual a outra. A arte fluida da resina garante identidade única.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-emerald-50 p-2 rounded-lg text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Durabilidade</h4>
                  <p className="text-sm text-slate-600">Peças resistentes a quedas e com acabamento vitrificado de alto brilho.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
