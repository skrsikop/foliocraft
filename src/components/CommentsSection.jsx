// components/CommentsSection.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserCircle, FaCheckCircle, FaSpinner, FaEdit, FaTrash } from "react-icons/fa";

const CommentsSection = ({ projectId, commentTitle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null); // Track which comment is being edited

  // Animation variants for success message
  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for comments
  const commentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${projectId}`)) || [];
    setComments(savedComments);
  }, [projectId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      if (editingCommentId !== null) {
        // Edit existing comment
        const updatedComments = comments.map((c) =>
          c.date === editingCommentId ? { ...c, name, email, comment } : c
        );
        setComments(updatedComments);
        localStorage.setItem(`comments-${projectId}`, JSON.stringify(updatedComments));
        setEditingCommentId(null); // Reset editing state
      } else {
        // Add new comment
        const newComment = { name, email, comment, date: new Date().toLocaleString() };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem(`comments-${projectId}`, JSON.stringify(updatedComments));
      }

      setName('');
      setEmail('');
      setComment('');
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  // Handle delete comment
  const handleDelete = (date) => {
    const updatedComments = comments.filter((c) => c.date !== date);
    setComments(updatedComments);
    localStorage.setItem(`comments-${projectId}`, JSON.stringify(updatedComments));
  };

  // Handle edit comment
  const handleEdit = (comment) => {
    setName(comment.name);
    setEmail(comment.email);
    setComment(comment.comment);
    setEditingCommentId(comment.date); // Set the comment ID being edited
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        className="mt-10 p-6 bg-gradient-to-l from-indigo-200 to-gray-200 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
              <span>
                {editingCommentId !== null
                  ? "Comment updated successfully!"
                  : "Your Comment has been submitted successfully!"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {comments.length === 0 ? (
          <p className="text-secondary text-center">No comments yet on this {commentTitle}.</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-50 rounded-lg flex gap-3 relative"
                variants={commentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaUserCircle className="text-xl mt-2 text-indigo-500" />
                <div className="flex-1">
                  <h3 className="font-semibold text-primary">{comment.name}</h3>
                  <p className="text-gray-600">{comment.comment}</p>
                  <motion.p
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {comment.date}
                  </motion.p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(comment)}
                    className="text-primary cursor-pointer hover:text-secondary text-2xl"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(comment.date)}
                    className="text-secondary hover:text-primary cursor-pointer text-xl"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="space-y-4">
            <motion.div variants={inputVariants} initial="hidden" animate="visible">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants} initial="hidden" animate="visible">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants} initial="hidden" animate="visible">
              <textarea
                placeholder="Your Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                required
              />
            </motion.div>
          </div>
          <motion.div variants={inputVariants} initial="hidden" animate="visible" className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 cursor-pointer bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all relative"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FaSpinner className="animate-spin mr-2" />
                  {editingCommentId !== null ? "Updating..." : "Submitting..."}
                </motion.div>
              ) : (
                editingCommentId !== null ? "Update Comment" : "Submit Your Comment"
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default CommentsSection;