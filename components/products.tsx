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
    name: "Tyme",
    subtitle: "AI for Instant Global Time Insights",
    description:
      "Tyme lets you instantly compare time across the globe with AI-powered precision. From quick time zone checks to smart scheduling, global planning becomes effortless.",
    color: "#7B6142",
    icon: "/images/tools/tyme.svg",
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
];

export default function Products() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2.2, spacing: 32 },
      },
    },
    mode: "free-snap",
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full py-16">
      <h2 className="text-black text-3xl lg:text-5xl xl:text-6xl font-semibold text-center mb-12 tracking-tighter max-w-6xl text-pretty mx-auto">
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
                  ? 'linear-gradient(45deg, #423629 0%, #947254 100%)'
                  : idx === 2
                  ? 'linear-gradient(45deg, #2F334A 0%, #2F334A 100%)'
                  : `linear-gradient(45deg, ${product.color} 0%, rgba(255,255,255,0.08) 100%)`,
              width: "clamp(320px, 60vw, 540px)",
              minWidth: "clamp(320px, 60vw, 540px)",
              maxWidth: "540px",
            }}
            onMouseEnter={() => setHoveredCard(product.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {(idx === 1 || idx === 2) && (
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
            <div className="p-8 lg:p-14 flex lg:min-h-[482px] flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <Image src={product.icon} alt={product.name + ' icon'} width={64} height={64} className="object-contain w-10 h-10 lg:w-16 lg:h-16" />
                    <span className="text-white text-3xl lg:text-6xl font-semibold">{product.name}</span>
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
                        className="object-contain w-20 h-20"
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
        {/* Empty half-width card for slider effect */}
        <div
          className="keen-slider__slide rounded-3xl bg-transparent"
          style={{
            width: "clamp(160px, 20vw, 270px)",
            minWidth: "clamp(160px, 20vw, 270px)",
            maxWidth: "170px",
          }}
        />
      </div>
    </section>
  );
}
