import { AlertTriangle, Bot, Copy } from 'lucide-react'

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Fake Experiences",
      description: "Candidates exaggerate roles, responsibilities, and achievements to appear more qualified."
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-500" />,
      title: "AI-Written Resumes",
      description: "ChatGPT and other AI tools create polished but inauthentic resume content."
    },
    {
      icon: <Copy className="h-8 w-8 text-blue-500" />,
      title: "Copied Bios",
      description: "Plagiarized content from other professionals' profiles and resumes."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Problem Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hiring managers struggle to identify authentic candidates in a world of embellished resumes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
