"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TeamSection from "./Teamsection";

export default function AboutSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url('/bgimage/about-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto mt-30 mb-20 max-w-md rounded-xl bg-white px-10 py-8 text-center shadow-md sm:px-10 sm:py-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h1>
          <p className="mt-3 text-xl bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent sm:text-2xl">
            Meet the Minds Shaping Document Automation.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 md:right-100 rounded-lg mb-16 flex flex-col items-center md:rounded-r-full bg-white p-4 shadow-md md:flex-row md:justify-end md:max-w-5xl md:mx-auto"
        >
          {/* ===== MOBILE VIEW ONLY ===== */}
          <div className="flex flex-col items-center md:hidden">
            {/* Image */}
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Vision_Icon.png" alt="Vision" height={30} width={30} />
            </div>

            {/* Title */}
            <div className="mb-2 flex items-center gap-3">
              {/* <span className="h-15 w-1 bg-[#CD6028]" /> */}
              <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
            </div>

            {/* Description */}
            <p className="text-center text-sm text-gray-600">
              To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
            </p>
          </div>

          {/* ===== DESKTOP VIEW ONLY (UNCHANGED) ===== */}
          <div className="hidden md:flex items-center gap-2 w-full justify-end">
            {/* Left text */}
            <div className="w-1/2 pr-3 text-right text-sm text-gray-600">
              To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
            </div>

            {/* Title */}
            <div className="flex items-center gap-4">
              <span className="h-15 w-1 bg-[#CD6028]" />
              <h3 className="text-lg font-bold p-2 text-gray-900">Our <br /> Vision</h3>
            </div>

            {/* Icon */}
            <div className="mx-0 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Vision_Icon.png" alt="Vision" height={30} width={30} />
            </div>
          </div>
        </motion.div>


        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 md:left-100 rounded-lg mb-16 flex flex-col items-center md:rounded-l-full bg-white p-4 shadow-md md:flex-row md:justify-end md:max-w-5xl md:mx-auto"
        >
          {/* ===== MOBILE VIEW ONLY ===== */}
          <div className="flex flex-col items-center md:hidden">
            {/* Image */}
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Mission_Icon.png" alt="Vision" height={30} width={30} />
            </div>

            {/* Title */}
            <div className="mb-2 flex items-center gap-3">
              {/* <span className="h-15 w-1 bg-[#CD6028]" /> */}
              <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
            </div>

            {/* Description */}
            <p className="text-center text-sm text-gray-600">
              To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
            </p>
          </div>

          {/* ===== DESKTOP VIEW ONLY (UNCHANGED) ===== */}
          <div className="hidden md:flex items-center gap-2 w-full justify-start">
            {/* Icon */}
            <div className="mx-0 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Vision_Icon.png" alt="Vision" height={30} width={30} />
            </div>
            {/* Title */}
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold p-2 text-gray-900">Our <br /> Mission</h3>
              <span className="h-15 w-1 bg-[#CD6028]" />
            </div>
            {/* Left text */}
            <div className="w-1/2 pl-3 text-left text-sm text-gray-600">
              To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
            </div>


          </div>
        </motion.div>
      </section>

      <TeamSection />
    </>
  );
}
