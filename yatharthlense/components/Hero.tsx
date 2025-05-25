'use client';

import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <section 
      id="home" 
      className="bg-gradient-to-br from-indigo-50 to-white py-16 sm:py-20 lg:py-32 "
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Verify Resumes.{' '}
              <span className="text-indigo-600">Authentically.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              YatharthLens uses AI to detect exaggeration, plagiarism, and ChatGPT-written content in resumes and bios.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button 
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center group focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                aria-label="Get Started"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                aria-label="Watch Demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={cardVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 absolute -top-4 -left-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <div className="w-72 h-72 bg-white rounded-2xl shadow-2xl p-8 relative">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold" aria-hidden="true">✓</span>
                      </div>
                      <span className="text-green-600 font-semibold">Verified Authentic</span>
                    </div>
                    <motion.div 
                      className="mt-2 bg-green-50 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="text-sm text-green-700">Trust Score: 94%</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
