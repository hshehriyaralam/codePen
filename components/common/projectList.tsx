import Link from "next/link";

const ProjectList = ({ projects }: { projects: any }) => {
  return (
    <div className="w-full min-h-screen  my-5">
      <div
        className="flex  flex-col lg:flex-row justify-center items-center gap-4  flex-wrap ">
        {projects?.map((project: any) => (
          <Link
            href={`/project/${project.id}`}
            className="w-[300px] h-[200px] shadow-xl  bg-[#1e1e1e]/30  p-4  rounded-xl my-4
             hover:shadow-2xl  "
            key={project.id}
          >
            <h2 className="text-2xl  font-quicksand font-bold  text-teal-600  text-center      font-mono ">
              {project.title.toUpperCase()}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
