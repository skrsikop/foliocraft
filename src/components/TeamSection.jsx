'use client'
import { teamMembers } from "@/data";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TeamSection = ({ itemsLimit = null }) => {
  const displayedTeam = itemsLimit ? teamMembers.slice(0, itemsLimit) : teamMembers;

  // Animation variants for team members
  const teamMemberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Hover animation for the image
  const imageHoverVariants = {
    hover: { scale: 0.95, transition: { duration: 0.3 } },
  };

  // Hover animation for social icons
  const socialIconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl text-primary font-bold text-center ">Our Team Members</h2>
      <p className="text-center text-secondary font-medium text-lg mb-8 ">
        Our team members are passionate about their work .
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedTeam.map((team, index) => (
          <motion.div
            key={index}
            variants={teamMemberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-gradient-to-l cursor-pointer from-indigo-100 to-gray-100 rounded-lg shadow-lg overflow-hidden text-center p-6 hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Team Member Image with Hover Effect */}
            <motion.div
              className="relative w-full mx-auto rounded-lg overflow-hidden"
              whileHover="hover"
              variants={imageHoverVariants}
            >
              <Image
                src={team.image}
                alt={team.name}
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Social Media Icons inside the Image */}
              <motion.div
                className="absolute inset-0 flex items-center mt-40 justify-center gap-2 bg-transparent bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                variants={socialIconVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-l cursor-pointer rounded-full from-indigo-400 to-blue-400 p-3"
                >
                  <FaFacebook className="text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-l cursor-pointer rounded-full from-indigo-400 to-blue-400 p-3"
                >
                  <FaTwitter className="text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-l cursor-pointer rounded-full from-indigo-400 to-blue-400 p-3"
                >
                  <FaInstagram className="text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-l cursor-pointer rounded-full from-indigo-400 to-blue-400 p-3"
                >
                  <FaLinkedin className="text-white" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Team Member Name and Niche */}
            <h3 className="text-xl text-primary font-bold mt-4">{team.name}</h3>
            <p className="text-secondary font-medium">{team.niche}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;