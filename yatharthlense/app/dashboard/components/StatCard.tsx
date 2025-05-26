"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Upload,
  History,
  Settings,
  Bell,
  Moon,
  Sun,
  User,
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Menu,
  X,
  FileText,
} from 'lucide-react';


type Stat = {
  title: string;
  value: string | number;
  change: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
        <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
          {stat.change} from last month
        </p>
      </div>
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
        <stat.icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </motion.div>
);
