import Aboutus from '../../components/Aboutus/Aboutus';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner.png';
import credoBg from '../../assets/1.png';
import { useEffect, useRef } from 'react';

const OurVisionPage = () => {
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
          title="OUR VISION"
          paragraphs={[
            "To be a company dedicated to transforming the health and future of Indian People by fostering strategic partnerships with the medical fraternity."
          ]}
          image="/credo.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default OurVisionPage;