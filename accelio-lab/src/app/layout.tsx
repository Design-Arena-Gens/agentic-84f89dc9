import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accelio Lab | AI Infrastructure Consulting",
  description:
    "Accelio Lab partners with medium and enterprise leaders to architect resilient AI infrastructure, accelerate responsible adoption, and operationalize intelligent workflows.",
  metadataBase: new URL("https://agentic-84f89dc9.vercel.app"),
  openGraph: {
    title: "Accelio Lab | AI Infrastructure Consulting",
    description:
      "Production-grade AI infrastructure, delivered with enterprise rigor and velocity.",
    url: "https://agentic-84f89dc9.vercel.app",
    siteName: "Accelio Lab",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Accelio Lab - AI Infrastructure Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelio Lab | AI Infrastructure Consulting",
    description:
      "Production-grade AI infrastructure, delivered with enterprise rigor and velocity.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
