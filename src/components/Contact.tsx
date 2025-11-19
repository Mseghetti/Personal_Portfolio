import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:micah.seghetti@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'micah.seghetti@gmail.com',
      href: 'mailto:micah.seghetti@gmail.com',
      color: 'emerald'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Mseghetti',
      href: 'https://github.com/Mseghetti',
      color: 'slate'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/micah-seghetti-8512a3248/',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '240.786.8539',
      href: 'tel:+12407868539',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 text-center">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
            Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const colorClasses = {
                    emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-500',
                    slate: 'bg-slate-100 text-slate-600 hover:bg-slate-900',
                    cyan: 'bg-cyan-100 text-cyan-600 hover:bg-cyan-500',
                    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-500'
                  };

                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onMouseEnter={() => setIsHovered(method.label)}
                      onMouseLeave={() => setIsHovered(null)}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:border-emerald-400"
                    >
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        isHovered === method.label
                          ? `${colorClasses[method.color as keyof typeof colorClasses]} text-white scale-110`
                          : colorClasses[method.color as keyof typeof colorClasses].split('hover:')[0]
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">{method.label}</p>
                        <p className="text-slate-900 font-semibold">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Based in</p>
                    <p className="text-slate-300">College Park, MD / Columbia, MD</p>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-sm text-slate-400">
                    Available for full-time opportunities and freelance projects
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>

              <p className="text-sm text-slate-500 mt-4 text-center">
                Or email me directly at{' '}
                <a href="mailto:micah.seghetti@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  micah.seghetti@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
