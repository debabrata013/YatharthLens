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

const mockChartData = [
  { category: 'Trusted', count: 1850, color: 'bg-green-500' },
  { category: 'Suspicious', value: 684, color: 'bg-yellow-500' },
  { category: 'Fake', value: 313, color: 'bg-red-500' },
];


export const TrustScoreChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Trust Score Distribution</h3>
    <div className="space-y-4">
      {mockChartData.map((item, index) => (
        <div key={item.category} className="flex items-center">
          <div className="w-24 text-sm font-medium text-gray-700 dark:text-gray-300">
            {item.category}
          </div>
          <div className="flex-1 mx-4">
            <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(typeof item.count === 'number' ? item.count : item.value ?? 0) / 30}%` }}
                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                className={`h-full ${item.color} rounded-lg`}
              />
            </div>
          </div>
          <div className="w-12 text-sm font-bold text-gray-900 dark:text-white">
            {item.count || item.value}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
