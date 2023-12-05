import Image from 'next/image';
import styles from './Pdf.module.css';

const Pdf = () => {
  return (
    <section className={styles.container}>
      <div className={styles.pdf}>
        <Image src={'/document.svg'} width={54} height={65} />
        <span>1</span>
      </div>
    </section>
  );
};

export default Pdf;
