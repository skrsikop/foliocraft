'use client'

import React, { useState } from "react";
import { faqs } from "@/data/index.js"; // FAQ data from @/data/index.js
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaSpinner, FaCheckCircle } from "react-icons/fa"; // Icons for FAQ toggle, loading, and success

const FAQSection = ({ itemsLimit = null }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active FAQ
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission success
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    question: "",
    message: "",
  });

  const displayedFaqs = itemsLimit ? faqs.slice(0, itemsLimit) : faqs;

  // Toggle FAQ answer visibility
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true); // Show success message

      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          question: "",
          message: "",
        });
      }, 3000); // Hide success message after 3 seconds
    }, 2000); // Simulate submission delay
  };

  // Animation variants for FAQ
  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  // Animation variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for success message
  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Flex Container for FAQ and Form */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions about our services.
            </p>

            {/* FAQ List */}
            <div className="space-y-4">
              {displayedFaqs.slice(0, 5).map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-l from-indigo-100 via-accent to-gray-50 rounded-lg shadow-md cursor-pointer overflow-hidden"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h3 className="text-[16px] font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeIndex === index ? (
                        <FaChevronUp className="text-gray-600" />
                      ) : (
                        <FaChevronDown className="text-gray-600" />
                      )}
                    </motion.div>
                  </div>

                  {/* FAQ Answer with Gradient Background */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="overflow-hidden"
                        variants={faqVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 bg-gradient-to-r from-indigo-200 to-gray-200">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Have a Question?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to ask us anything. We're here to help!
            </p>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6 flex items-center gap-3"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <FaCheckCircle className="text-green-600" />
                  <span>Your question has been submitted successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
              onSubmit={handleSubmit}
            >
              {/* Full Name Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              {/* Your Question Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Question
                </label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your question"
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={inputVariants}>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={inputVariants}>
                <button
                  type="submit"
                  className="w-full cursor-pointer px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all relative"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaSpinner className="animate-spin mr-2" />
                      Submitting...
                    </motion.div>
                  ) : (
                    "Submit Your Question"
                  )}
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;