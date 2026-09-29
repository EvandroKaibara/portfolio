import styles from './timeline.module.css'

export const Timeline = ({ h3, events }) => {
    return (
        <section className={styles.timeline} aria-label={h3}>
            <h3 className={styles.h3}>{h3}</h3>

            <div className={styles.events}>
                {events.map((event) => (
                    <article key={`${event.year}-${event.title}`} className={styles.event}>
                        <span className={styles.dot} aria-hidden="true" />
                        <p className={styles.year}>{event.year}</p>
                        <h4 className={styles.title}>{event.title}</h4>
                        <p className={styles.description}>{event.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
