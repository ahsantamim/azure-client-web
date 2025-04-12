import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    quote:
      "Spice Garden offers the most authentic Indian cuisine I've had outside of India.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Regular Customer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    quote:
      "I've been coming to Spice Garden for years. The quality never wavers.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Patel",
    role: "Culinary Expert",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    quote:
      "Spice Garden is one of the few places that gets the spice balance just right.",
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setDir(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoplayRef.current!);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="min-h-[33vh] flex mt-24 items-center justify-center  px-4">
      <div className="relative w-full max-w-3xl mx-auto text-center">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="px-4"
          >
            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
              "{testimonials[index].quote}"
            </p>
            <div className="flex flex-col items-center gap-2">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {testimonials[index].name}
              </h3>
              <span className="text-sm text-orange-600 dark:text-orange-400">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
