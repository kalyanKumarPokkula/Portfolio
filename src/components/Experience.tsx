import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    company: "mTouch Labs Pvt Ltd",
    period: "Dec 2025 – Present",
    type: "Full-time",
    project: "ZunoSync – AI-Powered Social Media SaaS Platform",
    liveUrl: "https://zunosync.com",
    points: [
      "Engineered a production-grade multi-tenant REST API (46 controllers, 40+ Prisma ORM models) for a social media automation SaaS, with OAuth 2.0 integrations spanning 9 platforms including LinkedIn, Twitter/X, Instagram, and YouTube.",
      "Designed and implemented a Redis-backed event-driven scheduling engine using node-cron with full post lifecycle management (scheduled → publishing → published/failed), automatic retry logic, and crash recovery via database-persisted state.",
      "Engineered a 3-gateway payment system — Stripe subscriptions and one-time credit checkout with addon cart, Razorpay subscriptions and orders, and Apple IAP receipt validation — with HMAC webhook signature verification and idempotency guards preventing double-charges; added automated GST/CGST/SGST-aware invoice PDF generation stored on AWS S3.",
      "Hardened the OAuth and token security layer with HMAC-SHA256-signed, platform-bound nonces (10-minute TTL, atomic Redis enforcement) to block CSRF/replay attacks, and AES-256-GCM encryption for all stored social tokens with zero-downtime migration from legacy plaintext tokens.",
      "Integrated Cashfree Payouts API to fully automate fund disbursements — HMAC webhook verification, idempotency keys, structured retry logic, and a complete audit trail — replacing a manual dashboard process with a zero-touch payout pipeline.",
      "Built an automated click-to-call and number-masking backend via Exotel V3 Voice APIs — dynamic XML voice response flows, dual-channel call recording, and real-time status callback webhooks for call lifecycle monitoring.",
      "Diagnosed EC2 CPU exhaustion from synchronous PDF/Excel report generation under load; re-architected by offloading report workloads to isolated AWS Lambda functions (Puppeteer + ExcelJS), eliminating production downtime.",
      "Established Bitbucket CI/CD pipelines to AWS EC2 with PM2 cluster mode, automated database backups, and health check monitoring enabling zero-downtime deployments.",
    ],
    tech: [
      "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Redis",
      "AWS EC2/S3/SES/Lambda", "Firebase FCM", "Stripe", "Razorpay", "Cashfree",
      "Apple IAP", "AES-256-GCM", "Exotel V3", "OAuth 2.0", "JWT", "PM2", "Puppeteer", "ExcelJS",
    ],
    dotColor: "#22d3ee",
    glowColor: "rgba(34,211,238,0.35)",
    borderColor: "rgba(34,211,238,0.15)",
    tagColor: "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
    accentText: "text-cyan-400",
  },
  {
    role: "Frontend Developer",
    company: "Client Project – LexvuIP",
    period: "Jul 2025 – Dec 2025",
    type: "Contract",
    project: "Legal Services Web Application",
    liveUrl: "https://www.lexvuip.com",
    points: [
      "Designed and delivered a production-grade, mobile-first web application for a UK-based legal IP services firm, achieving consistent Lighthouse performance scores above 90.",
      "Architected a component-driven React.js codebase with Tailwind CSS, establishing a reusable design system that significantly reduced future feature integration time.",
      "Implemented technical SEO best practices — semantic HTML, meta optimization, structured data, and accessibility compliance — resulting in improved search visibility and WCAG 2.1 conformance.",
    ],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    dotColor: "#818cf8",
    glowColor: "rgba(129,140,248,0.35)",
    borderColor: "rgba(129,140,248,0.15)",
    tagColor: "bg-indigo-900/40 text-indigo-300 border-indigo-700/40",
    accentText: "text-indigo-400",
  },
  {
    role: "AI Engineer",
    company: "Client Project – LexvuIP",
    period: "Jul 2025 – Dec 2025",
    type: "Contract",
    project: "Internal Knowledge-Base RAG Tool",
    liveUrl: null,
    points: [
      "Designed and implemented a Retrieval-Augmented Generation (RAG) knowledge-base Q&A system using LangChain, a locally-hosted Ollama LLM, and a FAISS/Chroma vector store for natural-language search over internal documents.",
      "Built an end-to-end document ingestion pipeline including text chunking, embedding generation, and vector indexing, significantly reducing internal information lookup time.",
      "Deployed the entire LLM and retrieval stack on-premises with zero external data transmission, ensuring complete data privacy for sensitive legal documents.",
    ],
    tech: ["LangChain", "Ollama", "FAISS", "Chroma", "Python"],
    dotColor: "#a78bfa",
    glowColor: "rgba(167,139,250,0.35)",
    borderColor: "rgba(167,139,250,0.15)",
    tagColor: "bg-violet-900/40 text-violet-300 border-violet-700/40",
    accentText: "text-violet-400",
  },
  {
    role: "Full Stack Developer",
    company: "Client Project",
    period: "Nov 2024 – Jul 2025",
    type: "Contract",
    project: "Chit Fund Management System",
    liveUrl: null,
    points: [
      "Developed a full-featured Chit Fund Management System handling scheme creation, member enrollment, installment tracking, and monthly auction projections with multi-scheme support.",
      "Implemented a JWT-based authentication system with role-based access control (admin/member) and automated database backup and restoration to AWS S3 for operational reliability.",
      "Containerized and deployed the React.js frontend and Flask REST API via Docker and Nginx on the client's local infrastructure, with MySQL persistence, SQLAlchemy ORM, and Alembic schema migration management.",
    ],
    tech: ["React.js", "Flask", "MySQL", "Docker", "Nginx", "AWS S3", "JWT"],
    dotColor: "#34d399",
    glowColor: "rgba(52,211,153,0.35)",
    borderColor: "rgba(52,211,153,0.15)",
    tagColor: "bg-emerald-900/40 text-emerald-300 border-emerald-700/40",
    accentText: "text-emerald-400",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-alt">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#22d3ee,#818cf8)" }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Header icon */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Professional Experience
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[33px] top-2 w-4 h-4 rounded-full border-2 border-[#070b14]"
                  style={{
                    backgroundColor: exp.dotColor,
                    boxShadow: `0 0 12px ${exp.glowColor}`,
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{
                    backgroundColor: "rgba(15,23,42,0.6)",
                    borderColor: exp.borderColor,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`font-semibold text-sm ${exp.accentText}`}>
                          {exp.company}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-500">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm font-medium shrink-0 tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  {/* Project + live link */}
                  <div className="flex items-center gap-1.5 mt-3 mb-4">
                    <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                      Project:
                    </span>
                    <span className="text-slate-300 text-sm italic">
                      {exp.project}
                    </span>
                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ml-1 transition-opacity hover:opacity-70 ${exp.accentText}`}
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-slate-400 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: exp.dotColor }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${exp.tagColor}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
