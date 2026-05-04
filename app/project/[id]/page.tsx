import { getSingleProjects } from "@/app/actions/get.singleProject";
import Outlet from "@/components/layout/outlet";
import { Props } from "@/types/project";

const Project = async ({ params }: Props) => {
  const { id } = await params;
  const projectId = id;
  const res = await getSingleProjects({ projectId });
  const initialData = res?.project.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  });
  return (
    <div>
      <Outlet initialData={initialData} />
    </div>
  );
};

export default Project;
