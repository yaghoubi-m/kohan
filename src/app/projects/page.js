import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import NewsField from '@/components/Home/newsfield/NewsField';
import Description from '@/components/Projects/descrption/Description';
import Gallery from '@/components/Projects/gallery/Gallery';
import { Test } from '@/components/Projects/gallery/test';

const Projects = () => {
  return (
    <>
      <Header />
      <Description />
      {/* <Gallery /> */}
      <Test />
      <NewsField />
      <Footer />
    </>
  );
};

export default Projects;
