import { useEffect, useRef, useState } from 'react';
import { Code2, Brain, Server, Database, Wrench, Shield } from 'lucide-react';
import { skills } from '../data/portfolio-data';

const iconMap: Record<string, any> = {
  Code2,
  Brain,
  Server,
  Database,
  Wrench,
  Shield
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 text-center">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit spanning data engineering, AI/ML, cloud infrastructure, and security
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = iconMap[skill.icon];
              const delay = index * 100;

              return (
                <div
                  key={skill.category}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-emerald-400 transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-6">
                    <div className={`inline-flex p-3 rounded-lg mb-4 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-br from-emerald-500 to-cyan-500 scale-110'
                        : 'bg-slate-100'
                    }`}>
                      <Icon
                        size={28}
                        className={hoveredIndex === index ? 'text-white' : 'text-slate-700'}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.category}</h3>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                            hoveredIndex === index
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-50 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-b-xl transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to collaborate?</h3>
                <p className="text-emerald-50">
                  I'm always open to discussing new projects and opportunities
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
