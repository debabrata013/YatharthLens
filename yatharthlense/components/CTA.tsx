'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section 
      className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-700 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Background animated shapes */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          aria-hidden="true"
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-10"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          aria-hidden="true"
        />
        
        <motion.h2 
          id="cta-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start verifying with YatharthLens today
        </motion.h2>
        
        <motion.p 
          className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join hundreds of HR professionals who trust YatharthLens to make better hiring decisions.
        </motion.p>
        
        <motion.button 
          className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Upload Resume Now"
        >
          Upload Resume Now
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
