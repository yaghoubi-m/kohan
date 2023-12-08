import Image from 'next/image';
import styles from './AboutAbility.module.css';

import img1 from '../../../assets/images/team.svg';
import { Icon1, Icon2, Icon3, Icon4 } from './icons/icons';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const AboutAbility = () => {
  const [active, setActive] = useState([
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
  ]);

  const onActive = (id) => {
    // console.log(active);
    if (active[id - 1].isActive) return;
    setActive((p) =>
      active.map((i) => {
        if (id === i.id) {
          return { ...i, isActive: !i.isActive };
        } else if (i.isActive) {
          return { ...i, isActive: !i.isActive };
        } else return i;
      }),
    );
  };

  console.log(active);
  return (
    <section className={styles.bg}>
      <article className={styles.container}>
        <div className={styles.title_container}>
          <div
            onClick={() => {
              const [{ id }] = active.filter((i) => i.isActive);
              console.log(id);
              setActive(() => {
                if (id !== active.length) {
                  return active.map((i) => {
                    console.log('sss', i);
                    if (id + 1 === i.id) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                } else {
                  return active.map((i) => {
                    if (i.id === 1) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                }
              });
            }}
            className={styles.arrow}
          >
            <IoIosArrowForward />
          </div>
          <div
            className={`${styles.title} ${active[0].isActive ? styles.active : 'none'}`}
            onClick={() => onActive(1)}
          >
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <Icon2 color={`#000`} size={59} />
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[1].isActive && styles.active}`}
            onClick={() => {
              onActive(2);
            }}
          >
            <Icon1 color={`#000`} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[2].isActive && styles.active}`}
            onClick={() => {
              onActive(3);
            }}
          >
            <Icon3 color={'#000'} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[3].isActive && styles.active}`}
            onClick={() => {
              onActive(4);
            }}
          >
            <Icon4 color={'#000'} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            onClick={() => {
              const [{ id }] = active.filter((i) => i.isActive);
              console.log(id);
              setActive(() => {
                if (id === 1) {
                  return active.map((i) => {
                    if (i.id === 4) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                } else if (id <= active.length) {
                  return active.map((i) => {
                    console.log('sss', i);
                    if (id - 1 === i.id) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                }
              });
            }}
            className={styles.arrow}
          >
            <IoIosArrowBack />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}></div>
      </article>
    </section>
  );
};

export default AboutAbility;
