"use client"

import { getAllProjects } from "@/app/actions/get.projects"
import HomeHeader from "../common/homeHeader"
import ProjectList from "../common/projectList"
import { getPublicProjects } from "@/app/actions/getPublic.project"
import Navbar from "../common/navbar"
import { getBothProjects } from "@/app/actions/getBoth.project"
import { useEffect, useState } from "react"


const HomePage =    () => {
  const [response, setResponse] = useState("Your Work")
  const [project, setProject] = useState<any>([])
  const [heading, setHeading] = useState('')


  const getProjects = async () => {
  const publicRes = await getPublicProjects()
  const privateRes =  await getAllProjects()
  const bothRes =  await getBothProjects()
  if(response === "Your Work"){
    setProject(privateRes?.projects)
    setHeading(response)
  }else if(response === "Public"){
    setProject(publicRes?.projects)
    setHeading(response)
  }else{
    setProject(bothRes?.projects)
    setHeading(response)
  }
  return 
  }

  useEffect(() => {
    getProjects()
  }, [response])


  
  return (
    <div  className="bg-black p-2   w-full min-h-screen ">
        <HomeHeader  />
        <Navbar 
        response={response}
        setResponse={setResponse} />
        <ProjectList
        heading={heading}
        projects={project}/>
    </div>
  )
}

export default HomePage
