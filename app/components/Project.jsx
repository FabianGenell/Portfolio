import Image from 'next/image'
import Link from 'next/link'
import styles from './project.module.scss'
import { FaGithubSquare } from 'react-icons/fa'
import { BiRightArrowAlt } from 'react-icons/bi'

// const project = {
//     title: 'HyperBattle',
//     description: 'A 2D fighting game with animations and multiple attacks. Made with JavaScript and the HTML canvas element.',
//     image: '/img/projects/hyperbattle.png',
//     technologies: ['javascript'],
//     live: 'undefined',
//     github: 'https://github.com/munnizashah/HyperBattle',
// }

export default function Project({ project, children }) {
    return <div className={styles.project}>
        <Image src={project.image} width={1920} height={1080} alt='2D Fighting game called HyperBattle' />
        <div>
            <div className={styles.textbox}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div className={styles.buttonbox}>
                <div className={styles.buttonContainer}>
                    {project.live && <a className={styles.button} target='_blank' href={project.live}>VIEW LIVE VERSION</a>}
                    {project.github && <a className={styles.button} target='_blank' href={project.github}> <FaGithubSquare size='20px' /> GITHUB REPO</a>}
                </div>
                <div className={styles.iconContainer}>
                    {project.technologies.map((Element, index) => <Element key={index} size={27} />)}
                </div>
            </div>
            {project.slug && <Link href={`/project/${project.slug}`} className={styles.moreInfo}>MORE INFO <BiRightArrowAlt size={20} /></Link>}
        </div>
    </div>
}
