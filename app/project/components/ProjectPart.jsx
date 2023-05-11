import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";

export default function ProjectPart({ project }) {
    return <div className={styles.project}>
        <Image src={project.image} width={1920} height={1080} alt='2D Fighting game called HyperBattle' />
        <div>
            <div className={styles.textbox}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div className={styles.buttonbox}>
                <div className={styles.buttonContainer}>
                    {project.live && <a className={styles.button} href={project.live}>VIEW LIVE VERSION</a>}
                    {project.github && <a className={styles.button} href={project.github}> <FaGithubSquare size='20px' /> GITHUB REPO</a>}
                </div>
                <div className={styles.iconContainer}>
                    {children}
                </div>
            </div>
        </div>
    </div>
}