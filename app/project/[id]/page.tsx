import { getSingleProjects } from "@/app/actions/get.singleProject";
import Outlet from "@/components/layout/outlet";
import { createClient } from "@/lib/supabase/server";
import { Props } from "@/types/project";

const Project = async ({ params }: Props) => {
  const supabase = await createClient()
  const { id } = await params;
  const projectId = id;
  const res = await getSingleProjects({ projectId });
  const {data :user , error : userError } = await supabase.auth.getUser()
  const isIdMatch = res?.project?.user_id === user?.user?.id




  return (
    <div>
      <Outlet
      isIdMatch={isIdMatch}
      initialData={res?.project} />
    </div>
  );
};

export default Project;
