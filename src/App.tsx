import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Experiencia from "./pages/Experiencia";
import Proyectos from "./pages/Proyectos";
import About from "./pages/About";
import Footer from "./components/Footer";
import Divider from "@mui/material/Divider";
function App() {
  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="experiencia">
        <Experiencia />
      </section>
      <Divider />
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </>
  );
}

export default App;
