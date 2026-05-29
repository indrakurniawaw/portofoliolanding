"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function PortfolioModal({ open, onClose, item }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const images = item?.images || [];
  const indicatorItems = images.length ? images : [null];

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, item]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((current) =>
          Math.min(current + 1, Math.max(0, images.length - 1)),
        );
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => Math.max(current - 1, 0));
      }
    }

    if (open) window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose, open]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (deltaX > threshold) {
      setIndex((current) => Math.min(current + 1, Math.max(0, images.length - 1)));
    } else if (deltaX < -threshold) {
      setIndex((current) => Math.max(current - 1, 0));
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.99 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/45 px-3 py-1 text-sm font-semibold text-white hover:bg-black/65"
              aria-label="Close preview"
            >
              Close
            </button>

            <div
              className="relative flex h-[320px] items-center justify-center bg-slate-900 sm:h-[420px] lg:h-[560px] touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images[index] ? (
                <Image
                  src={images[index]}
                  alt={`${item.title} preview ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-800 text-sm font-medium uppercase tracking-[0.3em] text-slate-300">
                  No image
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 px-6 py-5">
              {indicatorItems.map((_, indicatorIndex) => (
                <span
                  key={indicatorIndex}
                  className={
                    indicatorIndex === index
                      ? "h-3 w-3 rounded-full bg-cyan-300 opacity-100"
                      : "h-3 w-3 rounded-full bg-white/35 opacity-60"
                  }
                  aria-hidden="true"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
