'use client';

import { Brain, Shield, BarChart3, FileType, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  // Feature data
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "AI Detection",
      description: "Advanced machine learning algorithms identify AI-generated content with 95% accuracy."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Plagiarism Check",
      description: "Cross-reference content against millions of documents and online sources."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Trust Score Algorithm",
      description: "Proprietary scoring system that evaluates overall resume authenticity."
    },
    {
      icon: <FileType className="h-8 w-8 text-blue-600" />,
      title: "PDF/DOCX Support",
      description: "Upload and analyze resumes in multiple file formats seamlessly."
    },
    {
      icon: <Lock className="h-8 w-8 text-red-600" />,
      title: "Secure Analysis",
      description: "Enterprise-grade security with encrypted data processing and storage."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Get comprehensive analysis results in under 30 seconds."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section 
      id="features" 
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="features-heading"
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
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to verify resume authenticity with confidence.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="bg-white rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow"
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
