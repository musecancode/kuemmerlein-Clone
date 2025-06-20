import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const qualities = [
  "Fast maneuvers",
  "Agility",
  "Diversity of ideas",
  "Precise target achievement",
];

function AnimatedCircle({ text, index }) {
  const ref = useRef();
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`w-[300px] h-[300px] md:w-[500px] md:h-[500px] ${
        isInView ? "bg-yellow-200" : "bg-gray-300"
      } rounded-full flex items-center justify-center text-center text-xl md:text-2xl font-serif shadow-xl mx-auto transition-colors duration-500`}
    >
      {text}
    </motion.div>
  );
}

export default function WhyWorkWithUs() {
  const sectionRef = useRef();

  const sectionInView = useInView(sectionRef, {
    rootMargin: "-100px 0px -80% 0px",
    threshold: 0,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-[95%] mx-auto my-2 bg-[#eee] text-black py-32 min-h-[2200px] rounded-3xl overflow-hidden"
    >
      {/* Fixed Left Text */}
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2 px-6 md:px-16 lg:px-28 z-30 w-[50%] hidden md:block pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className="text-5xl font-serif font-light leading-snug mb-4">
          Why work with us?
        </h2>
        <p className="text-sm font-light max-w-xs leading-relaxed">
          We are your agile, multi-award-winning partner in commercial law.
        </p>
      </motion.div>

      {/* Right: Circles */}
      <div className="md:ml-[50%] px-6 md:px-16 lg:px-28 flex flex-col gap-12">
        {qualities.map((text, index) => (
          <AnimatedCircle key={index} text={text} index={index} />
        ))}
      </div>
    </section>
  );
}
