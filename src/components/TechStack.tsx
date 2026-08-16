"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/lib/data";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(techStack);

  return (
    <section id="skills" className="section-padding bg-zinc-50/50 dark:bg-zinc-900/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 block tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Production-tested technologies I use to build backend platforms, data pipelines, and AI infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-accent-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-accent-500/10 group-hover:text-accent-500 transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.2,
                      delay: categoryIndex * 0.1 + itemIndex * 0.03,
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-700 hover:border-accent-200 dark:hover:border-accent-500/30 hover:text-accent-600 dark:hover:text-accent-300 transition-all duration-200 cursor-default shadow-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}