import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Career from "../../components/Career/Career";
import credoBg from '../../assets/1.png';

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <Banner src="/solvey/careerBanner.png" height='auto' />
      <Career
        backgroundImage={credoBg}
        title="CAREERS"
        paragraphs={[
          "Solvey promises a career of individual growth within a work environment that encourages creativity and stimulates collective, progressive thought. The company provides a common ground for professionals to interact constructively, meet new challenges, and steer a spirited organization to new horizons.",
          "If you are a professional currently in the pharmaceutical business, or an aspirant who believes they can contribute to Solvey's operations, please take the time to tell the company more about yourself and explore the Solvey Careers page for current opportunities."
        ]}
        image="/credo.jpg"
        careerTitle="Reimagine Your Career with Solvey"
        careerParagraphs={[
          "At Solvey, we don’t just offer jobs—we create opportunities to grow, achieve your goals, and move ahead on a rewarding career path.",
          "As a fast-growing pharmaceutical organization, we are looking for Science or Pharmacy graduates with experience in pharma sales who are ready to take on new challenges and expand their professional journey.",
          "We welcome passionate professionals who are eager to explore multiple growth opportunities and make a real impact with Solvey.",
          "📩 Interested candidates may share their resumes at:",
          "contact@solvey.co.in",
          "We look forward to connecting with you and welcoming you to the Solvey team!",
        ]}
        socialTitle="SOCIAL RESPONSIBILITIES -"
        socialParagraphs={[
          {
            title: "Making an impact beyond medicine-",
            description: "At Solvey, our Corporate Social Responsibility (CSR) initiatives reflect our commitment to creating sustainable value for society. Our programs focus on education, healthcare, and environmental conservation, delivering a positive impact on the communities we serve. "
          },
          {
            title: "Blood Donation Camps-",
            description: "\"We organize regular blood donation camps, providing employees with the opportunity to contribute to a noble and life-saving cause.\""
          },
          {
            title: "Health Awareness Initiatives-",
            description: "We are committed to community empowerment through health education, comprehensive medical check-ups, and accessible corrective healthcare services for those in need."
          },
        ]}
      />
      <Footer />
    </>
  );
};

export default CareerPage;