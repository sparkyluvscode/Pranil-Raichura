"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { researchProjects } from "@/data/research";

export default function ResearchProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Exploring the intersection of AI, game development, and structural engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* TODO: Add project images - Update imagePath in data/research.ts for each project */}
              <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary-200 to-accent-purple/30 flex items-center justify-center relative">
                {(project as any).imagePath ? (
                  <Image src={(project as any).imagePath} alt={project.title} fill className="object-cover" />
                ) : (
                  <span className="text-gray-600 text-sm">
                    {project.id === "rsi" 
                      ? "RSI Program Image - Add to /public/images/rsi-program.jpg"
                      : project.id === "ai-game-development"
                      ? "AI Game Development Image - Add to /public/images/ai-game-dev.jpg"
                      : "Research Project Image - Add to /public/images/ml-engineering.jpg"}
                  </span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {project.years}
                    </span>
                    {project.hoursPerWeek && (
                      <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium">
                        {project.hoursPerWeek}
                      </span>
                    )}
                    {project.organization && (
                      <span className="px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium">
                        {project.organization}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {project.id === "rsi" && (
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
              )}

              {project.id === "ai-game-development" && (
                <>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Mentors:</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.mentors?.map((mentor, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="font-medium text-gray-900">{mentor.name}</div>
                          <div className="text-sm text-gray-600">{mentor.affiliation}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {expandedId === project.id ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Inspiration:</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {project.inspiration}
                      </p>
                      <p className="text-sm text-gray-600">
                        Study conducted at: <span className="font-medium">{project.studyLocation}</span>
                      </p>
                      <button
                        onClick={() => setExpandedId(null)}
                        className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Show Less
                      </button>
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => setExpandedId(project.id)}
                      className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More About Inspiration →
                    </button>
                  )}
                </>
              )}

              {project.id === "ml-structural-engineering" && (
                <>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Mentor:</h4>
                    <div className="bg-white rounded-lg p-3 shadow-sm inline-block">
                      <div className="font-medium text-gray-900">{project.mentor?.name}</div>
                      <div className="text-sm text-gray-600">{project.mentor?.affiliation}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">{project.programDetails}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-primary-200 mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Paper:</h4>
                    <p className="text-gray-900 font-medium mb-2">{project.paperTitle}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <a
                        href={project.preprintLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium underline"
                      >
                        View Preprint →
                      </a>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

