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
                src="/About/hero.jpg"
                alt="Restaurant interior"
                className="w-full h-[600px] object-cover"
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
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Our Beginning
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">
                In 2021, "Most. Shapla Haque" took the bold step of starting
                Azure Cuisine Restaurant. With a vision to bring people together
                through delicious food and warm hospitality, she embarked on a
                journey filled with challenges and opportunities. From humble
                beginnings, the restaurant has become a place where memories are
                created, and flavors come to life.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Our Philosophy
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">
                Azure Cuisine is Multi-Cuisine Restaurant, we believe in
                offering a culinary journey that transcends boundaries. Our
                philosophy is rooted in three core values: Quality: We are
                committed to using the finest and freshest ingredients to create
                dishes that tantalize your taste buds and nourish your soul.
                Diversity: Celebrating the rich flavors and traditions of
                various cuisines, we bring you an eclectic menu that caters to
                every palate. Experience: Dining is not just about food; it’s
                about creating memories. We strive to provide a warm ambiance,
                exceptional service, and a delightful experience for every
                guest. we don’t just serve meals; we craft experiences that
                bring people together through the love of food.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Our Team</h3>
              <p className="text-gray-700 tex-sm dark:text-gray-300">
                Azure Cuisine Restaurant , we take pride in our dedicated and
                passionate team who work tirelessly to provide you with an
                exceptional dining experience. Chefs: Our talented chefs bring
                creativity and expertise to every dish, ensuring high-quality
                meals with authentic flavors. Service Staff: Our friendly and
                professional service team is here to make your visit memorable,
                offering attentive care and a warm atmosphere. Management: Led
                by experienced leaders, our management team ensures smooth
                operations and customer satisfaction at every level. Together,
                we are committed to excellence and making every visit
                unforgettable for our guests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
