'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-indigo-300/30 bg-gradient-to-r from-indigo-600/50 via-fuchsia-500/40 to-emerald-500/50 p-12 text-center shadow-glow">
        <div className="absolute inset-0 animate-shimmer bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.3),transparent_35%)]" />
        <div className="relative">
          <h2 className="text-4xl font-extrabold md:text-5xl">Start your first conversation today.</h2>
          <button className="mt-8 rounded-2xl bg-white px-8 py-3 font-semibold text-slate-900 transition duration-300 hover:scale-105 hover:shadow-2xl">
            Create Account
          </button>
        </div>
      </motion.div>
    </section>
  );
}
