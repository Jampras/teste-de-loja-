'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { WhatsAppButtonProps } from '../../types';
import { trackEvent } from '../../lib/track';

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message, 
  label = "Pedir no WhatsApp", 
  className = "",
  variant = 'primary',
  iconSize = 20,
  productId,
  productName,
  location = 'unknown'
}) => {
  // Use centralized utility to build the link
  const link = buildWhatsAppLink(message);

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      productId: productId || 'n/a',
      productName: productName || 'general_inquiry',
      location: location,
      targetUrl: link
    });
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:scale-95";
  
  const variants = {
    primary: "bg-whatsapp hover:bg-whatsappHover text-white shadow-lg shadow-green-200 py-3 px-6 hover:-translate-y-1",
    outline: "border-2 border-whatsapp text-whatsapp hover:bg-green-50 py-2 px-4 hover:shadow-sm",
    ghost: "text-slate-600 hover:text-whatsapp hover:bg-green-50 py-2 px-4",
    floating: "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-whatsapp hover:bg-whatsappHover text-white p-4 shadow-xl hover:shadow-2xl animate-pulse-slow hover:animate-none hover:scale-110"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // Accessible label: prefer explicit label, append product name if available for context
  const accessibleLabel = productName 
    ? `${label} - ${productName}` 
    : label || "Contato via WhatsApp";

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={buttonClasses}
      aria-label={accessibleLabel}
      onClick={handleClick}
    >
      <MessageCircle size={variant === 'floating' ? 28 : iconSize} />
      {variant !== 'floating' && <span>{label}</span>}
    </a>
  );
};
