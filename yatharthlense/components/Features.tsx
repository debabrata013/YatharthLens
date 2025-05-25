import { Brain, Shield, BarChart3, FileType, Lock, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "AI Detection",
      description: "Advanced machine learning algorithms identify AI-generated content with 95% accuracy."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Plagiarism Check",
      description: "Cross-reference content against millions of documents and online sources."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Trust Score Algorithm",
      description: "Proprietary scoring system that evaluates overall resume authenticity."
    },
    {
      icon: <FileType className="h-8 w-8 text-blue-600" />,
      title: "PDF/DOCX Support",
      description: "Upload and analyze resumes in multiple file formats seamlessly."
    },
    {
      icon: <Lock className="h-8 w-8 text-red-600" />,
      title: "Secure Analysis",
      description: "Enterprise-grade security with encrypted data processing and storage."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Get comprehensive analysis results in under 30 seconds."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to verify resume authenticity with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}