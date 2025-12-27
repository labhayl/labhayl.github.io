"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Code2,
  ExternalLink,
  Send,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: personalInfo.github,
      label: "@labhayl",
      color: "hover:bg-zinc-800 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "Connect with me",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "LeetCode",
      icon: Code2,
      href: personalInfo.leetcode,
      label: "Knight (Top 4.77%)",
      color: "hover:bg-orange-500 hover:text-white",
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
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Open to discussing AI/ML, Data Science, or Full-Stack opportunities. 
            Let&apos;s build something impactful together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8 md:p-12 text-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Get in touch
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
              Whether you have a project in mind, want to discuss opportunities, 
              or just want to say hello-I&apos;d love to hear from you.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-500 text-white font-medium hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-500">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`card card-hover p-6 flex flex-col items-center text-center group transition-all ${social.color}`}
              >
                <social.icon className="w-8 h-8 mb-4 text-zinc-600 dark:text-zinc-400 group-hover:text-current transition-colors" />
                <span className="font-semibold text-zinc-900 dark:text-white group-hover:text-current transition-colors">
                  {social.name}
                </span>
                <span className="text-sm text-zinc-500 group-hover:text-current/80 transition-colors mt-1">
                  {social.label}
                </span>
                <ExternalLink className="w-4 h-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-current" />
              </motion.a>
            ))}
          </motion.div>

          {/* Availability Status */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}