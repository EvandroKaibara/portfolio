import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
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

                <section id="about" className={styles.about}>

                </section>
        </main>
        </>
    )
}