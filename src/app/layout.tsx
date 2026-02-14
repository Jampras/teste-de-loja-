import React from 'react';
import '../styles/globals.css';

// Note: Metadata export is removed as it's a Server Component feature not supported in this client-side entry setup.
// Fonts are loaded via index.html

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-wrapper font-sans text-slate-900 bg-slate-50 min-h-screen">
      {children}
    </div>
  );
}
