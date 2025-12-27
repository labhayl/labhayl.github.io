"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.github,
      label: "@labhayl",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "Connect",
    },
    {
      name: "LeetCode",
      icon: Code2,
      href: personalInfo.leetcode,
      label: "Knight (Top 4.77%)",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-500 text-sm mb-4 block">
            {"// Contact"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Open to discussing AI/ML opportunities, technical collaborations, or
            interesting projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
                Get in touch
              </h3>

              <div className="space-y-6 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 hover:text-accent-500 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="font-medium text-zinc-900 dark:text-white">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
                  <div className="p-3 rounded-xl bg-accent-500/10">
                    <MapPin className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <p className="font-medium text-zinc-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
                <p className="text-sm text-zinc-500 mb-4">Find me on</p>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                        <span className="font-medium text-zinc-900 dark:text-white">
                          {social.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <span>{social.label}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
                Send a message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-zinc-900 dark:text-white placeholder-zinc-500 transition-colors outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-zinc-900 dark:text-white placeholder-zinc-500 transition-colors outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-zinc-900 dark:text-white placeholder-zinc-500 transition-colors outline-none resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}