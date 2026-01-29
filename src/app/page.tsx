'use client'

import { useState, useEffect } from 'react'

const features = [
  {
    icon: '💬',
    title: 'WhatsApp & Telegram',
    description: 'Reply instantly, 24/7. Never lose a customer to slow responses again.',
  },
  {
    icon: '📅',
    title: 'Smart Booking',
    description: 'Handles appointments, sends reminders, reschedules automatically.',
  },
  {
    icon: '🛒',
    title: 'Order Management',
    description: 'Takes orders, confirms details, processes payments seamlessly.',
  },
  {
    icon: '🧠',
    title: 'Learns Your Business',
    description: 'Knows your menu, services, pricing. Gets smarter every day.',
  },
  {
    icon: '🌏',
    title: '100+ Languages',
    description: 'Speaks your customers\' language. Auto-detects and responds naturally.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'See every conversation, track performance, spot opportunities.',
  },
]

const useCases = [
  { icon: '🍽️', name: 'Restaurants', desc: 'Reservations, menu inquiries, orders' },
  { icon: '💇', name: 'Salons & Spas', desc: 'Appointment booking, services info' },
  { icon: '🏥', name: 'Clinics', desc: 'Patient scheduling, reminders' },
  { icon: '🏋️', name: 'Gyms & Studios', desc: 'Class bookings, membership info' },
  { icon: '🏨', name: 'Hotels', desc: 'Reservations, concierge services' },
  { icon: '🛍️', name: 'Retail', desc: 'Product inquiries, order tracking' },
]

