import React from 'react';
import { X, Cpu, Terminal, Network, ShieldAlert } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-lg hover:bg-zinc-900"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-zinc-800/60">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">System Deep Dive</span>
          <h3 className="text-2xl font-bold text-zinc-50">Smart Emergency Response System (SERS)</h3>
        </div>

        {/* --- SYSTEM ARCHITECTURE FLOW DIAGRAM --- */}
        <div className="my-8 space-y-4">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider font-mono">System Execution Architecture</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono">
            {/* Stage 1 */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 space-y-2">
              <div className="mx-auto p-2 w-fit bg-amber-500/10 text-amber-400 rounded-lg"><Terminal className="w-4 h-4" /></div>
              <div className="font-semibold text-zinc-200">1. Ingestion & Parsing</div>
              <p className="text-zinc-500 text-[11px]">TCP Sockets ingest raw JSON. Text is processed via an O(N) Aho-Corasick Automaton.</p>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 space-y-2">
              <div className="mx-auto p-2 w-fit bg-blue-500/10 text-blue-400 rounded-lg"><Cpu className="w-4 h-4" /></div>
              <div className="font-semibold text-zinc-200">2. Route Optimization</div>
              <p className="text-zinc-500 text-[11px]">Dijkstra's Engine computes shortest path matrices scaled by custom hour traffic delay weights.</p>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 space-y-2">
              <div className="mx-auto p-2 w-fit bg-emerald-500/10 text-emerald-400 rounded-lg"><Network className="w-4 h-4" /></div>
              <div className="font-semibold text-zinc-200">3. Resource Dispatch</div>
              <p className="text-zinc-500 text-[11px]">Euclidean vector algorithms isolate the nearest active fleet node and trigger immediate vehicle flags.</p>
            </div>
          </div>
        </div>

        {/* Deep Technical Highlights */}
        <div className="space-y-4 pt-4 border-t border-zinc-800/60">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider font-mono">Algorithm Spec Sheets</h4>
          <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside font-normal">
            <li><strong className="text-zinc-200">Multi-Pattern Keyword Search:</strong> Implemented a failure-link trie structure mimicking string patterns simultaneously to isolate medical crisis contexts instantaneously.</li>
            <li><strong className="text-zinc-200">Dynamic Multipliers:</strong> Implemented scale ranges dynamically (2.5\times morning rush to 3.5\times$ evening rush) to precisely factor in latency.</li>
            <li><strong className="text-zinc-200">Asynchronous Logging:</strong> Formats stream data updates directly into a clean, JSON-serializable log table structure.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}