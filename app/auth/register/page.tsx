import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

export default function RegisterPage() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-white ">
      {/* Left Column: Registration Form */}
      <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col p-6 sm:p-10 lg:p-14 xl:p-20 overflow-y-auto">
        {/* Logo */}
        <div className="mb-10 lg:mb-14">
          <Link href="/">
            <Image
              src="/images/dark-logo.png"
              alt="Moatt Logo"
              width={120}
              height={40}
              className="w-auto h-7 sm:h-8 lg:h-9"
            />
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-[1.2] font-[var(--font-heading)]">
            Welcome To <span className="text-[#e8961e]">Moatt 3D</span> <br className="hidden sm:block" /> Illustration Tool
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-medium">
            Kindly fill in your registration details and proceed to design
          </p>
        </div>

        {/* Registration Form */}
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="fullName"
                className="text-xs sm:text-[13px] font-bold text-gray-700 tracking-tight"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g Mayor Jess"
                className="w-full bg-[#f9f9f9] border border-gray-100/50 rounded-xl px-4 py-3.5 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8961e]/10 transition-all placeholder:text-gray-300 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="email"
                className="text-xs sm:text-[13px] font-bold text-gray-700 tracking-tight"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g mayojess25@gmail.com"
                className="w-full bg-[#f9f9f9] border border-gray-100/50 rounded-xl px-4 py-3.5 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8961e]/10 transition-all placeholder:text-gray-300 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="phone"
                className="text-xs sm:text-[13px] font-bold text-gray-700 tracking-tight"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g +234 077"
                className="w-full bg-[#f9f9f9] border border-gray-100/50 rounded-xl px-4 py-3.5 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8961e]/10 transition-all placeholder:text-gray-300 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="password"
                className="text-xs sm:text-[13px] font-bold text-gray-700 tracking-tight"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-[#f9f9f9] border border-gray-100/50 rounded-xl px-4 py-3.5 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8961e]/10 transition-all font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label
              htmlFor="confirmPassword"
              className="text-xs sm:text-[13px] font-bold text-gray-700 tracking-tight"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full bg-[#f9f9f9] border border-gray-100/50 rounded-xl px-4 py-3.5 sm:py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8961e]/10 transition-all font-medium"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e8961e] text-white font-bold py-4 sm:py-5 rounded-full mt-4 hover:bg-[#d18619] transition-all shadow-md shadow-orange-500/10 text-sm tracking-wide"
          >
            Register Now
          </button>
        </form>

        {/* "Or" Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-widest">Or</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Social Authentication */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="flex-1 flex items-center justify-center gap-3 border border-gray-100 bg-transparent py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold">
            <FcGoogle className="text-xl sm:text-2xl" /> Sign Up With Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 border border-gray-100 bg-transparent py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold">
            <FaApple className="text-xl sm:text-2xl" /> Sign Up With Apple
          </button>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm font-medium text-gray-500">
          Already have an account? <Link href="/auth/login" className="text-[#e8961e] font-extrabold ml-1 hover:underline">Login</Link>
        </p>
      </div>

      {/* Right Column: Hero Section */}
      <div className="hidden lg:flex flex-1 relative bg-black overflow-hidden">
        <Image
          src="/images/auth-bg.png"
          alt="Designer sketching on digital tablet"
          fill
          priority
          className="object-cover opacity-70"
        />
        {/* Subtle vignette/gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Branding Text Overlay */}
        <div className="absolute inset-x-0 bottom-[12%] xl:bottom-[15%] flex flex-col items-center text-center px-10">
          <h2 className="text-4xl xl:text-6xl font-black text-white leading-tight uppercase tracking-[-0.03em]">
            CHOOSE <span className="text-[#e8961e]">MOATT</span> <br />
            BOOST CREATIVITY <br />
            AND EFFICIENCY
          </h2>
        </div>
      </div>
    </main>
  );
}
