import { About } from "../../components/About"
import { Card } from "../../components/Card"
import { CardProject } from "../../components/CardProject"
import { Carousel } from "../../components/Carousel"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Language } from "../../components/Language"
import { ProjectTitle } from "../../components/ProjectTitle"
import { Text } from "../../components/Text"
import styles from '../pages.module.css'

export const ENG = () => {
    return (
        <>
            <Header
                about="About"
                projects="Projects"
            />
            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Software Engineer"
                        location="São Paulo - Brazil"
                        curfew="Curfew"
                    />
                    <div className={styles.container}>
                        <Text
                            h1={<>Hello,<br />My name is<br />Evandro!</>}
                            paragraph1={<>I am a <strong>Software Engineer</strong>, currently a student at <strong>FIAP</strong>, where I deepen my knowledge in systems development and emerging technologies.</>}
                            paragraph2={<>I work professionally at <strong>Magellan Group</strong>, contributing to projects that involve innovative and scalable solutions for different areas of the market.</>}
                            paragraph3={<>I have experience in <strong>full stack development</strong>, software architecture best practices, and the integration of modern tools, always focusing on performance, usability, and code quality.</>}
                            h2="Get in Touch!"
                            lang='eng'
                        />
                    </div>
                </section>

                <div className={styles.scrollCenter}>
                    <div className={styles.scrollLine}>
                        <img src="/img/mouse.png" alt="Roll down" className={styles.mouse} />
                    </div>
                </div>

                <section id="about" className={styles.containerAbout}>
                    <div className={styles.containerAboutDescription}>
                        <div className={styles.containerAboutText}>
                            <About
                                h2={<>About <span>me</span></>}
                                p={"Since I was 14, I’ve had a strong interest in programming and website development, areas that inspire my curiosity and drive me to keep learning more. I also enjoy listening to music, which motivates and accompanies me as I explore new technologies and improve my skills in the world of development."}
                            />
                        </div>
                        <div className={styles.containerAboutLanguages}>
                            <Language
                                h3="Languages"

                                portuguese="Portuguese"
                                portugueseStatus="C2"
                                portuguesLevel="Proficient (Native)"
                                portuguesePercent={100}

                                english="English"
                                englishStatus="C2"
                                englishLevel="Proficient"
                                englishPercent={100}

                                spanish="Spanish"
                                spanishStatus="C1"
                                spanishLevel="Advanced"
                                spanishPercent={80}
                            />
                        </div>
                    </div>
                    <Carousel
                        h3="Technologies"
                    />
                </section>

                <section id="project" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Projects"
                        p="Hover to see more information"
                    />

                    <div className={styles.containerProjectCards}>
                        <CardProject
                            img='./img/projects/snks.jpeg'
                            h4="SNKS"
                            description="This page was developed as part of an academic assessment, focusing on the practical application of the Bootstrap framework and the concepts of responsiveness. The project demonstrates the construction of a modern and adaptable interface, ensuring a good user experience on different devices, such as desktops, tablets, and smartphones."
                            techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                            github="https://github.com/EvandroKaibara/SNKS"
                        />
                        <CardProject
                            img='./img/projects/sabara.jpeg'
                            h4="Sabará"
                            description="The project aims to optimize communication between different departments at Sabará Hospital, with the goal of reducing operational errors and rework. The proposal seeks to make processes more efficient, promoting greater integration between teams and improving the quality of care."
                            github="https://github.com/EvandroKaibara/Sabara"
                            techs={["React", "Node"]}
                        />
                        <CardProject
                            img='./img/projects/magellan.jpeg'
                            h4="Magellan UC"
                            description="Este proyecto se desarrolló con el objetivo de crear una página de inicio para el Grupo Magellan, destacando una de sus filiales, Magellan UC, especializada en excavaciones subterráneas en Florida. La página se diseñó para presentar los servicios de forma estratégica y atractiva, priorizando la usabilidad, el diseño adaptable y una comunicación eficaz con el público objetivo."
                            github="https://github.com/EvandroKaibara/MagellanGroup"
                            techs={["React", "Node"]}
                        />
                    </div>
                </section>
            </main>

            <Footer p="© 2025 EvandroKaibara. All rights reserved." />
        </>
    )
}