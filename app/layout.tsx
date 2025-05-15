import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fustat = Fustat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://neuralpaths.ai'),
  title: {
    default: "Neural Paths | AI-Powered Solutions for Modern Challenges",
    template: "%s | Neural Paths"
  },
  description: "Neural Paths offers cutting-edge AI solutions including Rovyk (AI Powerhouse), Ava (Blood Report Analysis), Gitpeek (Github Analysis), and Tyme (Global Time Insights). Transform your workflow with our innovative AI tools.",
  keywords: ["AI solutions", "Rovyk", "Ava AI", "Gitpeek", "Tyme", "artificial intelligence", "blood report analysis", "github analysis", "time management", "AI tools"],
  authors: [{ name: "Neural Paths" }],
  creator: "Neural Paths",
  publisher: "Neural Paths",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralpaths.ai",
    siteName: "Neural Paths",
    title: "Neural Paths | AI-Powered Solutions for Modern Challenges",
    description: "Transform your workflow with our innovative AI tools including Rovyk, Ava, Gitpeek, and Tyme.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neural Paths - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neural Paths | AI-Powered Solutions",
    description: "Transform your workflow with our innovative AI tools including Rovyk, Ava, Gitpeek, and Tyme.",
    images: ["/images/twitter-image.jpg"],
    creator: "@neuralpaths",
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
  verification: {
    google: "dQ6RZFIZACQqh_NZ6SGNH6lOp5OAKbcQRpqahbhgVYo",
    other: {
      "google-site-verification": "dQ6RZFIZACQqh_NZ6SGNH6lOp5OAKbcQRpqahbhgVYo",
    },
  },
  alternates: {
    canonical: "https://neuralpaths.ai",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0C4TM1B3Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0C4TM1B3Y');
          `}
        </Script>
      </head>
      <body
        className={`${fustat.className} antialiased bg-[#1E1E1E] grain-texture`}
      >
        {children}
      </body>
    </html>
  );
}
