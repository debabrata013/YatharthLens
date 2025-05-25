import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Verify Resumes.{' '}
              <span className="text-indigo-600">Authentically.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              YatharthLens uses AI to detect exaggeration, plagiarism, and ChatGPT-written content in resumes and bios.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 absolute -top-4 -left-4"></div>
              <div className="w-72 h-72 bg-white rounded-2xl shadow-2xl p-8 relative">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-green-600 font-semibold">Verified Authentic</span>
                    </div>
                    <div className="mt-2 bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-green-700">Trust Score: 94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
