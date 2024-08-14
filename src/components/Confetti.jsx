import React from 'react';
import { motion } from 'framer-motion';

const Confetti = ({ isActive }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 50 }).map((_, index) => (
    <motion.div
      key={index}
      className="absolute w-2 h-2 bg-blue-500 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: -10,
        opacity: 1,
      }}
      animate={{
        y: window.innerHeight + 10,
        opacity: 0,
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{
        left: `${Math.random() * 100}%`,
        backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)],
      }}
    />
  ));

  return <div className="fixed inset-0 pointer-events-none">{confettiPieces}</div>;
};

export default Confetti;