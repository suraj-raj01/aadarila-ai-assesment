"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsSection() {
    const blogs = [
        {
            title: "How AI is Revolutionizing Document Management for Enterprises",
            date: "July 2, 2023",
            desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
        },
        {
            title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
            date: "July 4, 2023",
            desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
        },
        {
            title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
            date: "July 8, 2023",
            desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-20">
            {/* dotted decorations */}
            <div className="absolute -left-60 md:left-10 top-40">
                <Image
                    src='/Industries/Group-2.png'
                    height={150}
                    width={150}
                    alt=""
                    className="h-auto w-auto"
                />
            </div>

            <div className="absolute -right-60 md:-left-20 bottom-10">
                <Image
                    src='/Industries/Group-2-Copy-2.png'
                    height={200}
                    width={200}
                    alt=""
                    className="h-auto w-auto"
                />
            </div>

            <div className="absolute -right-50 md:right-0 top-50">
                <Image
                    src='/Industries/Group-2-Copy-2.png'
                    height={200}
                    width={200}
                    alt=""
                    className="h-auto w-auto"
                />
            </div>

            <div className="mx-auto max-w-full px-6 md:px-20">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Blogs</h2>
                    <p className="mx-auto font-semibold mt-3 max-w-2xl text-md bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard.
                    </p>
                </motion.div>

                {/* Blog Cards */}
                <div className="relative grid grid-cols-1 z-2 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-15">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <BlogCard blog={blog} />
                        </motion.div>
                    ))}
                </div>

                {/* Pagination arrows */}
                <div className="mt-12 flex justify-center gap-4">
                    <button disabled className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3E6EB4] text-white">
                        ←
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3E6EB4] text-white">
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}

function BlogCard({ blog }: { blog: any }) {
    return (
        <div className="relative rounded-xl bg-white p-5 shadow-sm border border-gray-200 transition hover:shadow-lg duration-300">
            <h3 className="text-base font-semibold leading-snug text-gray-900">
                {blog.title}
            </h3>

            <p className="mt-2 text-xs font-medium text-[#3E6EB4]">{blog.date}</p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-4">
                {blog.desc}
            </p>
            <div className="-m-10 -z-1 relative top-1 h-25 rounded-xl bg-linear-to-r from-purple-200 to-blue-50" />
        </div>
    );
}
