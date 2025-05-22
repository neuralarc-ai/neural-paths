'use client';

import Image from "next/image";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";
import Tools from "@/components/tools";
import Products from "@/components/products";
import Solutions from "@/components/solutions";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Animated Top Images */}
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: 7 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        
      >
        <Image
          src="/images/hero/left.png"
          alt="Left Shape"
          width={300}
          height={600}
          priority
          className="absolute left-0 top-0 lg:top-8 -z-5 xl:w-[300px] object-contain lg:w-[100px] md:block hidden"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40, rotate: 14 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        <Image
          src="/images/hero/top-left.png"
          alt="Top Left Shape"
          width={224}
          height={260}
          priority
          className="absolute xl:left-[288px] hidden xl:block top-0 -z-5"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        <Image
          src="/images/hero/center.png"
          alt="Center Shape"
          width={600}
          height={600}
          priority
          className="absolute left-1/2 -translate-x-2/3 -z-5 xl:top-40 top-30 xl:w-[900px] object-contain md:w-[500px] w-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: -14 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        <Image
          src="/images/hero/top-right.png"
          alt="Top Right Shape"
          width={582}
          height={542}
          priority
          className="absolute right-0 top-0 -z-5 lg:-top-20 overflow-x-clip xl:w-[482px] object-contain md:w-[282px] w-[100px]"
        />
      </motion.div>
      <Navbar />
      <Hero />
      <motion.section
        initial={{ opacity: 1, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      >
        <div className="max-w-[1720px] mx-auto w-full bg-[#C0C5BA] rounded-t-3xl z-50">
          <motion.div
            className="flex flex-col mx-auto max-w-[1568px] lg:flex-row justify-between xl:items-center w-full py-16 gap-10 lg:gap-0 lg:px-20 px-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Left: Heading */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.h1
                className="text-black font-semibold text-5xl xl:text-[90px] tracking-tight"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
              >
                Build with AI that
                <br />
                moves as fast as
                <br />
                your ideas
              </motion.h1>
            </motion.div>
            {/* Right: Description and Buttons */}
            <motion.div
              className="flex-1 flex flex-col ml-auto w-full gap-10 lg:max-w-[588px]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.p
                className="text-black text-xl lg:text-2xl font-normal text-left max-w-[588px] mb-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
              >
                AI products that solve today&apos;s challenges, and custom
                solutions that shape the future of your business.
              </motion.p>
              <motion.div
                className="flex flex-col lg:flex-row gap-6"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <a
                  href="#tools-section"
                  className="bg-[#2F2C28] w-fit text-white xl:text-xl font-bold rounded-full px-5 xl:px-10 py-5 flex items-center gap-3 shadow-[0_5px_0_0_#C6AEA3] hover:shadow-[0_3px_0_0_#C6AEA3] hover:bg-[#353535] transition"
                >
                  Explore AI Suite
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a
                  href="/ai-solutions"
                  className="bg-[#ECECEC] w-fit text-black xl:text-xl font-bold rounded-full px-5 xl:px-10 py-5 flex items-center gap-3 shadow-[0_5px_0_0_#6B5B4D] hover:shadow-[0_3px_0_0_#6B5B4D] border border-[#E6E6E6] hover:bg-[#F5F5F5] transition"
                >
                  Craft Custom AI
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            id="tools-section"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Tools />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Products />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Solutions />
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
