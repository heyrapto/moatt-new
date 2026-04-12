import Image from "next/image";
import { BsDot } from "react-icons/bs";

const featureLabels = [
  { text: "Realistic Fabric Simulation", position: "top-left" },
  { text: "AI-Powered Design Assistance", position: "top-right" },
  { text: "3D Garment Visualization", position: "mid-left" },
  { text: "Customizable Avatars", position: "mid-right" },
  { text: "Pattern Making Tools", position: "bot-left" },
  { text: "Export-Ready Outputs", position: "bot-right" },
];

const positionClasses: Record<string, string> = {
  "top-left":
    "top-[8%] left-[2%] sm:top-[10%] sm:left-[4%] lg:top-[10%] lg:left-[5%]",
  "top-right":
    "top-[6%] right-[2%] sm:top-[8%] sm:right-[4%] lg:top-[8%] lg:right-[5%]",
  "mid-left":
    "top-[38%] left-[0%] sm:top-[40%] sm:left-[2%] lg:top-[40%] lg:left-[2%]",
  "mid-right":
    "top-[36%] right-[0%] sm:top-[38%] sm:right-[2%] lg:top-[38%] lg:right-[2%]",
  "bot-left":
    "bottom-[22%] left-[2%] sm:bottom-[24%] sm:left-[4%] lg:bottom-[22%] lg:left-[5%]",
  "bot-right":
    "bottom-[18%] right-[2%] sm:bottom-[20%] sm:right-[4%] lg:bottom-[18%] lg:right-[5%]",
};

export const FeaturesSection = () => {
  return (
    <section
      id="features-section"
      className="relative w-full bg-white overflow-hidden py-24 md:py-32 lg:py-[6vw]"
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-6 lg:px-[5vw]">
        {/* ======== SECTION LABEL ======== */}
        <div className="flex items-center gap-4 mb-16 lg:mb-[4vw]">
          <h2
            id="features-heading"
            className="font-[var(--font-heading)] text-lg sm:text-xl lg:text-[1.4vw] font-bold text-black tracking-wide uppercase"
          >
            Features
          </h2>
          <div className="flex-1 max-w-[280px] sm:max-w-[360px] lg:max-w-[20vw]">
            <Image
              src="/images/features/label-line.png"
              alt=""
              width={360}
              height={40}
              className="w-full h-auto object-contain lg:h-[8vw]"
            />
          </div>
        </div>

        {/* ======== FEATURES DISPLAY ======== */}
        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[45vw]">
          {/* Lady mannequin — centered */}
          <div className="relative z-10">
            <Image
              src="/images/features/lady.png"
              alt="3D mannequin showcasing garment visualization"
              width={420}
              height={800}
              quality={95}
              className="w-auto h-[400px] sm:h-[520px] lg:h-[40vw] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating feature labels */}
          {featureLabels.map((label, i) => (
            <div
              key={i}
              id={`feature-label-${i}`}
              className={`absolute z-20 ${positionClasses[label.position]} hidden sm:flex items-center gap-2 lg:gap-[0.5vw] rounded-full border border-black/[0.08] bg-black/[0.04] backdrop-blur-md px-4 py-2.5 lg:px-[1.2vw] lg:py-[0.8vw] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.07] cursor-default group`}
            >
              <BsDot className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw] text-black flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              <span
                className="text-black text-xs sm:text-sm lg:text-[1.05vw] font-medium whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label.text}
              </span>
            </div>
          ))}

          {/* Mobile feature list — shown below on small screens */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 sm:hidden px-2">
            {featureLabels.map((label, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md px-4 py-2.5"
              >
                <BsDot className="w-5 h-5 text-[#e8961e] flex-shrink-0" />
                <span
                  className="text-white/80 text-xs font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {label.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};