'use client'

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("../components/Services"));
const AboutSection = dynamic(() => import("../components/AboutSection"));
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"));
const FAQSection = dynamic(() => import("../components/FaqSection"));
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"));
const BlogSection = dynamic(() => import("../components/BlogSection"));


const HomePage = () => {
  return (
    <div>

      <div className="md:min-h-screen overflow-x-hidden flex items-center justify-center px-4 text-secondary">
        {/* Hero Section */}
        <div className="max-w-4xl text-center space-y-8 mt-40 pb-20">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl max-md:text-2xl font-bold  mb-6 leading-tight">
              We Are Developers, Designers & Marketers <span className="text-primary">For Your Business</span>.
            </h1>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
              We are a team of passionate creatives, committed to delivering high-quality digital experiences.
              We help businesses achieve their goals by creating visually stunning, user-friendly, and engaging solutions.
            </p>

            {/* Button with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                className="relative overflow-hidden cursor-pointer px-8 py-3 font-semibold rounded-md text-white bg-secondary transition-all duration-300 ease-in-out group"
              >
                <span className="relative z-10">See Pricing Plan</span>
                <span
                  className="absolute inset-0 w-0 bg-primary   transition-all duration-500 ease-in-out group-hover:w-full"
                ></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <Services />
      <AboutSection />
      <ProjectsSection itemsLimit={3} />
      <FAQSection itemsLimit={5} />
      <TestimonialsSection />
      <BlogSection itemsLimit={3} />
    
    </div>
  );
};

export default HomePage;
