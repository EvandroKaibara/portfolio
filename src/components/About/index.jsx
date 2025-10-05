import styles from './about.module.css'

export const About = ({ h2, p }) => {
    return(
        <div className={styles.container}>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}