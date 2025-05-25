'use client';

import { Upload, Search, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  // Steps data
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-indigo-600" />,
      title: "Upload a resume/bio",
      description: "Simply drag and drop or browse to upload PDF or DOCX files."
    },
    {
      icon: <Search className="h-12 w-12 text-indigo-600" />,
      title: "AI scans and analyzes",
      description: "Our advanced AI algorithms analyze content for authenticity markers."
    },
    {
      icon: <FileText className="h-12 w-12 text-indigo-600" />,
      title: "Get Trust Score & report",
      description: "Receive a detailed authenticity report with actionable insights."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const connectingLineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%',
      transition: { duration: 0.8, delay: 0.6 }
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="how-it-works-heading"
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
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get authentic insights in three simple steps.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-indigo-50 rounded-full p-4">
                    {step.icon}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-4 -left-4 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.2), type: "spring" }}
                >
                  {index + 1}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-4 h-0.5 bg-indigo-200 origin-left"
                  style={{ width: '2rem' }}
                  variants={connectingLineVariants}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
