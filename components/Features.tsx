'use client';

import { MessageCircleMore, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const features = [
  {
    title: 'Random Chat',
    icon: MessageCircleMore,
    copy: 'Jump into instant topic-driven conversations with people from around the world.'
  },
  {
    title: 'Scroll & Learn',
    icon: Sparkles,
    copy: 'Discover bite-sized ideas, useful answers, and communities while you scroll.'
  },
  {
    title: 'Smart Conversations',
    icon: Zap,
    copy: 'AI-augmented prompts and summaries keep every interaction meaningful and fast.'
  }
];

export default function Features() {
  return (
    <section id="features" className="section-shell">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="space-y-12">
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Designed for depth, speed, and serendipity</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, icon: Icon, copy }) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ y: -8 }} className="glass-card group p-7 transition-shadow duration-300 hover:shadow-glow">
              <Icon className="mb-5 h-8 w-8 text-indigo-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-slate-300">{copy}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
