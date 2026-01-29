'use client'

import { useState } from 'react'

const features = [
  {
    icon: '💬',
    title: 'WhatsApp & Telegram',
    description: 'Answer customer inquiries 24/7 on the channels they already use.',
  },
  {
    icon: '📅',
    title: 'Book Appointments',
    description: 'Auto-schedule, send reminders, and manage your calendar.',
  },
  {
    icon: '🛒',
    title: 'Take Orders',
    description: 'Accept orders, confirm details, and process payments.',
  },
  {
    icon: '🔔',
    title: 'Follow Up',
    description: 'Send thank you messages, request reviews, chase invoices.',
  },
  {
    icon: '🧠',
    title: 'Learns Your Business',
    description: 'Gets smarter over time. Knows your menu, services, and policies.',
  },
  {
    icon: '🌏',
    title: 'BM, English & Chinese',
    description: 'Speaks to your customers in their preferred language.',
  },
]

const pricing = [
  {
    name: 'Starter',
    price: 'RM 1,500',
    period: '/month',
    description: 'Perfect for small businesses',
    features: [
      '1 channel (WhatsApp OR Telegram)',
      'Basic auto-replies',
      'Business hours support',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business',
    price: 'RM 3,000',
    period: '/month',
    description: 'Most popular for growing businesses',
    features: [
      'WhatsApp + Telegram',
      'Appointment booking',
      'Order taking',
      'CRM integration',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'RM 5,000',
    period: '/month',
    description: 'For businesses that need everything',
    features: [
      'All channels',
      'Custom AI training',
      'Malaysia-hosted server',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    q: 'Do I need to be technical?',
    a: 'Not at all. We handle all the setup. Just tell us about your business and we configure everything for you.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are live within 24-48 hours. We work with you to train the AI on your specific services and policies.',
  },
  {
    q: 'Can it speak Bahasa Malaysia?',
    a: 'Yes! Our AI speaks fluent BM, English, and Chinese (Mandarin). It auto-detects the customer\'s language.',
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'You can review all conversations and correct the AI. It learns from corrections and gets better over time.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. Your data is encrypted and stored securely. Enterprise plans include Malaysia-hosted servers for full data sovereignty.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel anytime with 30 days notice.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-xl">StrykrAgent</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
          </div>
          <a
            href="#pricing"
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your AI Employee,<br />
            <span className="gradient-text">Always On Duty</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI assistant that answers WhatsApp, books appointments, and handles customers 24/7. 
            While you focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#pricing"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition shadow-lg shadow-primary/25"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition"
            >
              See How It Works
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Live in 24 hours
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> No coding needed
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Phone Mockup */}
      <section className="pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
            <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden">
              <div className="bg-green-600 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span>⚡</span>
                </div>
                <div className="text-white">
                  <div className="font-semibold">StrykrAgent</div>
                  <div className="text-xs text-green-200">Online</div>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-[#e5ddd5] min-h-[300px]">
                <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm">Hi, I want to book for 2 people tomorrow night</p>
                  <span className="text-xs text-gray-400">7:32 PM</span>
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-sm">Hi! I'd be happy to help you book. We have tables available at 7pm, 7:30pm, and 8pm tomorrow. Which time works best for you? 😊</p>
                  <span className="text-xs text-gray-400">7:32 PM ✓✓</span>
                </div>
                <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm">7:30pm please</p>
                  <span className="text-xs text-gray-400">7:33 PM</span>
                </div>
                <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                  <p className="text-sm">Perfect! ✅ Booked for 2 at 7:30pm tomorrow. I'll send you a reminder. See you then!</p>
                  <span className="text-xs text-gray-400">7:33 PM ✓✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Your AI Can Do
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Like having a full-time staff member that never sleeps, never takes leave, and speaks every language your customers do.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by Malaysian Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Businesses using StrykrAgent</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Customer messages handled monthly</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Always available, never misses a message</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'ring-2 ring-primary shadow-xl scale-105'
                    : 'shadow-sm'
                }`}
              >
                {plan.popular && (
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-xl mt-4">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            All plans include setup assistance and 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Questions? We Have Answers.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left font-medium flex items-center justify-between hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <span className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Never Miss a Customer Again?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start your free trial today. No credit card required.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get Started Free →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span className="font-bold">StrykrAgent</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 StrykrAgent. Made in Malaysia 🇲🇾
          </div>
        </div>
      </footer>
    </main>
  )
}
