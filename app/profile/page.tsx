"use client";
import { getAllProjects } from "@/app/actions/get.projects";
import HomeHeader from "@/components/common/homeHeader"
import ProjectList from "@/components/common/projectList";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [project, setProject] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    setLoading(true);
    let res  = await getAllProjects()
    setProject(res?.projects);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
  <div className="bg-black/95 min-h-screen text-white">
  <HomeHeader />
  <div className="max-w-7xl mx-auto px-4">
    <ProjectList
      loading={loading}
      heading={'Your Works'}
      projects={project}
    />
  </div>
</div>
  );
};

export default React.memo(Profile);
