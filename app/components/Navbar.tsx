'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const home = () => {
        router.push("/");
    };

    // Animation variants for menu links
    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1 },
        }),
        exit: { opacity: 0, x: -20 },
    };

    return (
        <>
            <motion.nav
                className="w-full fixed top-2 z-50 backdrop-blur-xl bg-white/50 border border-white/30"
                initial="hidden"
                animate="visible"
                variants={menuVariants}
            >
                <div className="mx-auto max-w-full px-6 lg:px-20">
                    <div className="flex h-18 items-center justify-between">

                        {/* Logo */}
                        <div className="flex items-center gap-2 cursor-pointer" onClick={home}>
                            <Image
                                src="/logo/companylogo.png"
                                alt="AADRILA Technologies"
                                width={200}
                                height={200}
                                className="h-10 w-auto"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center font-normal gap-8 text-sm text-gray-600">
                            {["Home", "Industries", "Products", "Blog", "Contact Us", "About Us"].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -2, color: "#3E6EB4", transition: { duration: 0.2 } }}
                                >
                                    <Link href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "")}`} className="focus:text-[#3E6EB4]">
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
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
            </motion.nav>

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
                                    width={100}
                                    height={100}
                                    className="h-8 w-auto"
                                />
                                <button onClick={() => setOpen(false)}>
                                    <HiX size={26} />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col gap-4 text-md font-medium text-gray-800">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "Industries", href: "/industries" },
                                    { name: "Products", href: "/products" },
                                    { name: "Blog", href: "/blog" },
                                    { name: "Contact Us", href: "/contact" },
                                    { name: "About Us", href: "/aboutus" },
                                ].map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={menuVariants}
                                    >
                                        <Link href={link.href} onClick={() => setOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    custom={6}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={menuVariants}
                                >
                                    <Link
                                        href="/demo"
                                        onClick={() => setOpen(false)}
                                        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#3E6EB4] px-8 py-3 text-sm text-center text-white"
                                    >
                                        Get a Demo
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
