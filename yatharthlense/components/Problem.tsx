'use client';

import { AlertTriangle, Bot, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Problem() {
  // Problem data
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Fake Experiences",
      description: "Candidates exaggerate roles, responsibilities, and achievements to appear more qualified."
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-500" />,
      title: "AI-Written Resumes",
      description: "ChatGPT and other AI tools create polished but inauthentic resume content."
    },
    {
      icon: <Copy className="h-8 w-8 text-blue-500" />,
      title: "Copied Bios",
      description: "Plagiarized content from other professionals' profiles and resumes."
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="problem-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            The Problem Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hiring managers struggle to identify authentic candidates in a world of embellished resumes.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {problem.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
