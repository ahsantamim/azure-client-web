import React, { useRef } from "react";
import { motion } from "framer-motion";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = React.useState("all");

  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
      alt: "Elegant table setting",
      category: "interior",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&q=80",
      alt: "Colorful Indian dish with rice",
      category: "food",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      alt: "Restaurant interior with warm lighting",
      category: "interior",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
      alt: "Chicken Tikka Masala",
      category: "food",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600&q=80",
      alt: "Chef preparing food",
      category: "staff",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&q=80",
      alt: "Tandoori Chicken",
      category: "food",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      alt: "Private dining area",
      category: "interior",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
      alt: "Paneer Tikka",
      category: "food",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 "
      id="gallery"
    >
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Our Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a visual journey through our restaurant, cuisine, and the
            experiences we create for our guests.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white  rounded-full p-1 shadow-md">
            {["all", "food", "interior", "staff"].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 "
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
