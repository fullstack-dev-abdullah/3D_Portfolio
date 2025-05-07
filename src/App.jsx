import Hero from "./sections/hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import Navbar from "./components/Navbar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
    return (
      <>
          <Navbar />
          <Hero />
          <ShowCaseSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Contact />
          <Footer />
      </>
    )
}

export default App
