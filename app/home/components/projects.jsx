import Image from 'next/image'
import styles from './project.module.scss'


const project = {
    title: 'HyperBattle',
    description: 'A 2D fighting game with animations and multiple attacks. Made with JavaScript and the HTML canvas element.',
    image: '/img/projects/hyperbattle.png',
    technologies: ['javascript'],
    live: undefined,
    github: 'https://github.com/munnizashah/HyperBattle',


}

export default function Project() {
    return <div className={styles.project}>
        <Image src={project.image} width={1920} height={1080} alt='2D Fighting game called HyperBattle' />

        <div className={styles.textbox}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
        {/* TECHNOLOGY BADGES */}
        <button>VIEW LIVE VERSION</button>
        <button>GITHUB REPO</button>
        <a href="">MORE INFO</a>
    </div>
}