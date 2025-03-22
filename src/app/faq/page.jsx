import Banner from "@/components/Banner";
import FAQSection from "@/components/FaqSection";
import React from "react";

const FaqPage = () => {
  return (
    <div>
      <Banner pageTitle={"Faq"} />
      <FAQSection itemsLimit={9} />
    </div>
  );
};

export default FaqPage;
