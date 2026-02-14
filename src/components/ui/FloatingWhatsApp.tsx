'use client';

import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <WhatsAppButton 
      message="Olá! Preciso de ajuda com o site." 
      label="" 
      variant="floating" 
      location="floating_fab"
    />
  );
};
