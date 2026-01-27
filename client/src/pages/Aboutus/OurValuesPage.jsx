import Aboutus from '../../components/Aboutus/Aboutus';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner.png';
import credoBg from '../../assets/1.png';
import { useEffect, useRef } from 'react';

const OurValuesPage = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <Banner src={banner} height='auto' />
      <div ref={aboutRef}>
        <Aboutus
          backgroundImage={credoBg}
          title="OUR VALUES"
          paragraphs={[
            "The company operates based on values such as integrity, empathy, respect, determination, and excellence."
          ]}
          image="/credo.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default OurValuesPage;