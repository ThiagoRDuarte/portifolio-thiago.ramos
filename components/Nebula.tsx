'use client';

import { motion } from 'framer-motion';

export default function Nebula() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-20"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-20"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[180px] opacity-10"
      />
    </div>
  );
}