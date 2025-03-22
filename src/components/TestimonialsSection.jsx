// components/TestimonialsSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '@/data';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  // Automatic carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 ">
      <div className=" lg:flex  mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col w-full">
          <div className="text-left">
            <h2 className="text-3xl max-md:text-xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 mt-5 text-5xl ">See what people are saying about our work</p>
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
              <span className="relative z-10">Contact Us</span>
              <span
                className="absolute inset-0 w-0 bg-primary   transition-all duration-500 ease-in-out group-hover:w-full"
              ></span>
            </button>
          </motion.div>
        </div>

        <div className="relative w-full mt-6  overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col rounded-xl items-center bg-gradient-to-l from-gray-200  to-indigo-100 p-8  shadow-2xl hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <FaQuoteLeft className="text-4xl text-indigo-500 mb-4" />
                <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].review}"</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].job}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2  cursor-pointer  bg-primary p-4 rounded-full shadow-lg hover:bg-secondary transition-all"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer  bg-primary p-4 rounded-full shadow-lg hover:bg-secondary transition-all"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;