import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

export const ES = () => {
    return (
        <>
        <Header
            about="Sobre"
            projects="Proyectos"
        />
        <main>
            <Card
                career="Ingeniero de Software"
                location="São Paulo - Brazil"
                curfew="Currículo"
            />
        </main>
        </>
    )
}