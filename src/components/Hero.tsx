import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const stats = [
  { value: "1+", label: "Years in Production" },
  { value: "46", label: "API Controllers Shipped" },
  { value: "9", label: "OAuth Integrations" },
  { value: "4+", label: "Client Products" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#070b14" }}
    >
      {/* Background gradient orbs */}
      <div
        className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.11) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(129,140,248,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb-3 absolute top-3/4 left-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-10 tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Open to SDE Roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 leading-[1.05]"
          >
            <span className="text-white">Kalyan </span>
            <span className="gradient-text">Kumar</span>
            <br />
            <span className="text-white">Pokkula</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6 flex-wrap"
          >
            <span className="text-lg sm:text-xl text-slate-300 font-medium tracking-wide">
              Full Stack Engineer
            </span>
            <span className="text-slate-700 hidden sm:block text-xl">·</span>
            <span className="text-lg sm:text-xl font-medium tracking-wide"
              style={{ color: "#a78bfa" }}>
              SaaS & AI Systems
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            I design and ship scalable backend systems, SaaS platforms, and AI-powered
            tools. Currently building{" "}
            <span className="text-cyan-400 font-semibold">ZunoSync</span> — a
            production multi-tenant social media automation platform serving
            global users with{" "}
            <span className="text-slate-300 font-medium">
              Node.js, PostgreSQL, Redis, and AWS
            </span>
            .
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="flex justify-center items-center gap-3 flex-wrap mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #22d3ee, #818cf8)",
                boxShadow: "0 0 28px rgba(34,211,238,0.22)",
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-7 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-slate-700/80 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://github.com/kalyanKumarPokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://linkedin.com/in/kalyankumarpokkula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-700/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="rounded-2xl p-4 text-center border border-slate-800/60"
                style={{ backgroundColor: "rgba(15,23,42,0.5)" }}
              >
                <div className="text-2xl font-bold gradient-text mb-1 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
