'use client';

import { motion } from 'framer-motion';

const avatars = ['A', 'N', 'R', 'K'];

export default function ChatPreview() {
  return (
    <section className="section-shell">
      <div className="glass-card relative overflow-hidden p-8 md:p-10">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Live chat moments, beautifully orchestrated</h2>
        <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="space-y-3">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="w-fit rounded-2xl bg-indigo-500/20 px-4 py-2">
              Anyone up for a design critique?
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.45 }} className="ml-auto w-fit rounded-2xl bg-emerald-500/20 px-4 py-2">
              Joining now — dropping ideas in thread ✅
            </motion.div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:0ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:120ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-300 [animation-delay:240ms]" />
            </div>
            <span className="text-xs text-slate-400">Typing...</span>
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="ml-auto text-2xl">
              🔥
            </motion.span>
          </div>
        </div>

        <div className="pointer-events-none absolute right-4 top-4 flex gap-2">
          {avatars.map((avatar, idx) => (
            <motion.div key={avatar} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 + idx * 0.3 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
              {avatar}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
