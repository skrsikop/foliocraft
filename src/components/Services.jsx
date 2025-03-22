'use client'

import { motion } from 'framer-motion';
import { services } from '../data/index.js';
import Image from 'next/image';

const Services = ({ itemsLimit = null }) => {
  const displayedServices = itemsLimit ? services.slice(0, itemsLimit) : services;

  // Animation variants for the service cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };


  return (
    <div className="px-8 lg:py-16 md:py-10 py-7 mt-20">
      <div className=" mb-12 flex justify-between">
        <div>
          <h1 className="lg:text-4xl max-md:text-2xl text-3xl  font-bold text-secondary">Services We Offer</h1>
          <p className="lg:text-3xl text-2xl max-md:text-xl text-gray-600 font-medium mt-2">
            Services we can help you with.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden cursor-pointer group"
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            {/* Gradient overlay on hover */}
            <span
              className="absolute inset-0 w-0 bg-gradient-to-r from-gray-100 to-indigo-100 transition-all duration-500 ease-in-out group-hover:w-full"
            ></span>

            <div className="flex gap-4 relative z-10">
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="text-primary"
              />
              <h1 className="text-2xl font-bold text-secondary mt-7  transition-colors duration-300">
                {service.title}
              </h1>
            </div>
            <p className="text-gray-600 mt-5 ml-8 relative z-10  transition-colors duration-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;