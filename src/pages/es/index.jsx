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

export const ES = () => {
    return (
        <>
            <Header
                about="Sobre"
                projects="Proyectos"
            />

            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Ingeniero de Software"
                        location="São Paulo - Brazil"
                        curfew="Currículo"
                    />
                    <div className={styles.container}>
                        <Text
                            h1={<>¡Hola,<br />Me llamo<br />Evandro!</>}
                            paragraph1={<>Soy <strong>Ingeniero de Software</strong>, actualmente estudiante en <strong>FIAP</strong>, donde profundizo mis conocimientos en desarrollo de sistemas y tecnologías emergentes.</>}
                            paragraph2={<>Trabajo profesionalmente en <strong>Magellan Group</strong>, contribuyendo en proyectos que implican soluciones innovadoras y escalables para diferentes áreas del mercado.</>}
                            paragraph3={<>Tengo experiencia en desarrollo <strong>full stack</strong>, buenas prácticas de arquitectura de software e integración de herramientas modernas, siempre con un enfoque en rendimiento, usabilidad y calidad del código.</>}
                            h2="¡Ponte en Contacto!"
                            lang='es'
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
                                h2={<>Acerca <span>de mí</span></>}
                                p={"Desde los 14 años, tengo un gran interés por la programación y la creación de sitios web, áreas que despiertan mi curiosidad y me impulsan a seguir aprendiendo cada vez más. Además, me gusta escuchar música, algo que me inspira y me acompaña mientras exploro nuevas tecnologías y mejoro mis habilidades en el mundo del desarrollo."}
                            />
                        </div>
                        <div className={styles.containerAboutLanguages}>
                            <Language
                                h3="Idiomas"

                                portuguese="Portugués"
                                portugueseStatus="C2"
                                portuguesLevel="Competente (Nativo)"
                                portuguesePercent={100}

                                english="Inglés"
                                englishStatus="C2"
                                englishLevel="Competente"
                                englishPercent={100}

                                spanish="Español"
                                spanishStatus="C1"
                                spanishLevel="Avanzado"
                                spanishPercent={80}
                            />
                        </div>
                    </div>
                    <Carousel
                        h3="Tecnologías"
                    />
                </section>
            </main>

            <section id="project" className={styles.containerProjects}>
                <ProjectTitle
                    h2="Proyectos"
                    p="Pasa el cursor para ver más información"
                />

                <div className={styles.containerProjectCards}>
                    <CardProject
                        img='./img/projects/snks.jpeg'
                        h4="SNKS"
                        description="Esta página se desarrolló como parte de una evaluación académica, centrada en la aplicación práctica del framework Bootstrap y los conceptos de adaptabilidad. El proyecto demuestra la construcción de una interfaz moderna y adaptable, que garantiza una buena experiencia de usuario en diferentes dispositivos, como ordenadores de escritorio, tabletas y teléfonos inteligentes."
                        techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                        github="https://github.com/EvandroKaibara/SNKS"
                    />
                    <CardProject
                        img='./img/projects/sabara.jpeg'
                        h4="Sabará"
                        description="El proyecto busca optimizar la comunicación entre los diferentes departamentos del Hospital Sabará, con el objetivo de reducir errores operativos y retrabajos. La propuesta pretende hacer los procesos más eficientes, promoviendo una mayor integración entre los equipos y mejorando la calidad de la atención."
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

            <Footer p="© 2025 EvandroKaibara. Todos los derechos reservados." />
        </>
    )
}