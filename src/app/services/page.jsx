import Banner from "@/components/Banner";
import FAQSection from "@/components/FaqSection";
import Services from "@/components/Services";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <Banner pageTitle={"Services"} />
      <Services itemsLimit={6} />
      <FAQSection itemsLimit={5} />
    </div>
  );
};

export default ServicesPage;
