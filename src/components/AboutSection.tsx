import React, { useRef } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 max-w-7xl mx-auto md:px-8 lg:px-16 bg-white dark:bg-gray-900"
      id="about"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of passion, tradition, and authentic flavors from India to
            Bangladesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-orange-600 dark:text-orange-400">
                Our Beginning
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Founded in 2005 by Chef Rajesh Sharma, Spice Garden began as a
                small family restaurant with a mission to bring authentic Indian
                flavors to Dhaka. What started as a modest 20-seat eatery has
                now grown into one of the city's most beloved culinary
                destinations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-orange-600 dark:text-orange-400">
                Our Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                At Spice Garden, we believe that food is more than
                sustenance—it's an experience that brings people together. Every
                dish we serve is crafted with care, using traditional recipes
                passed down through generations and the finest ingredients
                sourced directly from farms across India.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-orange-600 dark:text-orange-400">
                Our Team
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our team of chefs, trained in the culinary traditions of various
                Indian regions, brings decades of experience to our kitchen. Led
                by Executive Chef Priya Patel, they work tirelessly to ensure
                that every plate that leaves our kitchen is a masterpiece of
                flavor and presentation.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-medium mt-4 transition-colors duration-300 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
