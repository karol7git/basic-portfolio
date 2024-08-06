import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-3">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`block h-6 w-6 ${
                  mobileMenuOpen ? "hidden" : "block"
                }`}
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
              <svg
                className={`hidden h-6 w-6 ${
                  mobileMenuOpen ? "block" : "hidden"
                }`}
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

          {/* Title and navigation items */}
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

            {/* Social links and CV button */}
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
              <a
                href="/cv-sample.pdf"
                className="hidden sm:inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-current="page"
              >
                Hoja de vida
              </a>
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
          <a
            href="/cv-sample.pdf"
            className="block rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Hoja de vida
          </a>

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
  );
};

export default Nav;
