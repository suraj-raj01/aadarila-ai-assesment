"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs } from "react-icons/fa";
import TeamSection from "./Teamsection";

export default function AboutSection() {
  return (
    <>
    <section className="relative overflow-hidden bg-[url('/bgimage/about-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-40 mb-20 max-w-md rounded-xl bg-white px-10 py-8 text-center shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-3 text-xl bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
          Meet the Minds Shaping Document Automation.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 -left-30 mb-16 flex max-w-5xl items-center justify-end rounded-r-full bg-white p-4 shadow-md"
      >
        {/* Left text */}
        <div className="hidden md:block w-1/2 pr-6 text-right text-sm text-gray-600">
          To redefine document management with cutting-edge technology that
          ensures accuracy, efficiency, and trust.
        </div>

        {/* Center icon */}
        <div className="flex">
          <div className="flex w-full md:w-1/2 items-center gap-4">
            <span className="h-15 w-1 bg-[#CD6028]" />
            <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
          </div>
          <div className="mx-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
            <Image src='/about/Vision_Icon.png' alt='vission' height={30} width={30}/>
          </div>

          {/* Right title */}
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 -right-160 mb-16 flex max-w-5xl items-center justify-start rounded-l-full bg-white p-4 shadow-md"
      >
        {/* Center icon */}
        <div className="flex">
          <div className="mx-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
             <Image src='/about/Mission_Icon.png' alt='vission' height={30} width={30}/>
          </div>
          <div className="flex w-full md:w-1/2 items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
            <span className="h-15 w-1 bg-[#CD6028]" />
          </div>

          {/* Right title */}
        </div>
        {/* Left text */}
        <div className="hidden pl-5 md:block w-1/2 text-left text-sm text-gray-600">
          To redefine document management with cutting-edge technology that
          ensures accuracy, efficiency, and trust.
        </div>

      </motion.div>

      {/* Mobile text blocks */}
      <div className="mt-10 space-y-6 md:hidden text-center text-sm text-gray-600">
        <p>
          <strong>Vision:</strong> To redefine document management with cutting-edge
          technology that ensures accuracy, efficiency, and trust.
        </p>
        <p>
          <strong>Mission:</strong> To redefine document management with cutting-edge
          technology that ensures accuracy, efficiency, and trust.
        </p>
      </div>
    </section>
    <TeamSection/>
    </>
  );
}
