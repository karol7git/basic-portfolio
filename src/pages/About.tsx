import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-stretch p-8 lg:p-16 space-y-10"
    >
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
        Sobre mí
      </h1>

      <div className="space-y-4">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <h2 id={`accordion-open-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-gray-700 border-b border-gray-200 rounded-t-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => handleAccordionClick(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-open-body-${index}`}
              >
                <span className="flex items-center text-lg font-semibold">
                  <svg
                    className={`w-5 h-5 me-2 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {index === 1
                    ? "¿Qué estudios tengo?"
                    : index === 2
                    ? "¿Qué experiencia tengo?"
                    : "¿Cuáles son mis hobbies?"}
                </span>
                <svg
                  className={`w-3 h-3 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-open-body-${index}`}
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
              aria-labelledby={`accordion-open-heading-${index}`}
            >
              <div className="p-5 text-gray-700">
                <p>
                  {index === 1
                    ? "Diversos, durante mi proceso académico inicie cursando profesional, contaduría pública en la universidad de Antioquia, posterior a ello me enfoque en el análisis de datos con herramientas como Power BI, Python, SQL y Excel, para posteriormente ponerlos en práctica en el sector contable y financiero."
                    : index === 2
                    ? "Por mis estudios académicos en contabilidad y finanzas inicié mis prácticas como auxiliar contable."
                    : "Disfruto conocer personas, trabajar en proyectos personales, estudiar nuevas cosas, jugar videojuegos y pasar mis fines de semana ensayando nuevas recetas de cocina."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
