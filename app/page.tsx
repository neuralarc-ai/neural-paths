import Image from "next/image";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <main>
      <Image
        src="/images/hero/left.png"
        alt="Left Shape"
        width={300}
        height={600}
        className="absolute left-0 top-0 lg:top-8 z-0"
        priority
      />
      <Image
        src="/images/hero/top-left.png"
        alt="Top Left Shape"
        width={324}
        height={260}
        className="absolute left-[388px] top-0 z-0"
        priority
      />
      <Image
        src="/images/hero/center.png"
        alt="Center Shape"
        width={700}
        height={700}
        className="absolute left-1/2 -translate-x-1/2 -z-5"
        priority
      />
      <Image
        src="/images/hero/top-right.png"
        alt="Top Right Shape"
        width={582}
        height={542}
        className="absolute right-0 top-0 z-0"
        priority
      />
      <Navbar />
      <Hero />
      <div className="max-w-[1720px] mx-auto w-full px-20 bg-[#C0C5BA] rounded-3xl">
        <div className="flex flex-col mx-auto max-w-[1488px] lg:flex-row justify-between items-center w-full py-16 gap-10 lg:gap-0">
          {/* Left: Heading */}
          <div className="flex-1 w-full">
            <h1 className="text-black font-semibold text-5xl lg:text-[90px] tracking-tight">
              Build with AI that<br />moves as fast as<br />your ideas
            </h1>
          </div>
          {/* Right: Description and Buttons */}
          <div className="flex-1 flex flex-col ml-auto w-full gap-10 lg:max-w-[588px]">
            <p className="text-black text-xl lg:text-2xl font-normal text-left max-w-[588px] mb-8">
              AI products that solve today's challenges, and custom solutions that shape the future of your business.
            </p>
            <div className="flex flex-row gap-6">
              <a
                href="#"
                className="bg-[#2F2C28] text-white text-xl font-bold rounded-full px-10 py-5 flex items-center gap-3 shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] hover:bg-[#353535] transition"
              >
                Explore AI Suite
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-[#ECECEC] text-black text-xl font-bold rounded-full px-10 py-5 flex items-center gap-3 shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] border border-[#E6E6E6] hover:bg-[#F5F5F5] transition"
              >
                Craft Custom AI
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <Tools />
      </div>
      <Footer />
    </main>
  );
}
