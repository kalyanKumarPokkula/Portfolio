import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import axios from "axios";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "kalyankumarpokkula1001@gmail.com",
    href: "mailto:kalyankumarpokkula1001@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 7993450325",
    href: "tel:+917993450325",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = "service_2wp651d";
    const templateId = "template_x4e9qqt";
    const publicKey = "A9xk0zO5cjrNlKr7w";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Kalyan Kumar",
        message: message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setStatus("sent");
      setEmail("");
      setMessage("");
      setName("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 section-alt">
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
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg,#60a5fa,#2563eb)" }}
          />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear
            from you. Send me a message and I'll get back to you as soon as
            possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — Contact info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`font-medium text-sm ${item.color} hover:opacity-80 transition-opacity`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-slate-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://github.com/kalyanKumarPokkula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all text-sm"
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://linkedin.com/in/kalyankumarpokkula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-600 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all text-sm resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg,#60a5fa,#2563eb)",
                boxShadow: "0 0 20px rgba(34,211,238,0.2)",
              }}
            >
              {status === "sending" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
