import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Clean typewriter effect for heading
    if (headingRef.current) {
      const heading = headingRef.current;
      const text = heading.textContent || "";
      heading.textContent = "";

      const chars = text.split("");
      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        heading.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "back.out",
        });
      });
    }

    // Subtle background parallax effect
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: "50% 60%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Elegant SVG curve animations
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      // Initial setup
      gsap.set(paths, {
        strokeDasharray: 500,
        strokeDashoffset: 500,
        opacity: 0.3,
      });

      // Animate drawing effect
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.3,
      });

      // Continuous subtle movement
      paths.forEach((path, i) => {
        const yMovement = i % 2 === 0 ? 10 : -10;
        gsap.to(path, {
          y: yMovement,
          duration: 8 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Opacity pulse
        gsap.to(path, {
          opacity: i % 2 === 0 ? 0.4 : 0.2,
          duration: 5 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "50% 50%",
          willChange: "background-position",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20" />
      </div>

      {/* Decorative SVG curves */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Main curved line - top */}
        <path
          d="M0,100 C150,50 350,150 500,100 C650,50 850,150 1000,100 C1150,50 1350,150 1440,100"
          stroke="#FF6B35"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Snake-like line - middle */}
        <path
          d="M0,400 C200,350 300,450 500,400 C700,350 800,450 1000,400 C1200,350 1300,450 1440,400"
          stroke="#FF6B35"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 5"
        />

        {/* Wavy line - bottom */}
        <path
          d="M0,700 C300,650 400,750 700,700 C1000,650 1100,750 1440,700"
          stroke="#F5F5DC"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Diagonal decorative line */}
        <path
          d="M0,0 L1440,800"
          stroke="#FF6B35"
          strokeWidth="0.8"
          strokeOpacity="0.2"
          strokeDasharray="20 10"
        />

        {/* Reverse diagonal */}
        <path
          d="M1440,0 L0,800"
          stroke="#F5F5DC"
          strokeWidth="0.8"
          strokeOpacity="0.2"
          strokeDasharray="15 7"
        />
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
            Modern Indian Cuisine
            <motion.span
              className="text-[#FF6B35] block md:inline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Redefined
            </motion.span>
          </h1>
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
              Book a Table
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
