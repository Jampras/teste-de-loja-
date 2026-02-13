/**
 * Simple tracking utility for client-side events.
 */
export const trackEvent = (eventName: string, data: Record<string, any>) => {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...data
  };

  // In a real app, this would send data to GA4, Meta Pixel, or a backend.
  console.log('[Analytics]', payload);
  
  // Example of how one might extend this to window.gtag if available
  // if (window.gtag) { window.gtag('event', eventName, data); }
};
