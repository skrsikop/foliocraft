"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { aboutContent } from '@/data/index.js';

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="lg:flex  gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full'
        >
          <Image
            src={aboutContent.image}
            alt="About Us"
            width={500} // Increase width for better quality
            height={500} // Increase height for better quality
            loading='lazy'
            className='w-full'
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='w-full'
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {aboutContent.subtitle}
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {aboutContent.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-indigo-50 rounded-full">
                  {feature.icon}
                </div>
                <p className="text-lg text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Button with Hover Animation */}
         <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8"
        >
          <button
            className="relative overflow-hidden cursor-pointer px-8 py-3 font-semibold rounded-md text-white bg-secondary transition-all duration-300 ease-in-out group"
          >
            <span className="relative z-10">Discover Our Portofolio</span>
            <span
              className="absolute inset-0 w-0 bg-primary   transition-all duration-500 ease-in-out group-hover:w-full"
            ></span>
          </button>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}