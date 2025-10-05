import { About } from "../../components/About"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Language } from "../../components/Language"
import { ProjectTitle } from "../../components/ProjectTitle"
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

                <section id="about" className={styles.containerAbout}>
                    <div className={styles.containerAboutDescription}>
                        <div className={styles.containerAboutText}>
                            <About
                                h2={<>Sobre <span>mim</span></>}
                                p={"Desde os 14 anos, desenvolvo um grande interesse por programação e pela construção de sites, áreas que despertam minha curiosidade e motivação para aprender cada vez mais. Além disso, gosto de escutar música, algo que me inspira e me acompanha enquanto exploro novas tecnologias e aprimoro minhas habilidades no mundo do desenvolvimento."}
                            />
                        </div>
                        <div className={styles.containerAboutLanguages}>
                            <Language
                                h3="Idiomas"

                                portuguese="Português"
                                portugueseStatus="C2"
                                portuguesLevel="Proficiente (Nativo)"
                                portuguesePercent={100}

                                english="Inglês"
                                englishStatus="C2"
                                englishLevel="Proficiente"
                                englishPercent={100}

                                spanish="Espanhol"
                                spanishStatus="C1"
                                spanishLevel="Avançado"
                                spanishPercent={80}
                            />
                        </div>
                    </div>
                </section>

                <section id="project" className={styles.containerProjects}>
                    <ProjectTitle 
                        h2="Projetos"
                        p="passe o mouse em cima para mais informações"
                    />
                </section>
            </main>
            
            <Footer p="© 2025 EvandroKaibara. Todos os direitos reservados."/>
        </>
    )
}