import { Children, useEffect, useRef, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiLayoutColumnLine, RiLayoutGridLine } from "react-icons/ri";
import styles from './project-carousel.module.css'

export const ProjectCarousel = ({ children, labels = {} }) => {
    const { prev = "Anterior", next = "Próximo", carousel = "Carrossel", grid = "Grade" } = labels
    const [view, setView] = useState('carousel')
    const [switched, setSwitched] = useState(false)
    const track = useRef(null)
    const timer = useRef(null)
    const items = Children.toArray(children)

    useEffect(() => () => clearTimeout(timer.current), [])

    const loops = items.length > 3
    const setWidth = () => track.current.children[items.length].offsetLeft - track.current.children[0].offsetLeft

    const show = (next) => {
        if (next === view) return
        setView(next)
        setSwitched(true)
    }

    const move = (dir) => {
        const el = track.current
        const start = parseFloat(getComputedStyle(el).paddingLeft)

        if (loops && dir < 0 && el.scrollLeft <= start) el.scrollTo({ left: start + setWidth(), behavior: 'instant' })
        el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
    }

    const loop = () => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            if (loops && track.current && track.current.scrollLeft >= setWidth() - 1) {
                track.current.scrollBy({ left: -setWidth(), behavior: 'instant' })
            }
        }, 100)
    }

    return (
        <div className={styles.container}>
            <div className={styles.toggle}>
                <button className={styles.toggleButton} onClick={() => show('carousel')} aria-pressed={view === 'carousel'} aria-label={carousel}><RiLayoutColumnLine /></button>
                <button className={styles.toggleButton} onClick={() => show('grid')} aria-pressed={view === 'grid'} aria-label={grid}><RiLayoutGridLine /></button>
            </div>

            {view === 'grid' ? (
                <div className={`${styles.grid} ${switched ? styles.enter : ''}`}>{items}</div>
            ) : (
                <div className={`${styles.carousel} ${switched ? styles.enter : ''}`}>
                    <button className={styles.arrow} onClick={() => move(-1)} aria-label={prev}><RiArrowLeftSLine /></button>
                    <div ref={track} className={styles.track} onScroll={loop}>
                        {items.map((item) => <div key={item.key} className={styles.item}>{item}</div>)}
                        {loops && items.map((item) => <div key={`${item.key}-copy`} className={styles.item} aria-hidden="true" inert>{item}</div>)}
                    </div>
                    <button className={styles.arrow} onClick={() => move(1)} aria-label={next}><RiArrowRightSLine /></button>
                </div>
            )}
        </div>
    )
}
