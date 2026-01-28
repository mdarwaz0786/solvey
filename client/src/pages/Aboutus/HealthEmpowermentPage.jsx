import Aboutus from '../../components/Aboutus/Aboutus';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import credoBg from '../../assets/3.png';

const HealthEmpowermentPage = () => {

  return (
    <>
      <Navbar />
      <Banner src="/solvey/healthempowermentBanner.png" height='auto' />
      <Aboutus
        backgroundImage={credoBg}
        title="HEALTH & EMPOWERMENT"
        paragraphs={[
          "At Solvey Laboratories Private Limited, we collaborate closely with our patrons and partners to promote and support the health of all people, with a dedicated focus on women and girls. Our initiatives include the continuous training of skilled birth attendants to provide life-saving services when childbirth complications arise. We also advocate for increased access to contraceptives and the provision of sexual and reproductive health services for adolescents.",
          "We actively campaign against gender-based violence and harmful practices that cause life-threatening injuries to young girls and adolescents. Our mission is to empower women through education, economic opportunities, healthcare, and legal rights. By doing so, we enable them to demand better treatment and services, ensuring they can reach their full potential as human beings",
        ]}
        image="/solvey/healthempowermenticon.png"
      />
      <Footer />
    </>
  );
};

export default HealthEmpowermentPage;