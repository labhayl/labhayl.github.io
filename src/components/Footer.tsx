"use client";

import { Github, Linkedin, Code2, Heart, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: personalInfo.github, icon: Github, label: "GitHub" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
    // { href: personalInfo.leetcode, icon: Code2, label: "LeetCode" }
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="#"
              className="font-mono text-xl font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1 rounded-lg"
            >
              {"<APS/>"}
            </a>
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                © {currentYear} Abhay Pratap Singh. All rights reserved.
              </p>
              <p className="text-xs text-zinc-500 flex items-center gap-1.5">
                Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js & Tailwind
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}