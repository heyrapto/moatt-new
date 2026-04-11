import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";

export const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="relative w-full py-24 md:py-32 xl:py-44 bg-[#0a0a0a] overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta/bg.png"
          alt="CTA Background"
          fill
          priority
          className="object-cover opacity-90"
        />
        {/* Subtle overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-5 sm:px-10 flex flex-col items-center text-center">
        <h2 className="font-[var(--font-nunito-sans)] font-black text-[clamp(28px,7vw,50px)] sm:text-[clamp(32px,6vw,60px)] lg:text-[clamp(44px,5.5vw,90px)] text-white uppercase leading-[1.05] tracking-tight max-w-[1200px]">
          UNLOCK YOUR <span className="text-[#e8961e]">CREATIVITY</span> AND STREAMLINE YOUR DESIGN PROCESS WITH OUR 3D FASHION ILLUSTRATION SOFTWARE
        </h2>

        <div className="mt-14 md:mt-20 relative">
          <div className="flex items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full p-2 shadow-2xl">
            <button className="px-8 sm:px-12 py-3.5 sm:py-5 text-white font-bold text-sm sm:text-base uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300">
              Log In
            </button>
            <button className="relative px-8 sm:px-12 py-3.5 sm:py-5 bg-[#e8961e] text-white font-bold text-sm sm:text-base uppercase tracking-widest rounded-full hover:bg-[#d18619] transition-all duration-300 flex items-center gap-2 group shadow-[0_0_30px_rgba(232,150,30,0.5)]">
              Start Designing
              {/* Floating Cursor Icon */}
              <div className="absolute -right-4 -bottom-3 sm:-right-6 sm:-bottom-4 scale-125 sm:scale-[1.8] transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-[2]">
                <HiCursorClick className="text-[#e8961e] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};