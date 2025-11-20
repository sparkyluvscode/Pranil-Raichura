"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { awards, Award } from "@/data/awards";

const awardCategories = ["All", "Academic", "Competition", "Service", "Research"] as const;
type AwardCategory = typeof awardCategories[number];

export default function Awards() {
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory>("All");

  const filteredAwards =
    selectedCategory === "All"
      ? awards
      : awards.filter((award) => award.category === selectedCategory);

  const categoryIcons: Record<string, string> = {
    Academic: "🎓",
    Competition: "🏆",
    Service: "🤝",
    Research: "🔬",
  };

  const categoryColors: Record<string, string> = {
    Academic: "from-blue-500 to-blue-600",
    Competition: "from-yellow-500 to-yellow-600",
    Service: "from-green-500 to-green-600",
    Research: "from-purple-500 to-purple-600",
  };

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {awardCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category !== "All" && <span>{categoryIcons[category]}</span>}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-200 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${categoryColors[award.category]} opacity-10 rounded-bl-full`}
              />
              <div className="relative z-10">
                {/* TODO: Add award images - Add imagePath to each item in data/awards.ts */}
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  {award.imagePath ? (
                    <Image src={award.imagePath} alt={award.title} fill className="object-cover" />
                  ) : (
                    <span className="text-gray-500 text-xs text-center px-2">{award.title} Image</span>
                  )}
                </div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{categoryIcons[award.category]}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                {award.description && (
                  <p className="text-sm text-gray-600 mb-3">{award.description}</p>
                )}
                {award.link && (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center"
                  >
                    View Details →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAwards.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No awards found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

