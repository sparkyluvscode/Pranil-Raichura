"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { academicStats, currentClasses, favoriteCourses } from "@/data/academic";

export default function AcademicAchievements() {
  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200"
          >
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {academicStats.weightedGPA}
            </div>
            <div className="text-sm text-gray-600">Acad. W GPA</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent-purple/30"
          >
            <div className="text-3xl font-bold text-accent-purple mb-2">
              {academicStats.totalWeightedGPA}
            </div>
            <div className="text-sm text-gray-600">Total W GPA</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent-orange/30"
          >
            <div className="text-3xl font-bold text-accent-orange mb-2">
              {academicStats.gpa10to12}
            </div>
            <div className="text-sm text-gray-600">10-12 W GPA</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200"
          >
            <div className="text-3xl font-bold text-green-600 mb-2">
              {academicStats.unweightedGPA}
            </div>
            <div className="text-sm text-gray-600">Unweighted GPA</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-primary-600 mb-4">Fall Semester</h4>
              <ul className="space-y-2">
                {currentClasses.fall.map((className, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {className}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-accent-purple mb-4">Spring Semester</h4>
              <ul className="space-y-2">
                {currentClasses.spring.map((className, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-accent-purple rounded-full mr-3"></span>
                    {className}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Favorite Courses</h3>
          <div className="space-y-6">
            {favoriteCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary-600 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* TODO: Add course images - Update paths in data/academic.ts favoriteCourses array */}
                  <div className="w-full md:w-48 h-32 md:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0 relative">
                    {(course as any).imagePath ? (
                      <Image src={(course as any).imagePath} alt={course.name} fill className="object-cover" />
                    ) : (
                      <span className="text-gray-600 text-xs text-center px-2">{course.name} Image</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{course.reason}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

