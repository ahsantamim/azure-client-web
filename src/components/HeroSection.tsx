import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Typewriter effect for heading
    if (headingRef.current) {
      const heading = headingRef.current;
      const lines = heading.querySelectorAll(".line");

      lines.forEach((line, lineIndex) => {
        const text = line.textContent || "";
        line.textContent = "";

        const chars = text.split("");
        chars.forEach((char, charIndex) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.opacity = "0";
          span.style.display = "inline-block";
          line.appendChild(span);

          gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: lineIndex * 0.5 + charIndex * 0.05,
            ease: "back.out",
          });
        });
      });
    }

    // Rest of your effects...
    // (Keep your existing background and SVG effects code)
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with subtle zoom effect */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero/hero.jpg')",
          backgroundPosition: "50% 50%",
          willChange: "background-position",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />
      </div>

      {/* Decorative SVG curves */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Your existing SVG paths */}
      </svg>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="max-w-2xl"
        >
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-['Poppins'] font-bold mb-6 text-white leading-tight"
          >
            <div className="">Azure</div>
            <div>Cuisine</div>
            <motion.div
              className="line text-[#FF6B35] block mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Restaurant
            </motion.div>
          </h1>

          {/* Rest of your component remains the same */}
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Fine Dining Experience in Dhaka City
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, staggerChildren: 0.1 }}
          >
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#reservation"
                className="bg-blue-600 text-white px-8 py-3 scroll-smooth rounded-full font-semibold hover:bg-blue-700/90 transition"
              >
                Book a Table
              </a>
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#pricemenu">View Menu</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
