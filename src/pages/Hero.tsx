import photo from "../assets/photo.png";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row justify-center  items-center p-20 h-600  space-y-10 "
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Ricardo Muñoz
        </h1>
        <h6 className="text-2xl mt-2 tracking-tight text-gray-900 sm:text-4xl">
          Análista de datos
        </h6>
        <p className="mt-6 text-2xl leading-8 text-gray-600 max-w-xl lg:max-w-2xl">
          Más de tres años de experiencia en procesamiento y análisis de datos,
          experiencia en procesos administrativos y financieros.
        </p>

        <div className="mt-5 flex justify-center lg:justify-start">
          <a
            href="/cv-sample.pdf"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
            Hoja de vida
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src={photo}
          alt="chico saltando"
          className="w-full h-full max-w-lg rounded-full"
        />
      </div>
    </section>
  );
};
export default Hero;
