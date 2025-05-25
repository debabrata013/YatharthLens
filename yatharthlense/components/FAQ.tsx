'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data
  const faqs = [
    {
      question: "How do you detect AI-generated content?",
      answer: "We use advanced machine learning models trained on millions of text samples to identify patterns and linguistic markers typical of AI-generated content, including ChatGPT and other language models."
    },
    {
      question: "Is my data safe and secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your uploaded documents are processed securely and deleted after analysis. We never share or store your personal information."
    },
    {
      question: "Can YatharthLens work on resumes in other languages?",
      answer: "Currently, we support English resumes with high accuracy. We're actively working on expanding language support to include Spanish, French, German, and other major languages."
    },
    {
      question: "How accurate is the plagiarism detection?",
      answer: "Our plagiarism detection system cross-references content against billions of web pages and documents, achieving over 98% accuracy in identifying copied or paraphrased content."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.25, delay: 0.15 }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.25 }
      }
    }
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about YatharthLens.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    className="overflow-hidden"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
