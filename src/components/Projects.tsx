import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Star,
  BrainCircuit,
  Globe,
  ShoppingCart,
  Mail,
  MousePointerClick,
  Banknote,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  featured?: boolean;
  category: string;
  gradient: string;
  iconBg: string;
  icon: React.ReactNode;
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: "ZunoSync – AI Social Media SaaS",
    description:
      "Production multi-tenant SaaS backend — 46 REST controllers, 40+ Prisma models, OAuth 2.0 for 9 platforms, Redis content scheduler, and dual Stripe + Razorpay payment processing with webhook idempotency.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "AWS", "OAuth 2.0", "Stripe"],
    github: null,
    live: "https://zunosync.com",
    featured: true,
    category: "Professional",
    gradient: "from-cyan-500/20 via-sky-600/10 to-indigo-600/20",
    iconBg: "bg-cyan-400/20 text-cyan-300",
    icon: <Globe className="w-8 h-8" />,
    highlights: ["46 Controllers", "9 OAuth Platforms", "Dual Payment Gateway"],
  },
  {
    title: "LexvuIP – Legal Services Website",
    description:
      "Mobile-first web application for a UK legal IP firm — component-driven React.js architecture with Tailwind CSS, Lighthouse scores above 90, WCAG 2.1 accessibility compliance, and structured SEO.",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    github: null,
    live: "https://www.lexvuip.com",
    featured: true,
    category: "Professional",
    gradient: "from-violet-500/20 via-purple-600/10 to-fuchsia-600/20",
    iconBg: "bg-violet-400/20 text-violet-300",
    icon: <Globe className="w-8 h-8" />,
    highlights: ["SEO Optimized", "Mobile Responsive", "Performance First"],
  },
  {
    title: "AI-Powered Gmail Sidebar",
    description:
      "Chrome extension with a FastAPI backend that uses LangChain + ChatOllama to auto-summarize Gmail threads and extract action items — cutting email processing time by 80% with 95% task detection accuracy.",
    tech: ["JavaScript", "Python", "FastAPI", "LangChain", "ChatOllama", "ChatGPT"],
    github: "https://github.com/kalyanKumarPokkula",
    live: null,
    category: "AI/ML",
    gradient: "from-emerald-500/20 via-teal-600/10 to-cyan-600/20",
    iconBg: "bg-emerald-400/20 text-emerald-300",
    icon: <Mail className="w-8 h-8" />,
    highlights: ["80% Time Reduction", "95% Task Accuracy", "Chrome Extension"],
  },
  {
    title: "Online Bookstore (Microservices)",
    description:
      "Polyglot microservices platform (Node.js, Spring Boot, Flask, Go) with an API Gateway coordinating 5 independent services — user auth, catalog, cart, orders, and payments — achieving 35% lower API latency.",
    tech: ["React.js", "Spring Boot", "Node.js", "Flask", "Go", "MySQL", "Redis", "Stripe"],
    github: "https://github.com/kalyanKumarPokkula/online-book-store",
    live: null,
    category: "Backend",
    gradient: "from-orange-500/20 via-amber-600/10 to-yellow-600/20",
    iconBg: "bg-orange-400/20 text-orange-300",
    icon: <ShoppingCart className="w-8 h-8" />,
    highlights: ["5 Microservices", "API Gateway", "35% Faster APIs"],
  },
  {
    title: "OnSelectAI – Chrome Extension",
    description:
      "Privacy-first Chrome extension running a Dockerized Ollama LLM entirely on-device for offline text summarization, rewriting, and bullet generation — zero external API calls, under 3-second response times.",
    tech: ["JavaScript", "Node.js", "LangChain", "Ollama", "Docker"],
    github: "https://github.com/kalyanKumarPokkula",
    live: null,
    category: "AI/ML",
    gradient: "from-pink-500/20 via-rose-600/10 to-fuchsia-600/20",
    iconBg: "bg-pink-400/20 text-pink-300",
    icon: <MousePointerClick className="w-8 h-8" />,
    highlights: ["100% Private", "60% Lower Latency", "<3s Response"],
  },
  {
    title: "Chit Fund Management System",
    description:
      "Containerized full-stack finance management system — React.js + Flask + MySQL on Docker/Nginx with JWT-based RBAC, installment lifecycle tracking, and automated AWS S3 database backups for disaster recovery.",
    tech: ["React.js", "Flask", "MySQL", "Docker", "Nginx", "AWS S3", "JWT"],
    github: null,
    live: null,
    category: "Backend",
    gradient: "from-blue-500/20 via-indigo-600/10 to-violet-600/20",
    iconBg: "bg-blue-400/20 text-blue-300",
    icon: <Banknote className="w-8 h-8" />,
    highlights: ["RBAC System", "Docker Deploy", "AWS S3 Backups"],
  },
];

const categories = ["All", "Professional", "Backend", "AI/ML"];

const categoryStyle: Record<string, string> = {
  Professional: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
  Backend: "bg-indigo-400/10 text-indigo-300 border-indigo-400/30",
  "AI/ML": "bg-purple-400/10 text-purple-300 border-purple-400/30",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8)" }}
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center gap-2 flex-wrap mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "text-white"
                  : "text-slate-400 glass-card hover:text-slate-200"
              }`}
              style={
                activeFilter === cat
                  ? {
                      background: "linear-gradient(135deg,#22d3ee,#818cf8)",
                      boxShadow: "0 0 20px rgba(34,211,238,0.2)",
                    }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-default"
            >
              {/* Gradient header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white/3" />

                {/* Center icon */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center shadow-lg`}>
                  {project.icon}
                </div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-lg border font-medium backdrop-blur-sm ${
                      categoryStyle[project.category] ||
                      "bg-slate-700/80 text-slate-300 border-slate-600"
                    }`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-400/15 text-amber-300 border border-amber-400/30 font-medium flex items-center gap-1 backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-amber-300" />
                      Live
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-2 py-0.5 rounded-md font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto border-t border-slate-800/60 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-medium"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      <ExternalLink size={15} />
                      Live Site
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-xs text-slate-600 italic pt-0.5">
                      Private / Local Deployment
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
