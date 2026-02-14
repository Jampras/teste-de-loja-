export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  whatsappMessage: string;
  badge?: string;
  priceLabel?: string;
  category?: string;
}

export interface WhatsAppButtonProps {
  message: string;
  label?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'floating';
  iconSize?: number;
  productId?: string;
  productName?: string;
  location?: string;
}
