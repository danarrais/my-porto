"use client";

import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';
import LogoLoop from './LogoLoop';
import Certificates from './Certificates';
import Education from './Education';
import PixelTransition from './PixelTransition';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiFigma, SiPhp, SiMysql, SiFlutter, SiGithub, SiLaragon, SiJavascript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const techLogosRow1 = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com"},
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net"},
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com"},
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev"},
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
];

const techLogosRow2 = [
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <VscVscode />, title: "VS Code", href: "https://code.visualstudio.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiLaragon />, title: "Laragon", href: "https://laragon.net" }
];

export default function About() {
  const { lang } = useLanguage();
  const t = dictionary[lang].about;

  return (
    <section id="about" className="px-5 md:px-8 max-w-[1280px] mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col gap-16 md:gap-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div variants={revealVariants} className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t.tag}
            </span>
            <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary max-w-[640px]">
              {t.heading}
            </h2>
            <div className="text-lg text-secondary leading-relaxed flex flex-col gap-4">
              <p>
                {t.para1}
              </p>
              <p>
                {t.para2}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center md:justify-end items-center h-full">
            <motion.div
              variants={revealVariants}
              className="relative w-full max-w-[320px] md:max-w-[400px]"
            >
              <PixelTransition
                firstContent={
                  <img
                    src="https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786257457/profile_about_cy8exo.webp"
                    alt="Danar Rais Alhakim in batik formal attire"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <img
                    src="https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786257535/cat_it_g0znlh.webp"
                    alt="Danar Rais Alhakim with his cat"
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

        <Education />

        <Certificates />

        <div className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-14">
          <div className="relative overflow-hidden h-[80px] md:h-[120px]">
            <LogoLoop
              logos={techLogosRow1}
              speed={100}
              direction="left"
              logoHeight="clamp(40px, 8vw, 75px)"
              gap="clamp(30px, 6vw, 60px)"
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology partners"
            />
          </div>
          <div className="relative overflow-hidden h-[80px] md:h-[120px]">
            <LogoLoop
              logos={techLogosRow2}
              speed={100}
              direction="right"
              logoHeight="clamp(40px, 8vw, 75px)"
              gap="clamp(30px, 6vw, 60px)"
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="var(--background)"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}