'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let start = 0;
    const steps = 40;
    const increment = target / steps;
    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => window.clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl font-extrabold md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const metrics = [
    { label: 'conversations', value: 10, suffix: 'K+' },
    { label: 'active users', value: 5, suffix: 'K+' },
    { label: 'communities', value: 100, suffix: '+' }
  ];

  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card grid gap-6 p-8 text-center md:grid-cols-3 md:p-10">
        {metrics.map((m) => (
          <div key={m.label}>
            <Counter target={m.value} suffix={m.suffix} />
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{m.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
