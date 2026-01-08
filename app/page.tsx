import Image from "next/image";
import Hero from "./components/Hero";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower";
import Docsim from "./components/benefits/Docsim";
import Docpilot from "./components/benefits/Docpilot";
import Doxtract from "./components/benefits/Doxtract";
import BlogsSection from "./components/Blogs";

export default function Home() {
  return (
   <div>
    <Hero/>
    <IndustriesWeEmpower/>
    <Docsim/>
    <Docpilot/>
    <Doxtract/>
    <BlogsSection/>
   </div>
  );
}
