"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Cpu,
  Bot,
  Database,
  Box,
  Rocket,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

/* =========================
   Variants & helpers
   ========================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 * i, ease: "easeOut" },
  }),
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind"] },
  { group: "Backend", items: ["Laravel", "Node.js", "Python"] },
  { group: "Databases", items: ["MySQL", "Redis"] },
  { group: "AI/ML", items: ["OpenAI API", "LangChain", "scikit-learn"] },
  { group: "DevOps", items: ["Docker", "Compose", "GitHub Actions"] },
  { group: "Other", items: ["REST APIs", "SaaS Arch", "Microservices"] },
];

const featured = [
  {
    title: "NFC Landing Page SaaS MVP",
    icon: <Box className="h-5 w-5" />,
    stack: "Laravel • Vue • MySQL • Docker",
    bullets: [
      "Real SaaS use-case for Indian businesses",
      "NFC card, QR landing pages, analytics dashboard",
    ],
    links: [
      { label: "Live Demo", href: "#", primary: true },
      { label: "GitHub Repo", href: "#" },
    ],
    tag: "Featured",
  },
  {
    title: "GenAI PDF Chatbot",
    icon: <Bot className="h-5 w-5" />,
    stack: "Python • LangChain • Flask • Docker",
    bullets: ["Upload PDF → ask questions → AI answers", "KB automation"],
    links: [
      { label: "Demo GIF", href: "#", primary: true },
      { label: "GitHub Repo", href: "#" },
    ],
    tag: "Featured",
  },
  {
    title: "AI-Powered Portfolio Website",
    icon: <Globe className="h-5 w-5" />,
    stack: "React • Node.js • GPT Chatbot",
    bullets: [
      "Interactive resume: chat with my profile",
      "Live demo & screenshots included",
    ],
    links: [
      { label: "Live Demo", href: "#", primary: true },
      { label: "GitHub Repo", href: "#" },
    ],
    tag: "Featured",
  },
];

const additional = [
  {
    title: "Full-Stack Dockerized App",
    icon: <Cpu className="h-5 w-5" />,
    stack: "Laravel • Vue • Redis • MySQL",
    bullets: ["Multi-container architecture", "Compose file + CI-ready setup"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
  {
    title: "Smart Pricing Helper",
    icon: <Database className="h-5 w-5" />,
    stack: "Python • Flask • scikit-learn • Docker",
    bullets: ["Sample dataset included", "Prediction API with examples"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
  {
    title: "ChatGPT Mini Clone",
    icon: <Bot className="h-5 w-5" />,
    stack: "React • Node • OpenAI API",
    bullets: ["Lightweight chat app", "Plug-and-play integration"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
];

/* =========================
   UI atoms
   ========================= */
const Badge: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span
    className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium tracking-wide
               border-neutral-300/70 dark:border-neutral-700/70
               bg-neutral-50 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
  >
    {children}
  </span>
);

