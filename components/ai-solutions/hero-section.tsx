"use client";

import Image from "next/image";

export default function AiSolutionsHeroSection() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto min-h-[600px] overflow-visible py-12 px-4 lg:px-20">
      {/* Background Illustration */}
      <div className="absolute inset-0  w-full xl:h-[1133px] flex items-center justify-center overflow-visible pointer-events-none z-0">
        <Image
          src="/images/ai-solutions/hero.png"
          alt="AI Solutions Hero Illustration"
          fill
          className="object-contain object-center overflow-visible -translate-y-35"
          priority
        />
      </div>
      {/* Main Content */}
      <div className="relative max-w-[1720px] z-10 mx-auto flex flex-col lg:flex-row items-start justify-between min-h-[500px] lg:mt-28">
        {/* Left: Title */}
        <div className="flex flex-col items-start justify-center w-full mb-12 lg:mb-0">
          <h1 className="text-white text-4xl lg:text-6xl xl:text-[90px] font-semibold leading-tight mb-8 tracking-tight">
            Turn Bold Ideas Into<br />
            Intelligent Realities<br />
            with Custom AI
          </h1>
        </div>
        {/* Right: Description and Button */}
        <div className="flex flex-col lg:items-end items-center justify-center w-full max-w-[700px]">
          <p className="text-white/80 text-lg lg:text-2xl mb-10 tracking-tight">
            Your challenges are unique, and so are our solutions, purpose built to solve what matters most to you. We turn your ideas into intelligent, scalable tools that evolve with your business and drive real results.
          </p>
          <a
            href="#contact-form"
            className="bg-[#C1BBB4] text-black w-fit text-lg rounded-full px-8 py-2 flex items-center gap-3 shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] border border-[#E6E6E6] hover:bg-[#F5F5F5] transition"
          >
            Craft Your AI Product
            <span className="inline-block ml-2">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
