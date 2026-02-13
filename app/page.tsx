import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { HowItWorks } from '../components/HowItWorks';
import { Categories } from '../components/Categories';
import { About } from '../components/About';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Categories />

        <About />

        <HowItWorks />

        {/* Products Grid */}
        <section id="products" className="py-20 bg-slate-50 container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-rose-500 uppercase mb-2 block">
              Catálogo Exclusivo
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Escolha sua Peça Única
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Cada detalhe é personalizável. Clique em "Pedir Agora" para definir cores e nomes no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-600 mb-4 font-medium">Tem uma ideia diferente?</p>
              <WhatsAppButton 
                message="Olá! Tenho uma ideia de produto personalizado que não vi no site." 
                label="Orçamento Personalizado" 
                variant="outline"
                className="w-full sm:w-auto"
                location="custom_order_cta"
              />
            </div>
          </div>
        </section>
        
        <Testimonials />

        <FAQ />

        {/* Final CTA Section */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
              Vamos criar algo especial?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Não deixe para última hora. Garanta sua encomenda com antecedência e receba um produto feito com alma e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppButton 
                message="Olá! Gostaria de fazer um pedido agora."
                label="Iniciar Pedido no WhatsApp" 
                variant="primary"
                className="text-lg !px-8 !py-4"
                location="footer_cta"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button - Always visible now */}
      <WhatsAppButton 
        message="Olá! Preciso de ajuda com o site." 
        label="" 
        variant="floating" 
        location="floating_fab"
      />
    </div>
  );
}
