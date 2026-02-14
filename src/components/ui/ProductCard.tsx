'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '../../types';
import { WhatsAppButton } from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getBadgeStyle = (badge: string) => {
    if (badge.includes('Mais')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (badge.includes('Novo') || badge.includes('Novidade')) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    return 'bg-rose-100 text-rose-800 border-rose-200';
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={`Foto do produto ${product.name}`}
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          width={600}
          height={600}
          unoptimized 
          priority={false}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" aria-hidden="true" />
        
        {product.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm border ${getBadgeStyle(product.badge)} z-10`}>
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">
              {product.category || 'Artesanato'}
            </span>
            <div className="flex text-amber-400" aria-label="Avaliação: 5 de 5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 font-medium">A partir de</span>
            <span className="font-bold text-slate-900 text-lg">
              {product.priceLabel?.replace('A partir de ', '') || 'Sob consulta'}
            </span>
          </div>
          <WhatsAppButton 
            message={product.whatsappMessage} 
            label="Pedir Agora" 
            variant="outline"
            className="!py-2 !px-5 text-sm hover:!bg-whatsapp hover:!text-white hover:!border-whatsapp"
            productId={product.id}
            productName={product.name}
            location="product_card"
          />
        </div>
      </div>
    </div>
  );
};
