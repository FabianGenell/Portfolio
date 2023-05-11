import ProjectPart from '../components/ProjectPart'
import { SiNodedotjs, SiPostgresql, SiReact } from 'react-icons/si'

import styles from '../projectpage.module.scss'
import Image from 'next/image'

const project = {
    title: 'To-Do App',
    slug: 'todo',
    description: 'A simple to-do app where i built a full backend with all CRUD operations needed as well as a full user authentication system.',
    image: '/img/projects/todo/todos.png',
    technologies: [SiNodedotjs, SiPostgresql, SiReact],
    live: undefined,
    github: 'https://github.com/FabianGenell/todo-fullstack',
}

export default function Todo() {
    return <>
        <ProjectPart project={project} />

        <section className={styles.textRow}>
            <div>
                <h3>The Brief</h3>
                <p>A project during our backend course at HYPER ISLAND. The brief was simple: Create a To-Do app, both backend and frontend using Node, Postgres and Sequelize.</p>
            </div>
            <Image src='/img/projects/todo/eskil.jpg' width={830} height={464} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>The Result</h3>
                <p>I created the basic backend functionality after only a couple of days. But since I found it very fun I decided to continue coding and ended up implementing an entire authentication system using Json Web Tokens stored in the users session storage.</p>
                <p>I encrypted the passwords with bcrypt in the backend and used a my own express middleware to validate the token for each api request.</p>
            </div>
            <Image src='/img/projects/todo/login.png' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>

        <section className={styles.textRow}>
            <div>
                <h3>My Learnings</h3>
                <p>This project opened my eyes to how the web really works. I learned about HTTP requests, databases and authentication.</p>
                <p>Technologies I used during the project include: React, PostgreSQL, Node JS, Express, Sequelize, JWT and bcrypt.</p>
            </div>
            <Image src='/img/projects/todo/code.jpg' width={830} height={553} alt='2D Fighting game called HyperBattle' />
        </section>
    </>
}