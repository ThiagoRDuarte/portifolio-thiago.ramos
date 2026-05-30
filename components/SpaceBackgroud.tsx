'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return Math.round((x - Math.floor(x)) * 10000) / 10000;
}

export default function SpaceBackground() {
  const stars = useMemo(() =>
    [...Array(150)].map((_, i) => ({
      width:    Math.round(seededRandom(i * 3) * 3 * 100) / 100,
      height:   Math.round(seededRandom(i * 3 + 1) * 3 * 100) / 100,
      top:      Math.round(seededRandom(i * 3 + 2) * 100 * 100) / 100,
      left:     Math.round(seededRandom(i * 7) * 100 * 100) / 100,
      duration: Math.round((seededRandom(i * 5) * 3 + 2) * 10) / 10,
      delay:    Math.round(seededRandom(i * 11) * 5 * 10) / 10,
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width:  `${star.width}px`,
            height: `${star.height}px`,
            top:    `${star.top}%`,
            left:   `${star.left}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            delay:    star.delay,
            repeat:   Infinity,
          }}
        />
      ))}
    </div>
  );
}