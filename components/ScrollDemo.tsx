'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const cards = [
  'Did you know? Quantum networking could reshape internet privacy.',
  'Question: How can I improve focus while remote working?',
  'AI Suggestion: Summarize this conversation into 3 action items.'
];

export default function ScrollDemo() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const setup = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (!stackRef.current) {
        return;
      }

      const items = gsap.utils.toArray<HTMLElement>('.demo-card');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: 'top 72%',
          end: 'bottom 30%',
          scrub: 1.1
        }
      });

      items.forEach((item, idx) => {
        tl.fromTo(item, { y: 80 + idx * 20, opacity: 0 }, { y: -idx * 14, opacity: 1, duration: 0.8 }, idx * 0.22);
      });

      cleanup = () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    setup();

    return () => cleanup?.();
  }, []);

  return (
    <section className="section-shell">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold md:text-5xl">A scroll-native chat experience</h2>
          <p className="mt-4 text-slate-300">Swipe upward through intelligent cards that blend social discovery, prompts, and live interactions.</p>
        </motion.div>
        <div ref={stackRef} className="relative mx-auto w-full max-w-md space-y-4">
          {cards.map((card, i) => (
            <div key={card} className="demo-card glass-card relative p-6" style={{ zIndex: 10 - i }}>
              <span className="mb-3 inline-flex rounded-full bg-indigo-400/20 px-3 py-1 text-xs text-indigo-200">Card {i + 1}</span>
              <p className="text-slate-100">{card}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
