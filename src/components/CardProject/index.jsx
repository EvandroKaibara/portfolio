import styles from './card-project.module.css'

export const CardProject = ({ img, h4, description, techs, github }) => {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.img} />
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
            <a href={github} target="_blank"><img src="./img/Github.png" /></a>
        </div>
    )
}