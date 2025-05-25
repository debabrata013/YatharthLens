'use client';

import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  // Footer links
  const quickLinks = [
    { href: "#", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#contact", label: "Contact" }
  ];

  const legalLinks = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookie Policy" }
  ];

  const socialLinks = [
    { href: "#", icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
    { href: "#", icon: <Github className="h-6 w-6" />, label: "GitHub" },
    { href: "#", icon: <Mail className="h-6 w-6" />, label: "Email" }
  ];

  return (
    <footer 
      id="contact" 
      className="bg-gray-900 text-white py-12 sm:py-16"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">YatharthLens</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered resume authenticity verification platform helping businesses make better hiring decisions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} YatharthLens. Built for trust.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
