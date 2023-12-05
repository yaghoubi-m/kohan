import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import NewsField from '@/components/Home/newsfield/NewsField';
import Faq from '@/components/faq/Faq';

const Page = () => {
  return (
    <main>
      <Header />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '10rem 0' }}>
        سوالات متداول
      </h1>
      <div
        style={{
          borderRadius: '1.5rem',
          overflow: 'hidden',
          backgroundColor: '#eee',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Faq answers="aaaaaaa" question="wwwww" />
        <Faq answers="aaaaaaa" question="wwwww" />
        <Faq answers="aaaaaaa" question="wwwww" />
        <Faq answers="aaaaaaa" question="wwwww" />
        <Faq answers="vcvvvv" question="ssssss" last={true} />
      </div>
      <NewsField />
      <Footer />
    </main>
  );
};

export default Page;
