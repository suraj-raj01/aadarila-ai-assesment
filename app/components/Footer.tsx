"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#3E6EB4] py-15 text-white relative z-0 overflow-hidden font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-full px-6 md:px-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-4 text-sm"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            © 2025 by Adrila Technologies Private Limited CIN U74999UP2017PTC094688
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-2xl text-xs text-blue-100 leading-relaxed"
          >
            Registered Address: B-1127/K, Sector-K Aliganj, Lucknow, Uttar Pradesh,
            India, 226024
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
