"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage, type Language } from '../context/LanguageContext';
import { dictionary } from '@/content/dictionary';
import Lightbox from './Lightbox';

type AboutDict = (typeof dictionary)["EN"]["about"];

interface Certificate {
  id: string;
  title: string;
  issuer: {
    EN: string;
    ID: string;
  };
  year: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "BNSP Certificate-Junior Web Development",
    issuer: {
      EN: "Indonesian Professional Certification Authority",
      ID: "Badan Nasional Sertifikasi Profesi (BNSP)"
    },
    year: "2026",
    image: "https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786259029/JuniorWebDev-1_e1m9lg.webp",
  },
  {
    id: "cert-2",
    title: "Certificate of Responsible AI by AI Opportunity",
    issuer: {
      EN: "AI Opportunity",
      ID: "AI Opportunity"
    },
    year: "2026",
    image: "https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786259028/AI_g7lekn.webp",
  },
  {
    id: "cert-3",
    title: " Brawijaya English Proficiency Test (BEPT)",
    issuer: {
      EN: "Brawijaya Language Center",
      ID: "Brawijaya Language Center"
    },
    year: "2026",
    image: "https://res.cloudinary.com/oyuxswwy/image/upload/f_auto,q_auto/v1786259028/BLC_vr8smt.webp",
  },
];

interface AccordionItemProps {
  cert: Certificate;
  isOpen: boolean;
  onClick: () => void;
  onImageClick: (image: string) => void;
  t: AboutDict;
  lang: Language;
}

const AccordionItem = ({ cert, isOpen, onClick, onImageClick, t, lang }: AccordionItemProps) => {
  return (
    <div className="border-t border-border">
      <h3 className="text-lg font-medium text-primary">
        <button
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`${cert.id}-panel`}
          className="w-full flex items-center justify-between gap-4 py-4 text-left"
        >
          <span>{cert.title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-secondary" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`${cert.id}-panel`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => cert.image && onImageClick(cert.image)}
                aria-label={`Open certificate ${cert.title}`}
                className="relative block w-2/5 aspect-[3/2] bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
              >
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm">
                    No Image
                  </span>
                )}
              </button>
              <div className="flex flex-col gap-2 text-left">
                <p className="text-sm text-secondary">
                  <span className="font-medium">{t.issuedBy}</span> {cert.issuer[lang]}
                </p>
                <p className="text-sm text-secondary">
                  <span className="font-medium">{t.year}</span> {cert.year}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Certificates() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = dictionary[lang].about;

  return (
    <section className="flex flex-col gap-8 -mx-5 md:-mx-8">
      <div className="flex flex-col gap-4 px-5 md:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {t.certificates}
        </span>
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary max-w-[640px]">
          {t.sertif}
        </h2>
      </div>

      <div className="">
        <div className="px-5 md:px-8 flex flex-col">
          {certificates.map((cert, index) => (
            <div key={cert.id}>
              <AccordionItem
                cert={cert}
                isOpen={openId === cert.id}
                onClick={() => setOpenId(openId === cert.id ? null : cert.id)}
                onImageClick={setSelectedImage}
                t={t}
                lang={lang}
              />
              {index === certificates.length - 1 && (
                <div className="border-b border-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        label={certificates.find((c) => c.image === selectedImage)?.title ?? t.certificates}
      >
        {selectedImage && (
          <div className="relative w-full max-w-4xl aspect-[3/2] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt={certificates.find((c) => c.image === selectedImage)?.title ?? 'Certificate'}
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        )}
      </Lightbox>
    </section>
  );
}
