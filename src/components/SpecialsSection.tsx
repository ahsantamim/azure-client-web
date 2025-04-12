import React from "react";
import { motion } from "framer-motion";

const SpecialsSection = () => {
  const images = [
    "/Chefs Special/image-1.jpg",
    "/Chefs Special/image-2.jpg",
    "/Chefs Special/image-3.jpg",
    "/Chefs Special/image-4.jpg",
    "/Chefs Special/image-5.jpg",
    "/Chefs Special/image-6.jpg",
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" id="specials">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Chef's Special Creations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Experience our culinary masterpieces crafted with premium
            ingredients and authentic flavors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={src}
                alt={`Special ${index + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
