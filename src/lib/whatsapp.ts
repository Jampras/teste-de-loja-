/**
 * Centralized configuration for WhatsApp integration.
 */
export const DEFAULT_PHONE = "5587999279050";

/**
 * Builds a formatted WhatsApp API link.
 * 
 * @param message The message to send.
 * @param phone The phone number (defaults to system default).
 * @returns The complete WhatsApp URL.
 */
export const buildWhatsAppLink = (message: string, phone: string = DEFAULT_PHONE): string => {
  // Remove any non-digit characters from the phone number
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
