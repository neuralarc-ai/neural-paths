"use client";

import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="w-full py-20 px-4 lg:px-20">
      <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[520px]">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl w-full mb-12 lg:mb-0">
          <h1 className="text-black text-4xl md:text-6xl font-semibold leading-tight mb-8 tracking-tight">
            Turning Your Vision into<br />
            Custom AI Reality
          </h1>
          <p className="text-[#232323] text-lg md:text-2xl mb-10 max-w-lg">
            From concept to creation, we bring your dream AI to life. Together, we will design solutions that solve your most complex challenges.
          </p>
          <Link 
            href="/ai-solutions"
            className="bg-[#2F2C28] cursor-pointer text-white text-lg shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] font-semibold rounded-full px-8 py-4 flex items-center gap-3 hover:bg-[#333] transition-all duration-300 ease-in-out"
          >
            Explore Now
            <span className="inline-block ml-2">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </span>
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center w-full h-full min-h-[320px]">
          <div className="relative w-[800px] h-[600px] max-w-full flex items-center justify-center">
            <Image
              src="/images/tools/ai-solutions.png"
              alt="AI Illustration"
              width={800}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 