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
      src: "/Gallery/interior/image-1.jpg",
      alt: "Elegant table setting",
      category: "interior",
    },
    {
      id: "2",
      src: "/Gallery/interior/image-2.jpg",
      alt: "Cozy corner with ambient lighting",
      category: "interior",
    },
    {
      id: "3",
      src: "/Gallery/interior/image-3.jpg",
      alt: "Stylish restaurant interior",
      category: "interior",
    },
    {
      id: "4",
      src: "/Gallery/interior/image-4.jpg",
      alt: "Modern dining space",
      category: "interior",
    },
    {
      id: "5",
      src: "/Gallery/interior/image-5.jpg",
      alt: "Romantic candlelit table",
      category: "interior",
    },
    {
      id: "6",
      src: "/Gallery/interior/image-6.jpg",
      alt: "Rustic wooden decor",
      category: "interior",
    },
    {
      id: "7",
      src: "/Gallery/interior/image-7.jpg",
      alt: "luxurious Reception",
      category: "interior",
    },
    {
      id: "8",
      src: "/Gallery/interior/image-8.jpg",
      alt: "Warm lighting and furniture",
      category: "interior",
    },
    {
      id: "9",
      src: "/Gallery/interior/image-9.jpg",
      alt: "Chic minimalist layout",
      category: "interior",
    },
    {
      id: "10",
      src: "/Gallery/interior/image-10.jpg",
      alt: "Classic restaurant vibe",
      category: "interior",
    },
    {
      id: "11",
      src: "/Gallery/interior/image-11.jpg",
      alt: "Artistic wall design",
      category: "interior",
    },

    {
      id: "12",
      src: "/Gallery/Stuff/image.jpg",
      alt: "Our dedicated staff",
      category: "staff",
    },
    {
      id: "13",
      src: "/Menu/New/image-1.jpg",
      alt: "Freshly prepared starter",
      category: "food",
    },
    {
      id: "14",
      src: "/Menu/New/image-2.jpg",
      alt: "Crispy golden appetizer",
      category: "food",
    },
    {
      id: "15",
      src: "/Menu/New/image-3.jpg",
      alt: "Delicious seafood dish",
      category: "food",
    },
    {
      id: "16",
      src: "/Menu/New/image-4.jpg",
      alt: "Gourmet presentation plate",
      category: "food",
    },
    {
      id: "17",
      src: "/Menu/New/image-5.jpg",
      alt: "Colorful mixed platter",
      category: "food",
    },
    {
      id: "18",
      src: "/Menu/New/image-6.jpg",
      alt: "Elegant salad bowl",
      category: "food",
    },
    {
      id: "19",
      src: "/Menu/Appetiser/image-1.jpg",
      alt: "Spicy bite-sized appetizer",
      category: "food",
    },
    {
      id: "20",
      src: "/Menu/Appetiser/image-2.jpg",
      alt: "Cheesy delight snack",
      category: "food",
    },
    {
      id: "21",
      src: "/Menu/Appetiser/image-3.jpg",
      alt: "Golden fried delicacy",
      category: "food",
    },
    {
      id: "22",
      src: "/Menu/Main/image-1.jpg",
      alt: "Rich traditional curry",
      category: "food",
    },
    {
      id: "23",
      src: "/Menu/Main/image-2.jpg",
      alt: "Sizzling meat platter",
      category: "food",
    },
    {
      id: "24",
      src: "/Menu/Main/image-3.jpg",
      alt: "Tandoori grilled chicken",
      category: "food",
    },
    {
      id: "25",
      src: "/Menu/Main/image-4.jpg",
      alt: "Classic rice and curry combo",
      category: "food",
    },
    {
      id: "26",
      src: "/Menu/Dessert/image-1.jpg",
      alt: "Chocolate dessert bowl",
      category: "food",
    },
    {
      id: "27",
      src: "/Menu/Dessert/image-2.jpg",
      alt: "Fruit-topped cake",
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
      className="py-20 mb-24 px-4 md:px-8 lg:px-16"
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
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {["all", "food", "interior", "staff"].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white"
                    : "text-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* 📷 Masonry-style Image Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="break-inside-avoid overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
