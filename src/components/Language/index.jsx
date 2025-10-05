import { Idiom } from '../Idiom'
import styles from './language.module.css'

export const Language = ({h3, portuguese, portugueseStatus, portuguesLevel, portuguesePercent, english, englishStatus, englishLevel, englishPercent, spanish, spanishStatus, spanishLevel, spanishPercent}) => {
    return (
        <div className={styles.idioms}>
            <h3 className={styles.h3}>{h3}</h3>
            <Idiom
                idiom={portuguese}
                status={portugueseStatus}
                level={portuguesLevel}
                percent={portuguesePercent}
            />
            <Idiom
                idiom={english}
                status={englishStatus}
                level={englishLevel}
                percent={englishPercent}
            />
            <Idiom
                idiom={spanish}
                status={spanishStatus}
                level={spanishLevel}
                percent={spanishPercent}
            />
        </div>
    )
}