"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioModal({ open, onClose, item }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open, item]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, (item?.images || []).length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, item, onClose]);

    // Swipe handling
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (touchStartX.current == null || touchEndX.current == null) return;
      const dx = touchStartX.current - touchEndX.current;
      const threshold = 50; // px
      if (dx > threshold) {
        // swiped left -> next
        setIndex((i) => Math.min(i + 1, Math.max(0, images.length - 1)));
      } else if (dx < -threshold) {
        // swiped right -> prev
        setIndex((i) => Math.max(0, i - 1));
      }
      touchStartX.current = null;
      touchEndX.current = null;
    };

  if (!item) return null;

  const images = item.images || [];

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
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.99 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-slate-100">
                <div className="relative h-64 md:h-96 bg-slate-200 flex items-center justify-center">
                  {images[index] ? (
                    <Image
                      src={images[index]}
                      alt={`Image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500">
                      <div className="w-40 h-28 bg-slate-300/60 rounded-md mb-4" />
                      <div>No image</div>
                    </div>
                  )}
                </div>

                  <div
                    className="relative h-64 md:h-96 bg-slate-200 flex items-center justify-center touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {images[index] ? (
                      <Image
                        src={images[index]}
                        alt={`Image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <div className="w-40 h-28 bg-slate-300/60 rounded-md mb-4" />
                        <div>No image</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between px-4 py-3 gap-4">
                    <button
                      className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200"
                      onClick={() => setIndex((i) => Math.max(0, i - 1))}
                      disabled={index === 0}
                    >
                      Prev
                    </button>
                    <div className="flex-1 text-center text-sm text-slate-600">
                      {index + 1} / {images.length || 1}
                    </div>
                    <button
                      className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200"
                      onClick={() =>
                        setIndex((i) =>
                          Math.min(i + 1, Math.max(0, images.length - 1)),
                        )
                      }
                      disabled={index >= images.length - 1}
                    >
                      Next
                    </button>
                  </div>

                  {/* Thumbnails */}
                  <div className="px-4 py-3 border-t border-slate-200 bg-white">
                    <div className="flex gap-2 overflow-x-auto">
                      {(images.length ? images : [null]).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border ${i === index ? "ring-2 ring-sky-500" : "border-slate-200"}`}
                        >
                          {src ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                          ) : (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/placeholder.svg" alt="placeholder" className="w-full h-full object-cover" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                <div className="flex items-center justify-between px-4 py-3 gap-4">
                  <button
                    className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200"
                    onClick={() => setIndex((i) => Math.max(0, i - 1))}
                    disabled={index === 0}
                  >
                    Prev
                  </button>
                  <div className="flex-1 text-center text-sm text-slate-600">
                    {index + 1} / {images.length || 1}
                  </div>
                  <button
                    className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200"
                    onClick={() =>
                      setIndex((i) =>
                        Math.min(i + 1, Math.max(0, images.length - 1)),
                      )
                    }
                    disabled={index >= images.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="md:w-1/3 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {item.description}
                    </p>
                    {item.technologies && (
                      <div className="mt-3">
                        <div className="text-xs uppercase text-slate-500 tracking-wider mb-2">
                          Technologies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-slate-100 px-2 py-1 rounded-md text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 ml-4"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 text-sm text-slate-500">
                  <p>
                    This is a project preview. Images are placeholders — you can
                    replace them later with real screenshots.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
