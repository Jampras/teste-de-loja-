'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { WhatsAppButton } from './ui/WhatsAppButton';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20;
    setIsScrolled(prev => {
      if (prev !== scrolled) return scrolled;
      return prev;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Catálogo', href: '#products' },
    { name: 'Sobre', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg p-1"
            aria-label="Resina Art - Ir para o início"
          >
            <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform" aria-hidden="true">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-serif font-bold text-slate-900 tracking-tight">
              Resina Art
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:text-rose-600 focus:underline decoration-2 underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton 
              message="Olá, gostaria de tirar uma dúvida." 
              label="Contato Rápido" 
              variant="ghost"
              className="!px-0 hover:!bg-transparent hover:!text-emerald-600 focus:ring-2 focus:ring-emerald-500 rounded-md"
              location="header_desktop"
            />
          </nav>

          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 shadow-xl animate-fade-in-down"
        >
          <nav className="flex flex-col gap-4" aria-label="Navegação Mobile">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-slate-700 py-3 border-b border-slate-50 focus:outline-none focus:text-rose-600 focus:pl-2 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <WhatsAppButton 
                message="Olá, gostaria de fazer um pedido pelo menu mobile." 
                label="Falar no WhatsApp" 
                className="w-full justify-center"
                location="header_mobile"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
