import img1 from "../assets/website-image-sample1.webp";
import img2 from "../assets/website-image-sample2.jpg";
import img3 from "../assets/website-image-sample3.jpg";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img1,
    siteURL: "https://ingeniuscapital.com/",
  },
  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img2,
    siteURL: "https://ingeniuscapital.com/",
  },
  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img3,
    siteURL: "https://ingeniuscapital.com/",
  },
  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img1,
    siteURL: "https://ingeniuscapital.com/",
  },

  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img2,
    siteURL: "https://ingeniuscapital.com/",
  },

  {
    title: "titulo de proyecto",
    description: "esta es una  descripción del proyecto",
    imgURL: img3,
    siteURL: "https://ingeniuscapital.com/",
  },
];
const Projects = () => {
  return (
<section id="projects" className="pt-4 lg:pt-8"> {/* Ajusta el padding superior aquí */}
      <h1 className="text-2xl m-5 font-bold tracking-tight text-gray-300 sm:text-4xl text-center">
        Mis proyectos
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((project, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>  );
};
export default Projects;
