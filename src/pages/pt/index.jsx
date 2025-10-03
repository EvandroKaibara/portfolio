import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

export const PT = () => {
    return(
        <>
        <Header 
            about="Sobre"
            projects="Projetos"
        />
        <main>
            <Card 
                career="Engenheiro de Software"
                location="São Paulo - SP"
                curfew="Currículo"
            />
        </main>
        </>
    )
}