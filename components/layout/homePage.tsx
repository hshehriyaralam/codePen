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
    // bg-[#0d0f1a]
  <div className="bg-black min-h-screen text-white">
  <HomeHeader />
  <Navbar response={response} setResponse={setResponse} />

  <div className="max-w-7xl mx-auto px-4">
    <ProjectList
      loading={loading}
      heading={heading}
      projects={project}
    />
  </div>
</div>
  );
};

export default React.memo(HomePage);
