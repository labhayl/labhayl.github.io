"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Building2, Zap, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
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
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A diverse collection of problem-solving applications and technical solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-accent-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/10"
            >

              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-accent-500/10 group-hover:text-accent-500 transition-colors">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500">{project.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6 text-sm text-zinc-500">
                <Building2 className="w-4 h-4" />
                <span>{project.company}</span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 p-4 rounded-2xl bg-green-500/5 border border-green-500/10">
                <p className="text-sm text-green-700 dark:text-green-400 font-medium flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 shrink-0" />
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-accent-500/50 hover:text-accent-600 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-accent-500/20 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}