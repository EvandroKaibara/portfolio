import styles from './card.module.css'
import { RiMailOpenLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { RiBriefcase3Line } from "react-icons/ri";
import { TiExport } from "react-icons/ti";

export const Card = ({ career, curfew, location }) => {
    return (
        <div className={styles.container}>
            <img src="/img/Me.png" className={styles.img} alt="" />
            <div className={styles.containerText}>
                <h3 className={styles.h3}>Evandro Kaibara</h3>
                <p className={styles.p}>{career}</p>
            </div>
            <div className={styles.containerItems}>
                <div className={styles.item}>
                    <RiMailOpenLine  color='#12F7D6' size={20}/> yujievandro@gmail.com
                </div>
                <div className={styles.item}>
                    <RiMapPinLine className={styles.icon} size={20}/> {location}
                </div>
                <div className={styles.item}>
                    <RiBriefcase3Line className={styles.icon} size={20}/> Magellan Group
                </div>
            </div>
            <div className={styles.techs}>
                <span className={styles.span}>HTML5</span>
                <span className={styles.span}>CSS3</span>
                <span className={styles.span}>JS</span>
                <span className={styles.span}>REACT JS</span>
                <span className={styles.span}>GIT</span>
                <span className={styles.span}>SQL</span>
                <span className={styles.span}>POSTGRE</span>
            </div>
            <button className={styles.button}>
                {curfew} <TiExport />
            </button>
        </div>
    )
}