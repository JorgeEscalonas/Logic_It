import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';

// Optimize fonts with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.logicit.com'), // Replace with actual domain when live
  title: {
    default: 'Logic It | Enterprise Software Architecture & Digital Systems',
    template: '%s | Logic It Systems',
  },
  description: 'Consultora de ingeniería de software especializada en sistemas de misión crítica, arquitectura escalable y transformación digital para corporativos globales.',
  keywords: [
    'Software Architecture',
    'Enterprise Systems',
    'Digital Transformation',
    'Cloud Native',
    'Microservices',
    'Fintech Solutions',
    'High Performance Computing',
    'Ingeniería de Software',
    'Desarrollo a Medida'
  ],
  authors: [{ name: 'Logic It Systems Engineering Team' }],
  creator: 'Logic It Systems',
  publisher: 'Logic It Systems C.A.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Logic It | Enterprise Software Architecture',
    description: 'Ingeniería de software de alto nivel para operaciones críticas. Arquitectura, Escalabilidad y Seguridad.',
    url: 'https://www.logicit.com',
    siteName: 'Logic It Systems',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists or create it
        width: 1200,
        height: 630,
        alt: 'Logic It Systems Enterprise Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic It | Systems Engineering',
    description: 'Sistemas diseñados, no decorados. Arquitectura de software para el futuro empresarial.',
    creator: '@logicit_',
    images: ['/twitter-image.jpg'], // Ensure this image exists or create it
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.logicit.com',
    languages: {
      'en-US': 'https://www.logicit.com/en',
      'es-ES': 'https://www.logicit.com/es',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
        <div className="grain-texture fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]" />
        {children}

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Logic It Systems',
              url: 'https://www.logicit.com',
              logo: 'https://www.logicit.com/icon.png',
              description: 'Consultora de ingeniería de software para sistemas enterprise de misión crítica.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tech District Center, Piso 4',
                addressLocality: 'Caracas', // Adjust based on strict "real" location if known, otherwise generic is fine
                addressCountry: 'VE'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+58-212-555-0199',
                contactType: 'sales',
                email: 'enterprise@logicit.com'
              },
              sameAs: [
                'https://www.instagram.com/logicit_',
                'https://www.linkedin.com/company/logicit'
              ]
            })
          }}
        />
      </body>
    </html>
  );
}