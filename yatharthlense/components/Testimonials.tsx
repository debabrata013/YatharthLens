'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechCorp",
      content: "YatharthLens has transformed our hiring process. We've reduced bad hires by 40% since implementing it.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Recruitment Lead, StartupHub",
      content: "The AI detection feature is incredibly accurate. It catches things we would have missed completely.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Talent Acquisition Manager",
      content: "Fast, reliable, and easy to use. The trust scores help us make confident hiring decisions.",
      rating: 5
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Trusted by HR Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what hiring managers are saying about YatharthLens.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="flex mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </motion.div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
