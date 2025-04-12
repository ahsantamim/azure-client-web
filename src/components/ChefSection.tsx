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
      name: "Most. Zannatul Hoque",
      role: "Founder & Owner of Azure Cuisine",
      bio: "Visionary leader with a decade of innovation.",
      image: "/Team/owner.jpg",
    },
    {
      id: "2",
      name: "Tofazzal Hossain Rana",
      role: "Cordinator & In-Charge",
      bio: "Driving strategy with passion and focus.",
      image: "/Team/cordinator-&-incharge.jpg",
    },
  ];

  return (
    <section
      className="min-h-screen px-4 md:px-8 lg:px-16 py-10 bg-white dark:bg-gray-900 flex flex-col items-center"
      id="leadership"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Meet Our Leadership
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-2">
          Visionaries guiding us forward.
        </p>
      </motion.div>

      {/* Team Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {team.map((member) => {
          const isOwner = member.role.toLowerCase().includes("owner");

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`${
                isOwner ? "w-[350px] h-[500px]" : "w-[260px] h-[380px]"
              } bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl relative transition-all duration-300`}
            >
              <div className="relative w-full h-[70%] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full scale-125 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <div className="h-[30%] flex flex-col justify-center items-center px-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
