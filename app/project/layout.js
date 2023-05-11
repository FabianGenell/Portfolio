import Link from 'next/link'
import styles from './projectpage.module.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'

export default function ProjectLayout({ children }) {
    return (<>
        <nav><Link className={styles.backLink} href='/'><BiLeftArrowAlt size={28} /> GO BACK</Link></nav>
        <main className={styles.projectpage}>
            {children}
        </main>
    </>)
}
