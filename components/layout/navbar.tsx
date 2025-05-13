import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="max-w-[1920px] z-40 mx-auto w-full flex items-center justify-between lg:px-8 lg:py-8 py-4 px-4">
      {/* Left: Logo */}
      <Link href="/" className="flex cursor-pointer items-center">
        <Image
          src="/images/neural-paths-logo.svg"
          alt="Neural Paths Logo"
          width={82}
          height={40}
          priority
          
        />
      </Link>
      {/* Right: Link and Button */}
      <div className="flex items-center space-x-6">
        <Link href="/ai-solutions" className="lg:text-xl text-white">
          Tailored AI Solutions
        </Link>
        <button
          className="bg-[#C1BBB4] cursor-pointer lg:text-xl rounded-full text-black px-14 py-4 hover:shadow-[0_2px_0_0_#6B5B4D40] shadow-[0_4px_0_0_#6B5B4D40] transition-all duration-300"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
