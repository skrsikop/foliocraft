import Banner from "@/components/Banner";
import TeamSection from "@/components/TeamSection";
import React from "react";

const TeamPage = () => {
  return(
    <div>
      <Banner pageTitle={"Team Members"} />
      <TeamSection itemsLimit={8} />
    </div>
  );
};

export default TeamPage;
