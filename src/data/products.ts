import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chaveiro Letra Inicial',
    shortDescription: 'Chaveiro personalizado com sua inicial, folhas de ouro e pigmentos exclusivos.',
    image: 'https://picsum.photos/seed/keychain/600/600',
    whatsappMessage: 'Olá! Gostaria de saber preço e prazo para um Chaveiro de Letra Inicial personalizado com [INSERIR COR/NOME].',
    badge: 'Mais Pedido',
    priceLabel: 'A partir de R$ 25,00',
    category: 'Acessórios'
  },
  {
    id: '2',
    name: 'Caneta Personalizada',
    shortDescription: 'Caneta recarregável com glitter e nome personalizado. Escrita suave e design único.',
    image: 'https://picsum.photos/seed/pen/600/600',
    whatsappMessage: 'Olá! Gostaria de saber preço e prazo para uma Caneta Personalizada com o nome [INSERIR NOME].',
    badge: 'Ideia de Presente',
    priceLabel: 'R$ 35,00',
    category: 'Papelaria'
  },
  {
    id: '3',
    name: 'Marca Páginas Floral',
    shortDescription: 'Marca páginas delicado com flores secas reais encapsuladas em resina cristal.',
    image: 'https://picsum.photos/seed/bookmark/600/600',
    whatsappMessage: 'Olá! Gostaria de saber preço e prazo para um Marca Páginas Floral com as cores [INSERIR CORES].',
    badge: 'Personalizável',
    priceLabel: 'R$ 20,00',
    category: 'Papelaria'
  },
  {
    id: '4',
    name: 'Porta-Joias Marmorizado',
    shortDescription: 'Bandeja porta-joias com efeito marmorizado e bordas douradas. Elegância para seu ambiente.',
    image: 'https://picsum.photos/seed/tray/600/600',
    whatsappMessage: 'Olá! Gostaria de saber preço e prazo para um Porta-Joias Marmorizado no estilo [INSERIR ESTILO].',
    priceLabel: 'R$ 55,00',
    category: 'Decoração'
  },
  {
    id: '5',
    name: 'Lembrancinha Maternidade',
    shortDescription: 'Kit com 10 mini corações em resina. A lembrança perfeita para momentos especiais.',
    image: 'https://picsum.photos/seed/baby/600/600',
    whatsappMessage: 'Olá! Gostaria de orçamento para Lembrancinhas de Maternidade. Quantidade: [INSERIR QUANTIDADE].',
    badge: 'Sob Encomenda',
    priceLabel: 'Consulte Pacotes',
    category: 'Lembranças'
  },
  {
    id: '6',
    name: 'Placa Pet Identificação',
    shortDescription: 'Plaquinha de identificação resistente em formato de osso ou círculo, com nome e telefone.',
    image: 'https://picsum.photos/seed/pet/600/600',
    whatsappMessage: 'Olá! Gostaria de saber preço e prazo para uma Placa Pet de Identificação com o nome [INSERIR NOME DO PET].',
    priceLabel: 'R$ 30,00',
    category: 'Pets'
  }
];
