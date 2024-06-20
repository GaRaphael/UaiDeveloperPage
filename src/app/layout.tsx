// layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { FixedPlugin, Layout, Navbar, Footer } from "@/components"; // Certifique-se de ajustar os caminhos conforme necessário
import favicon from './../../public/suit_favicon.png';
import React from 'react';
import { CartProvider } from '../context/cartContext';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lotus",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href={favicon.src} type="image/png" />
      </head>
      <body className={roboto.className}>
        <CartProvider>
          <Layout>
            <Navbar />
            <div style={{ marginTop: '70px' }}> {/* Adiciona margem superior */}
              {children}
            </div>
            <FixedPlugin />
            <Footer />
          </Layout>
        </CartProvider>
      </body>
    </html>
  );
}
