import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Experiencia from "./pages/Experiencia";
import About from "./pages/About";
import Footer from "./components/Footer";
import Divider from "@mui/material/Divider";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <section id="experiencia">
        <Experiencia />
      </section>
      <Divider />
      <section id="about">
        <About />
      </section>
      <Footer />
    </>
  );
}

export default App;
