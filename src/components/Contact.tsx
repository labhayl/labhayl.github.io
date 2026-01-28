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
  ArrowRight,
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
      description: "Check out my open source contributions",
      color: "hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 border-zinc-200 dark:border-zinc-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "Connect with me",
      description: "Let's grow our professional network",
      color: "hover:bg-[#0077b5] hover:text-white border-zinc-200 dark:border-zinc-800",
    },
    // {
    //   name: "LeetCode",
    //   icon: Code2,
    //   href: personalInfo.leetcode,
    //   label: "Knight (Top 4.77%)",
    //   description: "View my problem solving journey",
    //   color: "hover:bg-[#ffa116] hover:text-white border-zinc-200 dark:border-zinc-800",
    // },
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
          <span className="font-mono text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 block tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Open to discussing AI/ML, Data Science, or Full-Stack opportunities.
            Let&apos;s build something impactful together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 text-center mb-12 shadow-xl shadow-zinc-200/50 dark:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-accent-50 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-accent-500" />
              </div>

              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Have a project in mind?
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-md mx-auto text-lg">
                Whether you have a project in mind, want to discuss opportunities,
                or just want to say hello—I&apos;d love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-zinc-900/20"
                >
                  <Send className="w-5 h-5" />
                  <span>Say Hello</span>
                </a>

                <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                  <MapPin className="w-5 h-5 text-accent-500" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
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
                className={`group relative flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-900 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
              >
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-white/20 group-hover:text-inherit transition-colors">
                  <social.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-inherit transition-colors">
                      {social.name}
                    </span>
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-zinc-500 group-hover:text-inherit/80 transition-colors mt-1">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}