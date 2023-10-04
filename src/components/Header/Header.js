import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import { PiCaretDownThin } from 'react-icons/pi';
import styles from './Header.module.css';
import logo from '../../assets/images/KohanLogo.png';
import Link from 'next/link';
export default function Header() {
  return (
    <section className={styles.banner}>
      <header className={styles.header}>
        <div className={styles.address_container}>
          <div className={styles.header_number}>
            <FiPhoneCall className={styles.header_number__icon} />
            <span>02137596</span>
          </div>
          <p className={styles.header_address}>
            Tehran, Ayatollah Kashani Street, Abazar Boulevard, Aria Building, Unit 201
          </p>
          <div className={styles.header_line}></div>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                About US
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header_line__two}></div>
        <p className={styles.banner_title}>
          It has an exhibition grade from the Ministry of Industry, Mines and Trade
        </p>
        <Image className={styles.header_logo} src={logo} alt="logo" />
      </header>
      <div className={styles.explore}>
        <span>EXPLORE</span>
        <PiCaretDownThin className={styles.explore_icon} />
      </div>
    </section>
  );
}
