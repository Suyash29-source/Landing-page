'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const chats = ['Welcome to NexusChat 👋', 'Ask anything, learn instantly ✨', 'Typing magic in real-time...'];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_45%)]" />
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-indigo-300/40"
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 + (i % 5), delay: i * 0.15 }}
          style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%` }}
        />
      ))}

      <div className="section-shell relative grid min-h-screen items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-7">
          <motion.p variants={fadeUp} className="inline-flex rounded-full border border-indigo-400/40 px-4 py-1 text-sm text-indigo-200">
            Built for modern conversations
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Chat Beyond
            <span className="block bg-gradient-to-r from-indigo-400 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              Conversations.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-lg text-slate-300">
            A modern social chat platform where people connect, learn, and discover through conversations.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button className="group rounded-2xl bg-indigo-500 px-7 py-3 font-semibold shadow-glow transition-all duration-300 hover:scale-[1.03] hover:bg-indigo-400">
              <span className="relative">Start Chatting</span>
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-slate-100 transition-all duration-300 hover:border-emerald-300/60 hover:text-emerald-200">
              Explore Features
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mx-auto w-full max-w-sm"
        >
          <motion.div animate={{ y: [-6, 8, -6], rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} className="glass-card overflow-hidden p-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>NexusChat</span>
                <span>online</span>
              </div>
              <div className="space-y-3">
                {chats.map((text, idx) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.5, duration: 0.5 }}
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${idx % 2 === 0 ? 'bg-indigo-500/25' : 'ml-auto bg-emerald-500/20'}`}
                  >
                    {text}
                  </motion.div>
                ))}
                <div className="flex items-center gap-1 px-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:120ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:240ms]" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
