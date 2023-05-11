import ProjectPart from '../components/ProjectPart'

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
    </>
}