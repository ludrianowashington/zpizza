import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZPizza Delivery',
  description: 'Massas Frescas, De Fabricação Própria, Produzidas com Ingredientes da Melhor Qualidade. Pizzaria em Recife com pizzas e massas artesanais.',
  keywords: 'pizza, pizzaria, delivery, entrega, pedidos, zpizza delivery',
  authors: [{name: 'Ludriano Washington', url: 'http://ludrianowashington.vercel.io'}],
  viewport: {width:  'device-width', initialScale: 1},

  openGraph: {
    type:'website',
    description: 'Massas Frescas, De Fabricação Própria, Produzidas com Ingredientes da Melhor Qualidade. Pizzaria em Recife com pizzas e massas artesanais.',
    title:'ZPizza Delivery',
    countryName: 'Brazil',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
