import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0e17]">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-60 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                       radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                       linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`
        }}
      />

      {/* Technical dot matrix pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTYsIDE4NSwgMTI5LCAwLjMpIi8+PC9zdmc+')]" />
      </div>

      {/* Circuit board grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LCAxODIsIDIxMiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSA1MCAwIEwgNTAgMTAwIE0gMCA1MCBMIDM1IDUwIE0gNjUgNTAgTCAxMDAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse-slow" />
      </div>

      {/* Floating code-like elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-emerald-500/10 font-mono text-sm animate-float">
          {'{ "data": "engineering" }'}
        </div>
        <div className="absolute top-1/3 right-20 text-cyan-500/10 font-mono text-sm animate-float-delayed">
          {'<ML />'}
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-blue-500/10 font-mono text-sm animate-float">
          {'function() => cloud'}
        </div>
        <div className="absolute top-1/2 right-1/3 text-emerald-500/10 font-mono text-sm animate-float-delayed">
          {'import * as AI'}
        </div>
      </div>

      {/* Accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-scan" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan-delayed" />
      </div>

      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <img
              src="/Micah Sighetti-10.jpeg"
              alt="Micah Seghetti"
              className="w-40 h-40 rounded-full object-cover shadow-2xl shadow-emerald-500/50 border-4 border-emerald-400 hover:scale-105 transition-transform duration-300"
            />
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
              href="https://www.linkedin.com/in/micah-seghetti-8512a3248/"
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
