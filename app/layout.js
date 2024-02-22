import './globals.scss'
import { Roboto_Slab } from 'next/font/google'

const roboto = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'Fabian Genell',
  description: 'Shopify Develper & Conversion rate expert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
