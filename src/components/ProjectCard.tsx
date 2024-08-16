import React from "react";

interface Props {
  title: string;
  description: string;
  imgURL: string;
  siteURL: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imgURL,
  siteURL,
}) => {
  return (
    <div className="relative group max-w-xs w-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={imgURL}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <a
        href={siteURL}
        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4"
      >
        <h5 className="text-white text-xl font-bold mb-2">{title}</h5>
        <p className="text-white text-sm">{description}</p>
      </a>
    </div>
  );
};
export default ProjectCard;
