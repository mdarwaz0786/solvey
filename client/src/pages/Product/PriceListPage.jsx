import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import banner from '../../assets/banner.png';

const PriceListPage = () => {
  return (
    <>
      <Navbar />
      <Banner src={banner} height='auto' />
      <Footer />
    </>
  );
};

export default PriceListPage;