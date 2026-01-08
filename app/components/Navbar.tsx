"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full fixed top-2 z-50 backdrop-blur-xl bg-white/50 border border-white/30">
                <div className="mx-auto max-w-full px-6 lg:px-20">
                    <div className="flex h-18 items-center justify-between">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo/companylogo.png"
                                alt="AADRILA Technologies"
                                width={100}
                                height={100}
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center font-semibold gap-8 text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#3E6EB4]">Home</Link>
                            <Link href="/industries" className="hover:text-[#3E6EB4]">Industries</Link>
                            <Link href="/products" className="hover:text-[#3E6EB4]">Products</Link>
                            <Link href="/blog" className="hover:text-[#3E6EB4]">Blog</Link>
                            <Link href="/contact" className="hover:text-[#3E6EB4]">Contact Us</Link>
                            <Link href="/about" className="hover:text-[#3E6EB4]">About Us</Link>
                        </div>

                        {/* CTA + Mobile Menu Button */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/demo"
                                className="hidden md:inline-block rounded-full bg-[#3E6EB4] px-6 py-3 text-sm text-white"
                            >
                                Get a Demo
                            </Link>

                            {/* Mobile Menu Icon */}
                            <button
                                onClick={() => setOpen(true)}
                                className="md:hidden text-gray-700"
                            >
                                <HiOutlineMenuAlt3 size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/40"
                            onClick={() => setOpen(false)}
                        />

                        {/* Slide Menu */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 260, damping: 30 }}
                            className="fixed left-0 top-0 z-50 h-screen w-[90%] bg-white shadow-xl p-8"
                        >
                            {/* Close Button */}
                            <div className="flex justify-between items-center mb-10">
                                <Image
                                    src="/logo/companylogo.png"
                                    alt="AADRILA Technologies"
                                    width={90}
                                    height={90}
                                />
                                <button onClick={() => setOpen(false)}>
                                    <HiX size={26} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                                <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
                                <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
                                <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                                <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
                                <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>

                                <Link
                                    href="/demo"
                                    onClick={() => setOpen(false)}
                                    className="mt-6 inline-flex w-fit rounded-full bg-[#3E6EB4] px-8 py-3 text-sm text-white"
                                >
                                    Get a Demo
                                </Link>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
