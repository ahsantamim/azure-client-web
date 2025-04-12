"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: string;
  image: string;
  category: string;
}

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("new");
  const sectionRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    {
      id: "1",
      image: "/Menu/New/image-1.jpg",
      category: "new",
    },
    {
      id: "2",
      image: "/Menu/New/image-2.jpg",
      category: "new",
    },
    {
      id: "3",
      image: "/Menu/New/image-3.jpg",
      category: "new",
    },
    {
      id: "4",
      image: "/Menu/New/image-4.jpg",
      category: "new",
    },
    {
      id: "5",
      image: "/Menu/New/image-5.jpg",
      category: "new",
    },
    {
      id: "6",
      image: "/Menu/New/image-6.jpg",
      category: "new",
    },
    { id: "7", image: "/Menu/Appetiser/image-1.jpg", category: "appetizer" },
    {
      id: "8",
      image: "/Menu/Appetiser/image-2.jpg",
      category: "appetizer",
    },
    {
      id: "9",
      image: "/Menu/Appetiser/image-3.jpg",
      category: "appetizer",
    },
    {
      id: "10",
      image: "/Menu/Appetiser/image-4.jpg",
      category: "appetizer",
    },
    {
      id: "11",
      image: "/Menu/Appetiser/image-5.jpg",
      category: "appetizer",
    },
    {
      id: "12",
      image: "/Menu/Main/image-1.jpg",
      category: "main",
    },
    {
      id: "13",
      image: "/Menu/Main/image-2.jpg",
      category: "main",
    },
    {
      id: "14",
      image: "/Menu/Main/image-3.jpg",
      category: "main",
    },
    {
      id: "15",
      image: "/Menu/Main/image-4.jpg",
      category: "main",
    },
    {
      id: "16",
      image: "/Menu/Dessert/image-1.jpg",
      category: "dessert",
    },
    {
      id: "17",
      image: "/Menu/Dessert/image-2.jpg",
      category: "dessert",
    },
    {
      id: "18",
      image: "/Menu/Dessert/image-3.jpg",
      category: "dessert",
    },
    {
      id: "19",
      image: "/Menu/Dessert/image-4.jpg",
      category: "dessert",
    },
    {
      id: "20",
      image: "/Menu/Dessert/image-5.jpg",
      category: "dessert",
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-tr from-white to-blue-100 dark:from-gray-900 dark:to-gray-800"
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
            Only images and add to order button, nothing else!
          </p>
        </motion.div>

        <Tabs defaultValue="new" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-white">
              <TabsTrigger
                value="new"
                onClick={() => setActiveCategory("new")}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white capitalize"
              >
                New
              </TabsTrigger>
              <TabsTrigger
                value="appetizer"
                onClick={() => setActiveCategory("appetizer")}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white capitalize"
              >
                Appetizer
              </TabsTrigger>
              <TabsTrigger
                value="main"
                onClick={() => setActiveCategory("main")}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white capitalize"
              >
                Main
              </TabsTrigger>
              <TabsTrigger
                value="dessert"
                onClick={() => setActiveCategory("dessert")}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white capitalize"
              >
                Dessert
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="new" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {menuItems
                .filter((item) => item.category === "new")
                .map((item, index) => (
                  <MenuItemCard key={item.id} item={item} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="appetizer" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {menuItems
                .filter((item) => item.category === "appetizer")
                .map((item, index) => (
                  <MenuItemCard key={item.id} item={item} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="main" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {menuItems
                .filter((item) => item.category === "main")
                .map((item, index) => (
                  <MenuItemCard key={item.id} item={item} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="dessert" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {menuItems
                .filter((item) => item.category === "dessert")
                .map((item, index) => (
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt="menu item"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuSection;
