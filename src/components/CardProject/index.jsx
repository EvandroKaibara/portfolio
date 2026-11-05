import { useRef } from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import styles from './card-project.module.css'

// Without href the icon stays visible but dimmed and non-interactive
const ProjectLink = ({ href, label, children }) => href
    ? <a href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
    : <a role="link" aria-disabled="true" aria-label={label} className={styles.off}>{children}</a>

export const CardProject = ({ img, h4, description, techs = [], github, deploy, links = true }) => {
    const dialogRef = useRef(null)

    return (
        <div className={styles.container}>
            {img && (
                <>
                    <button type="button" className={styles.imgButton} onClick={() => dialogRef.current.showModal()} aria-label={`View ${h4} image full screen`}>
                        <img src={img} alt={h4} className={styles.img} />
                    </button>
                    {/* Native dialog gives Esc to close, focus trapping and the top layer for free */}
                    <dialog ref={dialogRef} className={styles.dialog} onClick={() => dialogRef.current.close()}>
                        <img src={img} alt={h4} className={styles.dialogImg} />
                    </dialog>
                </>
            )}
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
            {links && (
                <div className={styles.links}>
                    <ProjectLink href={github} label="GitHub"><img src="./img/Github.png" alt="" /></ProjectLink>
                    <ProjectLink href={deploy} label="Deploy"><RiGlobalLine /></ProjectLink>
                </div>
            )}
        </div>
    )
}