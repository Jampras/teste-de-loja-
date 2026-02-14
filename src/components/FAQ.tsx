'use client';

import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Posso personalizar cores e detalhes?",
    answer: "Sim! Todas as peças são 100% personalizáveis. Você escolhe as cores dos pigmentos, tipos de glitter, folhas de ouro/prata e o que será escrito (nomes ou frases)."
  },
  {
    question: "Qual o prazo de produção?",
    answer: "Como a resina precisa de um tempo específico de cura (secagem) para garantir qualidade e brilho, nosso prazo médio de produção é de 7 a 10 dias úteis após a confirmação do pagamento."
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: "Enviamos sim! Trabalhamos com Correios (SEDEX e PAC) e transportadoras. O valor do frete é calculado de acordo com seu CEP. Também oferecemos retirada local para clientes da região."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos pagamento via PIX (com desconto especial), Cartão de Crédito (com opção de parcelamento) e Boleto Bancário."
  },
  {
    question: "Quais cuidados devo ter com a peça de resina?",
    answer: "Para manter o brilho, evite exposição prolongada ao sol forte (que pode amarelar a peça com os anos) e não utilize produtos químicos abrasivos na limpeza. Um pano macio resolve!"
  },
  {
    question: "Como faço para encomendar?",
    answer: "É muito simples! Escolha o modelo que gostou aqui no site e clique no botão 'Pedir no WhatsApp'. Você será direcionado para conversar diretamente conosco para definir os detalhes da personalização."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-600">Tudo o que você precisa saber antes de fazer seu pedido exclusivo.</p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none focus:bg-slate-100 focus:ring-2 focus:ring-inset focus:ring-rose-500"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                >
                  <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                  {isOpen ? (
                    <Minus size={20} className="text-slate-500 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus size={20} className="text-slate-500 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                <div 
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-4 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
