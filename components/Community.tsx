'use client';

import { motion } from 'framer-motion';

const nodes = [
  { x: '12%', y: '30%' },
  { x: '30%', y: '18%' },
  { x: '52%', y: '42%' },
  { x: '70%', y: '22%' },
  { x: '84%', y: '55%' },
  { x: '38%', y: '68%' }
];

export default function Community() {
  return (
    <section className="section-shell">
      <div className="glass-card p-8 md:p-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Thousands of conversations happening right now.</h2>
        <div className="relative mt-10 h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M12,30 L30,18 L52,42 L70,22 L84,55 L38,68" stroke="url(#g)" strokeWidth="0.6" fill="none" />
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          {nodes.map((node, idx) => (
            <motion.div key={`${node.x}-${node.y}`} className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10" style={{ left: node.x, top: node.y }} animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2 + idx * 0.35 }}>
              {idx + 1}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
