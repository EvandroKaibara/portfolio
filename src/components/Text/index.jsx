import styles from './text.module.css'

export const Text = ({ h1, paragraph1, paragraph2, paragraph3, h2 }) => {
    return (
        <div className={styles.containerText}>
            <div>
                <h1 className={styles.h1}>{h1}</h1>
            </div>

            <div className={styles.containerP}>
                <p className={styles.p}>{paragraph1}</p>
                <p className={styles.p}>{paragraph2}</p>
                <p className={styles.p}>{paragraph3}</p>
            </div>

            <div className={styles.containerContact}>
                <h2>{h2}</h2>
                <a href="#" target="_Blank" className={styles.a}><img src="/img/Mail.png" alt="Mail" /></a>
                <a href="#" target="_Blank" className={styles.a}><img src="/img/Linkedin.png" alt="Linkedin" /></a>
                <a href="https://github.com/EvandroKaibara" target="_Blank" className={styles.a}><img src="/img/Github.png" alt="GitHub" /></a>
            </div>
        </div>
    )
}