import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto shadow-[0_-8px_0_0_#757372] bg-[#1E1E1E] rounded-t-2xl z-50">
      <div className="lg:h-[264px] max-w-[1920px] bg-[#1E1E1E] rounded-t-3xl flex flex-col justify-between mx-auto w-full text-white lg:py-10 py-5 lg:px-10 px-4 z-50">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0 bg-[#1E1E1E]">
          {/* Left: Logo and tagline */}
          <div className="flex flex-col lg:flex-row items-center gap-4  flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl lg:text-3xl tracking-tight font-semibold">
                Neural Paths
              </span>
            </div>
            <div className="hidden lg:block h-12 border-l border-[#FFFFFF]/10 mx-4" />
            <span className="text-base lg:text-lg text-[#CCCCCC] mt-1 lg:mt-0">
              Where data meets neural intelligence
            </span>
          </div>
          {/* Center/Right: Navigation links */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 flex-1 lg:justify-end justify-center mb-6 lg:mb-0">
            <Link href="/" className="text-lg hover:underline">
              Neural Paths AI Suite
            </Link>
            <Link href="#tools-section" className="text-lg hover:underline">
              Focused AI Products
            </Link>
            <Link href="/ai-solutions" className="text-lg hover:underline">
              AI Solutions
            </Link>
          </div>
        </div>
        {/* Bottom: Legal links and copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[#E6E6E6] text-sm">
          <div className="flex flex-wrap gap-2 lg:gap-4 justify-center items-center lg:justify-start">
            <Link
              href="/terms-of-use"
              className="hover:underline hover:text-white transition-all duration-300 font-light lg:text-base text-sm text-[#AFAFAF]"
            >
              Terms of use
            </Link>
            <span className="hidden lg:inline text-[#313534] text-2xl">•</span>
            <Link
              href="/privacy-policy"
              className="hover:underline hover:text-white transition-all duration-300 font-light lg:text-base text-sm text-[#AFAFAF]"
            >
              Privacy Policy
            </Link>
            <span className="hidden text-[#313534] text-2xl lg:inline">•</span>
            <Link
              href="/disclaimer"
              className="hover:underline hover:text-white transition-all duration-300 font-light lg:text-base text-sm text-[#AFAFAF]"
            >
              Disclaimer
            </Link>
            <span className="hidden lg:inline text-[#313534] text-2xl">•</span>
            <Link
              href="/responsible-ai"
              className="hover:underline hover:text-white transition-all duration-300 font-light lg:text-base text-sm text-[#AFAFAF]"
            >
              Responsible & Ethical AI
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-2 lg:mt-0">
            <span>Copyright 2025. All rights reserved. A thing by</span>
            <Link href="https://neuralarc.ai" target="_blank">
              <Image
                src="/images/neural-arc-logo.svg"
                alt="NeuralArc Logo"
                width={25}
                height={25}
                className="inline-block"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
