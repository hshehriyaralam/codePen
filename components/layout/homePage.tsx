import { getAllProjects } from "@/app/actions/get.projects"
import HomeHeader from "../common/homeHeader"
import ProjectList from "../common/projectList"


const HomePage = async () => {
  const res = await getAllProjects()
  return (
    <div  className="bg-[#0f1117]  w-full min-h-screen ">
        <HomeHeader  />
        <ProjectList 
        projects={res?.projects}
        />
    </div>
  )
}

export default HomePage
