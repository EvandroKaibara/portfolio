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

export const PT = () => {
    useReveal()

    return (
        <>
            <Header
                about="Sobre"
                awards="Prêmios"
                projects="Projetos"
            />
            <main className={styles.main}>
                <section id="home" className={styles.home}>
                    <Card
                        career="Engenheiro de Software"
                        location="São Paulo - SP"
                        curfew="Currículo"
                        link="https://drive.google.com/file/d/1vPV85rmg18Es3dUEjBJMT3T7jOSgH5LZ/view?usp=sharing"
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
                                h2={<>Sobre <span>mim</span></>}
                                p={"Desde os 14 anos, desenvolvo um grande interesse por programação e pela construção de sites, áreas que despertam minha curiosidade e motivação para aprender cada vez mais. Além disso, gosto de escutar música, algo que me inspira e me acompanha enquanto exploro novas tecnologias e aprimoro minhas habilidades no mundo do desenvolvimento."}
                            />
                        </div>
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
                    <Timeline
                        h3="Experiência"
                        events={[
                            {
                                year: "2022 — Atual",
                                title: "Professor de Inglês",
                                description: "Wizard",
                            },
                            {
                                year: "2024 — Atual",
                                title: "Software Engineer",
                                description: "Magellan Group",
                            },
                            {
                                year: "2026",
                                title: "Ganhador da Global Solution 2026",
                                description: "FIAP · 2x bolsa mérito · 2º lugar no NEXT 2026",
                            },
                        ]}
                    />
                </section>

                <section id="awards" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Prêmios e Certificados"
                    />

                    <ProjectCarousel>
                        <CardProject
                            img='./img/awards/Global-Solution-2026.jpeg'
                            links={false}
                            h4="Global Solution 2026"
                            description="Conquistamos o 1º lugar na Global Solution 2026 Space Connect, da FIAP. Nosso grupo, o ASTRO, desenvolveu o AstroSafra, uma plataforma que verifica em tempo real as condições das terras de plantio a partir de dados de satélites e mapeia as melhores rotas para o transporte de tudo o que é produzido."
                            techs={["FIAP", "1º lugar"]}
                        />
                        <CardProject
                            img='./img/awards/Talent-Summit-2026-web.jpg'
                            links={false}
                            h4="Talent Summit 2026"
                            description="Fui um dos Top Talents da FIAP, os melhores alunos da faculdade, escolhidos para apresentar seus projetos diretamente a representantes de grandes empresas."
                            techs={["FIAP", "Top Talent"]}
                        />
                        <CardProject
                            img='./img/awards/Next-2026.jpeg'
                            links={false}
                            h4="NEXT 2026"
                            description="Fui TOP 2 entre mais de 30 grupos que apresentaram um CRM para o Hospital São Rafael. Nosso grupo desenvolveu o CRM Centrum, um CRM modular com uma LLM integrada que gera relatórios a partir dos dados do hospital."
                            techs={["FIAP", "2º lugar"]}
                        />
                    </ProjectCarousel>
                </section>

                <section id="project" className={styles.containerProjects}>
                    <ProjectTitle
                        h2="Projetos"
                    />

                    <ProjectCarousel>
                        <CardProject
                            img='./img/projects/snowecia.png'
                            category="Full-Stack"
                            h4="Snow&Cia"
                            description="Sistema Snow&Cia desenvolvido para gerenciar serviços e reservas de cuidados para pets. A plataforma permite que clientes cadastrem seus animais, solicitem serviços, selecionem datas e adicionais, enquanto administradoras acompanham reservas, pagamentos, agenda e serviços cadastrados. O projeto prioriza uma interface moderna, responsiva e intuitiva para uso em computadores, tablets e smartphones."
                            github="https://github.com/EvandroKaibara/snowcia"
                            techs={["React", "Java", "Spring Boot", "JWT", "PostgreSQL", "Flyway"]}
                        />
                        <CardProject
                            img='./img/projects/snowcia-calculator.png'
                            category="Front-End"
                            h4="Snow&Cia Calculator"
                            description="Calculadora de hospedagem do Hotelzinho Snow&Cia. Conta as diárias a partir da entrada e da saída, aplica a tarifa de cada uma (feriados, dezembro e janeiro, promoção para estadias longas), calcula o sinal e o saldo e gera o orçamento em texto para enviar por WhatsApp. Tem uma segunda aba para o serviço de Catsitter e roda inteira no navegador, sem backend."
                            github="https://github.com/EvandroKaibara/snowcia-calculator"
                            deploy="https://snowcia-calculator.vercel.app"
                            techs={["React", "TypeScript", "Vite"]}
                        />
                        <CardProject
                            img='./img/projects/ek-classes.jpeg'
                            category="Front-End"
                            h4="EK Classes"
                            description="Landing page das minhas aulas particulares de conversação em inglês (EK Classes). Apresenta o método de ensino, o professor e o formato das aulas, com vídeo de apresentação, animações suaves e layout responsivo pensado para converter visitantes em alunos."
                            deploy="https://ek-classes.vercel.app"
                            techs={["React", "TypeScript", "Vite", "Motion"]}
                        />
                        <CardProject
                            img='./img/projects/magellan.jpeg'
                            category="Front-End"
                            h4="Magellan UC"
                            description="Este projeto foi desenvolvido com o objetivo de criar uma landing page para o Magellan Group, destacando uma de suas subsidiárias, a Magellan UC, especializada em escavações subterrâneas na Flórida. A página foi projetada para apresentar os serviços de maneira estratégica e atraente, com foco na usabilidade, no design responsivo e na comunicação eficiente com o público-alvo."
                            github="https://github.com/EvandroKaibara/MagellanGroup"
                            deploy="https://magellan-group.vercel.app"
                            techs={["React", "Node"]}
                        />
                        <CardProject
                            img='./img/projects/snks.jpeg'
                            category="Front-End"
                            h4="SNKS"
                            description="Página desenvolvida como parte de uma avaliação acadêmica, com foco na aplicação prática do framework Bootstrap e nos conceitos de responsividade. O projeto demonstra a construção de uma interface moderna e adaptável, garantindo uma boa experiência de uso em diferentes dispositivos, como desktops, tablets e smartphones."
                            techs={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                            github="https://github.com/EvandroKaibara/SNKS"
                            deploy="https://snks.vercel.app"
                        />
                        <CardProject
                            img='./img/projects/sabara.jpeg'
                            category="Full-Stack"
                            h4="Sabará"
                            description="O projeto tem como objetivo otimizar a comunicação entre os diferentes setores do Hospital Sabará, visando reduzir falhas operacionais e retrabalho. A proposta busca tornar os processos mais eficientes, promovendo maior integração entre as equipes e melhorando a qualidade do atendimento."
                            github="https://github.com/EvandroKaibara/Sabara"
                            deploy="https://sabara.vercel.app"
                            techs={["React", "Node"]}
                        />
                        <CardProject
                            img='./img/projects/classes-dashboard.png'
                            category="Full-Stack"
                            h4="Classes Dashboard"
                            description="Painel local para acompanhar as aulas particulares: quanto entrou, quanto falta receber, aulas por mês, alunos e os temas mais pedidos. Lê os dados ao vivo de uma planilha do Google e agenda reuniões no Google Calendar com link do Meet, direto do painel."
                            techs={["React", "TypeScript", "Vite", "Recharts", "Apps Script"]}
                        />
                        <CardProject
                            img='./img/projects/bankapi.png'
                            category="Back-End"
                            h4="BankAPI"
                            description="API REST de um banco, desenvolvida nas aulas de Java da faculdade. Gerencia clientes, contas e transações, como depósitos e saques, com controllers, services e repositories separados e o H2 como banco de dados. O projeto aplica os conceitos de uma API REST e também tem páginas HTML para usar o sistema pelo navegador."
                            github="https://github.com/EvandroKaibara/bankAPI"
                            techs={["Java", "Spring Boot", "H2", "REST API"]}
                        />
                        <CardProject
                            img='./img/projects/closetapi.png'
                            category="Back-End"
                            h4="ClosetAPI"
                            description="API REST para controlar as peças de roupa do meu guarda-roupa. Tem endpoints para cadastrar, listar, atualizar e remover moletons, jaquetas, calças, camisetas, tênis e acessórios, e para combinar peças em outfits. Feita com Java e Spring Boot sobre PostgreSQL, e documentada com Swagger."
                            github="https://github.com/EvandroKaibara/closetAPI"
                            techs={["Java", "Spring Boot", "PostgreSQL", "REST API", "Swagger"]}
                        />
                    </ProjectCarousel>

                </section>
            </main>

            <Footer p="© 2025 EvandroKaibara. Todos os direitos reservados." />
        </>
    )
}
