// ✅ CORRECT way in server component
"use client";
// import { auth, currentUser } from "@clerk/nextjs/server";

import { useState } from "react";

import { ResumeTable } from "./components/ResumeTable";
import {Topbar} from "./components/Topbar";
import { StatCard } from "./components/StatCard";
// import { Sidebar } from "./components/Sidebar";
import { TrustScoreChart } from "./components/TrustScoreChart";

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
const mockStats = [
  { title: 'Total Verifications', value: '2,847', change: '+12%', icon: FileText },
  { title: 'Avg Trust Score', value: '78.5%', change: '+3.2%', icon: Shield },
  { title: 'Flagged Resumes', value: '142', change: '-8%', icon: AlertTriangle },
];
export default async function DashboardPage() {
  // const { userId } = await auth(); // 🔥 await lagana zaroori hai
  // const user = await currentUser();

  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDark = () => setIsDark(!isDark);
  // if (!userId) {
  //   return (
  //     <div className="p-10">
  //       <h1 className="text-2xl text-red-500">Not signed in</h1>
  //       <p className="mt-4">Please sign in to access the dashboard.</p>
  //       <a href="/sign-in" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block">
  //         Sign In
  //       </a>
  //     </div>
  //   );
  // }

  return (
   <div className={isDark ? 'dark' : ''}>
  <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        {/* <Sidebar isOpen={true} onClose={() => {}} /> */}
      </div>
      {/* <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /> */}

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Topbar */}
        <Topbar 
          
        />

        

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mockStats.map((stat, index) => (
              <StatCard key={stat.title} stat={stat} index={index} />
            ))}
          </div>

          {/* Chart and Table Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TrustScoreChart />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all">
                  <span className="font-medium">Upload New Resume</span>
                  <Upload className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <span className="font-medium">View All Reports</span>
                  <History className="w-5 h-5" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <span className="font-medium">Export Data</span>
                  <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Recent Uploads Table */}
          <ResumeTable />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
