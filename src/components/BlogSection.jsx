// components/BlogSection.jsx
'use client'
import React, { useState } from "react";
import { blogs } from "@/data/index.js"; // Assuming blogPosts is imported from your data file
import { motion } from "framer-motion";
import Image from "next/image";
import { ImArrowRight2 } from "react-icons/im";
import Link from "next/link";

const BlogSection = ({ itemsLimit = null }) => {
  const displayedBlogs = itemsLimit ? blogs.slice(0, itemsLimit) : blogs;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover animation
  };

  // Function to format the date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const today = formatDate(new Date()); // Format today's date

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
          Latest Blog Posts
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore the latest articles and insights from Foliocraft.
        </motion.p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {displayedBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: index * 0.1 }} // Staggered animation
          >
            {/* Image */}
            <div className="w-full h-48 relative overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="mt-6">
              <Link href={`/blog/${blog.id}`} className="text-xl font-semibold text-gray-800">
                {blog.title}
              </Link>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  {blog.description1.substring(0, 100)}... {/* Truncate description */}
                </p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Author: <span className="text-primary">Skrsikop</span>
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    Date: <span className="text-primary">{today}</span>
                  </p>
                </div>
                <Link href={`/blog/${blog.id}`}>
                  <button className="bg-primary p-3 cursor-pointer rounded-full text-white hover:bg-secondary transition-all duration-300">
                    <ImArrowRight2 className="text-xl" />
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

export default BlogSection;