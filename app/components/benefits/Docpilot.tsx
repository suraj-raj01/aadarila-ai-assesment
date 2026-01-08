"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Docpilot() {
  return (
    <section className="relative overflow-hidden bg-[url('/Industries/circle.png')] bg-no-repeat bg-left bg-contain px-4 sm:px-6 md:px-20 py-20 min-h-145">
      {/* Dotted decoration */}
      <div className="absolute right-0 top-5 md:right-30">
        <Image
          src="/Industries/Group-2.png"
          height={120}
          width={120}
          alt=""
        />
      </div>

      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            className="flex order-1 md:order-2 justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/products/Docpilot.png"
                alt="DocSim Product"
                width={520}
                height={520}
                className="h-100 w-full max-w-md md:max-w-lg"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="order-1 md:order-2 md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] px-5 py-2 text-sm font-medium text-white">
              Docpilot
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Streamline Document Workflows with Automation
            </h3>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Features:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• OCR and NLP-based data extraction.</li>
                <li>• Handles unstructured documents across industries.</li>
                <li>• Validates fields using external data sources.</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Benefits:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Process 10,000+ documents in minutes</li>
                <li>• Achieve 99% data accuracy with AI-driven validation.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-start justify-center">
              <motion.button
                className="rounded-full bg-[#3E6EB4] px-6 py-3 text-sm font-medium text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="rounded-full bg-[#3E6EB4] px-6 py-3 text-sm font-medium text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
