import styles from './carousel.module.css'

export const Carousel = ({ h3 }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{h3}</h3>
      <div className={styles.items}>
        <img src="/img/HTML.png" alt="HTML" />
        <img src="/img/CSS.png" alt="CSS" />
        <img src="/img/JS.png" alt="JavaScript" />
        <img src="/img/REACT.png" alt="React" />
        <img src="/img/GIT.png" alt="Git" />
        <img src="/img/SQL.png" alt="SQL" />
        <img src="/img/POSTGRE.png" alt="PostgreSQL" />

        <img src="/img/HTML.png" alt="HTML" />
        <img src="/img/CSS.png" alt="CSS" />
        <img src="/img/JS.png" alt="JavaScript" />
        <img src="/img/REACT.png" alt="React" />
        <img src="/img/GIT.png" alt="Git" />
        <img src="/img/SQL.png" alt="SQL" />
        <img src="/img/POSTGRE.png" alt="PostgreSQL" />
      </div>
    </div>
  );
};