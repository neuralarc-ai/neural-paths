import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative max-w-[1720px] mx-auto w-full min-h-[500px] flex items-center justify-center overflow-visible bg-gradient-to-b from-transparent to-[#1E1E1E] to-98%"
    >

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:h-[400px] max-w-[1280px] mx-auto px-4">
        {/* Left: NeuralArc (centered vertically) */}
        {/* <div className="flex-1 flex items-center justify-center h-full">
          <span className="text-white font-light lg:text-[80px] text-5xl leading-none tracking-tight">NeuralArc</span>
        </div> */}
        {/* Right: NeuralPaths (bottom-aligned) */}
        <div className="flex-1 flex items-start justify-center h-full pb-10">
          <span className="text-white font-light lg:text-[80px] text-5xl leading-none tracking-tight">NeuralPaths</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
