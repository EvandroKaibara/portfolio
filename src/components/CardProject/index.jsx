import { RiGlobalLine } from 'react-icons/ri'
import styles from './card-project.module.css'

export const CardProject = ({ img, h4, description, techs = [], github, deploy }) => {
    return (
        <div className={styles.container}>
            {img && <img src={img} className={styles.img} />}
            <h4 className={styles.h4}>{h4}</h4>
            <hr />
            <p className={styles.p}>{description}</p>
            <hr />
            <div className={styles.techs}>
                {techs.map((tech, index) => (
                    <span key={index} className={styles.tag}>
                        {tech}
                    </span>
                ))}
            </div>
            {(github || deploy) && (
                <div className={styles.links}>
                    {github && <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><img src="./img/Github.png" /></a>}
                    {deploy && <a href={deploy} target="_blank" rel="noreferrer" aria-label="Deploy"><RiGlobalLine /></a>}
                </div>
            )}
        </div>
    )
}