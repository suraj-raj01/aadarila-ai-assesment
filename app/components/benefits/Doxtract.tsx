"use client";

import Image from "next/image";

export default function Doxtract() {
  return (
    <section className="mt-5 flex items-center justify-between relative overflow-hidden bg-[url('/Industries/circle.png')] bg-no-repeat bg-right bg-contain h-150">
      {/* dotted decoration */}
      <div className="absolute left-40 -z-1 top-15">
        <Image
          src='/Industries/Group-2-Copy-2.png'
          height={200}
          width={200}
          alt=""
        />
      </div>

      <div className="mx-auto max-w-full px-6 md:px-20">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] px-5 py-2 text-sm font-medium text-white">
              Doxtract
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Extract, Validate, and Process Documents with Ease
            </h3>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Features:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Detects near-duplicates and tampered documents.</li>
                <li>• Identifies fraudulent patterns across large repositories.</li>
                <li>• Multi-language support for global adaptability.</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Benefits:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Save 30% time on manual checks.</li>
                <li>• Reduce document fraud by up to 40%.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#3E6EB4] px-6 py-3 text-sm font-medium text-white transition ">
                Learn More
              </button>
              <button className="rounded-full bg-[#3E6EB4] px-6 py-3 text-sm font-medium text-white transition">
                Schedule a Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/products/doxtract.png"
                alt="DocSim Product"
                width={520}
                height={520}
                className="h-100 w-full max-w-md md:max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
