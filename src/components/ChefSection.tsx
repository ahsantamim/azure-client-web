import React from "react";
import { motion } from "framer-motion";

interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamSection = () => {
  const team: Member[] = [
    {
      id: "1",
      name: "Sabbir Rahman",
      role: "Founder & Owner",
      bio: "Sabbir leads with a vision of innovation and excellence. With over a decade of entrepreneurial experience, he brings purpose and strategy to every decision.",
      image:
        "https://images.unsplash.com/photo-1628890928171-f934d88d43c0?q=80&w=400",
    },
  ];

  return (
    <section
      className=" py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900"
      id="leadership"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white ">
            Meet Our Leadership
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            The minds behind the mission. Meet the leaders steering us forward
            with innovation, strategy, and heart.
          </p>
        </motion.div>

        {/* Centered Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            {/* Image with gradient overlay */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={team[0].image}
                alt={team[0].name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm md:text-base">{team[0].bio}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {team[0].name}
              </h3>
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-4">
                {team[0].role}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-sm"
              >
                Contact {team[0].name.split(" ")[0]}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
