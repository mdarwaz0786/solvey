import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import banner from '../../assets/banner.png';
import ContactUs from "../../components/Contactus/Contactus";
import credoBg from '../../assets/1.png';

const ContactusPage = () => {
  return (
    <>
      <Navbar />
      <Banner src={banner} height='auto' />
      <ContactUs
        backgroundImage={credoBg}
        title="CONTACT US"
        paragraphs={[
          "Corporate Address:",
          "𝐒𝐎𝐋𝐕𝐄𝐘 LABORATORIES PVT.LTD",
          "𝚂/𝟺, 𝙽𝚎𝚑𝚛𝚞 𝚁𝚘𝚊𝚍 , 𝚂𝚑𝚊𝚜𝚝𝚛𝚒 𝙽𝚊𝚐𝚊𝚛, 𝚂𝚊𝚗𝚝𝚊𝚌𝚛𝚞𝚣 (𝙴), 𝙼𝚞𝚖𝚋𝚊𝚒, 𝙼𝚊𝚑𝚊𝚛𝚊𝚜𝚑𝚝𝚛𝚊 𝟺𝟶𝟶𝟶𝟻𝟻 ( 𝙸𝚗𝚍𝚒𝚊)",
          "General queries:",
          "For more information about Solvey Laboratories Private Limited, kindly write to us at",
          "contact@solvey.co.in",
        ]}
        image="/credo.jpg"
      />
      <Footer />
    </>
  );
};

export default ContactusPage;