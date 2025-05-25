import { Upload, Search, FileText } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-indigo-600" />,
      title: "Upload a resume/bio",
      description: "Simply drag and drop or browse to upload PDF or DOCX files."
    },
    {
      icon: <Search className="h-12 w-12 text-indigo-600" />,
      title: "AI scans and analyzes",
      description: "Our advanced AI algorithms analyze content for authenticity markers."
    },
    {
      icon: <FileText className="h-12 w-12 text-indigo-600" />,
      title: "Get Trust Score & report",
      description: "Receive a detailed authenticity report with actionable insights."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get authentic insights in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-50 rounded-full p-4">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
