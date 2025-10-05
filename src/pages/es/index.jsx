import { About } from "../../components/About"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Language } from "../../components/Language"
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
                </section>
            </main>

            <Footer p="© 2025 EvandroKaibara. Todos los derechos reservados."/>
        </>
    )
}