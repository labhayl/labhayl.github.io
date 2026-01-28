"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-[1] opacity-20 bg-noise pointer-events-none mix-blend-soft-light"></div>

      {/* Animated Gradient Start */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-500/20 blur-lg -z-10" />
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-lg md:text-xl text-accent-600 dark:text-accent-400 font-medium py-1 px-3 rounded-lg bg-accent-500/5 dark:bg-accent-500/10 border border-accent-500/10">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-zinc-900/20 dark:shadow-zinc-100/10"
            >
              <Code2 className="w-4 h-4" />
              View Work
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              // { href: personalInfo.leetcode, icon: Code2, label: "LeetCode" } 
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 md:mt-24"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-zinc-400 hover:text-accent-500 transition-colors opacity-50 hover:opacity-100"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Explore
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}