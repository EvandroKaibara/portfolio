import { useState } from 'react'
import { Link } from 'react-router'
import styles from './header.module.css'

export const Header = ({ about, projects }) => {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>

            <a href='#home'><img src="/img/Logo.svg" alt="logo" className={styles.img} /></a>

            <ul className={`${styles.ul} ${open ? styles.active : ''}`}>
                <li><a href='#home' className={styles.a}>Home</a></li>
                <li><a href='#about' className={styles.a}>{about}</a></li>
                <li><a href="#project" className={styles.a}>{projects}</a></li>

                <li className={styles.mobileLangs}>
                    <Link to="/" className={styles.links}>pt</Link>
                    <Link to="/eng" className={styles.links}>en</Link>
                    <Link to="/es" className={styles.links}>es</Link>
                </li>
            </ul>

            <div className={styles.containerLinks}>
                <Link to="/" className={styles.links}>pt</Link>
                <Link to="/eng" className={styles.links}>en</Link>
                <Link to="/es" className={styles.links}>es</Link>
            </div>

            <div
                className={styles.menuButton}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </header>
    )
}