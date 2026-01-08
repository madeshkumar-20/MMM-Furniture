"use client";

import { useRef, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const TARGET_TEXT = "Message Us";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 40;
const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function MessageButton({
  onClick,
}: {
  onClick: () => void;
}) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-danger px-5 py-3 font-mono text-white shadow-lg"
    >
      <FiMessageSquare size={20} />
      <span>{text}</span>
    </motion.button>
  );
}
