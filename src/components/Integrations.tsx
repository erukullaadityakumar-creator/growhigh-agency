import React from 'react'

const Integrations: React.FC = () => {
  const integrations = [
    'Shopify', 'WooCommerce', 'HubSpot', 'Salesforce',
    'Stripe', 'Mailchimp', 'Slack', 'Zapier',
    'Google Analytics', 'Facebook Ads', 'Instagram', 'LinkedIn'
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl text-slate-400">Works with the tools you already use</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-brand-primary transition-all text-center hover:shadow-lg hover:shadow-brand-primary/20"
            >
              <span className="text-slate-300 font-medium">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations
