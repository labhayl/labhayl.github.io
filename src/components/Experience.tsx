"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-500 text-sm mb-4 block">
            {"// Experience"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-accent-500 border-4 border-white dark:border-zinc-950 md:-translate-x-1/2 z-10`}
                />

                {/* Content */}
                <div
                  className={`card card-hover p-6 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`flex flex-wrap items-start gap-4 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className={index % 2 === 0 ? "md:order-2" : ""}>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-600 dark:text-accent-400 ${
                        index % 2 === 0 ? "md:order-1" : ""
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <ul
                    className={`space-y-3 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className={`flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
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