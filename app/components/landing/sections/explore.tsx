import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

export const ExploreSection = () => {
  return (
    <section id="explore-section" className="relative w-full overflow-hidden">
      {/* ======== TOP HEADING BANNER ======== */}
      <div className="w-full bg-[#0a0a0a] py-14 md:py-20 lg:py-24 border-b border-white/[0.04]">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <h2
            id="explore-heading"
            className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight text-center text-white uppercase italic"
          >
            Bringing Fashion
            <br />
            Concepts To Life With
            <br />
            Moatt 3D Tools
          </h2>
        </div>
      </div>

      {/* ======== SPLIT CONTENT ======== */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px] lg:min-h-[600px]">
        {/* Left — Mannequin Image */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-[#0a0a0a]">
          <Image
            src="/images/explore/left-image.png"
            alt="Two mannequins wearing draped wrap dresses — one in gold, one in rust"
            fill
            quality={95}
            className="object-cover object-center"
          />
        </div>

        {/* Right — Text Content */}
        <div className="w-full lg:w-1/2 bg-white flex items-center">
          <div className="w-full px-8 py-14 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-14 xl:px-20 lg:py-0 max-w-[600px] mx-auto lg:mx-0">
            {/* Heading */}
            <h3
              id="explore-customise-heading"
              className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.05] tracking-tight text-[#0a0a0a] uppercase"
            >
              Customis
              <span className="text-[#e8961e]">able</span>
            </h3>

            <h4
              className="font-[var(--font-heading)] text-xl sm:text-2xl md:text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#0a0a0a] uppercase mt-2 italic"
            >
              Design For
              <br />
              Every Body,
              <br />
              Every Style
            </h4>

            {/* Description */}
            <p
              id="explore-description"
              className="text-[#0a0a0a]/65 text-sm sm:text-[15px] leading-relaxed mt-6 max-w-[420px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              In fashion, details matter. Our mannequins can be
              customised with a variety of skin tones to better visualise
              how your designs will look on different complexions.
              Whether you&apos;re styling for warm tones, cool tones, or
              anything in between, you have complete control.
            </p>

            {/* Explore CTA */}
            <div className="flex items-center gap-3 mt-10">
              <span
                className="text-[#0a0a0a] text-sm font-bold tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Explore Some More
              </span>
              <a
                href="#cta-section"
                id="explore-cta"
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#e8961e] text-[#e8961e] transition-all duration-250 hover:bg-[#e8961e]/10 hover:translate-y-[2px]"
                aria-label="Explore more"
              >
                <FiArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};