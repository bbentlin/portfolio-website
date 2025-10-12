"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator after scrolling down 100 pixels
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Family Photo Share",
      description: "Family photo sharing webapp with real-time updates and secure authentication",
      link: "https://family-photo-share-d2e8.vercel.app",
      tags: ["Typescript", "React", "Tailwind", "Next.js", "Firebase", "Vercel"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Weather App",
      description: "Real-time weather data and forecasting with beautiful vizualzations",
      link: "https://your-project.vercel.app", // Replace with actual URL
      tags: ["Typescript", "React","Tailwind", "Next.js", "Vercel"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(74, 86, 226, 0.3), transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(72, 187, 120, 0.2), transparent 50%)`
        }}></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8 z-10">
          {/* Floating badge */}
          <div className="inline-block animate-float">
            <span className="text-sm font-medium px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </span>
          </div>

          {/* Main heading with text animation */}
          <h1 className="text-6xl sm:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Ben Bentlin
            </span>
            <span className="block text-4xl sm:text-6xl mt-4 text-white/80">
              Full-Stack Developer
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with
            <span className="text-white/95 font-semibold"> cutting-edge technology</span>,
            <span className="text-white/95 font-semibold"> pixel-perfect design</span>, and
            <span className="text-white/95 font-semibold"> scalable architecture</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="https://github.com/bbentlin"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>

            <a
              href="mailto:bbentlin@icloud.com"
              className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-500 ${
              showScrollIndicator ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Innovative solutions that push boundaries and deliver exceptional results.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>

                {/* Card content */}
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/30 transition-all duration-300">
                  {/* Project number */}
                  <div className="absolute top-4 right-4 text-6xl font-black text-white/5">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                          {project.title}
                        </h3>
                        <div className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full group-hover:w-32 transition-all duration-300`}></div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                        <svg className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-white/70 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50">
          <p className="text-sm">© 2025 Ben Bentlin. Crafted with precision.</p>
          <div className="flex gap-6">
            <a href="https://github.com/bbentlin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:bbentlin@icloud.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}