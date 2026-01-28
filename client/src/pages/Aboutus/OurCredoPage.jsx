import Aboutus from '../../components/Aboutus/Aboutus';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import credoBg from '../../assets/3.png';

const OurCredoPage = () => {

  return (
    <>
      <Navbar />
      <Banner src="/solvey/credoBanner.png" height='auto' />
      <Aboutus
        backgroundImage={credoBg}
        title="OUR CREDO"
        paragraphs={[
          "Solvey believes in putting people first (\"KEEPING YOU FIRST, ALWAYS\").",
          "Primary Focus: Our efforts are dedicated to transforming the lives of women in India, who are at the core of our business.",
          "Team and Future: The company has a dedicated team of skilled professionals and aims to become a leading organization known for 'timeless trust and boundless care'",
          "Values: The company operates based on values such as integrity, empathy, respect, determination, and excellence."
        ]}
        image="/solvey/credoicon.png"
      />
      <Footer />
    </>
  );
};

export default OurCredoPage;