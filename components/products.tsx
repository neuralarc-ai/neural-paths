"use client";

import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useState } from "react";

const products = [
  {
    name: "Rovyk",
    subtitle: "AI Powerhouse",
    description:
      "Rovyk combines multiple AI models into one platform, offering seamless switching and accessibility at an affordable price.",
    color: "#4B6358",
    icon: "/images/tools/rovyk.svg",
    features: [
      "/images/tools/openai.svg",
      "/images/tools/gemini.svg",
      "/images/tools/claude.svg",
      "/images/tools/grok.svg",
      "/images/tools/deepseek.svg",
    ],
  },
  {
    name: "Ava",
    subtitle: "AI for Blood Report Analysis",
    description:
      "Ava uses AI to analyze blood reports, identify patterns, and provide clear health insights. Transform complex medical data into actionable recommendations for better health understanding.",
    color: "#6B2E4A",
    icon: "/images/tools/ava.svg",
    features: [],
  },
  {
    name: "Gitpeek",
    subtitle: "AI for Github Repository Analysis",
    description:
      "Gitpeek is an AI-powered tool that helps you analyze your Github repositories. It provides insights into your code, dependencies, and more.",
    color: "#3B426A",
    icon: "/images/thirdai.svg",
    features: [],
  },
  {
    name: "Tyme",
    subtitle: "AI for Instant Global Time Insights",
    description:
      "Tyme lets you instantly compare time across the globe with AI-powered precision. From quick time zone checks to smart scheduling, global planning becomes effortless.",
    color: "#7B6142",
    icon: "/images/tools/tyme.svg",
    features: [],
  },
];

export default function Products() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2.5, spacing: 32 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 2.5, spacing: 32 },
      },
    },
    mode: "free-snap",
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="max-w-[1920px] mx-auto w-full py-16">
      <h2 className="text-black text-3xl lg:text-4xl xl:text-6xl px-10 xl:px-0 font-semibold text-center mb-12 tracking-tighter max-w-6xl text-pretty mx-auto">
        Each Solution, Perfectly Tailored to Overcome Your Unique Obstacles
      </h2>
      <div ref={sliderRef} className="keen-slider px-2 lg:px-8">
        {products.map((product, idx) => (
          <div
            key={product.name}
            className="keen-slider__slide rounded-3xl flex flex-col justify-between relative group"
            style={{
              background:
                idx === 0
                  ? 'linear-gradient(45deg, #233330 0%, #3E5F58 100%)'
                  : idx === 1
                  ? 'linear-gradient(45deg, #4A1E2E 0%, #8B3D5A 100%)'
                  : idx === 2
                  ? 'linear-gradient(45deg, #2F334A 0%, #2F334A 100%)'
                  : idx === 3
                  ? 'linear-gradient(45deg, #423629 0%, #947254 100%)'
                  : `linear-gradient(45deg, ${product.color} 0%, rgba(255,255,255,0.08) 100%)`,
              width: "clamp(280px, calc(100vw - 48px), 480px)",
              minWidth: "clamp(280px, calc(100vw - 48px), 480px)",
              maxWidth: "480px",
            }}
            onMouseEnter={() => setHoveredCard(product.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {(idx === 1 || idx === 3) && (
              <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300 ${hoveredCard === product.name ? 'opacity-100' : 'opacity-0'}`}>
                <span className="bg-black/80 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg border border-white/10">Coming Soon</span>
              </div>
            )}
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${hoveredCard === product.name ? 'opacity-100' : 'opacity-0'}`}>
              <ShineBorder
                shineColor={["#B7A98B", "#5B7CA6", "#C6AEA3"]}
                duration={8}
                borderWidth={8}
                className="rounded-3xl"
              />
            </div>
            <div className="p-8 lg:p-14 flex lg:min-h-[382px] flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <span className="text-white text-3xl xl:text-6xl font-semibold">{product.name}</span>
                  </div>
                  <span className="text-white text-lg font-medium mb-2">{product.subtitle}</span>
                </div>
                {idx === 0 ? (
                  <a
                    href="https://rovyk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center border border-[#999999] rounded-full transition-colors duration-300 ease-in-out group-hover:border-white">
                      <ArrowUpRight className="w-8 h-8 text-[#999999] transition-colors duration-300 ease-in-out group-hover:text-white" />
                    </div>
                  </a>
                ) : idx === 2 ? (
                  <a
                    href="https://gitpeek.neuralpaths.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center border border-[#999999] rounded-full transition-colors duration-300 ease-in-out group-hover:border-white">
                      <ArrowUpRight className="w-8 h-8 text-[#999999] transition-colors duration-300 ease-in-out group-hover:text-white" />
                    </div>
                  </a>
                ) : (
                  <div className="lg:w-20 lg:h-20 w-16 h-16 flex items-center justify-center border border-[#999999] rounded-full opacity-60">
                    <ArrowUpRight className="w-8 h-8 text-[#999999]" />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-4">
                {product.name === "Rovyk" && product.features.length > 0 && (
                  <div className="flex gap-4 mb-2">
                    {product.features.map((feature, idx) => (
                      <Image
                        key={feature}
                        src={feature}
                        alt={`Rovyk feature ${idx + 1}`}
                        width={82}
                        height={82}
                        className="object-contain xl:w-20 xl:h-20 w-12 h-12"
                      />
                    ))}
                  </div>
                )}
                <span className="text-white/90 text-sm lg:text-lg mt-auto">
                  {product.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
