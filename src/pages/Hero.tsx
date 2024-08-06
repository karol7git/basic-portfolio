import photo from "../assets/photo.png";
import Modal from "../components/Modal";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <button
            onClick={openModal}
            className="block rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white"
          >
            Hoja de vida
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <img
          src={photo}
          alt="chico saltando"
          className="w-full h-full max-w-lg rounded-full"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
export default Hero;
