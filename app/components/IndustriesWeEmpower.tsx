"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustriesWeEmpower() {
  return (
    <section className="relative overflow-hidden pb-5  bg-[url('/Industries/circle.png')] bg-no-repeat bg-start bg-contain min-h-screen mt-15">
      
      {/* Dotted decorations */}
      <div className="absolute right-120 top-36 hidden md:block">
        <Image
          src="/Industries/Group-2.png"
          height={120}
          width={120}
          alt=""
        />
      </div>

      <div className="relative z-10 w-full max-w-full mx-auto px-6 md:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative md:top-30 text-center md:text-start"
        >
          <p className="font-semibold mt-3 max-w-2xl text-sm bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
            AI-driven innovation for growth.
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Industries We Empower
          </h2>
        </motion.div>

        {/* Cards wrapper */}
        <div className="relative mt-20 h-auto md:h-120 flex flex-col gap-15 md:block">
          
          {/* Insurance – Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:absolute md:left-20 md:top-60"
          >
            <Card
              variant="insurance"
              image="/Industries/Insurance_Icon.png"
              title="Insurance"
              description="Automate claims processing with accurate document validation."
            />
          </motion.div>

          {/* Lending – Center */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:absolute md:left-1/2 md:top-30 md:-translate-x-1/2"
          >
            <Card
              variant="lending"
              image="/Industries/Lending_Icon.png"
              title="Lending"
              description="Ensure faster loan approvals with fraud detection and instant verification."
            />
          </motion.div>

          {/* Healthcare – Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:absolute md:right-20 md:top-0"
          >
            <Card
              variant="healthcare"
              image="/Industries/Healthcare_Icon.png"
              title="Healthcare"
              description="Streamline patient record management and ensure compliance with HIPAA standards."
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-15 right-0 hidden md:block">
        <Image
          src="/Industries/Group-2-Copy-2.png"
          height={200}
          width={200}
          alt="industries"
          className="h-auto"
        />
      </div>
    </section>
  );
}

function Card({
  image,
  title,
  description,
  variant,
}: {
  image: string;
  title: string;
  description: string;
  variant: "insurance" | "lending" | "healthcare";
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-xl w-full md:w-90 px-6 md:px-15 py-8 md:py-10 flex flex-col items-center justify-center text-center border border-gray-200 shadow-lg bg-white"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl mx-auto">
        <img src={image} alt={title} className="h-8 w-8" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
