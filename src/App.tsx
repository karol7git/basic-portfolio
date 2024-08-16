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
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;
