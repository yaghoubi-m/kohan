'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import styles from './Gallery.module.css';

const Gallery = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  let rqanimfrID = null;

  let xforce = 0;
  let yforce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xforce += movementX * speed;
    yforce += movementY * speed;
    if (!rqanimfrID) {
      rqanimfrID = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xforce = lerp(xforce, 0, easing);
    yforce = lerp(yforce, 0, easing);
    console.log(xforce);

    gsap.set(ref1.current, { x: `+=${xforce}`, y: `+=${yforce}` });
    gsap.set(ref2.current, { x: `+=${xforce * 0.5}`, y: `+=${yforce * 0.5}` });
    gsap.set(ref3.current, { x: `+=${xforce * 0.25}`, y: `+=${yforce * 0.25}` });
    if (Math.abs(xforce) < 0.01) xforce = 0;
    if (Math.abs(yforce) < 0.01) yforce = 0;

    if (xforce != 0 || yforce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(rqanimfrID);
      rqanimfrID = null;
    }
  };

  return (
    <section
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.container}
    >
      <div ref={ref1} className={styles.project_container}>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
      </div>
      <div ref={ref2} className={styles.project_container}>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
      </div>
      <div ref={ref3} className={styles.project_container}>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
        <div className={styles.project}></div>
      </div>
    </section>
  );
};

export default Gallery;
