// components/loading.jsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-100" // Changed bg-accent to bg-indigo-100
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content-ka page-ka */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Added y: 20 for a slight upward animation
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }} // Added y animation
        transition={{ duration: 1, delay: isLoading ? 0 : 0.5 }}
        className={`${isLoading ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        {children}
      </motion.div>
    </>
  );
}