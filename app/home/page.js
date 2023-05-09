import Image from 'next/image'
import styles from './page.module.scss'
import Sugarpunch from 'next/font/local'
import Project from './components/projects'

const sugarpunch = Sugarpunch({ src: '../../public/fonts/Sugarpunch.otf' })

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <h1>
          <span>Hi , I’m</span><br />
          Fabian<br />Genell
        </h1>
        <a className={styles.button}>Contact</a>
      </section>

      <section className={styles.projects}>
        <h2>projects</h2>
        <Project />
      </section>

      <section className={styles.about}>
        <h2>about me</h2>
        <p>My name is Fabian. I’m a 21 year old guy from Sweden. I am currently studying Frontend Development at HYPER ISLAND.</p>
        <Image src='/img/fabian/italy-lagonegro.png' width={300} height={300} alt="Fabian Genell" />
        <p>But, I’ve actually been coding since I was 12 when I wanted upgrade my minecraft server so I was forced to dive in to Java.</p>
        <p>Although I didn’t touch code for a couple of years I’ve found my way back but this time to web development.</p>
        <Image src='/img/fabian/jamtland.jpg' width={500} height={300} alt="Fabian Genell i  natur" />
        <strong>Outside of coding I enjoy</strong>
        <ul>
          <li>Documentary Film</li>
          <li>Photography</li>
          <li>Exercising</li>
          <li>Muay Thai</li>
          <li>Sales & Marketing</li>
          <li>Business</li>
        </ul>


      </section>

      <nav className={styles.contact}>
        <h2>contact</h2>
        <a href='mailto:fabian.genell@hyperisland.se' className={styles.button}>Email</a>
        <a href='https://github.com/FabianGenell/' className={styles.button}>Github</a>
        <a href='https://www.linkedin.com/in/fabian-genell-0a4686246/' className={styles.button}>LinkedIn</a>
      </nav>
    </main>
  )
}
