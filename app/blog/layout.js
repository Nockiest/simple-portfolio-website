import React from 'react'
import "../styles/globals.scss"    
import Footer from "../../components/Footer";
import { Inter } from 'next/font/google';
import BlogHero from '@/components/blog/BlogHero';
import NextArticlesRow from '@/components/blog/NextArticlesRow';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
    return (
      <html lang="en">
        
        <body  className={inter.className}>
          
          {/* <Nav absolutePos={true}/>
          <BlogHero /> */}
         {children}
         {/* <Footer /> */}
  {/* <NextArticlesRow /> */}
          </body>
          
      </html>
    )
  }
  