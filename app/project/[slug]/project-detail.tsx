"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import type { Project } from "@/content/projects";
import Navbar from "@/app/components/navbar";
import Lightbox from "@/app/components/Lightbox";
import TechStackIcon from "@/app/components/TechStackIcon";
import { useLanguage } from '../../context/LanguageContext';
import { dictionary } from '@/content/dictionary';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const SECTION_IDS = ["overview", "problem-solution", "approach", "gallery"];

export default function ProjectDetail({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPopupImage, setSelectedPopupImage] = useState<string | null>(null);
  const { lang } = useLanguage();

  const t = dictionary[lang].projectDetail;
  const sections = [
    { id: "overview", num: "01", label: t.overview },
    { id: "problem-solution", num: "02", label: `${t.problem} & ${t.solution}` },
    { id: "approach", num: "03", label: t.myRole },
    { id: "gallery", num: "04", label: t.gallery },
  ];

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [project.slug]);

  const isGalleryImage = selectedPopupImage && project.gallery.includes(selectedPopupImage);
  const currentGalleryIndex = isGalleryImage ? project.gallery.indexOf(selectedPopupImage as string) : -1;
  const totalGalleryImages = project.gallery.length;

  const showPrev = () => {
    if (currentGalleryIndex > 0) {
      setSelectedPopupImage(project.gallery[currentGalleryIndex - 1]);
    }
  };

  const showNext = () => {
    if (currentGalleryIndex !== -1 && currentGalleryIndex < totalGalleryImages - 1) {
      setSelectedPopupImage(project.gallery[currentGalleryIndex + 1]);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-[96px] pb-[72px] px-5 md:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,400px)_1fr] gap-x-16 gap-y-12">
          {/* ================= LEFT: sticky identity panel ================= */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)]"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                {project.category}
              </span>
              <h1 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-tight text-primary">
                {project.title}
              </h1>
              <p className="text-base text-secondary leading-relaxed">
                {project.shortDescription[lang]}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-6">
              <dl className="flex flex-col divide-y divide-divider border-t border-b border-divider text-sm">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.role}</dt>
                  <dd className="font-medium text-primary text-right">{project.role}</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.duration}</dt>
                  <dd className="font-medium text-primary text-right">{project.duration[lang]}</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted">{t.platform}</dt>
                  <dd className="font-medium text-primary text-right">{project.platform}</dd>
                </div>
                {project.techStack.length > 0 && (
                  <div className="flex items-center justify-between py-3 gap-4">
                    <dt className="text-muted shrink-0">{t.techStack}</dt>
                    <dd className="flex flex-wrap justify-end gap-2">
                      {project.techStack.flatMap((stack) => stack.items).map((item, j) => (
                        <TechStackIcon key={j} name={item.name} icon={item.icon} />
                      ))}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-accent text-background rounded-[14px] text-sm font-medium hover:-translate-y-0.5 hover:shadow-hover transition-all flex items-center gap-2"
                  >
                    {t.liveDemo} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-surface border border-border text-primary rounded-[14px] text-sm font-medium hover:bg-background transition-all flex items-center gap-2"
                  >
                    <FiGithub className="w-4 h-4" /> {t.github}
                  </Link>
                )}
                {project.figmaUrl && (
                  <Link
                    href={project.figmaUrl}
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-surface border border-border text-primary rounded-[14px] text-sm font-medium hover:bg-background transition-all flex items-center gap-2"
                  >
                    <SiFigma className="w-4 h-4" /> Figma
                  </Link>
                )}
                {project.isPrivate && (
                  <div className="px-4 py-2 bg-surface border border-border text-secondary rounded-[14px] text-sm font-medium flex items-center gap-2 cursor-not-allowed">
                    <Lock className="w-4 h-4" /> {t.privateRepo}
                  </div>
                )}
              </div>
            </div>

            {/* Reading position — replaces a separate top nav entirely.
                Only meaningful because the sections really are a sequence. */}
            <div className="hidden lg:flex items-center gap-3 pt-6 mt-auto border-t border-divider text-xs font-mono text-muted">
              <span className="text-primary">{sections[activeIndex]?.num}</span>
              <span>/ {sections.length.toString().padStart(2, "0")}</span>
              <span className="w-1 h-1 rounded-full bg-muted" />
              <span className="truncate">{sections[activeIndex]?.label}</span>
            </div>
          </motion.aside>

          {/* ================= RIGHT: flowing narrative ================= */}
          <div className="flex flex-col">
            {/* Hero image opens the right column instead of sitting beside the title */}
            <motion.div
              {...fadeUp}
              className="relative w-full bg-surface rounded-[24px] border border-border overflow-hidden mb-16 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => project.heroImage && setSelectedPopupImage(project.heroImage)}
            >
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  width="1280"
                  height="800"
                  fetchPriority="high"
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm bg-gradient-to-tr from-surface to-background/50 p-6 text-center">
                  [Hero Image: {project.heroImage}]
                </div>
              )}
            </motion.div>

            {/* ---- 01 Overview ---- */}
            <motion.section
              {...fadeUp}
              id="overview"
              ref={(el) => { sectionRefs.current["overview"] = el; }}
              className="flex flex-col gap-6 py-14 border-b border-divider scroll-mt-32"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted">01</span>
                <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.overview}</h2>
              </div>
              <div className="flex flex-col gap-4 text-lg text-secondary leading-relaxed max-w-[680px]">
                {project.overview[lang].map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.section>

            {/* ---- 02 Problem & Solution ----
                Editorial pairing instead of twin cards: problem is quieter,
                solution is called out with a left accent rule. */}
            <motion.section
              {...fadeUp}
              id="problem-solution"
              ref={(el) => { sectionRefs.current["problem-solution"] = el; }}
              className="flex flex-col gap-8 py-14 border-b border-divider scroll-mt-32"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted">02</span>
                <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">
                  {t.problem} &amp; {t.solution}
                </h2>
              </div>
              <div className="flex flex-col gap-8 max-w-[680px]">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{t.problem}</span>
                  <p className="text-lg text-secondary leading-relaxed">{project.problem[lang]}</p>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.solution}</span>
                  <p className="text-lg text-primary font-medium leading-relaxed">{project.solution[lang]}</p>
                </div>
              </div>
            </motion.section>

            {/* ---- 03 Approach: role breakdown (tech stack now lives in the sidebar) ---- */}
            {project.rolesDetails.length > 0 && (
              <motion.section
                {...fadeUp}
                id="approach"
                ref={(el) => { sectionRefs.current["approach"] = el; }}
                className="flex flex-col gap-8 py-14 border-b border-divider scroll-mt-32"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">03</span>
                  <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.myRole}</h2>
                </div>

                {project.rolesDetails.length > 0 && (
                  <div className="flex flex-col gap-6">
                    {project.rolesDetails.map((r, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                        <h3 className="text-base font-medium text-primary">{r.title[lang]}</h3>
                        <ul className="flex flex-col gap-3">
                          {r.tasks[lang].map((task, j) => (
                            <li key={j} className="flex items-start gap-3 text-secondary">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {/* ---- 04 Gallery ---- */}
            {project.gallery.length > 0 && (
              <motion.section
                {...fadeUp}
                id="gallery"
                ref={(el) => { sectionRefs.current["gallery"] = el; }}
                className="flex flex-col gap-6 py-14 border-b border-divider scroll-mt-32"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">04</span>
                  <h2 className="text-[28px] md:text-[34px] font-semibold text-primary">{t.gallery}</h2>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                  {project.gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => img && setSelectedPopupImage(img)}
                      aria-label={`Open gallery ${i + 1}`}
                      className="block w-full text-left relative rounded-[24px] overflow-hidden cursor-pointer hover:opacity-95 hover:scale-[0.98] transition-all duration-300 border border-border break-inside-avoid mb-6"
                    >
                      {img ? (
                        img.includes('/video/') || img.endsWith('.mp4') ? (
                          <video
                            src={img}
                            className="w-full h-auto object-cover rounded-[16px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={img}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-auto object-cover rounded-[16px]"
                          />
                        )
                      ) : (
                        <div className="w-full h-[200px] flex items-center justify-center bg-surface text-[10px] text-muted font-mono break-all p-2 text-center">
                          {img}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.section>
            )}

          </div>
        </div>
      </main>

      <Lightbox
        open={selectedPopupImage !== null}
        onClose={() => setSelectedPopupImage(null)}
        label={t.gallery}
        index={currentGalleryIndex !== -1 ? currentGalleryIndex + 1 : undefined}
        total={currentGalleryIndex !== -1 ? totalGalleryImages : undefined}
        onPrev={currentGalleryIndex > 0 ? showPrev : undefined}
        onNext={currentGalleryIndex !== -1 && currentGalleryIndex < totalGalleryImages - 1 ? showNext : undefined}
      >
        {selectedPopupImage && (
          <div className="relative w-full max-w-5xl aspect-video max-h-[90vh] flex items-center justify-center">
            {selectedPopupImage.includes('/video/') || selectedPopupImage.endsWith('.mp4') ? (
              <video
                src={selectedPopupImage}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedPopupImage}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        )}
      </Lightbox>
    </>
  );
}