const pricing = [
  {
    name: 'Starter',
    price: '99',
    description: 'For small businesses getting started',
    features: [
      '1 channel (WhatsApp or Telegram)',
      'Basic auto-replies',
      'Business hours support',
      '500 messages/month',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Business',
    price: '199',
    description: 'Most popular for growing businesses',
    features: [
      'WhatsApp + Telegram',
      'Appointment booking',
      'Order taking',
      'CRM integration',
      '2,000 messages/month',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '499',
    description: 'For businesses that need everything',
    features: [
      'All channels',
      'Custom AI training',
      'Dedicated server',
      'Unlimited messages',
      'Dedicated manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    q: 'Do I need any technical knowledge?',
    a: 'Zero. We handle everything—setup, training, maintenance. You just tell us about your business.',
  },
  {
    q: 'How fast can I get started?',
    a: 'Most businesses go live within 24-48 hours. We work with you to train the AI on your specific services.',
  },
  {
    q: 'What languages does it support?',
    a: 'Over 100 languages including English, Spanish, French, German, Mandarin, Arabic, and more. It auto-detects and responds in the customer\'s language.',
  },
  {
    q: 'What if the AI makes a mistake?',
    a: 'You can review all conversations and correct the AI. It learns from every correction and improves over time.',
  },
  {
    q: 'Is my customer data safe?',
    a: 'Absolutely. All data is encrypted end-to-end. Enterprise plans include dedicated servers in your region.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No lock-in contracts. Cancel with 30 days notice.',
  },
]

const testimonials = [
  {
    quote: "Our response time went from hours to seconds. Customers love it.",
    name: "Sarah Chen",
    role: "Owner, Bloom Salon",
    avatar: "S"
  },
  {
    quote: "It handles 80% of inquiries automatically. Game changer for our small team.",
    name: "Marcus Johnson",
    role: "Manager, Urban Bites",
    avatar: "M"
  },
  {
    quote: "Setup took 2 hours. Now it books appointments while I sleep.",
    name: "Dr. Priya Sharma",
    role: "Dentist, Smile Clinic",
    avatar: "P"
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
      {/* Noise texture */}
      <div className="fixed inset-0 noise pointer-events-none" />

      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-[#00d4aa]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4aa] to-[#00a8cc] flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <span className="font-bold text-xl tracking-tight">StrykrAgent</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#8b8b9e] hover:text-white transition">Features</a>
            <a href="#pricing" className="text-[#8b8b9e] hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-[#8b8b9e] hover:text-white transition">FAQ</a>
          </div>
          <a
            href="#pricing"
            className="bg-[#00d4aa] text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-[#00e4ba] transition shadow-lg shadow-[#00d4aa]/25"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className={mounted ? 'fade-in-up' : 'opacity-0'}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse" />
                <span className="text-sm text-[#8b8b9e]">Trusted by 500+ businesses worldwide</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                Your AI Staff<br />
                <span className="gradient-text">Never Sleeps</span>
              </h1>
              <p className="text-xl text-[#8b8b9e] mb-8 leading-relaxed max-w-lg">
                An AI employee that handles WhatsApp, books appointments, and serves customers 24/7—so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#pricing"
                  className="group bg-[#00d4aa] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00e4ba] transition shadow-xl shadow-[#00d4aa]/30 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#features"
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center"
                >
                  See Demo
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-[#8b8b9e]">
                <span className="flex items-center gap-2">
                  <span className="text-[#00d4aa]">✓</span> Live in 24 hours
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#00d4aa]">✓</span> No coding needed
                </span>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className={`${mounted ? 'fade-in-up stagger-2' : 'opacity-0'} relative`}>
              <div className="float">
                {/* Phone frame */}
                <div className="relative mx-auto w-[300px] md:w-[340px]">
                  {/* Glow behind phone */}
                  <div className="absolute inset-0 bg-[#00d4aa]/20 blur-[60px] rounded-full" />
                  
                  {/* Phone body */}
                  <div className="relative bg-[#1a1a2e] rounded-[3rem] p-2 shadow-2xl border border-white/10">
                    <div className="bg-[#111b21] rounded-[2.5rem] overflow-hidden">
                      {/* WhatsApp header */}
                      <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#00a8cc] flex items-center justify-center text-black font-bold">
                          S
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">StrykrAgent</div>
                          <div className="text-xs text-[#00d4aa]">● Online</div>
                        </div>
                      </div>
                      
                      {/* Chat messages */}
                      <div className="p-4 space-y-3 min-h-[320px] bg-[#0b141a]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23ffffff' stroke-opacity='0.02' fill='none'/%3E%3C/svg%3E\")"}}>
                        {/* Received */}
                        <div className="flex">
                          <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[85%] shadow">
                            <p className="text-sm text-white">Hi, I'd like to book a table for 2 tomorrow evening?</p>
                            <span className="text-[10px] text-[#8b8b9e] mt-1 block">7:32 PM</span>
                          </div>
                        </div>

                        {/* Sent */}
                        <div className="flex justify-end">
                          <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[85%] shadow">
                            <p className="text-sm text-white">Hi! 😊 We have tables available at 7pm, 7:30pm, and 8pm tomorrow. Which time works best for you?</p>
                            <span className="text-[10px] text-[#8b8b9e] mt-1 block text-right">7:32 PM ✓✓</span>
                          </div>
                        </div>

                        {/* Received */}
                        <div className="flex">
                          <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[85%] shadow">
                            <p className="text-sm text-white">7:30pm please</p>
                            <span className="text-[10px] text-[#8b8b9e] mt-1 block">7:33 PM</span>
                          </div>
                        </div>

                        {/* Sent */}
                        <div className="flex justify-end">
                          <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[85%] shadow">
                            <p className="text-sm text-white">Perfect! ✅ Booked for 2 at 7:30pm tomorrow. I'll send a reminder. See you then!</p>
                            <span className="text-[10px] text-[#8b8b9e] mt-1 block text-right">7:33 PM ✓✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Businesses' },
            { value: '1M+', label: 'Messages handled' },
            { value: '24/7', label: 'Availability' },
            { value: '<30s', label: 'Response time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-[#8b8b9e]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-wider uppercase mb-4 block">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-[#8b8b9e] text-lg max-w-2xl mx-auto">
              Like hiring a full-time employee that never sleeps, never calls in sick, and speaks every language your customers do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="group bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-[#00d4aa]/30 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-[#8b8b9e] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-wider uppercase mb-4 block">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Service Businesses
            </h2>
            <p className="text-[#8b8b9e] text-lg">
              From restaurants to clinics, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {useCases.map((useCase, i) => (
              <div 
                key={i}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center hover:bg-white/[0.05] hover:border-[#00d4aa]/30 transition-all"
              >
                <span className="text-4xl mb-3 block">{useCase.icon}</span>
                <h3 className="font-semibold mb-1">{useCase.name}</h3>
                <p className="text-xs text-[#8b8b9e]">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Loved by Business Owners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-8"
              >
                <p className="text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4aa] to-[#00a8cc] flex items-center justify-center text-black font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-[#8b8b9e]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4aa]/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-wider uppercase mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-[#8b8b9e] text-lg">
              No hidden fees. Cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-[#12121a] rounded-3xl p-8 border ${
                  plan.popular
                    ? 'border-[#00d4aa]/50 shadow-xl shadow-[#00d4aa]/10'
                    : 'border-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00d4aa] to-[#00a8cc] text-black text-xs font-bold px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-[#8b8b9e] text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-sm text-[#8b8b9e]">$</span>
                  <span className="text-5xl font-bold ml-1">{plan.price}</span>
                  <span className="text-[#8b8b9e]">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="text-[#00d4aa] mt-0.5">✓</span>
                      <span className="text-[#8b8b9e]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-[#00d4aa] text-black hover:bg-[#00e4ba] shadow-lg shadow-[#00d4aa]/25'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-[#8b8b9e] text-sm mt-8">
            14-day free trial on all plans. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-wider uppercase mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Got Questions?
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left font-medium flex items-center justify-between hover:bg-white/[0.02] transition"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#00d4aa] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-[#8b8b9e]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#00d4aa]/20 via-[#12121a] to-purple-500/20 rounded-3xl p-12 md:p-16 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Never Miss<br />a Customer Again?
              </h2>
              <p className="text-xl text-[#8b8b9e] mb-8 max-w-xl mx-auto">
                Join 500+ businesses already using StrykrAgent to serve customers 24/7.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#00d4aa] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00e4ba] transition shadow-xl shadow-[#00d4aa]/30"
              >
                Start Free Trial
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4aa] to-[#00a8cc] flex items-center justify-center">
              <span>⚡</span>
            </div>
            <span className="font-bold">StrykrAgent</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#8b8b9e]">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-sm text-[#8b8b9e]">
            © 2026 StrykrAgent. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
