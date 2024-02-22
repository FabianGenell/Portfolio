import './globals.scss';
import { Roboto_Slab } from 'next/font/google';

const roboto = Roboto_Slab({ subsets: ['latin'] });

export const metadata = {
    title: 'Fabian Genell Shopify Developer & Conversion Rate Expert',
    description:
        "Unlock your Shopify store's potential with Fabian Genell, a seasoned developer and conversion rate expert. Elevate your e-commerce success through tailored solutions and strategies designed to optimize performance and boost sales.",
    keywords:
        'Shopify developer, conversion rate optimization, e-commerce solutions, Shopify expert, improve online sales, e-commerce consultant, Shopify store optimization, increase conversion rate, Shopify design, Shopify customization'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
