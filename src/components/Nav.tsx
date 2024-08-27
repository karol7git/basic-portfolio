import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { useState } from "react";
import Modal from "./Modal";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="top-0 left-0 w-full z-50">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  Portafolio
                </h1>
              </div>
              <div className="hidden sm:flex sm:items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/ricardo-muñoz-a694211b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/R-ikky88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="mailto:ricarmunoz88@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <AttachEmailIcon />
                </a>
                <button
                  onClick={openModal}
                  className="rounded-md bg-custom-green hover:bg-custom-green-hover px-3 py-2 text-sm font-medium text-white transition-colors duration-300"
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
          <div className="space-y-4 px-4 py-6 bg-gray-700">
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
              <a
                href="mailto:ricarmunoz88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white"
              >
                <AttachEmailIcon />
              </a>
              <button
                onClick={openModal}
                className="rounded-md bg-custom-green hover:bg-custom-green-hover px-3 py-2 text-sm font-medium text-white transition-colors duration-300"
              >
                Hoja de vida
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Nav;
