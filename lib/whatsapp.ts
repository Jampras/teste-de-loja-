/**
 * Centralized configuration for WhatsApp integration.
 */
export const WHATSAPP_NUMBER = "5587999279050";

/**
 * Builds a formatted WhatsApp API link.
 * 
 * @param phone The phone number (will be sanitized to digits only).
 * @param message The message to send (will be URL encoded).
 * @returns The complete WhatsApp URL.
 */
export const buildWhatsAppLink = (phone: string, message: string): string => {
  // Remove any non-digit characters from the phone number
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
