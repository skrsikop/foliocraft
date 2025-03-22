'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { blogs } from '@/data/index';
import Banner from '@/components/Banner';
import CommentsSection from '@/components/CommentsSection';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 font-bold text-2xl">
        Blog not found
      </div>
    );
  }

  // Animations
  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
  };

  return (
    <>

      <div className="px-4  lg:px-20 py-6 max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner pageTitle="Blog Details" />

        <main className="flex flex-col lg:flex-row gap-10 mt-20 md:mt-32">
          {/* Categories & Tags */}
          <motion.aside
            className="w-full lg:w-1/4 rounded-xl p-4 md:p-6 bg-gradient-to-l from-gray-100 to-indigo-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={categoryVariants}
            aria-label="Categories and Tags"
          >
            {/* Categories */}
            <h2 className="font-bold text-xl md:text-2xl text-primary">Category</h2>
            <motion.div
              variants={tagVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 md:mt-8 space-y-2"
            >
              {blog.categories.map((category, index) => (
                <motion.div key={index} variants={categoryVariants}>
                  <p className="text-base md:text-lg font-medium text-secondary">
                    {category.category}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tags */}
            <h2 className="text-primary text-xl md:text-2xl font-bold mt-8">Tags</h2>
            <motion.div
              variants={tagVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 space-y-2"
            >
              {blog.tags.map((tag, index) => (
                <motion.div key={index} variants={tagVariants}>
                  <p className="text-base md:text-lg font-medium text-secondary">
                    {tag.tag}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>

          {/* Blog Details */}
          <article className="w-full px-4  py-6 bg-accent rounded-xl" aria-label="Blog Content">
            {/* Image */}
            <div className="relative w-full h-64  rounded-xl overflow-hidden mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg" // optional placeholder image
              />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">{blog.title}</h1>

            <section className="mt-6 flex flex-col gap-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>{blog.description1}</p>
              <p>{blog.description2}</p>
              <p>{blog.description3}</p>
            </section>
          </article>
        </main>

        {/* Comments Section */}
        <section className="mt-12 md:mt-20" aria-label="Comments Section">
          <CommentsSection blogId={blog.id} commentTitle="Blog" />
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
