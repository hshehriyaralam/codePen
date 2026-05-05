"use client";
import { getAllProjects } from "@/app/actions/get.projects";
import HomeHeader from "../common/homeHeader";
import ProjectList from "../common/projectList";
import { getPublicProjects } from "@/app/actions/getPublic.project";
import Navbar from "../common/navbar";
import { getBothProjects } from "@/app/actions/getBoth.project";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [response, setResponse] = useState("Your Work");
  const [project, setProject] = useState<any>([]);
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    setLoading(true);
    let res;
    if (response === "Your Work") {
      res = await getAllProjects();
    } else if (response === "Public") {
      res = await getPublicProjects();
    } else {
      res = await getBothProjects();
    }
    setProject(res?.projects);
    setHeading(response);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, [response]);
  return (
    <div className="bg-black p-2   w-full min-h-screen ">
      <HomeHeader />
      <Navbar response={response} setResponse={setResponse} />
      <ProjectList loading={loading} heading={heading} projects={project} />
    </div>
  );
};

export default React.memo(HomePage);
