"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = dictionary[lang].contact;

  return (
    <section id="contact" className="pt-8 pb-8 md:pt-10 md:pb-8 px-5 md:px-8 max-w-[1280px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col gap-12 md:gap-16"
      >
        <motion.div variants={revealVariants} className="flex flex-col gap-6 max-w-[640px] mx-auto text-center items-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            {t.tag}
          </span>
          <h2 className="text-[32px] md:text-[56px] font-semibold leading-tight tracking-tight text-primary">
            {t.heading}
          </h2>
        </motion.div>

        <motion.div variants={revealVariants} className="max-w-[640px] mx-auto text-center">
          <p className="text-lg text-secondary">
            {t.description}
          </p>
        </motion.div>

        <motion.div variants={revealVariants} className="flex flex-col gap-10 max-w-[1024px] mx-auto w-full">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="mailto:danarraisa@gmail.com" aria-label="Email" className="flex items-center hover:scale-[1.1] transition-transform group">
              <div className="p-4 bg-surface group-hover:bg-background rounded-full transition-colors shadow-sm">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a href="https://wa.me/085747784405" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-[1.1] transition-transform group">
              <div className="p-4 bg-surface group-hover:bg-background rounded-full transition-colors shadow-sm">
                <FaWhatsapp className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/danar-rais-alhakim/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-[1.1] transition-transform group">
              <div className="p-4 bg-surface group-hover:bg-background rounded-full transition-colors shadow-sm">
                <FiLinkedin className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a href="https://github.com/danarrais" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-[1.1] transition-transform group">
              <div className="p-4 bg-surface group-hover:bg-background rounded-full transition-colors shadow-sm">
                <FiGithub className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a href="https://instagram.com/danarraisal" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex items-center hover:scale-[1.1] transition-transform group">
              <div className="p-4 bg-surface group-hover:bg-background rounded-full transition-colors shadow-sm">
                <FiInstagram className="w-6 h-6 text-primary" />
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
