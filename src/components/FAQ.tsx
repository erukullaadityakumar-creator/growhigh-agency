import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How quickly can you implement AI solutions?',
      answer: 'Most implementations take 2-4 weeks from discovery to launch. Simple automations can be live in as little as one week.',
    },
    {
      question: 'Do I need technical expertise to use your services?',
      answer: 'Not at all. We handle all the technical implementation and provide intuitive dashboards for you to monitor and manage everything.',
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients typically see 3-5x ROI within the first 6 months through increased efficiency, reduced costs, and higher conversion rates.',
    },
    {
      question: 'Can you integrate with my existing tools?',
      answer: 'Yes! We integrate with virtually all major platforms including CRMs, email marketing tools, e-commerce platforms, and more.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer ongoing support, monitoring, and optimization. Your dedicated account manager is available to help whenever you need.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-400">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
