"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-white/50 dark:bg-zinc-950/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 block tracking-wider uppercase">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-zinc-200 dark:via-zinc-800 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10 flex items-center justify-center`}
                >
                  <div className="w-4 h-4 rounded-full bg-accent-500 border-4 border-white dark:border-zinc-950 shadow-[0_0_0_4px_rgba(6,182,212,0.2)]"></div>
                </div>

                {/* Content */}
                <div
                  className={`group relative p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-accent-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/5 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                >
                  <div
                    className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"
                      }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent-100 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {exp.title}
                    </h3>

                    <div className={`flex items-center gap-3 text-sm text-zinc-500 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul
                    className={`space-y-3 ${index % 2 === 0 ? "md:text-right" : ""
                      }`}
                  >
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className={`flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500/50 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}