import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import LogoCloud from "./pages/LogoClouds";
import About from "./pages/About";
import Footer from "./components/Footer";

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
      <LogoCloud />

      <About />
      <Footer />
    </>
  );
}

export default App;
