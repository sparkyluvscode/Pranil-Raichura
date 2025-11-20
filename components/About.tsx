"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Bit More About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            {/* TODO: Add service image - Place image in /public/images/service.jpg */}
            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center relative">
              {/* Uncomment the line below when you add /public/images/service.jpg */}
              {/* <Image src="/images/service.jpg" alt="Service" fill className="object-cover" /> */}
              <span className="text-gray-600 text-sm">Service Image - Add to /public/images/service.jpg</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              What Service Means to Me
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.about.service}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-accent-purple/10 to-accent-purple/20 rounded-2xl p-8 shadow-lg overflow-hidden"
          >
            {/* TODO: Add technology image - Place image in /public/images/technology.jpg */}
            <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-accent-purple/20 to-accent-purple/30 flex items-center justify-center relative">
              {/* Uncomment the line below when you add /public/images/technology.jpg */}
              {/* <Image src="/images/technology.jpg" alt="Technology" fill className="object-cover" /> */}
              <span className="text-gray-600 text-sm">Technology Image - Add to /public/images/technology.jpg</span>
            </div>
            <h3 className="text-2xl font-bold text-accent-purple mb-4">
              Passion for Technology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {personalInfo.about.techPassion}
            </p>
            <p className="text-gray-700 leading-relaxed">
              My interest in tech really spiked when Open AI&apos;s ChatGPT appeared. I began thinking about how AI could help with cybersecurity and threat detection, how AI chatbots serve as therapists and converse with people about their mental health, or how AI can incorporate calculus rather than algebraic algorithms, so AI could be better positioned to learn and understand how our world works similar to how humans do through a cause and effect understanding.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            My Main Goal
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {personalInfo.about.goals}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {personalInfo.hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg p-4 shadow-md border border-gray-200 text-center"
              >
                <p className="text-gray-700">{hobby}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

