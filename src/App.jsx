/**
 * Hook from React for handling side effects.
 */
import { useEffect } from 'react';

/**
 * Component imports for various UI elements.
 */
import Navbar from './components/Navbar';
import SplashPage from './components/SplashPage';
import Services from './components/Services';
import TryingNewThings from './components/TryingNewThings';
import GrowingCompany from './components/GrowingCompany';
import Team from './components/Team';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Import AOS library for animations.
 */
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * App component that serves as the root of the application.
 * It initializes animations and renders all subcomponents.
 * @returns {React.Component} - The App component UI.
 */
function App() {
  useEffect(() => {
    /**
     * Initialize AOS (Animate on Scroll) library with specific settings.
     */
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
