import img1 from "../assets/websitempire.webp";
import img2 from "../assets/websitenoltic.jpg";
import img3 from "../assets/websitesuso.jpg";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img1,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img2,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img3,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },
  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img1,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },

  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img2,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },

  {
    title: "lorem ipsum",
    description: "lorem ipsum dolor assemt",
    imgURL: img3,
    siteURL: "https://flowbite.com/docs/components/card/#card-with-image",
  },
];
const Projects = () => {
  return (
    <>
      <h1> Mis proyectos</h1>
      <div className="flex flex-wrap gap-4 p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default Projects;
