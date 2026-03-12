'use client';

import { useEffect } from 'react';

export default function SmoothScrollProvider() {
  useEffect(() => {
    let stop = false;

    const mount = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        smoothWheel: true,
        duration: 1.1,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.2
      });

      const raf = (time: number) => {
        if (stop) {
          return;
        }
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => lenis.destroy();
    };

    let cleanup: (() => void) | undefined;
    mount().then((destroy) => {
      cleanup = destroy;
    });

    return () => {
      stop = true;
      cleanup?.();
    };
  }, []);

  return null;
}
