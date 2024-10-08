const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4 bg-custom-green-hover ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a href="https://ingeniuscapital.com/" className="hover:underline">
            Ingenius Capital™
          </a>
          . Todos los derechos reservados
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://ingeniuscapital.com/"
              className="hover:underline me-4 md:me-6"
            >
              @RicardoMuñoz
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Politica de Privacidad
            </a>
          </li>
          <li>
            <a
              href="tel:+573022241027"
              className="hover:underline me-4 md:me-6"
            >
              Llamame
            </a>
          </li>
          <li>
            <a href="mailto:ricarmunoz88@gmail.com" className="hover:underline">
              Enviame un Correo
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
