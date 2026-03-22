import styles from './carousel.module.css'

export const Carousel = ({ h3 }) => {
  const items = [
    { src: "/img/HTML.png", alt: "HTML" },
    { src: "/img/CSS.png", alt: "CSS" },
    { src: "/img/JS.png", alt: "JavaScript" },
    { src: "/img/REACT.png", alt: "React" },
    { src: "/img/GIT.png", alt: "Git" },
    { src: "/img/SQL.png", alt: "SQL" },
    { src: "/img/POSTGRE.png", alt: "PostgreSQL" },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{h3}</h3>

      <div className={styles.track}>
        <div className={styles.items}>
          {[...items, ...items].map((item, index) => (
            <img key={index} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};