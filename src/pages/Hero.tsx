import React from "react";
import photo from "../assets/photo.png";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row justify-center items-center p-8 lg:p-20 min-h-screen space-y-10 lg:space-y-0 mb-[-1rem]"
    >
      {/* SVG Curva con gradiente */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden -z-10">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A4B4E" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,245.3C384,235,480,245,576,218.7C672,192,768,128,864,101.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 relative z-10">
        <h6 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-300">
          Analista de datos
        </h6>
        <h1 className="animate-fade-up text-2xl mt-2 font-bold tracking-tight text-custom-green sm:text-4xl">
          Ricardo Muñoz
        </h1>
        <p className="text-base lg:text-lg mt-4 text-gray-300">
          Especializado en transformar datos en información valiosa para tu negocio.
        </p>
        <div className="mt-5 flex justify-center lg:justify-start">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-lg bg-custom-green hover:bg-custom-green-hover px-3 py-2 text-lg font-medium text-white transition-colors duration-300"
            aria-current="page"
          >
            Proyectos
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:items-center relative z-10">
        <div className="relative w-3/4 sm:w-1/3 lg:w-2/4">
          <img
            src={photo}
            alt="Ricardo Muñoz"
            className="relative w-full h-auto object-cover rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
