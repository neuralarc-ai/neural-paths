import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const tools = [
  {
    name: "Lawbit",
    logo: "/images/tools/lawbit.svg",
    illustration: "/images/tools/lawbit-bg.png",
    color: "#B7A98B",
    subtitle: "AI for Legal Intelligence",
    description:
      "Create, review and optimize contracts with ease. Lawbit streamlines every step of legal drafting from patent generation to compliance management.",
    link: "https://lawbit.ai",
  },
  {
    name: "Okra",
    logo: "/images/tools/okra.svg",
    illustration: "/images/tools/okra-bg.png",
    color: "#5B7CA6",
    subtitle: "AI for Smarter Business Decisions",
    description:
      "Okra gives you deep insights and analysis on your business idea. Understand potential, spot gaps and make smarter decisions with AI-powered clarity.",
    link: "https://okra.ai",
  },
  {
    name: "Spider",
    logo: "/images/tools/spider.svg",
    illustration: "/images/tools/spider-bg.png",
    color: "#A6A6A6",
    subtitle: "AI for Pitch Deck Analyser",
    description:
      "Spider reviews your pitch deck with AI-level precision to spot strengths, gaps, and investor-readiness. Get clear, actionable insights to refine your story and win attention.",
    link: "https://spider.ai",
  },
  {
    name: "Pikra",
    logo: "/images/tools/pikra.svg",
    illustration: "/images/tools/pikra-bg.png",
    color: "#C6AEA3",
    subtitle: "AI for Smart Resume Analysis",
    description:
      "Pikra is a AI to analyse, score, and rank resumes with speed and precision. Identify the best-fit candidates instantly and streamline your hiring decisions.",
    link: "https://pikra.ai",
  },
];

const Tools = () => {
  return (
    <section className="w-full bg-[#C0C5BA] py-16 px-4 lg:px-0">
      <div className="max-w-[1488px] mx-auto">
        <h2 className="text-black text-4xl lg:text-5xl font-semibold text-center mb-14">
          Your AI Toolbox for Smarter, Faster Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={tool.name}
              className="relative bg-[#232323] lg:h-[482px] rounded-2xl lg:p-14 flex flex-col justify-between min-h-[340px] overflow-hidden shadow-lg"
            >
              {/* Illustration BG */}
              <Image
                src={tool.illustration}
                alt="bg-illustration"
                width={180}
                height={180}
                className="absolute top-0 right-0 z-0 pointer-events-none"
              />
              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Top */}
                <div className="flex flex-row justify-between items-start mb-8">
                  {/* Left: Logo and Name */}
                  <div className="flex flex-col gap-4">
                    <Image
                      src={tool.logo}
                      alt={tool.name + ' logo'}
                      width={68}
                      height={86}
                      style={{ color: tool.color }}
                    />
                    <span className="text-white lg:text-[56px] font-semibold">{tool.name}</span>
                  </div>
                  {/* Right: Arrow Icon Link */}
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="rounded-full border-2 border-[#5A5A5A] w-14 h-14 flex items-center justify-center transition-colors duration-200 group-hover:border-white">
                      <ArrowUpRight className="w-8 h-8 text-[#5A5A5A] transition-colors duration-200 group-hover:text-white" />
                    </div>
                  </a>
                </div>
                {/* Bottom */}
                <div className="flex flex-col gap-2 mt-auto">
                  <span className="text-white text-lg font-semibold mb-1">{tool.subtitle}</span>
                  <span className="text-[#E6E6E6] text-base font-normal leading-relaxed">
                    {tool.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 