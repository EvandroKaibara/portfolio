import styles from './idiom.module.css'

export const Idiom = ({ idiom, status, level, percent}) => {
    return (
        <div className={styles.idiomList}>
            <div className={styles.idiomItem}>
                <div className={styles.idiomName}>
                    <span>{idiom}</span>
                    <span>{status}</span>
                </div>
                <div className={styles.idiomBarBg}>
                    <div className={styles.idiomBarFill} style={{ width: `${percent}%` }}/>
                </div>
                <div className={styles.idiomLevel} >
                    <span>{level}</span>
                </div>
            </div>
        </div>
    )
}

