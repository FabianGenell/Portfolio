import Image from 'next/image'
import styles from './page.module.scss'
// import Sugarpunch from 'next/font/local'
import Project from './components/Project'

import { SiJavascript, SiCss3, SiHtml5, SiNodedotjs, SiPostgresql, SiReact, SiTypescript, SiWebgl, SiShopify, SiSass, SiGithub, SiLinkedin } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
// const sugarpunch = Sugarpunch({ src: '../../public/fonts/Sugarpunch.otf' });

const projects = [
  {
    title: 'HyperBattle',
    slug: 'hyperbattle',
    description: 'A 2D fighting game with animations and multiple attacks. Made with JavaScript and the HTML canvas element.',
    image: '/img/projects/hyperbattle/jungle.png',
    technologies: [SiJavascript, SiCss3, SiHtml5],
    live: undefined,
    github: 'https://github.com/munnizashah/HyperBattle',
  },
  {
    title: 'To-Do App',
    slug: 'todo',
    description: 'A simple to-do app where i built a full backend with all CRUD operations needed as well as a full user authentication system.',
    image: '/img/projects/todo/todos.png',
    technologies: [SiNodedotjs, SiPostgresql, SiReact],
    live: undefined,
    github: 'https://github.com/FabianGenell/todo-fullstack',
  },
  {
    title: 'Kaleidoscope',
    slug: 'kaleidoscope',
    description: 'A kalidoscope generator built using GLSL code as well as React and Typescript.',
    image: '/img/projects/kaleidoscope/kaleidoscope.png',
    technologies: [SiReact, SiTypescript, SiWebgl],
    live: 'http://kaleidoscope.fabiangenell.com/',
    github: 'https://github.com/FabianGenell/kaleidoscope-generator',
  },
  {
    title: 'Classified App',
    slug: undefined,
    description: 'A client project made with React Naive. NDA signed.',
    image: '/img/projects/classified/list.PNG',
    technologies: [SiReact],
    live: undefined,
    github: undefined,
  },
  {
    title: 'Shopify Theme',
    slug: undefined,
    description: 'A shopify theme made for a single product store. Made with Shopify Liquid.',
    image: '/img/projects/heltra/computer.png',
    technologies: [SiShopify, SiSass],
    live: undefined,
    github: undefined,
  },
]

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.mainContainer}>
          <h1>
            <span>Hi , I’m</span><br />
            Fabian<br />Genell
          </h1>

          <div className={styles.videoContainer}>
            <iframe
              title="vimeo-player"
              src='https://player.vimeo.com/video/826104254'
              frameborder="0"
              allowfullscreen
              className={styles.video}
            >
            </iframe>
          </div>
        </div>

        <a className={styles.button} href='https://www.linkedin.com/in/fabian-genell-0a4686246/' target='_blank' >Contact Me</a>

      </section>

      <section className={styles.projects}>
        <h2>projects</h2>
        {projects.map((project, index) => <Project key={index} project={project} />)}

      </section>

      <section className={styles.about}>
        <h2>about me</h2>
        <div className={styles.aboutSection}>
          <Image src='/img/fabian/italy-lagonegro.png' width={300} height={300} alt="Fabian Genell" />
          <div>
            <p>My name is Fabian. I’m a 21 year old guy from Sweden. I am currently studying Frontend Development at HYPER ISLAND.</p>
            <p>But, I’ve actually been coding since I was 12 when I wanted upgrade my minecraft server so I was forced to dive in to Java.</p>
            <p>Although I didn’t touch code for a couple of years I’ve found my way back but this time to web development.</p>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <Image src='/img/fabian/jamtland.jpg' width={576} height={384} alt="Fabian Genell i  natur" />
          <div className={styles.hobbylist}>
            <strong>Outside of coding I enjoy</strong>
            <ul>
              <li>Documentary Film</li>
              <li>Photography</li>
              <li>Exercising</li>
              <li>Muay Thai</li>
              <li>Sales & Marketing</li>
              <li>Business</li>
            </ul>
          </div>
        </div>



      </section>

      <nav className={styles.contact}>
        <h2>contact</h2>
        <a href='mailto:fabian.genell@hyperisland.se' target='_blank' className={styles.button}> <MdEmail /> Email</a>
        <a href='https://github.com/FabianGenell/' target='_blank' className={styles.button}> <SiGithub /> Github</a>
        <a href='https://www.linkedin.com/in/fabian-genell-0a4686246/' target='_blank' className={styles.button}><SiLinkedin /> LinkedIn</a>
      </nav>
    </main>
  )
}
