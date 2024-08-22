import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

import Experiencia from "./pages/Experiencia";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <About />
      <Footer />
    </>
  );
}

export default App;
