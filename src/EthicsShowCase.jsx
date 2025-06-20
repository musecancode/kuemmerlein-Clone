"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ethics = [
  "Simplicity that works.",
  "Discover how we positively change consulting for your success.",
  "Simplicity as a guiding principle.",
  "Empathy as added value.",
  "High standards, low egos",
  "Agility instead of giant teams",
];

function EthicsShowcase() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom > viewportHeight) {
        const currentScrollY = window.scrollY;

        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {
          if (currentScrollY > lastScrollY.current) {
            setCurrentIndex((prev) => Math.min(prev + 1, ethics.length - 1));
          } else if (currentScrollY < lastScrollY.current) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
          }

          lastScrollY.current = currentScrollY;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: `120vh` }}>
      <div className="sticky top-0 left-0 w-full h-screen bg-[#fdfd84] overflow-hidden rounded-[40px] rounded-tr-[400px] z-10 mt-28">
        <div className="absolute right-[60px] top-[60px] w-[400px] h-[400px] bg-white rounded-full"></div>

        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-5xl font-serif text-black leading-tight"
            >
              {ethics[currentIndex]}
            </motion.h2>
          </AnimatePresence>

          <div className="mt-12 flex space-x-4">
            {ethics.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-black" : "bg-black/20"
                }`}
                animate={{
                  scale: index === currentIndex ? 1.4 : 1,
                  opacity: index === currentIndex ? 1 : 0.4,
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>

          <div className="mt-8 text-black/70 text-lg font-medium">
            {currentIndex + 1} of {ethics.length}
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <motion.div
            className="text-black/60 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
        </div>

        {currentIndex === ethics.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 right-16 text-black/70 text-sm"
          >
            Continue scrolling to proceed →
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default EthicsShowcase;
