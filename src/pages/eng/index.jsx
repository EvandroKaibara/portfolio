import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

export const ENG = () => {
    return (
        <>
        <Header 
            about="About"
            projects="Projects"
        />
        <main>
            <Card
                career="Software Engineer"
                location="São Paulo - Brazil"
                curfew="Curfew"
            />
        </main>
        </>
    )
}