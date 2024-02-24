import Image from 'next/image'
import styles from './page.module.scss'
// import Sugarpunch from 'next/font/local'
import Project from './components/Project'

import { SiJavascript, SiCss3, SiHtml5, SiNodedotjs, SiPostgresql, SiReact, SiTypescript, SiWebgl, SiShopify, SiSass, SiGithub, SiLinkedin, SiTensorflow } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import Service from './components/Service'
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
    title: 'Shader Synth',
    slug: undefined,
    description: 'A synth built with tone js using tensorflow to control the synth with your hand, visualized by a GLSL shader.',
    image: '/img/projects/shader-synth/shader-synth-1.png',
    technologies: [SiReact, SiWebgl, SiTensorflow],
    live: 'https://shader-synth.netlify.app/',
    github: 'https://github.com/staffanosp/tone_js_react',
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
            <span>Hi , I’m</span> <br />
            Fabian<br />Genell
          </h1>

          <div className={styles.videoContainer}>
            <iframe
              title="vimeo-player"
              src='https://player.vimeo.com/video/829949085'
              frameborder="0"
              allowfullscreen
              className={styles.video}
            >
            </iframe>
          </div>
        </div>

        <a className={styles.button} href='mailto:fabian.genell@hyperisland.se'  >Contact Me</a>

      </section>

      <section>
      <h2>Services</h2>

        <Service/>

      </section>

      <section className={styles.projects}>
        <h2>Shopify<br/> Projects</h2>
        {projects.map((project, index) => <Project key={index} project={project} />)}

      </section>

      <nav className={styles.contact}>
        <h2>contact</h2>
        <a href='mailto:fabian.genell@hyperisland.se' className={styles.button}> <MdEmail /> Email</a>
        <a href='https://github.com/FabianGenell/' target='_blank' className={styles.button}> <SiGithub /> Github</a>
        <a href='https://www.linkedin.com/in/fabian-genell-0a4686246/' target='_blank' className={styles.button}><SiLinkedin /> LinkedIn</a>
      </nav>
    </main>
  )
}
