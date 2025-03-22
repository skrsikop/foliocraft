'use client'

import { pricing } from "@/data";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PricingSection = () => {


  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-4xl text-primary pb-2">
          Pricing Plans
        </h1>
        <p className="text-center font-medium text-secondary text-lg pb-8">
          Our pricing plans cater to different budgets and needs. Choose the plan
          that best suits your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricing.map((price, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              className='bg-gradient-to-l from-gray-50 hover:translate-y-2 via-accent to-indigo-50 p-6 cursor-pointer  rounded-lg shadow-lg transform transition-all duration-300 ${
              '
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                {price.title}
              </h2>
              <p className="text-3xl font-bold text-secondary mb-4">
                {price.price}
              </p>
              <p className="text-gray-600 mb-6">{price.description}</p>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Features
              </h3>
              <ul className="space-y-3">
                {price.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-primary mr-2"><IoMdCheckmarkCircleOutline />                    </span>
                    <span className="text-gray-700">{feature.feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className='inline-block mt-3 w-full px-3 text-center py-4 rounded-full bg-primary hover:bg-secondary  text-white cursor-pointer transition-all duration-500 '
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;