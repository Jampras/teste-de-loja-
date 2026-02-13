import React from 'react';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Resina Art | Lembranças Exclusivas',
  description: 'Transforme momentos em memórias eternas com nossos produtos exclusivos em resina. Chaveiros, canetas e lembranças personalizadas.',
  openGraph: {
    type: 'website',
    title: 'Resina Art | Lembranças Exclusivas',
    description: 'Transforme momentos em memórias eternas com nossos produtos exclusivos em resina.',
    images: ['https://picsum.photos/seed/og/1200/630'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Tailwind CSS CDN and Config */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Inter', 'sans-serif'],
                      serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                      primary: '#0f172a',
                      secondary: '#64748b',
                      accent: '#d4af37',
                      // A11y Update: Darkened colors for better contrast with white text
                      whatsapp: '#128C7E', // WhatsApp Teal (Accessible)
                      whatsappHover: '#075E54', // WhatsApp Dark Teal
                    },
                    keyframes: {
                      fadeInUp: {
                        '0%': { opacity: '0', transform: 'translateY(20px)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                      },
                      pulseSlow: {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.05)' },
                      }
                    },
                    animation: {
                      'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                      'pulse-slow': 'pulseSlow 3s infinite',
                    }
                  }
                }
              }
            `,
          }}
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
