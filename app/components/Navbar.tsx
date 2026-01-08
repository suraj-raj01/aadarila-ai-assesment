import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-2 z-100 backdrop-blur-1xl bg-white/50 border border-white/30">
            <div className="mx-auto max-w-full px-6 sm:px-6 lg:px-20">
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

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center font-semibold gap-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#3E6EB4]">Home</Link>
                        <Link href="/industries" className="hover:text-[#3E6EB4]">Industries</Link>
                        <Link href="/products" className="hover:text-[#3E6EB4]">Products</Link>
                        <Link href="/blog" className="hover:text-[#3E6EB4]">Blog</Link>
                        <Link href="/contact" className="hover:text-[#3E6EB4]">Contact Us</Link>
                        <Link href="/about" className="hover:text-[#3E6EB4]">About Us</Link>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button className="rounded-full bg-[#3E6EB4] px-6 py-3 text-sm font-normal text-white hover:bg-[#3E6EB4] transition">
                            <Link
                            href="/demo"
                        >
                            Get a Demo
                        </Link>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
