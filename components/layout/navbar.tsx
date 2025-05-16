'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-[1920px] z-50 mx-auto w-full flex items-center justify-between lg:px-8 lg:py-8 py-4 px-4"
    >
      {/* Left: Logo */}
      <Link href="/" className="flex cursor-pointer items-center">
        <Image
          src="/images/neural-paths-logo.svg"
          alt="Neural Paths Logo"
          width={82}
          height={40}
          priority
          className="w-[40px] h-[40px] xl:w-[82px] xl:h-[40px]"
        />
      </Link>
      {/* Right: Link and Button */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link 
          href={isHomePage ? "/ai-solutions" : "/"} 
          className="lg:text-xl text-white"
        >
          {isHomePage ? "AI Solutions" : "Home"}
        </Link>
        <button
          className="bg-[#C1BBB4] cursor-pointer lg:text-xl rounded-full text-black px-14 py-4 hover:shadow-[0_3px_0_0_#6B5B4D40] shadow-[0_5px_0_0_#6B5B4D40] transition-all duration-300"
        >
          Sign In
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div className="flex lg:hidden">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Open menu"
              className="bg-[#C1BBB4] rounded-full text-black w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-[0_4px_0_0_#6B5B4D40] hover:shadow-[0_2px_0_0_#6B5B4D40]"
            >
              <span className="relative w-6 h-6 flex flex-col items-center justify-center">
                {/* Hamburger/Cross icon animation */}
                <span
                  className={`block absolute h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 top-3' : 'top-2'}`}
                  style={{ left: 0 }}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 top-3' : 'top-4'}`}
                  style={{ left: 0 }}
                />
              </span>
            </button>
          </DropdownMenuTrigger>
          <AnimatePresence>
            {menuOpen && (
              <DropdownMenuContent asChild align="end" className="w-48 mt-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      href={isHomePage ? "/ai-solutions" : "/"} 
                      className="w-full"
                    >
                      {isHomePage ? "AI Solutions" : "Home"}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button
                      className="w-full mt-2 bg-[#C1BBB4] rounded-full text-black px-6 py-3 hover:shadow-[0_2px_0_0_#6B5B4D40] shadow-[0_4px_0_0_#6B5B4D40] transition-all duration-300"
                    >
                      Sign In
                    </button>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            )}
          </AnimatePresence>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};

export default Navbar;
