import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";
import { useState } from "react";
import Modal from "./Modal";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu");
    setMobileMenuOpen((prev) => !prev);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
        <div className="px-2 sm:px-6 lg:px-8 w-full">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-around rounded-md p-2 text-gray-400 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMobileMenu}
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                {/* Menu open icon */}
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Menu close icon */}
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo and links */}
            <div className="flex-1 flex items-center justify-between sm:items-stretch">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">
                  Portafolio
                </h1>
              </div>

              <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow space-x-4">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="experiencia"
                  smooth={true}
                  duration={500}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Experiencia
                </Link>
                <Link
                  to="proyectos"
                  smooth={true}
                  duration={500}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Proyectos
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
              </div>

              <div className="hidden sm:flex sm:items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/ricardo-muñoz-a694211b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/R-ikky88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <GitHubIcon />
                </a>
                <button
                  onClick={openModal}
                  className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Hoja de vida
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-4 px-4 py-6 bg-gray-900">
            <button
              onClick={openModal}
              className="block rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white"
            >
              Hoja de vida
            </button>
            <div className="space-y-1">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="experiencia"
                smooth={true}
                duration={500}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Experiencia
              </Link>
              <Link
                to="proyectos"
                smooth={true}
                duration={500}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Proyectos
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Link>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/ricardo-muñoz-a694211b3"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/R-ikky88"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Nav;
