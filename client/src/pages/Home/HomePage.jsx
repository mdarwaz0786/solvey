import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SliderSection from './SliderSection';
import OurCredoSection from './OurCredoSection';
import OurMissionSection from './OurMissionSection';
import OurVissionSection from './OurVissionSection';
import HealthEmpowermentSection from './HealthEmpowermentSection';
import AboutusSection from './AboutusSection';
import { useEffect, useState } from 'react';
import Preloader from '../../Preloader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 50);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  };

  return (
    <div
      style={{
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <Navbar />
      <SliderSection />
      <AboutusSection />
      <OurCredoSection />
      <OurMissionSection />
      <OurVissionSection />
      <HealthEmpowermentSection />
      <Footer />
    </div>
  );
};

export default HomePage;
