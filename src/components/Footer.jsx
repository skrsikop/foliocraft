'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { quickLinks, socialMedia, supportLinks } from '@/data';

const Footer = () => {

  // Animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className='bg-gray-100 text-secondary py-12'>
      <div className='container mx-auto px-4'>
        {/* Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/images/logo.png'
                alt='FolioCraft Logo'
                width={40}
                height={40}
                className='rounded-full'
              />
              <h1 className='text-2xl font-bold'>FolioCraft</h1>
            </Link>
            <p className='text-gray-600'>
              We specialize in web development, design, and digital marketing to help businesses grow online.
            </p>
            {/* Social Media Icons */}
            <div className='flex gap-4'>
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.path}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-primary transition-colors duration-300'
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='text-xl font-bold text-primary'>Quick Links</h2>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial='hidden'
                  whileInView='visible'
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className='text-gray-600 hover:text-primary transition-colors duration-300'
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className='text-xl font-bold text-primary'>Support</h2>
            <ul className='space-y-2'>
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial='hidden'
                  whileInView='visible'
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className='text-gray-600 hover:text-primary transition-colors duration-300'
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className='space-y-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className='text-xl text-primary font-bold'>Contact Us</h2>
            <ul className='space-y-2 text-gray-600'>
              <motion.li variants={linkVariants} initial='hidden' whileInView='visible'>
                +123-456-789
              </motion.li>
              <motion.li variants={linkVariants} initial='hidden' whileInView='visible'>
                support@foliocraft.com
              </motion.li>
              <motion.li variants={linkVariants} initial='hidden' whileInView='visible'>
                Address: USA, California
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Text */}
        <motion.div
          className='text-center mt-8 pt-8 border-t border-primary'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className='text-gray-600'>
            &copy; {new Date().getFullYear()} FolioCraft. All rights reserved by skrsikop.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;