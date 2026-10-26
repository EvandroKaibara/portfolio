import { About } from "../../components/About"
import { Card } from "../../components/Card"
import { CardProject } from "../../components/CardProject"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Language } from "../../components/Language"
import { ProjectCarousel } from "../../components/ProjectCarousel"
import { ProjectTitle } from "../../components/ProjectTitle"
import { Text } from "../../components/Text"
import { Timeline } from "../../components/Timeline"
import { useReveal } from "../../hooks/useReveal"
import styles from '../pages.module.css'

export const ENG = () => {
    useReveal()

    return (
        <>
            <Header
                about="About"
                awards="Awards"
                projects="Projects"
            />
            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Software Engineer"
                        location="São Paulo - Brazil"
                        curfew="Curriculum"
                        link="https://drive.google.com/file/d/1gNcRvS33wIyRbuCgd8uGRBR6aesoigR5/view?usp=sharing"
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
                    <div className={styles.scrollCenter} aria-hidden="true">
                        <div className={styles.scrollLine}>
                            <img src="/img/mouse.png" alt="" className={styles.mouse} />
                        </div>
                    </div>
                </section>

                <section id="about" className={styles.containerAbout}>
                    <div className={styles.containerAboutDescription}>
                        <div className={styles.containerAboutText}>
                            <About
                                h2={<>About <span>me</span></>}
                                p={"Since I was 14, I’ve had a strong interest in programming and website development, areas that inspire my curiosity and drive me to keep learning more. I also enjoy listening to music, which motivates and accompanies me as I explore new technologies and improve my skills in the world of development."}
                            />
                        </div>
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
                    <Timeline
                        h3="Experience"
                        events={[
                            {
                                year: "2022 — Present",
                                title: "English Teacher",
                                description: "Wizard",
                            },
                            {
                                year: "2024 — Present",
                                title: "Software Engineer",
                                description: "Magellan Group",
                            },
                            {
                                year: "2026",
                                title: "Global Solution 2026 Winner",
                                description: "FIAP · 2x merit scholarship recipient · 2nd place at NEXT 2026",
                            },
                        ]}
                    />
                </section>

                <section id="awards" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Awards & Certificates"
                    />

                    <ProjectCarousel labels={{ prev: "Previous", next: "Next", carousel: "Carousel", grid: "Grid" }}>
                        <CardProject
                            img='./img/awards/Global-Solution-2026.jpeg'
                            h4="Global Solution 2026"
                            description="We won 1st place at FIAP's Global Solution 2026 Space Connect. Our group, ASTRO, built AstroSafra, a platform that checks planting land conditions in real time using satellite data and maps the best routes to transport everything that is produced."
                            techs={["FIAP", "1st place"]}
                        />
                        <CardProject
                            img='./img/awards/Talent-Summit-2026-web.jpg'
                            h4="Talent Summit 2026"
                            description="I was one of FIAP's Top Talents, the best students at the university, chosen to present their projects directly to representatives of major companies."
                            techs={["FIAP", "Top Talent"]}
                        />
                        <CardProject
                            img='./img/awards/Next-2026.jpeg'
                            h4="NEXT 2026"
                            description="I placed in the TOP 2 among more than 30 groups that presented a CRM for Hospital São Rafael. Our group built CRM Centrum, a modular CRM with an integrated LLM that generates reports from the hospital's data."
                            techs={["FIAP", "2nd place"]}
                        />
                    </ProjectCarousel>
                </section>

                <section id="project" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Projects"
                    />

                    <ProjectCarousel labels={{ prev: "Previous", next: "Next", carousel: "Carousel", grid: "Grid" }}>
                        <CardProject
                            img='./img/projects/snowecia.png'
                            h4="Snow&Cia"
                            description="Snow&Cia system was developed to manage pet care services and bookings. The platform allows customers to register their preferences, request services, and enter data, while administrators track bookings, payments, schedules, and registered services. The project prioritizes a modern, responsive, and intuitive interface for use on computers, tablets, and smartphones."
                            github="https://github.com/EvandroKaibara/snowcia"
                            techs={["React", "Java", "Spring Boot", "JWT", "PostgreSQL", "Flyway"]}
                        />
                        <CardProject
                            img='./img/projects/magellan.jpeg'
                            h4="Magellan UC"
                            description="This project was developed with the goal of creating a landing page for the Magellan Group, highlighting one of its subsidiaries, Magellan UC, which specializes in underground excavation in Florida. The page was designed to present the services in a strategic and attractive way, focusing on usability, responsive design, and efficient communication with the target audience."
                            github="https://github.com/EvandroKaibara/MagellanGroup"
                            techs={["React", "Node"]}
                        />
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
                    </ProjectCarousel>
                </section>
            </main>

            <Footer p="© 2025 EvandroKaibara. All rights reserved." />
        </>
    )
}
