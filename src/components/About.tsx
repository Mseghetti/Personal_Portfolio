import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="about" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 text-center">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a passionate technologist specializing in <span className="font-semibold text-emerald-600">data engineering</span>,
                <span className="font-semibold text-cyan-600"> machine learning</span>, and
                <span className="font-semibold text-blue-600"> cloud infrastructure</span>. Currently pursuing my Master's
                in Computer Science with a focus on Artificial Intelligence at Georgia Tech.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With hands-on experience at <span className="font-semibold">Tenable</span>, I've designed and optimized
                microservices-based ETL pipelines, deployed AI solutions in mission-critical environments, and built
                robust data systems that power operational intelligence.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I thrive at the intersection of data, AI, and engineering, creating systems that are not just functional
                but transformative. Whether it's building sensor fusion architectures, implementing zero-cost abstractions
                in Rust, or developing predictive ML models, I'm driven by the challenge of solving complex problems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <GraduationCap className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Education</h3>
                    <p className="text-slate-600 mb-1">
                      <span className="font-semibold">Georgia Institute of Technology</span>
                    </p>
                    <p className="text-sm text-slate-500">M.Sc. Computer Science - AI (2026-2028)</p>
                    <p className="text-slate-600 mb-1 mt-3">
                      <span className="font-semibold">University of Maryland</span>
                    </p>
                    <p className="text-sm text-slate-500">B.Sc. Information Science (2022-2025)</p>
                    <p className="text-sm text-emerald-600 font-medium mt-1">Dean's List: 2023 & 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Briefcase className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Experience</h3>
                    <p className="text-slate-600 mb-1">
                      <span className="font-semibold">Data Engineer Intern</span> at Tenable
                    </p>
                    <p className="text-sm text-slate-500 mb-2">May 2024 - Aug 2024</p>
                    <p className="text-slate-600">
                      <span className="font-semibold">Software Engineer Intern</span> at Tenable
                    </p>
                    <p className="text-sm text-slate-500">May 2023 - Aug 2023</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                        ETL Pipelines
                      </span>
                      <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                        ML Models
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        Cloud Infrastructure
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">5+</div>
                <div className="text-slate-300">Programming Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-slate-300">Internships</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-slate-300">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
