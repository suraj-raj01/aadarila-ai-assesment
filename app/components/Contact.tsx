"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= CONTACT SECTION ================= */
export default function ContactSection() {
  return (
    <section className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-full px-6 md:px-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 relative">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>

            <p className="mt-4 max-w-md text-xl bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] bg-clip-text text-transparent">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 underline font-semibold text-gray-900">
                  <Image
                    src="/logo/Group 50.png"
                    alt="location icon"
                    height={15}
                    width={15}
                  />
                  U.S. Office
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Adrila Technologies INC.<br />
                  8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 underline font-semibold text-gray-900">
                  <Image
                    src="/logo/Group 50.png"
                    alt="location icon"
                    height={15}
                    width={15}
                  />
                  India Office
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Adrila Technologies Private Limited,<br />
                  Unit 707, Lotus Trade Centre, Saki Nagar, Near D.N. Nagar,
                  Andheri West, Mumbai, Maharashtra 400053.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              relative md:absolute md:top-0 md:z-20 md:right-20
              w-full md:w-140
              h-auto md:h-140
              rounded-2xl p-8
              border border-gray-100 bg-white shadow-lg
            "
          >
            <form className="grid grid-cols-1 z-50 gap-5 pt-6 md:pt-10 sm:grid-cols-2">
              <input
                className="border p-3 rounded-xl border-gray-300"
                placeholder="Full Name"
              />
              <input
                className="border p-3 rounded-xl border-gray-300"
                placeholder="Email"
              />
              <input
                className="border p-3 rounded-xl border-gray-300"
                placeholder="Phone Number"
              />
              <input
                className="border p-3 rounded-xl border-gray-300"
                placeholder="Company Name"
              />
              <input
                className="border p-3 rounded-xl border-gray-300 sm:col-span-2"
                placeholder="Inquiry Type"
              />
              <textarea
                className="sm:col-span-2 h-32 border border-gray-300 rounded-xl p-3 resize-none"
                placeholder="Message"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="sm:col-span-2 mt-4 rounded-full bg-[#3E6EB4] py-3 text-sm font-semibold text-white transition"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