const Card: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border-2 border-neutral-200/70 dark:border-neutral-800/70 
                bg-white/60 dark:bg-neutral-900/50 p-5 backdrop-blur
                transition hover:-translate-y-1.5 hover:shadow-2xl 
                hover:shadow-fuchsia-500/10 hover:border-fuchsia-400/50 ${className}`}
  >
    {children}
  </div>
);

const SectionHeading: React.FC<{
  id: string;
  title: string;
  subtitle?: string;
}> = ({ id, title, subtitle }) => (
  <div id={id} className="max-w-3xl">
    <motion.h2
      variants={fadeUp}
      className="text-2xl md:text-3xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        variants={fadeUp}
        custom={1}
        className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Anchor: React.FC<
  React.PropsWithChildren<{ href: string; primary?: boolean }>
> = ({ href, children, primary }) => (
  <a
    href={href}
    className={`group inline-flex items-center gap-1 text-sm font-medium ${
      primary
        ? "rounded-full px-4 py-2 text-white bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 hover:brightness-110 hover:shadow-lg hover:shadow-fuchsia-500/20 active:brightness-95 transition"
        : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
    }`}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
    <ExternalLink className="ml-0.5 h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
  </a>
);

/* =========================
   Sections
   ========================= */
const Hero = () => (
  <section id="home" className="relative">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-5xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/60 dark:bg-neutral-900/50">
        <Badge>AI SaaS Engineer</Badge>
        <span className="hidden sm:inline text-neutral-500">•</span>
        <span className="hidden sm:inline text-xs text-neutral-500">
          Full-Stack (Laravel • Vue • Docker)
        </span>
      </div>

      <motion.h1
        variants={fadeUp}
        className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
                   bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500
                   bg-clip-text text-transparent"
      >
        Bhanu Pratap Singh
      </motion.h1>

      <motion.p
        variants={fadeUp}
        custom={1}
        className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-neutral-600 dark:text-neutral-300"
      >
        I build <strong>AI-powered SaaS</strong> and{" "}
        <strong>Dockerized full-stack apps</strong> with Laravel, Vue, Python,
        and React. Currently exploring GenAI chatbots, pricing models, and
        real-world SaaS MVPs.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="mt-6 flex items-center justify-center gap-3"
      >
        <Anchor href="#projects" primary>
          View Projects
        </Anchor>
        <a
          href="#contact"
          className="relative inline-flex items-center gap-1 text-sm font-medium
                     text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white
                     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                     after:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500
                     hover:after:w-full after:transition-all"
        >
          Contact <ChevronRight className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={3}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="opacity-80 hover:opacity-100"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="opacity-80 hover:opacity-100"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="Portfolio"
          className="opacity-80 hover:opacity-100"
        >
          <Globe className="h-5 w-5" />
        </a>
        <a
          href="mailto:hello@example.com"
          className="opacity-80 hover:opacity-100"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

const Skills = () => (
  <section id="skills" className="pt-16">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
      <SectionHeading
        id="skills"
        title="Skills & Tech Stack"
        subtitle="Frontend, backend, AI/ML, and DevOps to deliver production-ready SaaS."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => (
          <motion.div key={s.group} variants={fadeUp} custom={idx}>
            <Card>
              <p className="text-sm font-semibold tracking-wide">{s.group}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Badge key={i}>{i}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const Projects = () => (
  <section id="projects" className="pt-16">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
      <SectionHeading
        id="projects"
        title="Featured Projects"
        subtitle="A mix of GenAI, SaaS, and full-stack builds."
      />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <motion.div key={p.title} variants={fadeUp} custom={i}>
            <Card>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400">
                  {p.icon}
                  <h3 className="text-base md:text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <Badge>
                  <span className="bg-gradient-to-r from-indigo-500/15 via-fuchsia-500/15 to-emerald-500/15 px-1.5 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                </Badge>
              </div>
              <p className="mt-1 text-xs text-neutral-500">{p.stack}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <Anchor key={l.label} href={l.href} primary={l.primary}>
                    {l.label}
                  </Anchor>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <h3 className="mt-10 text-base md:text-lg font-semibold tracking-tight">
        Additional Projects
      </h3>
      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {additional.map((p, i) => (
          <motion.div key={p.title} variants={fadeUp} custom={i}>
            <Card>
              <div className="flex items-center gap-2">
                {p.icon}
                <p className="font-semibold">{p.title}</p>
              </div>
              <p className="mt-1 text-xs text-neutral-500">{p.stack}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                {p.links.map((l) => (
                  <Anchor key={l.label} href={l.href}>
                    {l.label}
                  </Anchor>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section id="contact" className="pt-16">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
      <SectionHeading
        id="contact"
        title="Let’s build something AI-powered"
        subtitle="Open to remote roles and freelance engagements across US/EU/AUS/JP."
      />
      <Card className="mt-6 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 hover:ring-fuchsia-400/50 hover:shadow-fuchsia-500/10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Email me with your problem statement, and I’ll propose an
              AI-driven MVP plan.
            </p>
            <div className="mt-2 flex items-center gap-4 text-sm">
              <a
                href="mailto:coderbhanu070296@gmail.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" /> coderbhanu070296@gmail.com
              </a>
              <a href="#" className="inline-flex items-center gap-2 hover:underline">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 hover:underline">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
          <a
            href="#projects"
            className="mt-2 md:mt-0 inline-flex items-center gap-2 rounded-full
                       px-4 py-2 text-sm font-medium text-white
                       bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600
                       hover:brightness-110 hover:shadow-lg hover:shadow-fuchsia-500/20
                       active:brightness-95 transition"
          >
            <Rocket className="h-4 w-4" /> View Work
          </a>
        </div>
      </Card>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-10 text-center text-xs text-neutral-500">
    © {new Date().getFullYear()} Bhanu Pratap Singh. Built with Next.js &
    Tailwind.
  </footer>
);

const Nav = () => {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="sticky top-0 z-50 backdrop-blur border-b bg-white/60 dark:bg-neutral-950/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
          className="font-semibold tracking-tight"
        >
          Bhanu
        </a>
        <div className="flex items-center gap-4 text-sm">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(n.id);
              }}
              className="relative text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                         after:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500
                         hover:after:w-full after:transition-all"
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

/* =========================
   Page
   ========================= */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 text-neutral-900 dark:from-neutral-950 dark:to-neutral-900 dark:text-white">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 pt-12 pb-16">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
