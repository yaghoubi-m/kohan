import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';

import styles from './Header.module.css';
import logo from '../../assets/images/KohanLogo.png';
export default function Header() {
  return (
    <section>
      <div className={styles.banner}></div>
      <header className={styles.header}>
        <div className={styles.header_number}>
          <FiPhoneCall className={styles.header_number__icon} />
          <span>02137596</span>
        </div>
        <p className={styles.header_address}>
          Tehran, Ayatollah Kashani Street, Abazar Boulevard, Aria Building, Unit 201
        </p>
        <div className={styles.header_line}></div>
        <nav className={styles.navbar}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Catalog</li>
            <li>About US</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className={styles.header_line__two}></div>
        <p className={styles.banner_title}>
          It has an exhibition grade from the Ministry of Industry, Mines and Trade
        </p>
        <Image className={styles.header_logo} src={logo} width={237} height={336} alt="company logo" />
      </header>
    </section>
  );
}
