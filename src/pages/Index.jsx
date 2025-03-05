import Hero from "../components/home/Hero.jsx";
import About from "../components/home/About.jsx";
import Apartments from "../components/home/apartments.jsx";
import Nyhedsbrev from "../components/home/nyhedsbrev.jsx";
import Agents from "../components/home/maeglere.jsx";
import Salgsprocessen from "../components/home/salgsprocessen.jsx";

const Index = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Apartments />
        <Nyhedsbrev />
        <Agents />
        <Salgsprocessen />
      </main>
    </>
  );
};

export default Index;
