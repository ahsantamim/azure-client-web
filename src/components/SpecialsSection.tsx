import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Special {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

const SpecialsSection = () => {
  const specialDishes: Special[] = [
    {
      id: "1",
      name: "Royal Biryani Feast",
      description:
        "Fragrant basmati rice layered with tender lamb, aromatic spices, and caramelized onions.",
      price: "৳950",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
      tags: ["Chef's Special", "Spicy"],
    },
    {
      id: "2",
      name: "Maharaja Thali",
      description:
        "Royal platter with dal makhani, paneer butter masala, butter chicken, naan, and dessert.",
      price: "৳1200",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
      tags: ["Signature", "Feast"],
    },
    {
      id: "3",
      name: "Tandoori Mixed Grill",
      description:
        "Sizzling platter of chicken tikka, seekh kebab, fish tikka, and tandoori prawns.",
      price: "৳1100",
      image:
        "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&q=80",
      tags: ["Grilled", "Protein"],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 " id="specials">
      <div className="container  mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white ">
            Chef's Special Creations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Experience our culinary masterpieces crafted with premium
            ingredients and authentic flavors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {specialDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {dish.name}
                      </h3>
                      <p className="text-orange-300 font-medium">
                        {dish.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {dish.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-sm"
                  >
                    Add to order
                  </motion.button>
                  <button className="text-sm text-orange-600 dark:text-orange-400 hover:underline">
                    View details
                  </button>
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                  <span className="text-orange-600 font-bold">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-gray-800 rounded-full font-medium transition-colors duration-300 text-sm"
          >
            Explore Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialsSection;
