"use client";

import Image from "next/image";

export default function Docpilot() {
  return (
    <section className=" relative items-center justify-between flex overflow-hidden bg-[url('/Industries/circle.png')] bg-no-repeat bg-left bg-contain h-150">
      {/* dotted decoration */}
      <div className="absolute right-30 top-5">
        <Image
          src='/Industries/Group-2.png'
          height={120}
          width={120}
          alt=""
        />
      </div>

      <div className="mx-auto w-full px-6 md:px-20">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative flex justify-start">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/products/Docpilot.png"
                alt="DocSim Product"
                width={420}
                height={420}
                className="h-100 w-full max-w-md md:max-w-lg"
                priority
              />
            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div>
            <span className="inline-block rounded-full bg-[linear-gradient(90deg,#CD6028_11%,#3E6EB4_100%)] px-5 py-2 text-sm font-medium text-white">
              Docpilot
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
              Streamline Document Workflows with Automation
            </h3>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Features:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>•  OCR and NLP-based data extraction.</li>
                <li>• Handles unstructured documents across industries.</li>
                <li>•  Validates fields using external data sources.</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="font-semibold text-gray-900">Benefits:</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Process 10,000+ documents in minutes</li>
                <li>• Achieve 99% data accuracy with AI-driven validation.</li>
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
        </div>
      </div>
    </section>
  );
}
