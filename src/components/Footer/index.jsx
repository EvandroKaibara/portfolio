import styles from './footer.module.css'

export const Footer = ({ p }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>{p}</p>
            </div>
        </footer>
    )
}