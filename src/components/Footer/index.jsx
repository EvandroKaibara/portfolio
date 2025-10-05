import styles from './footer.module.css'

export const Footer = ({ p }) => {
    return(
        <footer className={styles.footer}>
            <p>{p}</p>
        </footer>
    )
}