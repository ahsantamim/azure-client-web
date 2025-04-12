"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  spiceLevel: "mild" | "medium" | "hot";
  isVegetarian: boolean;
}

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Butter Chicken",
      description:
        "Tender chicken cooked in a rich, creamy tomato sauce with aromatic spices.",
      price: "৳650",
      category: "main",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
      spiceLevel: "medium",
      isVegetarian: false,
    },
    {
      id: "2",
      name: "Paneer Tikka",
      description:
        "Chunks of paneer marinated in spices and grilled to perfection.",
      price: "৳450",
      category: "appetizer",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
      spiceLevel: "mild",
      isVegetarian: true,
    },
    {
      id: "3",
      name: "Biryani",
      description:
        "Fragrant basmati rice cooked with tender meat, aromatic spices, and herbs.",
      price: "৳750",
      category: "main",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80",
      spiceLevel: "medium",
      isVegetarian: false,
    },
    {
      id: "5",
      name: "Samosa",
      description:
        "Crispy pastry filled with spiced potatoes, peas, and sometimes meat.",
      price: "৳150",
      category: "appetizer",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
      spiceLevel: "medium",
      isVegetarian: true,
    },
    {
      id: "6",
      name: "Chicken Tikka Masala",
      description: "Grilled chicken chunks in a creamy, spiced tomato sauce.",
      price: "৳680",
      category: "main",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
      spiceLevel: "hot",
      isVegetarian: false,
    },
    {
      id: "8",
      name: "Tandoori Chicken",
      description:
        "Chicken marinated in yogurt and spices, cooked in a tandoor oven.",
      price: "৳580",
      category: "main",
      image:
        "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&q=80",
      spiceLevel: "medium",
      isVegetarian: false,
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16  bg-gradient-to-tr from-white to-blue-100 dark:from-gray-900 dark:to-gray-800"
      id="menu"
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
            Our Delicious Menu
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our authentic Indian cuisine, prepared with traditional
            recipes and the finest ingredients.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-white ">
              {["all", "appetizer", "main", "dessert"].map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white capitalize"
                >
                  {cat === "all"
                    ? "All"
                    : cat.charAt(0).toUpperCase() +
                      cat.slice(1) +
                      (cat !== "main" ? "s" : " Course")}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
  const getSpiceLevelColor = (level: string) => {
    switch (level) {
      case "mild":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "medium":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "hot":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-white flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Badge className={getSpiceLevelColor(item.spiceLevel)}>
              {item.spiceLevel.charAt(0).toUpperCase() +
                item.spiceLevel.slice(1)}
            </Badge>
            {item.isVegetarian && (
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                Veg
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4 flex flex-col justify-between flex-grow">
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                {item.price}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
          <div className="flex ">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-red-600 hover:bg-orange-700 text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-sm"
            >
              Add to order
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MenuSection;
