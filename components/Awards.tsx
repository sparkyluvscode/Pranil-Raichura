"use client";

import { motion } from "framer-motion";
import { awards } from "@/data/awards";

const categoryIcons: Record<string, string> = {
  "Academic": "🎓",
  "Competition": "🏆",
  "Service": "🤝",
  "Research": "🔬",
};

const categoryColors: Record<string, string> = {
  "Academic": "from-blue-500 to-blue-600",
  "Competition": "from-yellow-500 to-yellow-600",
  "Service": "from-green-500 to-green-600",
  "Research": "from-purple-500 to-purple-600",
};

export default function Awards() {
  // Group awards by category
  const groupedAwards = awards.reduce((acc, award) => {
    if (!acc[award.category]) {
      acc[award.category] = [];
    }
    acc[award.category].push(award);
    return acc;
  }, {} as Record<string, typeof awards>);

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
            Select Awards
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedAwards).map(([category, categoryAwards], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{categoryIcons[category]}</span>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                  {category}
                </h3>
                <div className={`flex-1 h-1 bg-gradient-to-r ${categoryColors[category]} rounded-full`}></div>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryAwards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900 flex-1 pr-3">
                        {award.title}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {award.year}
                      </span>
                    </div>
                    {award.description && (
                      <p className="text-sm text-gray-600">{award.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
