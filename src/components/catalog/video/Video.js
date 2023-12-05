import Image from 'next/image';
import styles from './Video.module.css';

const Video = () => {
  return (
    <section className={styles.container}>
      <video controls>
        <source src="/video.mp4"></source>
      </video>
      <div className={styles.vid_con}>
        <div>
          <Image src={'/play.svg'} width={60} height={60} />
        </div>
        <div>
          <Image src={'/play.svg'} width={60} height={60} />
        </div>
        <div>
          <Image src={'/play.svg'} width={60} height={60} />
        </div>
        <div>
          <Image src={'/play.svg'} width={60} height={60} />
        </div>
        <div>
          <Image src={'/play.svg'} width={60} height={60} />
        </div>
      </div>
    </section>
  );
};

export default Video;
