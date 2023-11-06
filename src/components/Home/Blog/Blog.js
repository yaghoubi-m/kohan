import styles from './Blog.module.css';

import s2 from '../../../assets/images/s2.png';
import Image from 'next/image';
const Blog = () => {
  return (
    <section className={styles.container}>
      <h3>بلاگ</h3>
      <p>آخرین مقالات و اخبار</p>
      <div className={styles.blog_container}>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
      </div>
      <button className={styles.btn}>مشاهده همه</button>
    </section>
  );
};

export default Blog;
