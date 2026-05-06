import Link from "next/link";
import ProjectCard from "./projectCard";
import React from "react";
import Loader from "./loader";

const ProjectList = ({
  projects,
  heading,
  loading,
}: {
  projects: any;
  heading: string;
  loading: boolean;
}) => {
  return (
    <div className="font-quicksand"> 
  <h1 className="text-4xl font-semibold lg:my-6  my-8 lg:text-left  text-center">
    {heading}
  </h1>
  {loading ? (
    <div className="flex justify-center">
      <Loader />
    </div>
  ) : projects.length === 0 ? (
    <p className="text-center text-gray-400">
      No Projects Found
    </p>
  ) : (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-0 mx-6">
      {projects.map((project: any) => (
        <Link key={project.id} href={`/project/${project.id}`}>
          <ProjectCard
            ProjectTitle={project.title}
            username={project.username}
          />
        </Link>
      ))}
    </div>
  )}

</div>
  );
};

export default React.memo(ProjectList);
