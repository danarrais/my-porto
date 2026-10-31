"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
  /** Posisi 1-based; tampil bersama `total` sebagai counter. */
  index?: number;
  total?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

const FOCUSABLE = 'button:not([disabled]), [href], video[controls], [tabindex]:not([tabindex="-1"])';

export default function Lightbox({ open, onClose, label, children, index, total, onPrev, onNext }: LightboxProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  // Simpan callback terbaru supaya efek di bawah tidak perlu re-run (fokus tidak lompat)
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      previous?.focus();
    };
  }, [open]);

  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const nodes = rootRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!nodes?.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={rootRef}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onKeyDown={trapFocus}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {index !== undefined && total !== undefined && (
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 p-2 text-white/90 font-medium tracking-widest text-sm md:text-base z-50">
              {index} / {total}
            </div>
          )}

          {onPrev && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-all hover:-translate-x-1 z-50"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 drop-shadow-md" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-all hover:translate-x-1 z-50"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12 drop-shadow-md" />
            </button>
          )}

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full items-center justify-center"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
