
import {  Suspense } from 'react';
import "./globals.css";
import { Poppins } from "next/font/google";
import Loading from '@/components/Loading';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  preload: true, // Enable preloading
});

export const metadata = {
  title: "FolioCraft | skrsikop",
  description: "Portfolio Website Template || Skrsikop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${poppins.variable} font-poppins antialiased px-7 overflow-x-hidden py-2 pt-5 bg-gradient-to-l from-indigo-50 to-gray-50`}>
        {/* Suspense for lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Loading />
          <CustomCursor />
          <Navbar aria-label="Main navigation" />
        </Suspense>

        {/* Main content */}
        <main id="main">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
