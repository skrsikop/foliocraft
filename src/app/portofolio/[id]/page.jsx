'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { projects } from '@/data/index';
import Banner from '@/components/Banner';
import CommentsSection from '@/components/CommentsSection';
import { GiCheckMark } from "react-icons/gi";
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-red-500">
        Project not found
      </div>
    );
  }

  // Animations
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-gray-50">
      {/* SEO-friendly Banner */}
      <Banner pageTitle="Project Details" />

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 mt-16">
        {/* Sidebar: Category & Tags */}
        <motion.aside
          className="w-full  lg:w-1/4 bg-gradient-to-l from-gray-100 to-indigo-100 rounded-xl p-6"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <h2 className="font-bold text-2xl text-primary mb-4">Category</h2>
          <p className="text-lg flex items-center gap-2 font-medium text-secondary mb-8">
            <GiCheckMark className="text-primary" />
            {project.category}
          </p>

          <h2 className="text-primary text-2xl font-bold mb-4">Tags</h2>
          <ul className="space-y-3">
            {project.tags.map((tag, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                custom={index}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg font-medium text-secondary"
              >
                <span>{tag.tag}</span>
              </motion.li>
            ))}
          </ul>
        </motion.aside>

        {/* Project Details */}
        <section className="w-full  lg:w-3/4 bg-white rounded-xl p-6 md:p-10 shadow-md">
          {/* Responsive & Optimized Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-8">
            {project.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="mt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Features
            </h3>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg flex items-center gap-2 text-secondary"
                >
                  <GiCheckMark className="text-primary" />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Comments Section */}
      <div className="max-w-screen-xl mx-auto mt-20">
        <CommentsSection projectId={project.id} commentTitle="Project" />
      </div>
    </div>
  );
};

export default ProjectDetails;
