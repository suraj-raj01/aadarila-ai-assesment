"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs } from "react-icons/fa";
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
          className="relative z-10 mx-auto mt-40 mb-20 max-w-md rounded-xl bg-white px-10 py-8 text-center shadow-md sm:px-10 sm:py-12"
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
          {/* Text for mobile */}
          <div className="block md:hidden mb-4 text-center text-sm text-gray-600">
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </div>

          {/* Left text (desktop only) */}
          <div className="hidden md:block w-1/2 pr-6 text-right text-sm text-gray-600">
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </div>

          {/* Center icon + title */}
          <div className="flex items-center gap-4">
            <div className="flex w-full md:w-1/2 items-center gap-4">
              <span className="h-15 w-1 bg-[#CD6028]" />
              <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
            </div>
            <div className="mx-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Vision_Icon.png" alt="Vision" height={30} width={30} />
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative md:left-100 rounded-xl z-10 mb-16 flex flex-col  items-center md:rounded-l-full bg-white p-4 shadow-md md:flex-row md:justify-start md:max-w-5xl md:mx-auto"
        >
          {/* Text for mobile */}
          <div className="block md:hidden mb-4 text-center text-sm text-gray-600">
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </div>

          {/* Center icon + title */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="mx-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#3E6EB4] text-white shadow-lg">
              <Image src="/about/Mission_Icon.png" alt="Mission" height={30} width={30} />
            </div>
            <div className="flex w-full md:w-1/2 items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
              <span className="h-15 w-1 bg-[#CD6028]" />
            </div>
          </div>

          {/* Left text (desktop only) */}
          <div className="hidden md:block pl-5 w-1/2 text-left text-sm text-gray-600">
            To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.
          </div>
        </motion.div>
      </section>

      <TeamSection />
    </>
  );
}
