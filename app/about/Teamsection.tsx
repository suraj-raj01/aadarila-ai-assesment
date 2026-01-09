"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const team = [
    {
        name: "John Carter",
        role: "Product Designer",
        img: "/team/Member2.png",
        desc: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",

    },
    {
        name: "Mansi Shukla",
        role: "CEO FutureSphere",
        img: "/team/Member3.png",
        desc: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
    },
    {
        name: "Alex Brown",
        role: "CTO",
        img: "/team/Member1.png",
        desc: "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
    },
];

export default function TeamSection() {
    const [index, setIndex] = useState(1);

    const prev = () => setIndex((i) => (i === 0 ? team.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === team.length - 1 ? 0 : i + 1));

    const center = team[index];
    const left = team[(index - 1 + team.length) % team.length];
    const right = team[(index + 1) % team.length];

    return (
        <section className="relative overflow-hidden bg-[url('/Industries/circle.png')] bg-no-repeat bg-left bg-contain min-h-175">

            <div className="absolute right-10 top-40">
                <Image
                    src='/Industries/Group-2.png'
                    height={120}
                    width={120}
                    alt=""
                />
            </div>

            <div className="absolute -left-20 bottom-0">
                <Image
                    src='/Industries/Group-2-Copy-2.png'
                    height={200}
                    width={200}
                    alt=""
                />
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mx-auto mb-14 max-w-3xl text-center"
            >
                <h2 className="text-3xl font-bold text-gray-900">Meet our team</h2>
                <p className="mt-3 text-xl bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
                    Meet our passionate and talented
                    team, committed to delivering exceptional results, driving innovation,
                    and transforming your vision into reality.
                </p>
            </motion.div>

            {/* Navigation */}
            <div className="mb-8 flex justify-center gap-3">
                <button
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#3E6EB4] text-white shadow"
                >
                    <FaChevronLeft size={14} />
                </button>
                <button
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#3E6EB4] text-white shadow"
                >
                    <FaChevronRight size={14} />
                </button>
            </div>

            {/* Avatars */}
            <div className="relative mx-auto mb-16 flex md:max-w-3xl items-center justify-center gap-10">
                <motion.img
                    key={left.name}
                    src={left.img}
                    className="hidden h-16 w-16 rounded-full object-cover opacity-50 md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                />

                <AnimatePresence mode="wait">
                    <motion.img
                        key={center.name}
                        src={center.img}
                        className="h-38 w-38 rounded-full object-cover ring-4 ring-[#CD6028]"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>

                <motion.img
                    key={right.name}
                    src={right.img}
                    className="hidden h-16 w-16 rounded-full object-cover opacity-50 md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                />
            </div>

            {/* Info Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={center.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5 }}
                    className="relative mx-auto max-w-2xl rounded-xl bg-[#3E6EB4] px-8 py-10 text-center text-white"
                >
                    <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 bg-[#3E6EB4]" />

                    <h3 className="text-xl font-semibold uppercase">
                        {center.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#CD6028]">{center.role}</p>

                    {center.desc && (
                        <p className="mt-4 text-sm leading-relaxed text-blue-100">
                            {center.desc}
                        </p>
                    )}
                </motion.div>
            </AnimatePresence>

        </section>
    );
}
