import Comments from '@/components/detail/comments/Comments';
import Image from 'next/image';

const ImgForm = () => {
  return (
    <section>
      <Image 
      style={{
        width: '100%'
      }}
       src={'/blurimg.jpeg'} width={1442} height={663} />
      <Comments />
    </section>
  );
};

export default ImgForm;
