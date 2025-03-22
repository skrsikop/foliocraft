// components/ProjectsSection.jsx
'use client'
import React, { useState } from "react";
import { projects } from "@/data/index.js";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";
import Link from "next/link";

const ProjectsSection = ({ itemsLimit = null }) => {

  const [activeTab, setActiveTab] = useState("All");

  // Tabs for filtering
  const tabs = ["All", "Branding", "Development", "Design", "Marketing"];

  // Filter projects based on active tab
  const filteredProjects =
  activeTab === "All"
    ? projects
    : projects.filter((project) =>
        project.category.includes(activeTab)
      );

    const displayedProjects = itemsLimit ? filteredProjects.slice(0, itemsLimit) : filteredProjects;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16">
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our diverse range of creative and innovative solutions
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="md:flex hidden justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-5 bg-gradient-to-l rounded-2xl from-indigo-200 via-accent to-gray-200 cursor-pointer hover:translate-y-3 transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.1 }} // Staggered animation
          >
            {/* Overlay on hover */}
            <span className="absolute inset-0 w-0 bg-accent transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="w-full rounded-[60px] h-80 object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-xl mt-3 font-semibold text-gray-800">
                {project.title}
              </h3>
              <div className="flex justify-between">
                <p className="mt-5 text-lg font-bold">{project.category}</p>
                <Link href={`/portofolio/${project.id}`}>
                  <button className="bg-primary cursor-pointer p-5 rounded-full text-white hover:bg-secondary">
                    <ImArrowRight2 className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;