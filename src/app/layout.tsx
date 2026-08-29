import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "NyaySutra | AI-Powered Legal Intelligence Platform",
  description: "NyaySutra is an AI legal document summarizer, contract risk analysis, and case delay prediction platform helping Citizens, Lawyers, and Judges understand legal documents faster.",
  openGraph: {
    title: "NyaySutra | AI-Powered Legal Intelligence Platform",
    description: "AI legal document summarizer, contract risk analysis, and case delay prediction platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NyaySutra | AI-Powered Legal Intelligence Platform",
    description: "AI legal document summarizer, contract risk analysis, and case delay prediction platform.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "NyaySutra",
        "url": "https://nyaysutra.demo",
        "logo": "https://nyaysutra.demo/logo.png",
        "description": "AI-Powered Legal Intelligence Platform"
      },
      {
        "@type": "SoftwareApplication",
        "name": "NyaySutra",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "AI legal document summarizer, contract risk analysis, and case delay prediction platform."
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        {children}
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
