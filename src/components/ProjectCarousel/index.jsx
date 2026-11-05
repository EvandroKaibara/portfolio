import { Children, useEffect, useRef, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiLayoutColumnLine, RiLayoutGridLine } from "react-icons/ri";
import styles from './project-carousel.module.css'

const CATEGORIES = ['Front-End', 'Back-End', 'Full-Stack']

export const ProjectCarousel = ({ children, labels = {} }) => {
    const { prev = "Anterior", next = "Próximo", carousel = "Carrossel", grid = "Grade", all = "Todos" } = labels
    const [view, setView] = useState('carousel')
    const [switched, setSwitched] = useState(false)
    const [target, setTarget] = useState(null)
    const track = useRef(null)
    const timer = useRef(null)
    const [filter, setFilter] = useState(null)
    const allItems = Children.toArray(children)
    // Only categories that have at least one project get a button
    const categories = CATEGORIES.filter((c) => allItems.some((item) => item.props.category === c))
    const items = filter ? allItems.filter((item) => item.props.category === filter) : allItems

    useEffect(() => () => clearTimeout(timer.current), [])

    const loops = items.length > 3
    const setWidth = () => track.current.children[items.length].offsetLeft - track.current.children[0].offsetLeft

    const pick = (category) => {
        track.current?.scrollTo({ left: 0, behavior: 'instant' })
        setFilter(category)
    }

    const show = (next) => {
        if (next === view || target) return
        setTarget(next)
    }

    const swap = (e) => {
        if (e.target !== e.currentTarget || e.animationName !== styles.viewOut) return
        setView(target)
        setTarget(null)
        setSwitched(true)
    }

    const motion = target ? styles.leave : switched ? styles.enter : ''

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
            <div className={styles.toolbar}>
                {categories.length > 0 && (
                    <div className={styles.filters}>
                        {[null, ...categories].map((c) => (
                            <button key={c ?? 'all'} className={styles.filter} onClick={() => pick(c)} aria-pressed={filter === c}>{c ?? all} ({c ? allItems.filter((item) => item.props.category === c).length : allItems.length})</button>
                        ))}
                    </div>
                )}
                <div className={styles.toggle}>
                <button className={styles.toggleButton} onClick={() => show('carousel')} aria-pressed={view === 'carousel'} aria-label={carousel}><RiLayoutColumnLine /></button>
                <button className={styles.toggleButton} onClick={() => show('grid')} aria-pressed={view === 'grid'} aria-label={grid}><RiLayoutGridLine /></button>
                </div>
            </div>

            {view === 'grid' ? (
                <div className={`${styles.grid} ${motion}`} onAnimationEnd={swap}>{items}</div>
            ) : (
                <div className={`${styles.carousel} ${motion}`} onAnimationEnd={swap}>
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
