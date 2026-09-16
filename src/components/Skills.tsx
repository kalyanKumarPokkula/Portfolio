import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Cloud, ShieldCheck, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "text-blue-400",
    borderColor: "border-blue-400/25",
    bg: "bg-blue-400/8",
    tagBg: "bg-blue-400/10 border-blue-400/25 text-blue-300",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-5 h-5" />,
    color: "text-sky-400",
    borderColor: "border-sky-400/25",
    bg: "bg-sky-400/8",
    tagBg: "bg-sky-400/10 border-sky-400/25 text-sky-300",
    skills: [
      "Node.js", "Express.js", "React.js", "Spring Boot", "Flask", "FastAPI",
      "HTML", "CSS", "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    color: "text-emerald-400",
    borderColor: "border-emerald-400/25",
    bg: "bg-emerald-400/8",
    tagBg: "bg-emerald-400/10 border-emerald-400/25 text-emerald-300",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "text-amber-400",
    borderColor: "border-amber-400/25",
    bg: "bg-amber-400/8",
    tagBg: "bg-amber-400/10 border-amber-400/25 text-amber-300",
    skills: [
      "AWS EC2", "AWS S3", "AWS SES", "AWS Lambda", "Docker",
      "Kubernetes", "Jenkins", "Bitbucket CI/CD", "Nginx", "PM2",
    ],
  },
  {
    title: "Payments & Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-rose-400",
    borderColor: "border-rose-400/25",
    bg: "bg-rose-400/8",
    tagBg: "bg-rose-400/10 border-rose-400/25 text-rose-300",
    skills: [
      "Stripe", "Razorpay", "Cashfree", "Apple IAP", "OAuth 2.0",
      "JWT", "AES-256-GCM", "Google reCAPTCHA Enterprise", "Helmet",
    ],
  },
  {
    title: "Tools & Integrations",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-teal-400",
    borderColor: "border-teal-400/25",
    bg: "bg-teal-400/8",
    tagBg: "bg-teal-400/10 border-teal-400/25 text-teal-300",
    skills: [
      "Git", "GitHub", "Prisma ORM", "Firebase FCM", "LangChain", "Ollama",
      "Puppeteer", "ExcelJS", "node-cron", "Multer", "Exotel V3",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-dark">
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
            What I Use
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#60a5fa,#2563eb)" }}
          />
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className={`glass-card rounded-2xl p-6 border ${cat.borderColor}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}
                >
                  {cat.icon}
                </div>
                <h3 className={`font-semibold text-sm ${cat.color}`}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag px-3 py-1.5 rounded-lg border text-xs font-medium ${cat.tagBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
