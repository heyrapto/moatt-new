import Image from "next/image";
import { Navbar } from "../layout/navbar";
import { FiArrowDown } from "react-icons/fi";

export const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[1] opacity-35">
        <Image
          src="/images/hero/bg.png"
          alt=""
          fill
          priority
          quality={90}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-[2] flex-1 flex flex-col items-center justify-end max-w-[1400px] mx-auto w-full px-5 pb-8 sm:px-6 md:px-10 md:pb-[50px]">
        {/* Lady Image */}
        <div
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] pointer-events-none md:top-1/2"
          id="hero-lady"
        >
          <Image
            src="/images/hero/lady.png"
            alt="3D Fashion mannequin wearing colorful draped fabric"
            width={600}
            height={800}
            priority
            quality={95}
            className="w-auto h-auto max-h-[55vh] sm:max-h-[60vh] md:max-h-[75vh] lg:max-h-[85vh] object-contain"
          />
        </div>

        {/* Text Block */}
        <div className="relative z-[3] w-full flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-5">
          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-[var(--font-heading)] font-black text-[clamp(36px,13vw,58px)] sm:text-[clamp(40px,12vw,68px)] md:text-[clamp(48px,9vw,90px)] lg:text-[clamp(64px,9.5vw,130px)] leading-[0.95] tracking-[-0.03em] uppercase"
          >
            <span className="text-white">STYLE</span>
            <span className="text-[#e8961e]">VOLUTION</span>
          </h1>

          {/* Description */}
          <div className="max-w-full md:max-w-[320px] md:pb-2">
            <p
              id="hero-description"
              className="text-white/75 text-sm md:text-[15px] leading-relaxed text-center w-full md:text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From sketch to digital masterpiece—
              <strong className="text-[#e8961e] font-bold">our 3D</strong>
              <br />
              software turns your ideas into
              <br />
              wearable art.
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div
          className="relative flex justify-center w-full mt-6 md:absolute md:bottom-0 md:right-10 md:w-auto md:mt-0"
          id="hero-scroll-down"
        >
          <a
            href="#choose-section"
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-[#e8961e] text-[#e8961e] transition-all duration-250 hover:bg-[#e8961e]/10 hover:translate-y-[3px]"
            aria-label="Scroll down"
          >
            <FiArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};