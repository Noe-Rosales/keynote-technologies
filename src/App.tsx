import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Network,
  Cloud,
  Wifi,
  HardDrive,
  Shield,
  ChevronRight,
  Menu,
  X,
  Send,
  Monitor,
  Clock,
  Users,
  CheckCircle2,
} from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)
  const [formSubmitting, setFormSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)
    setFormError(false)
    try {
      const response = await fetch('https://formspree.io/f/xeeplbvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })
      if (response.ok) {
        setFormSubmitted(true)
        setTimeout(() => setFormSubmitted(false), 5000)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setFormError(true)
        setTimeout(() => setFormError(false), 5000)
      }
    } catch {
      setFormError(true)
      setTimeout(() => setFormError(false), 5000)
    }
    setFormSubmitting(false)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const services = [
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Network Design & Development',
      description:
        'Custom network architecture tailored to your business needs. We design, implement, and maintain secure, high-performance networks that scale with your growth.',
      image: '/images/network.jpg',
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email Solutions',
      description:
        'Enterprise-grade email hosting and management. We deploy reliable, secure email systems with spam filtering, archiving, and mobile access for your entire team.',
      image: '/images/email.jpg',
    },
    {
      icon: <Wifi className="w-10 h-10" />,
      title: 'Wireless Solutions',
      description:
        'Fast, reliable wireless connectivity for your workspace. From site surveys to deployment, we ensure seamless Wi-Fi coverage across your entire facility.',
      image: '/images/wireless.jpg',
    },
    {
      icon: <HardDrive className="w-10 h-10" />,
      title: 'Backup Solutions',
      description:
        'Protect your critical data with automated backup systems. Our solutions provide local and offsite redundancy so your business never misses a beat.',
      image: '/images/backup.jpg',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud Services',
      description:
        'Seamless cloud migration and management. We help you leverage cloud infrastructure to reduce costs, increase flexibility, and improve collaboration.',
      image: '/images/cloud.jpg',
    },
  ]

  const stats = [
    { icon: <Monitor className="w-8 h-8" />, value: '500+', label: 'Systems Managed' },
    { icon: <Clock className="w-8 h-8" />, value: '24/7', label: 'Support Available' },
    { icon: <Users className="w-8 h-8" />, value: '100+', label: 'Clients Served' },
    { icon: <Shield className="w-8 h-8" />, value: '99.9%', label: 'Uptime Guarantee' },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
              <img src="/images/logo.png" alt="Keynote Technologies" className="h-14 w-auto" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollTo(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                  }
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700 px-4 py-4 space-y-3">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                }
                className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors py-2 text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-datacenter.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-cyan-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Managed IT Services &mdash; New York, NY
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Working Together to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Achieve Your Goals
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
              Keynote Technologies provides proactive IT management and support for all of
              your business needs to keep your systems running and your people productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('services')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                Explore Our Services
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="border-2 border-slate-400 hover:border-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:text-cyan-400"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-cyan-400 flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We use a consultative approach to evaluate your business and technology
              needs, then advise on the best solution for your current and future goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        'https://placehold.co/800x400/1e293b/06b6d4/png?text=' +
                        encodeURIComponent(service.title)
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-cyan-600 mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-3">
                About Keynote Technologies
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our goal is to serve as your technology partner with a focus in providing
                solutions. We use a consultative approach to evaluate your business and
                technology need and then advise on the best solution for your current and
                future needs.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Keynote Technologies can save your organization time and money through
                better use of appropriate technologies. Based in New York, we serve
                businesses of all sizes with enterprise-grade IT solutions.
              </p>

              <div className="space-y-4">
                {[
                  'Proactive monitoring and maintenance',
                  'Rapid response and issue resolution',
                  'Scalable solutions for growing businesses',
                  'Dedicated support team available 24/7',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about.jpg"
                  alt="Team collaborating on technology solutions"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      'https://placehold.co/1200x800/1e293b/06b6d4/png?text=About+Us'
                  }}
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you streamline your technology so you can focus on what matters
            most &mdash; growing your business.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/25"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Have a particular challenge you&apos;re trying to deal with? Contact us
              today and let us help you get back on track!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="text-slate-600">New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a
                        href="tel:7189719082"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        (718) 971-9082
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:info@keynotetechnologies.net"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        info@keynotetechnologies.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-slate-900"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-slate-900"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <Send className="w-5 h-5" />
                  {formSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {formSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-medium">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {formError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center font-medium">
                    Something went wrong. Please try again or call us at (718) 971-9082.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/logo.png" alt="Keynote Technologies" className="h-12 w-auto" />
              </div>
              <p className="text-sm leading-relaxed">
                Proactive IT management and support for all of your business needs. Your
                trusted technology partner in New York.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        scrollTo(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())
                      }
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.map((s, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo('services')}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Keynote Technologies, LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
