import Link from "next/link";
import ProjectCard from "./projectCard";

const ProjectList = ({ projects, heading }: { projects: any, heading : string }) => {
  return (
    <div className="w-full h-screen bg-black  py-10 px-5">

      <h1 className="text-3xl lg:text-4xl font-bold text-center text-white mb-10 font-mono">
        {heading}
      </h1>
      {projects.length === 0 ? (
          <div  className="flex items-center justify-center">
            <p   className="font-semibold text-2xl text-white font-mono ">No Projects Found</p> 
            </div>
        ) : (
           <div className="flex flex-wrap justify-center items-center gap-6">
        {projects?.map((project: any) => (
          // <Link
          //   href={`/project/${project.id}`}
          //   key={project.id}
          //   className="group w-[300px] h-[200px] relative bg-[#1e1e1e]/40 backdrop-blur-md border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          // >
          //   <div className="relative z-10 flex flex-col justify-between h-full">
              
          //     <h2 className="text-xl font-bold text-teal-400 font-mono text-center group-hover:text-white transition">
          //       {project.title.toUpperCase()}
          //     </h2>
          //     <div className="flex justify-between items-center mt-4">
          //       <span className="text-xs px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full">
          //         Project
          //       </span>
          //       <span className="text-teal-400 group-hover:translate-x-2 transition">
          //         →
          //       </span>
          //     </div>
          //   </div>
          // </Link>

         

          <Link
         href={`/project/${project.id}`}
          key={project.id}
          >
            <ProjectCard 
            ProjectTitle={project.title}
             username={project.username}
            
            />
            </Link>
        ))}
      </div>
        )
      }



     
    </div>
  );
};

export default ProjectList;