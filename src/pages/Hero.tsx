import photo from "../assets/photo.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-20 min-h-screen space-y-10 lg:space-y-0 "
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8">
        <h6 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-300">
          Analista de datos
        </h6>
        <h1 className="animate-fade-up text-2xl mt-2 font-bold tracking-tight text-custom-green sm:text-4xl">
          Ricardo Muñoz
        </h1>
        <p className="text-base lg:text-lg mt-4 text-gray-300">
          Especializado en transformar datos en información valiosa para tu
          negocio.
        </p>
        <div className="mt-5 flex justify-center lg:justify-start">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer rounded-md bg-custom-green hover:bg-custom-green-hover px-3 py-2 text-sm font-medium text-white transition-colors duration-300"
            aria-current="page"
          >
            Proyectos
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:items-center">
        <div className="relative w-3/4 sm:w-1/2 lg:w-3/4">
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
