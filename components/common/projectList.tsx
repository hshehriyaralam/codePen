import Link from "next/link";
import ProjectCard from "./projectCard";
import HomeLoader from "../ui/homeLoader";
import React from "react";

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
    <div className="mt-10"> 
  <h1 className="text-2xl font-semibold mb-6 text-center">
    {heading}
  </h1>
  {loading ? (
    <div className="flex justify-center">
      <HomeLoader />
    </div>
  ) : projects.length === 0 ? (
    <p className="text-center text-gray-400">
      No Projects Found
    </p>
  ) : (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
