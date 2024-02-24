import Image from 'next/image'
import Link from 'next/link'
import styles from './service.module.scss'
import { BiRightArrowAlt } from 'react-icons/bi'

/* const service = {
    title: 'Shopify Conversion Rate Optimization',
    slug: 'shopify-conversion-rate-optimization',
    description: "Boost your store's conversion rate with my specialized Shopify one-time service. Focused on research, design, and development, I craft tailored solutions to significantly improve your online sales and customer engagement.",
    image: '/img/services/shopify-conversion-rate.svg',
    image_alt: 'Shopify Conversion Rate Boost by 36%',
}
 */
export default function Service({service}) {
    return <div className={styles.service}>
        <Image src={service.image} width={1920} height={1080} alt={service.image_alt} />
        <div>

        <div className={styles.textbox}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </div>
         <a className={styles.button} target='_blank' href='GOOGLE.COM'>GET IN CONTACT</a>

        {service.slug && <Link href={`/service/${service.slug}`} className={styles.moreInfo}>MORE INFO <BiRightArrowAlt size={20} /></Link>}
        </div>
    </div>
}