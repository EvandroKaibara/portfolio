import { useEffect, useRef, useState } from "react";
import styles from "./idiom.module.css";

export const Idiom = ({ idiom, status, level, percent }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.idiomList}>
      <div className={styles.idiomItem}>
        <div className={styles.idiomName}>
          <span>{idiom}</span>
          <span>{status}</span>
        </div>

        <div className={styles.idiomBarBg}>
          <div
            className={styles.idiomBarFill}
            style={{ width: visible ? `${percent}%` : "0%" }}
          />
        </div>

        <div className={styles.idiomLevel}>
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};
