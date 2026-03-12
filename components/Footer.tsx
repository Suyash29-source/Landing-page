import { Github, Linkedin, Twitter } from 'lucide-react';

const links = ['Product', 'Features', 'Pricing', 'Docs'];

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="gradient-divider mx-auto mb-8 max-w-6xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-slate-200">NexusChat</p>
          <p>© {new Date().getFullYear()} NexusChat Inc.</p>
        </div>

        <nav className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a key={link} href="#" className="transition hover:text-slate-200">
              {link}
            </a>
          ))}
          <a href="#" className="transition hover:text-slate-200">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-slate-200">
            Terms
          </a>
        </nav>

        <div className="flex gap-3">
          {[Twitter, Github, Linkedin].map((Icon, idx) => (
            <a key={idx} href="#" className="rounded-lg border border-white/15 p-2 transition hover:border-indigo-300/50 hover:text-indigo-200">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
