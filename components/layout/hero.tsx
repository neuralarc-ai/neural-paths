import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative max-w-[1920px] mx-auto w-full min-h-[600px] flex items-center justify-center overflow-visible">

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center h-[600px] max-w-[1280px] mx-auto px-4">
        {/* Left: NeuralArc (centered vertically) */}
        <div className="flex-1 flex items-center justify-center h-full">
          <span className="text-white font-light lg:text-[80px] text-5xl leading-none tracking-tight">NeuralArc</span>
        </div>
        {/* Right: NeuralPaths (bottom-aligned) */}
        <div className="flex-1 flex items-end justify-center h-full pb-10 lg:pb-24">
          <span className="text-white font-light lg:text-[80px] text-5xl leading-none tracking-tight">NeuralPaths</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
