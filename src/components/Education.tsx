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
} from "lucide-react";
import { education, certifications, achievements } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-accent-500 text-sm mb-4 block">
            {"// Education & Certifications"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Background & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-500/10">
                <GraduationCap className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="card card-hover p-6">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">
                  {edu.institution}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">{edu.period}</span>
                  <span className="font-mono text-accent-500">{edu.grade}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-500/10">
                <Award className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="card p-6 space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-4 last:pb-0 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent-500 shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white text-sm">
                      {cert.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {cert.issuer} • {cert.credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-500/10">
                <Trophy className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card card-hover p-4">
                  <div className="flex items-start gap-3">
                    {index === 0 && <Mic className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />}
                    {index === 1 && <Target className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />}
                    {index === 2 && <Medal className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />}
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white text-sm">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        {achievement.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}