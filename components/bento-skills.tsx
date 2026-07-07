import React from 'react';
import { Code2, Cpu, GraduationCap, Layers, Terminal, TrendingUp } from "lucide-react";

export function BentoSkills() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Skills & Specializations</h2>
        <p className="text-sm text-zinc-400">A snapshot of my engineering toolkit and academic focus areas.</p>
      </div>

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
        
        {/* Card 1: Main Tech Stack (Large 2-column card) */}
        <div className="md:col-span-2 md:row-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          <div>
            <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">Core Engineering</h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">
              Building structured, clean applications using foundational programming methodologies and robust design patterns.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Java", "JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-700/50">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Specialized Architecture (Vertical card) */}
        <div className="md:row-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          <div>
            <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-100">System Architecture</h3>
            <p className="text-sm text-zinc-400 mt-1">
              Deep dive exploration into advanced computer configurations, performance computing, and parallel systems.
            </p>
          </div>
          <div className="text-xs text-purple-400 font-mono mt-4">
            Advanced Computer Architecture
          </div>
        </div>

        {/* Card 3: Blockchain (Horizontal Card) */}
        <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between sm:flex-row sm:items-center hover:border-zinc-700 transition-all group relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          <div className="flex gap-4 items-start">
            <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-zinc-100\n">Distributed Ledgers</h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Studying decentralized logic, smart contracts, and blockchain architecture network models.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[160px]"></div>

      </div>
    </section>
  );
}