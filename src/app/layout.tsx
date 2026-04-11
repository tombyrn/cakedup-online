import type { Metadata } from "next";

// import { Crimson_Pro } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const roboto = Crimson_Pro({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif',] 
});

export const metadata: Metadata = {
  title: "Caked Up Cafe",
  description: "Family run small business specializing in gourmet cupcakes and cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  );
}
