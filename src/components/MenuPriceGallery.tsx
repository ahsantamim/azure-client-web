import React from "react";
import { motion } from "framer-motion";

const MenuPriceGallery = () => {
  const images = [
    "/MenuPrices/image-1.jpg",
    "/MenuPrices/image-2.jpg",
    "/MenuPrices/image-3.jpg",
    "/MenuPrices/image-4.jpg",
    "/MenuPrices/image-5.jpg",
    "/MenuPrices/image-6.jpg",
  ];

  return (
    <section id="pricemenu" className="mt-24 mb-12 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Price List</h2>
        <p className="text-md text-gray-700 text-center mb-8">
          Browse our menu and discover dishes at affordable prices.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 0.77, 0.47, 0.97],
              }}
              viewport={{ once: true, margin: "20px" }}
              className="overflow-hidden"
            >
              <img
                src={src}
                alt={`Menu item ${index + 1}`}
                className="w-full h-124 object-contain hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPriceGallery;
