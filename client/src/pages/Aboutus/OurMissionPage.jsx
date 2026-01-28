import Aboutus from '../../components/Aboutus/Aboutus';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/banner.png';
import credoBg from '../../assets/2.png';

const OurMissionPage = () => {

  return (
    <>
      <Navbar />
      <Banner src={banner} height='auto' />
      <Aboutus
        backgroundImage={credoBg}
        title="OUR MISSION"
        paragraphs={[
          "Advancing women’s health in India through innovation and clinical excellence.",
          "Supporting healthcare providers in achieving superior patient outcomes.",
          "Partnering with the public sector and communities to build a healthier future for women."
        ]}
        image="/credo.jpg"
      />
      <Footer />
    </>
  );
};

export default OurMissionPage;