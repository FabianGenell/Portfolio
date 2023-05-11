import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";

import styles from './projectpart.module.scss'

export default function ProjectPart({ project, children }) {
    return <section className={styles.projectPart}>
        <Image src={project.image} width={1920} height={1080} alt='2D Fighting game called HyperBattle' />
        <div>
            <div className={styles.textbox}>
                <h1>{project.title}</h1>
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
        </div>
    </section>
}