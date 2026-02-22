"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Mouse follow glow */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)",
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
      />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "10%", top: "20%" },
          { left: "70%", top: "10%" },
          { left: "25%", top: "65%" },
          { left: "85%", top: "45%" },
          { left: "50%", top: "80%" },
          { left: "40%", top: "30%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <a
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Ben Bentlin
        </a>
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="/about"
            className="text-sm text-white font-medium"
          >
            About
          </a>
          <a
            href="https://github.com/bbentlin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:bbentlin@icloud.com"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block animate-float mb-8">
            <span className="text-sm font-medium px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              A bit about me
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Curiosity, Craft
            </span>
            <span className="block text-3xl sm:text-5xl mt-4 text-white/80">
              & Intentional Work
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl leading-relaxed">
            I&apos;m driven by curiosity, craft, and the belief that 
            <span className="text-white/95 font-semibold">
              {" "}
              good work should actually do something
            </span>
            .
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-16 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <span className="text-sm font-medium px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/60 uppercase tracking-widest">
                Details
              </span>
            </div>

            <div className="space-y-6">
              {[
                { label: "Name", value: "Ben Bentlin" },
                { label: "Focus", value: "Full-Stack Development" },
                { label: "Approach", value: "Creative & Problem-Driven" },
              ].map((detail, index) => (
                <div key={index}>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    {detail.label}
                  </p>
                  <p className="text-white/90 font-medium">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/bbentlin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:bbentlin@icloud.com"
                className="px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Email
              </a>
            </div>
          </div>

          {/* Main Body */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-white/70 leading-relaxed">
              I approach each project with care and intention, focusing on
              creating thoughtful, well-considered outcomes rather than chasing
              trends or quick solutions. Whether I&apos;m exploring new ideas or
              refining existing ones, I try to balance creativity with clarity,
              keeping usability and impact at the center of my process.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              I see my work as both creative and problem-driven. I enjoy digging
              into the &ldquo;why&rdquo; behind a project just as much as the final result,
              and I&apos;m drawn to work that asks questions, invites iteration, and
              evolves over time. I pay close attention to details, but I&apos;m
              equally mindful of the bigger picture—how individual decisions add
              up to something cohesive, purposeful, and meaningful.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              Collaboration is an important part of how I work. I value open
              communication, thoughtful feedback, and the shared process of
              refining ideas together. I don&apos;t see iteration as a final step,
              but as an ongoing conversation that helps push the work forward and
              make it stronger. I&apos;m always learning, always adjusting my
              approach, and always looking for ways to improve my craft.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              Ultimately, my goal is to create work I&apos;m genuinely proud to put
              my name on—work that feels intentional, useful, and honest. I&apos;m
              motivated by projects that respect both the problem and the people
              they&apos;re meant for, and I&apos;m interested in building things that last
              beyond the moment they&apos;re created.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-medium px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/60 uppercase tracking-widest">
            Values
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mt-6 mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              What Drives Me
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Intentionality",
                description:
                  "Every decision should serve a purpose. I focus on thoughtful, deliberate choices over quick fixes or surface-level solutions.",
                gradient: "from-blue-500 to-purple-500",
                icon: "🎯",
              },
              {
                title: "Iteration",
                description:
                  "Great work isn't born finished. I embrace the ongoing process of refining, questioning, and evolving ideas until they're as strong as they can be.",
                gradient: "from-emerald-500 to-teal-500",
                icon: "🔄",
              },
              {
                title: "Craft",
                description:
                  "The details matter. I care deeply about quality, from the big-picture strategy down to the smallest interaction or design choice.",
                gradient: "from-purple-500 to-pink-500",
                icon: "✨",
              },
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {value.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${value.gradient} rounded-full group-hover:w-20 transition-all duration-300 mb-4`}
                  ></div>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:bbentlin@icloud.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="/"
              className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50">
          <p className="text-sm">© 2026 Ben Bentlin. Crafted with precision.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/bbentlin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:bbentlin@icloud.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}