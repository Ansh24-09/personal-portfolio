import { Button } from "@/components/ui/button";
import { BentoSkills } from "@/components/bento-skills";
import { FeaturedProjects } from "@/components/featured-projects"; 
import { ArrowUpRight, Globe, Link2, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center p-6 overflow-x-hidden pt-24 pb-24">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl text-center space-y-6 mb-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 border border-blue-500/20 mx-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          Available for Opportunities
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-b from-zinc-50 to-zinc-400 bg-clip-text text-transparent py-2">
          Hi, I'm Shivansh Tripathi
        </h1>
        
        <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
          A software engineer specializing in building modern web applications. Crafting clean code and fluid user experiences using the modern stack.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-medium rounded-xl px-5 shadow-lg">
            View My Work
          </Button>
          
          <a href="/resume.pdf" download="Shivansh_Tripathi_Resume.pdf" className="inline-block">
            <Button variant="outline" className="border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 font-medium rounded-xl px-5 w-full">
              Download Resume
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8 text-zinc-500">
          <a href="https://github.com/Ansh24-09" target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors flex items-center gap-1 text-sm">
            <Globe className="w-4 h-4" /> GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/shivansh-tripathi-65b546349/" target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors flex items-center gap-1 text-sm">
            <Link2 className="w-4 h-4" /> LinkedIn
          </a>
          
          <a href="mailto:shivanshtripathi2409@gmail.com" className="hover:text-zinc-100 transition-colors flex items-center gap-1 text-sm">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </div>

      <BentoSkills />

      <FeaturedProjects />

    </main>
  );
}