import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio-data';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<'all' | 'work' | 'education'>('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredExperiences = selectedType === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === selectedType);

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
    <section id="experience" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 text-center">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            My professional journey and academic achievements
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === 'all'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('work')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === 'work'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setSelectedType('education')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === 'education'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Education
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>

            <div className="space-y-12">
              {filteredExperiences.map((exp, index) => {
                const isWork = exp.type === 'work';
                const isLeft = index % 2 === 0;
                const delay = index * 100;

                return (
                  <div
                    key={exp.id}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${delay}ms`, transition: 'all 0.5s' }}
                  >
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 hover:border-emerald-400">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          <div className={`p-2 rounded-lg ${
                            isWork ? 'bg-emerald-100' : 'bg-cyan-100'
                          }`}>
                            {isWork ? (
                              <Briefcase className={isWork ? 'text-emerald-600' : 'text-cyan-600'} size={20} />
                            ) : (
                              <GraduationCap className="text-cyan-600" size={20} />
                            )}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            isWork
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-cyan-100 text-cyan-700'
                          }`}>
                            {isWork ? 'Work' : 'Education'}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                        <p className="text-lg font-semibold text-emerald-600 mb-3">{exp.company}</p>

                        <div className={`flex flex-wrap gap-3 mb-4 text-sm text-slate-600 ${
                          isLeft ? 'md:justify-end' : ''
                        }`}>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-slate-700 text-sm leading-relaxed flex items-start gap-2">
                              <span className="text-emerald-500 mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 border-4 border-white shadow-lg z-10"></div>

                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
