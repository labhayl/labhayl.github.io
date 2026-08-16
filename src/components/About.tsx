"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Users, BookOpen, Zap, Target } from "lucide-react";
import { about } from "@/lib/data";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: Users, value: "1,200+", label: "Platform Users Served" },
  { icon: Zap, value: "10K+", label: "Documents Processed Monthly" },
  { icon: Award, value: "Rank 283", label: "LeetCode Biweekly" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/40" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="font-mono text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 block tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Building Production Systems that <span className="gradient-text">Scale</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-500/5 group-hover:border-accent-500/20">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                {about.summary}
              </p>

              <div className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1.5 p-1 rounded-full bg-accent-100 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-accent-500/30 transition-all duration-300 text-center hover:shadow-lg hover:shadow-accent-500/10 pointer-events-auto"
              >
                <div className="inline-flex p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-accent-500/10 group-hover:text-accent-500 mb-4 transition-colors text-zinc-400 dark:text-zinc-500">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}