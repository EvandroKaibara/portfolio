import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
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