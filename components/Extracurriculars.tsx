"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { extracurriculars, Extracurricular } from "@/data/extracurriculars";

const categories = ["All", "Research", "Sports", "Service", "Tech", "Music", "Leadership"] as const;
type Category = typeof categories[number];

export default function Extracurriculars() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExtracurriculars =
    selectedCategory === "All"
      ? extracurriculars
      : extracurriculars.filter((ec) => ec.category === selectedCategory);

  const categoryColors: Record<string, string> = {
    Research: "bg-purple-100 text-purple-700 border-purple-300",
    Sports: "bg-green-100 text-green-700 border-green-300",
    Service: "bg-blue-100 text-blue-700 border-blue-300",
    Tech: "bg-indigo-100 text-indigo-700 border-indigo-300",
    Music: "bg-pink-100 text-pink-700 border-pink-300",
    Leadership: "bg-yellow-100 text-yellow-700 border-yellow-300",
  };

  return (
    <section id="extracurriculars" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Extracurriculars & Leadership
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExtracurriculars.map((ec, index) => (
            <motion.div
              key={ec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 cursor-pointer overflow-hidden"
              onClick={() => setExpandedId(expandedId === ec.id ? null : ec.id)}
            >
              {/* TODO: Add extracurricular images - Add imagePath to each item in data/extracurriculars.ts */}
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                {ec.imagePath ? (
                  <Image src={ec.imagePath} alt={ec.title} fill className="object-cover" />
                ) : (
                  <span className="text-gray-500 text-xs text-center px-2">{ec.title} Image</span>
                )}
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{ec.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    categoryColors[ec.category] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {ec.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-sm text-gray-600">{ec.years}</span>
                {ec.hoursPerWeek && (
                  <span className="text-sm text-gray-500">• {ec.hoursPerWeek}</span>
                )}
                {ec.leadership && (
                  <span className="text-sm font-semibold text-primary-600">• {ec.leadership}</span>
                )}
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {ec.description}
              </p>

              {expandedId === ec.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  {ec.achievements && ec.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {ec.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {ec.links && ec.links.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Links:</h4>
                      <div className="space-y-1">
                        {ec.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 text-sm block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="text-primary-600 text-sm font-medium mt-4">
                {expandedId === ec.id ? "Click to collapse" : "Click to expand"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

