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
      bio: "Visionary leader with a decade of innovation.",
      image:
        "https://images.unsplash.com/photo-1628890928171-f934d88d43c0?q=80&w=400",
    },
    {
      id: "2",
      name: "Another Leader",
      role: "Co-Founder",
      bio: "Driving strategy with passion and focus.",
      image:
        "https://images.unsplash.com/photo-1628890928171-f934d88d43c0?q=80&w=400",
    },
  ];

  return (
    <section
      className="h-[66vh] px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 flex flex-col items-center justify-center"
      id="leadership"
    >
      {/* Section Header (Compact) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          Meet Our Leadership
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Visionaries guiding us forward.
        </p>
      </motion.div>

      {/* Member Cards */}
      <div className="flex gap-4 mt-2">
        {team.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="w-32 md:w-72 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <p className="text-white text-xs">{member.bio}</p>
              </div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
