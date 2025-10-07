import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Family Photo Share",
      description: "Family photo sharing webapp",
      link: "https://your-project.vercel.app", // Replace with actual URL
      tags: ["Next.js", "React", "Typescript", "Tailwind", "Firebase", "Vercel"],
    },
    {
      title: "Weather App",
      description: "Current weather and forecast",
      link: "https://your-project.vercel.app", // Replace with actual URL
      tags: ["Next.js", "React", "Typescript", "Tailwind"]
    },
    // Add more projects as you create them
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-foreground/5">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 sm:py-32">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="text-sm font-medium px-4 py-2 bg-foreground/5 backdrop-blur-sm rounded-full border border-foreground/10">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-tight">
            Hello, I'm Ben Bentlin!
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            I am a developer building modern, responsive web applications with a focus on 
            <span className="text-foreground font-semibold"> clean design</span> and 
            <span className="text-foreground font-semibold"> seamless experiences</span>.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/bbentlin"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-foreground text-background rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <a
              href="mailto:bbentlin@icloud.com"
              className="group px-8 py-4 bg-foreground/5 backdrop-blur-sm text-foreground rounded-xl border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact 
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg">
            A selection of my recent work
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-6 h-6 text-foreground/40 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1.5 bg-foreground/10 backdrop-blur-sm rounded-lg border border-foreground/10 group-hover:border-foreground/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative max-w-6xl mx-auto px-6 py-12 mt-20 border-t border-foreground/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-foreground/60">
          <p className="text-sm">© 2025 Ben Bentlin. All rights reserved.</p>
          <p className="text-sm">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}