import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechCorp",
      content: "YatharthLens has transformed our hiring process. We've reduced bad hires by 40% since implementing it.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Recruitment Lead, StartupHub",
      content: "The AI detection feature is incredibly accurate. It catches things we would have missed completely.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Talent Acquisition Manager",
      content: "Fast, reliable, and easy to use. The trust scores help us make confident hiring decisions.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by HR Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what hiring managers are saying about YatharthLens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
