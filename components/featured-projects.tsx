"use client"; // CRITICAL: Tells Next.js to allow client-side click events and state tracking
import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { ProjectModal } from "./project-model"; // Imports your architecture modal layout

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  hasModal?: boolean; 
}

const projectsList: Project[] = [
   {
    title: "Algorithmic System Evaluation & Analysis",
    description: "Designed structural evaluation modules for complex algorithm validation. Implemented optimized routing structures for efficient data management via multi-threaded processes.",
    tags: ["Java", "Design Patterns", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com",
   },
   {
      title: "SERS: Smart Emergency Response System Backend",
      description: "Developed a high-performance C++ emergency dispatch server. Built an Aho-Corasick automaton for O(N) text preprocessing and keyword extraction. Integrated Dijkstra's algorithm to compute dynamic routing vectors scaled by time-based traffic delay constants. Built native TCP socket listeners supporting full JSON communication APIs and asynchronous fleet allocation logs.",
      tags: ["C++", "Aho-Corasick", "Dijkstra's", "Computer Networks", "Data Structures"],
      githubUrl: "https://github.com",
      hasModal: true, 
    },
    {
      title: "Retrieval-Augmented Generation (RAG) Architecture",
      description: "Developing intelligent, agentic systems capable of contextual query processing, document indexing pipelines, and multi-agent intent parsing models.",
      tags: ["Python", "RAG", "Agentic AI", "Vector DB", "LLMs"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Decentralized Smart Contract Infrastructure",
      description: "Explored smart contract layout integrity and gas-optimized validation protocols for decentralized peer-to-peer data exchange platforms.",
      tags: ["Solidity", "Blockchain", "Web3.js", "Ethereum"],
      githubUrl: "https://github.com",
    }
  ];

export function FeaturedProjects() {
  // 1. Declare state to track if the SERS deep-dive modal is open
  const [isSersOpen, setIsSersOpen] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Featured Projects</h2>
        <p className="text-sm text-zinc-400">Practical code implementations translating core engineering concepts into software solutions.</p>
      </div>

      {/* Responsive Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((project, index) => (
          <div 
            key={index}
            // 2. Triggers the modal popup only if 'hasModal' is true, and applies a pointer cursor
            onClick={() => project.hasModal && setIsSersOpen(true)}
            className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60 shadow-xl ${project.hasModal ? 'cursor-pointer' : ''}`}
          >
            {/* Soft Glowing Ambient Background Layer */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                
                {/* 3. stopPropagation prevents the modal from opening if a recruiter just wants to go directly to GitHub */}
                <div className="flex gap-4 text-zinc-500 text-xs" onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-zinc-100 flex items-center gap-0.5 transition-colors"
                  >
                    Source <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-blue-400 flex items-center gap-0.5 transition-colors"
                    >
                      Demo <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                {project.description}
                {/* 4. Visual hint for the recruiter that the card is fully interactive */}
                {project.hasModal && (
                  <span className="block mt-3 text-xs text-blue-400 font-medium group-hover:underline">
                    Click card for architectural deep-dive →
                  </span>
                )}
              </p>
            </div>

            {/* Tech Badges Row */}
            <div className="relative z-10 mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[11px] font-mono bg-zinc-950 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 5. Inject the modal tracking state portal right at the bottom of the section */}
      <ProjectModal isOpen={isSersOpen} onClose={() => setIsSersOpen(false)} />
    </section>
  );
}