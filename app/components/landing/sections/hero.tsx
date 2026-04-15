import Image from "next/image";
import { Navbar } from "../layout/navbar";
import { FiArrowDown } from "react-icons/fi";
import { LadyHeroScene } from "../3d/LadyScene";

export const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen overflow-hidden bg-white flex flex-col"
    >
      {/* Background Image — Subtle grid/light effect */}
      <div className="absolute inset-0 z-[1] opacity-5">
        <Image
          src="/images/hero/bg.png"
          alt=""
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", filter: "invert(1)" }}
        />
      </div>

      {/* Navbar */}
      <Navbar variant="light" />

      {/* Lady Image — z[3] */}
      <div
        className="absolute inset-x-0 bottom-0 top-0 z-[3] pointer-events-none"
        id="hero-lady"
      >
        <LadyHeroScene />
      </div>

      {/* Heading — absolutely centered in the viewport */}
      <div
        className="absolute inset-x-0 z-[5] flex items-center justify-center"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <h1
          id="hero-heading"
          className="font-[var(--font-heading)] font-black leading-[0.9] tracking-[-0.02em] uppercase text-black text-center w-full select-none"
          style={{ fontSize: "clamp(56px, 13.8vw, 220px)" }}
        >
          <span className="relative z-[5]">STYLE</span>
          <span className="relative z-[2] text-black/5">VOL</span>
          <span className="relative z-[5]">UTION</span>
        </h1>
      </div>

      {/* Bottom content: description + arrow */}
      <div className="relative z-[5] mt-auto w-full pb-8 md:pb-10 lg:pb-[3vw]">
        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-[3vw]">

          {/* Description */}
          <div
            className="ml-auto mr-16 md:mr-20 lg:mr-[5vw] max-w-[260px] md:max-w-[300px] lg:max-w-[20vw]"
            style={{ marginBottom: "calc(50vh - 18vw)" }}
          >
            <p
              id="hero-description"
              className="text-black/60 text-sm md:text-[15px] lg:text-[1.05vw] leading-relaxed text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From sketch to digital masterpiece—
              <strong className="text-[#e8961e] font-bold">our 3D</strong>
              {" "}software turns your ideas into <br /> wearable art.
            </p>
          </div>

        </div>

        {/* Scroll Arrow */}
        <a
          href="#choose-section"
          id="hero-scroll-down"
          className="absolute right-4 sm:right-6 md:right-10 lg:right-[3vw] bottom-8 md:bottom-10 lg:bottom-[3vw] flex items-center justify-center w-11 h-11 md:w-12 md:h-12 lg:w-[3vw] lg:h-[3vw] rounded-full bg-[#1a1a1a] text-[#e8961e] shadow-xl transition-all duration-300 hover:translate-y-[3px]"
          aria-label="Scroll down"
        >
          <FiArrowDown className="w-4 h-4 lg:w-[1.1vw] lg:h-[1.1vw]" />
        </a>
      </div>
    </section >
  );
};