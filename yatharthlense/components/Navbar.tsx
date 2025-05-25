'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600">YatharthLens</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Try it now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">
              Home
            </a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">
              How It Works
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600">
              Contact
            </a>
            <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors">
              Try it now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
