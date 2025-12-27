"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Users, BookOpen, Zap } from "lucide-react";
import { about } from "@/lib/data";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: Zap, value: "₹9Cr+", label: "Business Impact" },
  { icon: Users, value: "100+", label: "Interviews Conducted" },
  { icon: Award, value: "Top 4.77%", label: "LeetCode Globally" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-500 text-sm mb-4 block">
            {"// About Me"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building AI that{" "}
            <span className="gradient-text">ships to production</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-8">
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
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300">
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
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="card card-hover p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-accent-500 mx-auto mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}