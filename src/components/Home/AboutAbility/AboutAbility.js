import Image from 'next/image';
import styles from './AboutAbility.module.css';

import img1 from '../../../assets/images/team.svg';

const AboutAbility = () => {
  return (
    <section className={styles.bg}>
      <article className={styles.container}>
        <div className={styles.title_container}>
          <div className={styles.title}>
            <Image src={img1} width={50} height={50} alt="team" />
            <p>تیم اجرایی مجرب</p>
          </div>
          <div className={styles.title}>
            <Image src={img1} width={50} height={50} alt="team" />
            <p>تیم اجرایی مجرب</p>
          </div>
          <div className={styles.title}>
            <Image src={img1} width={50} height={50} alt="team" />
            <p>تیم اجرایی مجرب</p>
          </div>
          <div className={styles.title}>
            <Image src={img1} width={50} height={50} alt="team" />
            <p>تیم اجرایی مجرب</p>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}></div>
      </article>
    </section>
  );
};

export default AboutAbility;
