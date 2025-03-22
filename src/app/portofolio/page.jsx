import Banner from "@/components/Banner";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";

const ProjectsPage = ({ itemsLimit = null }) => {
  
  return (
    <div>
      <Banner pageTitle={"Portofolio"} />    
      <ProjectsSection itemsLimit={6} />
    </div>
  );
};

export default ProjectsPage;
