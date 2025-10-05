import { Link } from 'react-router'
import styles from './header.module.css'

export const Header = ({ about, projects }) => {
    return(
        <header className={styles.header}>
            <img src="/img/Logo.svg" alt="logo" className={styles.img}/>
            <ul className={styles.ul}>
                <li><a href='#home' className={styles.a}>Home</a></li>
                <li><a href='#about' className={styles.a}>{about}</a></li>
                <li><a href="#project" className={styles.a}>{projects}</a></li>
            </ul>
            <div className={styles.containerLinks}>
                <Link to="/" className={styles.links}>pt</Link>
                <Link to="/eng" className={styles.links}>en</Link>
                <Link to="/es" className={styles.links}>es</Link>
            </div>
        </header>
    )
    
}