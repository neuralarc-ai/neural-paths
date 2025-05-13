"use client";

import Image from "next/image";

const features = [
  {
    title: "Perfectly Aligned with Your Goals",
    description:
      "Custom AI solutions are carefully tailored to meet your unique business objectives and evolving needs.",
    bg: "#CDAEA0",
    illustration: "/images/ai-solutions/feature-1.png",
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate AI into your existing systems for smoother operations and better results.",
    bg: "#BCA080",
    illustration: "/images/ai-solutions/feature-2.png",
  },
  {
    title: "Scalable & Adaptive",
    description:
      "Grow your AI seamlessly as your business scales, ensuring it remains flexible, effective, and future-ready over time.",
    bg: "#B3B09F",
    illustration: "/images/ai-solutions/feature-3.png",
  },
  {
    title: "Maximised Efficiency",
    description:
      "Automate repetitive tasks and enhance decision-making processes to boost productivity.",
    bg: "#CDAEA0",
    illustration: "/images/ai-solutions/feature-4.png",
  },
  {
    title: "Innovative Edge",
    description:
      "Custom AI gives you the flexibility to adapt quickly and innovate faster than your competitors.",
    bg: "#BCA080",
    illustration: "/images/ai-solutions/feature-5.png",
  },
];

export default function AiSolutionsFeatures() {
  return (
    <section className="max-w-[1720px] mx-auto w-full py-20 px-4 lg:px-16">
      <div className="max-w-[1720px] mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-semibold text-center mb-12">
          The Power of Building AI Your Way
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl p-8 md:p-10 min-h-[200px] overflow-hidden"
              style={{ background: feature.bg }}
            >
              {/* Background Illustration */}
              <div className="absolute inset-0 right-0 top-5 flex items-center justify-end h-full w-1/2 ml-auto pointer-events-none z-0">
                <Image
                  src={feature.illustration}
                  alt={feature.title + ' illustration'}
                  fill
                  className="object-contain w-[350px] h-full"
                />
              </div>
              {/* Foreground Content */}
              <div className="relative z-10 pr-4 flex flex-col justify-center h-full">
                <h3 className="text-black text-2xl lg:text-[40px] tracking-tight font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-black/80 text-lg lg:text-2xl font-light tracking-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          {/* 6th grid item: text only, no card bg, always last */}
          <div className="flex flex-col items-center justify-center px-4 py-8 rounded-2xl">
            <h3 className="text-white/65 text-3xl lg:text-6xl font-semibold mb-2">
              This resonate with you?
            </h3>
            <p className="text-white/50 text-lg lg:text-2xl">
              Let&apos;s talk AI and make your vision a working reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 