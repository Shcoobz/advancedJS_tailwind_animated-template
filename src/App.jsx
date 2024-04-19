import { useEffect } from 'react';

import Navbar from './components/Navbar';
import SplashPage from './components/SplashPage';
import Services from './components/Services';
import TryingNewThings from './components/TryingNewThings';
import GrowingCompany from './components/GrowingCompany';
import Team from './components/Team';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <SplashPage />
      <Services />
      <TryingNewThings />
      <GrowingCompany />
      <Team />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
