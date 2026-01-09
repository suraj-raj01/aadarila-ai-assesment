"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const images = [
    "/heroimg/License.png",
    "/heroimg/Invocie.png",
    "/heroimg/Doc.png",
];

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const total = images.length;

    // 🔁 Auto-slide (infinite)
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % total);
        }, 8000);

        return () => clearInterval(interval);
    }, [total]);

    // 🔄 Circular offset calculation
    const getOffset = (index: number) => {
        let offset = index - active;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;
        return offset;
    };

    return (

        <div className="relative w-full h-250 md:h-screen overflow-hidden">
        <section className="absolute inset-0 bg-[url('/bgimage/herobgimage.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="mx-auto mt-10 md:mt-0 w-full px-6 py-20 md:px-12 lg:px-20 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="text-center md:text-left"
                    >
                        <p className="mb-3 text-3xl font-semibold bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
                            AI-Powered
                        </p>

                        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Document Automation <br className="hidden sm:block" />
                            & Fraud Detection
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base md:mx-0">
                            Enhance security, accuracy, and efficiency with our cutting-edge
                            AI solutions for seamless document processing and fraud prevention.
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                            <button className="rounded-full w-full md:w-fit bg-[#3E6EB4] px-8 py-3 text-sm font-medium text-white sm:text-base">
                                Get a Demo
                            </button>
                            <button className="rounded-full w-full md:w-fit bg-[#3E6EB4] px-8 py-3 text-sm font-medium text-white sm:text-base">
                                Explore Solutions
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT CAROUSEL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative h-auto md:h-120 w-full">

                            {/* ================= MOBILE VIEW ================= */}
                            <div className="md:hidden w-full">
                                <div className="relative w-full">
                                    <Image
                                        src={images[active]}
                                        alt="Document"
                                        width={900}
                                        height={900}
                                        className="w-full h-auto rounded-xl"
                                        priority
                                    />

                                    {/* Scan overlay */}
                                    <div className="pointer-events-none top-45 absolute inset-0">
                                        <div
                                            className="absolute inset-0 bg-[url('/heroimg/scanner.png')] opacity-90"
                                            style={{
                                                backgroundSize: "320px 40px",
                                                backgroundRepeat: "no-repeat",
                                                animation: "scan-vertical 8s linear infinite",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
                            <div className="hidden md:block relative h-120 w-full">

                                {images.map((img, index) => {
                                    const offset = getOffset(index);
                                    const isActive = offset === 0;

                                    return (
                                        <div
                                            key={img}
                                            className={clsx(
                                                "absolute top-35 md:top-1/2 left-1/2 transition-all duration-700 ease-in-out",
                                                {
                                                    "z-20 scale-100 opacity-100": isActive,
                                                    "z-10 scale-90 opacity-60 blur-sm": Math.abs(offset) === 1,
                                                    "opacity-0": Math.abs(offset) > 1,
                                                }
                                            )}
                                            style={{
                                                transform: `translate(-50%, -50%) translateX(${offset * 120}px)`,
                                            }}
                                        >
                                            <div className="relative md:overflow-hidden rounded-xl">
                                                <Image
                                                    src={img}
                                                    alt="Document"
                                                    width={400}
                                                    height={420}
                                                    className="rounded-xl h-65 md:h-110 md:w-auto"
                                                    priority={isActive}
                                                />

                                                {isActive && (
                                                    <div className="pointer-events-none md:top-0 absolute inset-0">
                                                        <div
                                                            className="absolute inset-0 bg-[url('/heroimg/scanner.png')] opacity-90"
                                                            style={{
                                                                backgroundSize: "320px 40px",
                                                                backgroundRepeat: "no-repeat",
                                                                animation: "scan-vertical 8s linear infinite",
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </div>
    );
}
