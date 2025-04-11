import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../Resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-5 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#ffa7b6] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-x px-5 
                  ${
                    selectedItemIndex === index
                      ? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#ffc0cb6a] py-3"
                      : "text-black"
                  }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-lg">
            {projects[selectedItemIndex].techstack}
          </h1>
          <h1 className="text-tertiary text-sm">
            {projects[selectedItemIndex].period}
          </h1>
          <h1 className="text-tertiary text-sm">
            {projects[selectedItemIndex].description}
          </h1>
          <a
            href={projects[selectedItemIndex].Link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary text-sm underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
