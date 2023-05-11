import ProjectPart from '../components/ProjectPart'
import { SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si'

import styles from '../projectpage.module.scss'
import Image from 'next/image'

const project = {

    title: 'HyperBattle',
    slug: 'hyperbattle',
    description: 'A 2D fighting game with animations and multiple attacks. Made with JavaScript and the HTML canvas element.',
    image: '/img/projects/hyperbattle/jungle.png',
    technologies: [SiJavascript, SiCss3, SiHtml5],
    live: undefined,
    github: 'https://github.com/munnizashah/HyperBattle',

}

export default function HyperBattle() {
    return <>
        <ProjectPart project={project} />

        <section className={styles.textRow}>
            <div>
                <h3>The Brief</h3>
                <p>HyperBattle was a group project from HYPER ISLAND. In groups of 5 people our class was assigned to create a fully functional game using just Javscript, HTML and CSS.</p>
                <p>Together we came up with the idea of making a fighting game between our teacher and one of our fellow students.</p>
            </div>
            <Image src='/img/projects/hyperbattle/arena.png' width={830} height={464} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>The Result</h3>
                <p>We created the game using Javascript and the HTML canvas element. The game is very class based where each sprite (image / pixelart) is it’s own class and players and attacks are extensions of that class.</p>
                <p>We ended up adding two different attacks. The normal punches and the ability to shoot random memes fetched from an API because our teacher who was one of the game characters was notorious for adding memes to his presentations.</p>
            </div>
            <Image src='/img/projects/hyperbattle/playing.jpg' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>My Contribution</h3>
                <p>I was the one who was most experienced coding in our group so I naturally ended up coding large parts of the game. I made the source code, making the sprites work, adding attacks and made the main logic of the game.</p>
            </div>
            <Image src='/img/projects/hyperbattle/code.png' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>
    </>
}