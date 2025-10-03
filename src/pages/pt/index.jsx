import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Text } from "../../components/Text"
import styles from '../pages.module.css'

export const PT = () => {
    return (
        <>
            <Header
                about="Sobre"
                projects="Projetos"
            />
            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Engenheiro de Software"
                        location="São Paulo - SP"
                        curfew="Currículo"
                    />
                    <div className={styles.container}>
                        <Text
                            h1={<>Olá<br />Me Chamo<br />Evandro!</>}
                            paragraph1={<>Sou <strong>Engenheiro de Software</strong>, atualmente estudante na <strong>FIAP</strong>, onde aprofundo meus conhecimentos em desenvolvimento de sistemas e tecnologias emergentes.</>}
                            paragraph2={<>Atuo profissionalmente na <strong>Magellan Group</strong>, contribuindo em projetos que envolvem soluções inovadoras e escaláveis para diferentes áreas do mercado.</>}
                            paragraph3={<>Tenho experiência em desenvolvimento <strong>full stack</strong>, boas práticas de arquitetura de software e integração de ferramentas modernas, sempre com foco em performance, usabilidade e qualidade do código.</>}
                            h2="Entre em Contato!"
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