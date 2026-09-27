"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';
import PixelTransition from './PixelTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = dictionary[lang].hero;

  return (
    <section className="relative flex items-center pt-24 pb-8 md:pt-32 md:pb-8 overflow-hidden">


      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-secondary font-medium mb-4">
            {t.greeting}
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-[40px] md:text-[56px] font-semibold leading-[1.1] tracking-tight mb-6 text-primary">
            {t.roles[0]}<br />
            {t.roles[1]}<br />
            {t.roles[2]}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary max-w-[480px] mb-10 leading-relaxed">
            {t.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="/project"
              className="px-7 py-4 bg-primary text-background rounded-[14px] font-medium hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center gap-2"
            >
              {t.viewProjects}
            </Link>
            <Link
              href="/CV_Danar-Rais-Alhakim.pdf"
              target="_blank"
              className="px-7 py-4 bg-transparent border border-primary text-primary rounded-[14px] font-medium hover:bg-surface transition-colors"
            >
              {t.downloadCv}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5 text-secondary">
            <Link href="https://github.com/danarrais" target="_blank" className="hover:text-primary hover:scale-105 transition-all p-2 bg-surface rounded-full">
              <span className="sr-only">GitHub</span>
              <FiGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/danar-rais-alhakim/" target="_blank" className="hover:text-primary hover:scale-105 transition-all p-2 bg-surface rounded-full">
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com/danarraisal" target="_blank" className="hover:text-primary hover:scale-105 transition-all p-2 bg-surface rounded-full">
              <span className="sr-only">Instagram</span>
              <FiInstagram className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative w-full max-w-[320px] md:max-w-[400px]"
          >
            <PixelTransition
              firstContent={
                <img
                  src="https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto,w_600/v1786257592/profile_kslxuv.webp"
                  alt="Default pixel transition content, its me!"
                  fetchPriority="high"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <img
                  src="https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto,w_600/v1786257535/cat_it_g0znlh.webp"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              aspectRatio="125%"
              className="rounded-[20px] overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "none",
                backgroundColor: "transparent",
                borderWidth: 0,
                borderColor: "transparent",
                boxShadow: "none",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
