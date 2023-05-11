import styles from './projectpage.module.scss'

export default function ProjectLayout({ children }) {
    return (
        <main className={styles.projectpage}>{children}</main>
    )
}
