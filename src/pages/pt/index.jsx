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
                            lang="pt"
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
                    <Carousel
                        h3="Tecnologias"
                    />
                </section>

                <section id="project" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Projetos"
                        p="passe o mouse em cima para mais informações"
                    />

                    <div className={styles.containerProjectCards}>
                        <CardProject
                            img='./img/projects/snks.jpeg'
                            h4="SNKS"
                            description="Página desenvolvida como parte de uma avaliação acadêmica, com foco na aplicação prática do framework Bootstrap e nos conceitos de responsividade. O projeto demonstra a construção de uma interface moderna e adaptável, garantindo uma boa experiência de uso em diferentes dispositivos, como desktops, tablets e smartphones."
                            techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                            github="https://github.com/EvandroKaibara/SNKS"
                        />
                        <CardProject
                            img='./img/projects/sabara.jpeg'
                            h4="Sabará"
                            description="O projeto tem como objetivo otimizar a comunicação entre os diferentes setores do Hospital Sabará, visando reduzir falhas operacionais e retrabalho. A proposta busca tornar os processos mais eficientes, promovendo maior integração entre as equipes e melhorando a qualidade do atendimento."
                            github="https://github.com/EvandroKaibara/Sabara"
                            techs={["React", "Node"]}
                        />
                        <CardProject
                            img='./img/projects/magellan.jpeg'
                            h4="Magellan UC"
                            description="This project was developed with the goal of creating a landing page for the Magellan Group, highlighting one of its subsidiaries, Magellan UC, which specializes in underground excavation in Florida. The page was designed to present the services in a strategic and attractive way, focusing on usability, responsive design, and efficient communication with the target audience."
                            github="https://github.com/EvandroKaibara/MagellanGroup"
                            techs={["React", "Node"]}
                        />
                    </div>

                </section>
            </main>

            <Footer p="© 2025 EvandroKaibara. Todos os direitos reservados." />
        </>
    )
}