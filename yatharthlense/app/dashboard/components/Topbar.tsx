"use client"
import React, { useState } from 'react';
import LogoutButton from "@/components/LogoutButton";
import { UserButton } from "@clerk/nextjs";

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


export const Topbar: React.FC<{}> = () => (
  <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back! Here's your resume analysis overview.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
       
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          {/* <User className="w-4 h-4 text-white" /> */}
            <UserButton />
        </div>
        {/* <LogoutButton /> */}
      </div>
    </div>
  </div>
);
