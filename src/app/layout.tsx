import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Opti-15 Gel - Drug-Free, Instant, Cooling Pain Relief",
  description: "Revolutionary pain relief gel with natural ingredients. 90-day money-back guarantee. UK-based company with express shipping.",
  keywords: "pain relief, gel, natural ingredients, joint pain, muscle pain, cooling relief",
  openGraph: {
    title: "Opti-15 Gel - Drug-Free Pain Relief",
    description: "Revolutionary pain relief gel with natural ingredients",
    url: "https://optigel.co.uk",
    siteName: "Opti-15 Gel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.variable} font-assistant antialiased`}>
        {children}
      </body>
    </html>
  );
}
