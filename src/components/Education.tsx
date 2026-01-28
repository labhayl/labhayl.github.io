"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  Trophy,
  Mic,
  Target,
  Medal,
  School,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { education, certifications, achievements } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-zinc-50 dark:bg-zinc-900/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 block tracking-wider uppercase">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                <GraduationCap className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4 flex-grow">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:border-accent-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 shrink-0 group-hover:bg-accent-500/10 group-hover:text-accent-500 transition-colors text-zinc-400">
                      {edu.type === "university" ? (
                        <School className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-zinc-900 dark:text-white text-base leading-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1 font-medium">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs">
                        <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium">{edu.period}</span>
                        {edu.grade && (
                          <span className="font-mono text-accent-600 dark:text-accent-400 font-semibold bg-accent-50 dark:bg-accent-500/10 px-2 py-1 rounded-md">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                <Award className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 h-full">
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.05 }}
                    className="relative pl-6 border-l-2 border-zinc-100 dark:border-zinc-800 last:border-0 pb-1"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-accent-500" />
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors cursor-default">
                        {cert.name}
                      </p>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{cert.issuer}</span>
                        <span className="text-[10px] text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded w-fit">{cert.credential}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
                <Trophy className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <div className="space-y-4 flex-grow">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 shrink-0 group-hover:bg-accent-500/10 group-hover:text-accent-500 transition-colors">
                      {index === 0 && <Mic className="w-4 h-4 text-zinc-400 group-hover:text-accent-500" />}
                      {index === 1 && <Target className="w-4 h-4 text-zinc-400 group-hover:text-accent-500" />}
                      {index === 2 && <Medal className="w-4 h-4 text-zinc-400 group-hover:text-accent-500" />}
                      {index > 2 && <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-accent-500" />}
                    </div>
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <p className="font-semibold text-zinc-900 dark:text-white text-sm group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                          {achievement.title}
                        </p>
                        <span className="shrink-0 px-1.5 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}