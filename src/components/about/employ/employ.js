import Image from 'next/image';
import styles from './employ.module.css';

const Employ = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containers}>
        <Image src={'/person.jpeg'} width={457} height={331} />
        <div className={styles.mask}></div>
        <div className={styles.details}>
          <p>آقای حمید نوریانی</p>
          <p>مدیر امور نمایشگاه‌ها</p>
        </div>
      </div>
      <div className={styles.containers}>
        <Image src={'/person.jpeg'} width={457} height={331} />
        <div className={styles.mask}></div>
        <div className={styles.details}>
          <p>آقای حمید نوریانی</p>
          <p>مدیر امور نمایشگاه‌ها</p>
        </div>
      </div>
      <div className={styles.containers}>
        <Image src={'/person.jpeg'} width={457} height={331} />
        <div className={styles.mask}></div>
        <div className={styles.details}>
          <p>آقای حمید نوریانی</p>
          <p>مدیر امور نمایشگاه‌ها</p>
        </div>
      </div>
    </section>
  );
};

export default Employ;
