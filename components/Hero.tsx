"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { academicStats } from "@/data/academic";

function AnimatedCounter({ value, decimals = 2, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-purple/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-accent-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary-100"
            >
              {/* TODO: Replace with your profile picture */}
              {/* Add your image to /public/profile-picture.jpg and uncomment below */}
              {/* <Image 
                src="/profile-picture.jpg" 
                alt="Pranil Raichura" 
                fill 
                className="object-cover"
              /> */}
              <div className="w-full h-full bg-gradient-to-br from-primary-200 via-accent-purple/30 to-accent-orange/20 flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">Profile Picture</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-purple bg-clip-text text-transparent mb-4"
          >
            Pranil Raichura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 font-medium"
          >
            Junior at Granite Bay High School
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 mb-16 max-w-2xl mx-auto"
          >
            Applying to Research Science Institute @ MIT
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-3">
              <AnimatedCounter value={academicStats.weightedGPA} />
            </div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Weighted GPA</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8, rotate: -1 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-purple to-purple-400 bg-clip-text text-transparent mb-3">
              {academicStats.classRank}/{academicStats.classSize}
            </div>
            <div className="text-base md:text-lg text-gray-600 font-medium">Class Rank</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8, rotate: 1 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-orange to-orange-400 bg-clip-text text-transparent mb-3">
              <AnimatedCounter value={academicStats.gpa10to12} />
            </div>
            <div className="text-base md:text-lg text-gray-600 font-medium">10-12 W GPA</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

