import ProjectPart from '../components/ProjectPart'
import { SiWebgl, SiTypescript, SiReact } from 'react-icons/si'

import styles from '../projectpage.module.scss'
import Image from 'next/image'

const project = {
    title: 'Kaleidoscope',
    slug: 'kaleidoscope',
    description: 'A kalidoscope generator built using GLSL code as well as React and Typescript.',
    image: '/img/projects/kaleidoscope/kaleidoscope.png',
    technologies: [SiReact, SiTypescript, SiWebgl],
    live: 'http://kaleidoscope.fabiangenell.com/',
    github: 'https://github.com/FabianGenell/kaleidoscope-generator',
}

export default function Kaleidoscope() {
    return <>
        <ProjectPart project={project} />

        <section className={styles.textRow}>
            <div>
                <h3>The Project</h3>
                <p>Learning about GLSL I learnt how to make a kaleidoscope. One of the parts I found most entertaining learning GLSL was playing with different variables and seeing how to images would change. Therefor, I wanted to create my own kaleidoscope generator.</p>
            </div>
            <Image src='/img/projects/kaleidoscope/kodelife.jpg' width={830} height={464} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>The Result</h3>
                <p>The result was a very interactive kaleidoscope that you can change to your own liking. I also uploaded many pictures to base the kaleidoscope on.</p>
                <p>Potential improvements I would like to make is being able to upload your own pictures and making the generator less intense on the GPU.</p>
            </div>
            <Image src='/img/projects/kaleidoscope/kaleidoscope-2.png' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>Obstacles</h3>
                <p>During the project I decided to use React as well as TypeScript which is something I had never done before.</p>
                <p>Furthermore the library I was using didn’t have TypeScript support and I had to use another version of it. However, this version was configured to use the wrong files in their package.json. I fixed the issue and let the author know about the bug.</p>
            </div>
            <Image src='/img/projects/kaleidoscope/github.png' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>
    </>
}