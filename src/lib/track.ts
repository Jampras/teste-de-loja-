/**
 * Simple tracking utility for client-side events.
 */
export const trackEvent = (eventName: string, data: Record<string, any>) => {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...data
  };

  // Safely check for development environment to avoid "process is not defined" errors in browser
  const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development';
  
  // In a real app, this would send data to GA4, Meta Pixel, or a backend.
  if (isDev) {
    console.log('[Analytics]', payload);
  }
};
