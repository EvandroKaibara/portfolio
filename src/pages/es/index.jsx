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

export const ES = () => {
    useReveal()

    return (
        <>
            <Header
                about="Sobre"
                awards="Premios"
                projects="Proyectos"
            />

            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Ingeniero de Software"
                        location="São Paulo - Brazil"
                        curfew="Currículo"
                        link="https://drive.google.com/file/d/1pjYnRDqY84OpjywSSgMMWjmp--ydCO-7/view?usp=sharing"
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
                                h2={<>Acerca <span>de mí</span></>}
                                p={"Desde los 14 años, tengo un gran interés por la programación y la creación de sitios web, áreas que despiertan mi curiosidad y me impulsan a seguir aprendiendo cada vez más. Además, me gusta escuchar música, algo que me inspira y me acompaña mientras exploro nuevas tecnologías y mejoro mis habilidades en el mundo del desarrollo."}
                            />
                        </div>
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
                    <Timeline
                        h3="Experiencia"
                        events={[
                            {
                                year: "2022 — Actualidad",
                                title: "Profesor de Inglés",
                                description: "Wizard",
                            },
                            {
                                year: "2024 — Actualidad",
                                title: "Ingeniero de Software",
                                description: "Magellan Group",
                            },
                            {
                                year: "2026",
                                title: "Ganador de Global Solution 2026",
                                description: "FIAP · 2x beca de mérito · 2º lugar en NEXT 2026",
                            },
                        ]}
                    />
                </section>
            </main>

            <section id="awards" className={styles.containerProjects}>
                <ProjectTitle
                    h2="Premios y Certificados"
                />

                <ProjectCarousel labels={{ prev: "Anterior", next: "Siguiente", carousel: "Carrusel", grid: "Cuadrícula" }}>
                    <CardProject
                        img='./img/awards/Global-Solution-2026.jpeg'
                        h4="Global Solution 2026"
                        description="Conquistamos el 1º lugar en la Global Solution 2026 Space Connect, de FIAP. Nuestro grupo, ASTRO, desarrolló AstroSafra, una plataforma que verifica en tiempo real las condiciones de las tierras de cultivo a partir de datos satelitales y mapea las mejores rutas para el transporte de todo lo que se produce."
                        techs={["FIAP", "1º lugar"]}
                    />
                    <CardProject
                        img='./img/awards/Talent-Summit-2026-web.jpg'
                        h4="Talent Summit 2026"
                        description="Fui uno de los Top Talents de FIAP, los mejores alumnos de la facultad, elegidos para presentar sus proyectos directamente a representantes de grandes empresas."
                        techs={["FIAP", "Top Talent"]}
                    />
                    <CardProject
                        img='./img/awards/Next-2026.jpeg'
                        h4="NEXT 2026"
                        description="Fui TOP 2 entre más de 30 grupos que presentaron un CRM para el Hospital São Rafael. Nuestro grupo desarrolló CRM Centrum, un CRM modular con un LLM integrado que genera informes a partir de los datos del hospital."
                        techs={["FIAP", "2º lugar"]}
                    />
                </ProjectCarousel>
            </section>

            <section id="project" className={styles.containerProjects}>
                <ProjectTitle
                    h2="Proyectos"
                />

                <ProjectCarousel labels={{ prev: "Anterior", next: "Siguiente", carousel: "Carrusel", grid: "Cuadrícula" }}>
                    <CardProject
                        img='./img/projects/snowecia.png'
                        h4="Snow&Cia"
                        description="El sistema Snow&Cia fue desarrollado para gestionar servicios de cuidado de mascotas y reservas. La plataforma permite a los clientes registrar sus preferencias, solicitar servicios e ingresar datos, mientras que los administradores supervisan las reservas, los pagos, las agendas y los servicios registrados. El proyecto prioriza una interfaz moderna, responsiva e intuitiva para su uso en computadoras, tabletas y teléfonos inteligentes."
                        github="https://github.com/EvandroKaibara/snowcia"
                        techs={["React", "Java", "Spring Boot", "JWT", "PostgreSQL", "Flyway"]}
                    />
                    <CardProject
                        img='./img/projects/snowcia-calculator.png'
                        h4="Snow&Cia Calculator"
                        description="Calculadora de alojamiento del Hotelzinho Snow&Cia. Cuenta las noches a partir de la entrada y la salida, aplica la tarifa de cada una (feriados, diciembre y enero, promoción para estadías largas), calcula la seña y el saldo y genera el presupuesto en texto para enviarlo por WhatsApp. Tiene una segunda pestaña para el servicio de Catsitter y funciona completa en el navegador, sin backend."
                        github="https://github.com/EvandroKaibara/snowcia-calculator"
                        deploy="https://snowcia-calculator.vercel.app"
                        techs={["React", "TypeScript", "Vite"]}
                    />
                    <CardProject
                        img='./img/projects/ek-classes.jpeg'
                        h4="EK Classes"
                        description="Landing page de mis clases particulares de conversación en inglés (EK Classes). Presenta el método de enseñanza, el profesor y el formato de las clases, con video de presentación, animaciones suaves y un diseño responsivo pensado para convertir visitantes en alumnos."
                        deploy="https://ek-classes.vercel.app"
                        techs={["React", "TypeScript", "Vite", "Motion"]}
                    />
                    <CardProject
                        img='./img/projects/magellan.jpeg'
                        h4="Magellan UC"
                        description="Este proyecto se desarrolló con el objetivo de crear una página de inicio para el Grupo Magellan, destacando una de sus filiales, Magellan UC, especializada en excavaciones subterráneas en Florida. La página se diseñó para presentar los servicios de forma estratégica y atractiva, priorizando la usabilidad, el diseño adaptable y una comunicación eficaz con el público objetivo."
                        github="https://github.com/EvandroKaibara/MagellanGroup"
                        deploy="https://magellan-group.vercel.app"
                        techs={["React", "Node"]}
                    />
                    <CardProject
                        img='./img/projects/snks.jpeg'
                        h4="SNKS"
                        description="Esta página se desarrolló como parte de una evaluación académica, centrada en la aplicación práctica del framework Bootstrap y los conceptos de adaptabilidad. El proyecto demuestra la construcción de una interfaz moderna y adaptable, que garantiza una buena experiencia de usuario en diferentes dispositivos, como ordenadores de escritorio, tabletas y teléfonos inteligentes."
                        techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                        github="https://github.com/EvandroKaibara/SNKS"
                        deploy="https://snks.vercel.app"
                    />
                    <CardProject
                        img='./img/projects/sabara.jpeg'
                        h4="Sabará"
                        description="El proyecto busca optimizar la comunicación entre los diferentes departamentos del Hospital Sabará, con el objetivo de reducir errores operativos y retrabajos. La propuesta pretende hacer los procesos más eficientes, promoviendo una mayor integración entre los equipos y mejorando la calidad de la atención."
                        github="https://github.com/EvandroKaibara/Sabara"
                        deploy="https://sabara.vercel.app"
                        techs={["React", "Node"]}
                    />
                </ProjectCarousel>
            </section>

            <Footer p="© 2025 EvandroKaibara. Todos los derechos reservados." />
        </>
    )
}
