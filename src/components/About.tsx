import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Shield } from "lucide-react";

const traits = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Systems Thinker",
    desc: "Designs for scalability and maintainability from day one — RESTful APIs, clean separation of concerns, and modular service boundaries.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/10",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Backend-First Mindset",
    desc: "Fluent in distributed systems, database optimization, event-driven architectures, and production-grade API design.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/10",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security-Aware",
    desc: "Implements OAuth 2.0 with AES-256-GCM token encryption, RBAC, rate limiting, reCAPTCHA, and signed JWT flows as standard practice.",
    color: "text-blue-300",
    bg: "bg-blue-300/10",
    border: "border-blue-300/10",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Rapid Execution",
    desc: "Delivers production-ready features fast — from RAG-based AI pipelines to multi-tenant SaaS backends and containerized full-stack deployments.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/10",
  },
];

const highlights = [
  { label: "Education", value: "MCA · Osmania University, Hyderabad" },
  { label: "Location", value: "Hyderabad, Telangana, India" },
  { label: "Phone", value: "+91 7993450325" },
  { label: "Email", value: "kalyankumarpokkula1001@gmail.com" },
  { label: "Status", value: "Open to Opportunities" },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#60a5fa,#2563eb)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-6xl mx-auto">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-200 text-lg leading-relaxed mb-5" style={{ fontWeight: 400 }}>
              I'm a{" "}
              <span className="text-blue-400 font-semibold">Full Stack Software Engineer</span>{" "}
              with a focus on backend systems and SaaS infrastructure. Currently at{" "}
              <span className="text-sky-400 font-semibold">mTouch Labs Pvt Ltd</span>, I
              architect and maintain the core backend of{" "}
              <span className="text-white font-semibold">ZunoSync</span> — a
              production multi-tenant social media automation platform with OAuth 2.0
              integrations across 9 platforms, a 4-gateway payment ecosystem (Stripe,
              Razorpay, Apple IAP, Cashfree), and AES-256-GCM-hardened token infrastructure.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              My primary stack is <strong className="text-slate-300">Node.js + Express.js</strong> for high-throughput REST APIs,{" "}
              <strong className="text-slate-300">PostgreSQL with Prisma ORM</strong> for relational data modeling,
              and <strong className="text-slate-300">Redis</strong> for caching, scheduling, and session management.
              On the frontend, I build performant UIs with <strong className="text-slate-300">React.js</strong> and Tailwind CSS.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I've delivered AI-powered tools using <strong className="text-slate-300">LangChain, Ollama, and FAISS</strong> for
              RAG-based document retrieval, and deployed containerized full-stack applications
              on <strong className="text-slate-300">AWS EC2</strong> via Docker, Nginx, and CI/CD pipelines.
              I value clean architecture, operational reliability, and shipping software that works in production.
            </p>

            {/* Info card */}
            <div
              className="rounded-2xl p-6 space-y-3.5 border border-slate-800/60"
              style={{ backgroundColor: "rgba(15,23,42,0.5)" }}
            >
              {highlights.map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <span className="text-slate-600 font-medium w-20 shrink-0">{label}</span>
                  <span
                    className={
                      label === "Status"
                        ? "text-emerald-400 font-semibold"
                        : "text-slate-300"
                    }
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 cursor-default border ${trait.border}`}
              >
                <div
                  className={`w-10 h-10 ${trait.bg} ${trait.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {trait.icon}
                </div>
                <h3 className={`font-semibold mb-2 text-sm ${trait.color}`}>
                  {trait.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
