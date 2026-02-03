import React from 'react'
import { Check, X } from 'lucide-react'

const Comparison: React.FC = () => {
  const features = [
    { feature: 'AI-Powered Automation', traditional: false, growhigh: true },
    { feature: '24/7 Customer Support', traditional: false, growhigh: true },
    { feature: 'Scalable Solutions', traditional: false, growhigh: true },
    { feature: 'Data-Driven Insights', traditional: false, growhigh: true },
    { feature: 'Cost-Effective', traditional: false, growhigh: true },
    { feature: 'Rapid Implementation', traditional: false, growhigh: true },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-slate-400">See how we compare to traditional agencies</p>
        </div>
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-6 bg-slate-900/50 border-b border-slate-700">
            <div></div>
            <div className="text-center font-semibold text-slate-400">Traditional Agency</div>
            <div className="text-center font-semibold text-brand-accent">GrowHigh</div>
          </div>
          {features.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-slate-700 last:border-b-0 hover:bg-slate-800/30 transition-colors"
            >
              <div className="font-medium">{item.feature}</div>
              <div className="flex justify-center">
                {item.traditional ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="flex justify-center">
                {item.growhigh ? (
                  <Check className="w-6 h-6 text-brand-accent" />
                ) : (
                  <X className="w-6 h-6 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comparison
