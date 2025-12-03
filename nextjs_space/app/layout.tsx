
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { KeyboardNavigation } from '@/components/keyboard-navigation';
import { SlideNavigation } from '@/components/slide-navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unloxcyt Market Survey - Interactive Presentation',
  description: 'Comprehensive market analysis of Cosibelimab-ipdl for advanced cSCC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} h-1080px w-1920px`}>
        <Suspense fallback={null}>
          <KeyboardNavigation />
          <SlideNavigation />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
