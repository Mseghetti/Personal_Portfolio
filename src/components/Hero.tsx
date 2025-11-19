import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-emerald-500/50 animate-pulse-slow">
              MS
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Micah Seghetti
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
              Data Engineer
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/30">
              Software Engineer
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30">
              AI/ML Engineer
            </span>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Building intelligent systems at the intersection of <span className="text-emerald-400 font-semibold">data engineering</span>,
            <span className="text-cyan-400 font-semibold"> machine learning</span>, and
            <span className="text-blue-400 font-semibold"> cloud infrastructure</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://github.com/Mseghetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="mailto:micah.seghetti@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-emerald-500 hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-emerald-500 shadow-lg"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/micahseghetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-cyan-500 hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-cyan-500 shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-emerald-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
