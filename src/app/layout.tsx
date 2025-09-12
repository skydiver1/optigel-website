import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Opti-15 Gel - Drug-Free, Instant, Cooling Pain Relief",
  description: "Revolutionary pain relief gel with natural ingredients. Fast, effective relief for painful joints. 90-day money-back guarantee. UK-based company with express shipping.",
  keywords: "pain relief, gel, natural ingredients, joint pain, muscle pain, cooling relief, arnica, menthol, eucalyptus, anti-inflammatory",
  authors: [{ name: "Opti-15 Gel" }],
  creator: "Opti-15 Gel",
  publisher: "Opti-15 Gel",
  metadataBase: new URL('https://optigel.co.uk'),
  alternates: {
    canonical: '/',
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
  openGraph: {
    title: "Opti-15 Gel - Fast, Effective Relief For Painful Joints",
    description: "Revolutionary drug-free pain relief gel with natural ingredients. Reduces inflammation, improves circulation, and provides cooling comfort.",
    url: "https://optigel.co.uk",
    siteName: "Opti-15 Gel",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Opti-15 Gel - Fast, Effective Relief For Painful Joints',
        type: 'image/svg+xml',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Opti-15 Gel - Drug-Free Pain Relief",
    description: "Revolutionary pain relief gel with natural ingredients. Fast, effective relief for painful joints.",
    images: ['/og-image.svg'],
    creator: '@opti15gel',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.variable} font-assistant antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SXD1SN8Q2K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SXD1SN8Q2K');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
