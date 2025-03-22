'use client';
import dynamic from "next/dynamic";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner, FaCheckCircle } from "react-icons/fa"; // Icons from react-icons
const  Banner = dynamic(() => import("@/components/Banner"));
const FAQSection = dynamic(() => import("@/components/FaqSection"));


const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const [isSubmitted, setIsSubmitted] = useState(false); // State for success message
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  }); // State for form data

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // Simulate an API call or form submission
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
      setIsSubmitted(true); // Show success message
    }, 3000);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Hide success message if form data changes
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Banner pageTitle={"Contact Us"} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1  p-8 "
          >
            <h1 className="text-3xl font-bold text-primary mb-6">Get In Touch</h1>
            <p className="text-gray-600 mb-4">
              We're here to help! Reach out to us for any questions or inquiries.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you have a question about our services, pricing, or anything else, our team is
              ready to answer all your questions. Feel free to reach out to us anytime!
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <FaPhone className="mr-3 text-primary" />
                +123-456-789
              </li>
              <li className="flex items-center text-gray-600">
                <FaEnvelope className="mr-3 text-primary" />
                Contact@foliocraft.com
              </li>
              <li className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-3 text-primary" />
                Address: 123, California, USA.
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg font-semibold duration-500 cursor-pointer transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-gradient-to-l from-indigo-100 via-accent to-gray-100 p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-600" />
                <p>Message sent successfully!</p>
              </motion.div>
            )}

            <div className="lg:flex gap-4">
              {/* Full Name */}
              <div className="mb-6 w-full">
                <label htmlFor="fullName" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6 w-full">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="lg:flex gap-4">
              {/* Phone Number */}
              <div className="mb-6 w-full">
                <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-6 w-full">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            {/* Submit Button with Loading Spinner */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg font-semibold duration-500 cursor-pointer transition-all flex items-center justify-center"
              disabled={isLoading || isSubmitted}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : null}
              {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      
      {/* faq  */}
      <FAQSection itemsLimit={5} />
    </div>
  );
};

export default ContactPage;