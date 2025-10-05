import styles from './project-title.module.css'

export const ProjectTitle = ({ h2, p}) => {
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>{h2}</h2>
            <p className={styles.p}>{p}</p>
        </div>
    )
}