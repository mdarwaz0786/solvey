import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import OurCredoPage from "./pages/Aboutus/OurCredoPage";
import OurValuesPage from "./pages/Aboutus/OurValuesPage";
import OurMissionPage from "./pages/Aboutus/OurMissionPage";
import OurVisionPage from "./pages/Aboutus/OurVisionPage";
import HealthEmpowermentPage from "./pages/Aboutus/HealthEmpowermentPage";
import ProductListPage from "./pages/Product/ProductListPage";
import PriceListPage from "./pages/Product/PriceListPage";
import ContactusPage from "./pages/Contactus/ContactusPage";
import CareerPage from "./pages/Career/CareerPage";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-credo" element={<OurCredoPage />} />
        <Route path="/our-vision" element={<OurVisionPage />} />
        <Route path="/our-mission" element={<OurMissionPage />} />
        <Route path="/our-values" element={<OurValuesPage />} />
        <Route path="/health-empowerment" element={<HealthEmpowermentPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/price-list" element={<PriceListPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="*" element={<h6>404 Page Not Found</h6>} />
      </Routes>
    </>
  );
};

export default App;
