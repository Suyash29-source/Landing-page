import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ScrollDemo from '@/components/ScrollDemo';
import ChatPreview from '@/components/ChatPreview';
import Community from '@/components/Community';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const SmoothScrollProvider = dynamic(() => import('@/components/SmoothScrollProvider'), { ssr: false });

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <SmoothScrollProvider />
      <Hero />
      <Features />
      <ScrollDemo />
      <ChatPreview />
      <Community />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
