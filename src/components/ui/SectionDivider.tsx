"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px z-50 pointer-events-none">
      {/* Base subtle gradient line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />
      
      {/* Moving scanner glow */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1.5px]"
        animate={{ left: ['-100%', '200%'] }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
    </div>
  );
}
