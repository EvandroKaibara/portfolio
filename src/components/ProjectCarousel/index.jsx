import { Children, useEffect, useRef, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiLayoutColumnLine, RiLayoutGridLine } from "react-icons/ri";
import styles from './project-carousel.module.css'

export const ProjectCarousel = ({ children, labels = {} }) => {
    const { prev = "Anterior", next = "Próximo", carousel = "Carrossel", grid = "Grade" } = labels
    const [view, setView] = useState('carousel')
    const track = useRef(null)
    const timer = useRef(null)
    const items = Children.toArray(children)

    useEffect(() => () => clearTimeout(timer.current), [])

    // o trilho tem os cards duas vezes: a largura de um conjunto é o ponto do loop
    // shortcut: assume mais cards que o visível por vez, senão a cópia aparece junto
    const setWidth = () => track.current.children[items.length].offsetLeft - track.current.children[0].offsetLeft

    const move = (dir) => {
        const el = track.current

        // o primeiro card repousa no padding do trilho, não em 0
        const start = parseFloat(getComputedStyle(el).paddingLeft)

        if (dir < 0 && el.scrollLeft <= start) el.scrollTo({ left: start + setWidth(), behavior: 'instant' })
        el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
    }

    // ao parar dentro das cópias, volta sem animação para a mesma posição nos originais
    const loop = () => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            if (track.current && track.current.scrollLeft >= setWidth() - 1) {
                track.current.scrollBy({ left: -setWidth(), behavior: 'instant' })
            }
        }, 100)
    }

    return (
        <div className={styles.container}>
            <div className={styles.toggle}>
                <button className={styles.toggleButton} onClick={() => setView('carousel')} aria-pressed={view === 'carousel'} aria-label={carousel}><RiLayoutColumnLine /></button>
                <button className={styles.toggleButton} onClick={() => setView('grid')} aria-pressed={view === 'grid'} aria-label={grid}><RiLayoutGridLine /></button>
            </div>

            {view === 'grid' ? (
                <div className={styles.grid}>{items}</div>
            ) : (
                <div className={styles.carousel}>
                    <button className={styles.arrow} onClick={() => move(-1)} aria-label={prev}><RiArrowLeftSLine /></button>
                    <div ref={track} className={styles.track} onScroll={loop}>
                        {items.map((item) => <div key={item.key} className={styles.item}>{item}</div>)}
                        {items.map((item) => <div key={`${item.key}-copy`} className={styles.item} aria-hidden="true" inert>{item}</div>)}
                    </div>
                    <button className={styles.arrow} onClick={() => move(1)} aria-label={next}><RiArrowRightSLine /></button>
                </div>
            )}
        </div>
    )
}
