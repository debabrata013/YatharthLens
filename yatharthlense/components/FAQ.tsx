'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do you detect AI-generated content?",
      answer: "We use advanced machine learning models trained on millions of text samples to identify patterns and linguistic markers typical of AI-generated content, including ChatGPT and other language models."
    },
    {
      question: "Is my data safe and secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data transmission and storage. Your uploaded documents are processed securely and deleted after analysis. We never share or store your personal information."
    },
    {
      question: "Can YatharthLens work on resumes in other languages?",
      answer: "Currently, we support English resumes with high accuracy. We're actively working on expanding language support to include Spanish, French, German, and other major languages."
    },
    {
      question: "How accurate is the plagiarism detection?",
      answer: "Our plagiarism detection system cross-references content against billions of web pages and documents, achieving over 98% accuracy in identifying copied or paraphrased content."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about YatharthLens.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
