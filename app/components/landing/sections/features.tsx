import Image from "next/image";
import { LadyHeroScene } from "../3d/LadyScene";

const features = [
  {
    title: "Realistic 3D Rendering",
    description:
      "See your designs come to life with true-to-detail fabric and texture simulations.",
  },
  {
    title: "Collaboration Ready",
    description:
      "Work seamlessly with your team, share designs, and gather feedback all in one place.",
  },
  {
    title: "Instant Fit Testing",
    description:
      "Preview how your designs will look and feel in motion with instant, on-the-fly adjustments.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features-section"
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative w-full px-5 sm:px-8 lg:px-[5vw]">
        <div className="flex flex-col lg:flex-row lg:items-stretch" style={{ minHeight: "95vh" }}>

          {/* ======== LEFT — TEXT ======== */}
          <div className="flex flex-col justify-center lg:w-[30%] lg:pr-[4vw] py-16 lg:py-[6vw] flex-shrink-0">
            {/* KEY FEATURES — same line */}
            <h2
              id="features-heading"
              className="font-[var(--font-heading)] font-black leading-[1.0] tracking-tight uppercase mb-3 lg:mb-[0.8vw]"
              style={{ fontSize: "clamp(32px, 3.2vw, 60px)" }}
            >
              <span className="text-black">KEY </span>
              <span className="text-[#e8961e]">FEATURES</span>
            </h2>

            {/* DESIGN FASTER subhead */}
            <h3
              className="font-[var(--font-heading)] font-black leading-[1.05] tracking-tight text-black uppercase mb-6 lg:mb-[1.8vw]"
              style={{ fontSize: "clamp(28px, 2.8vw, 52px)" }}
            >
              DESIGN FASTER,<br />SMARTER, AND<br />BETTER
            </h3>

            <p
              className="text-black/55 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(14px, 1vw, 18px)",
                maxWidth: "340px",
              }}
            >
              Our software empowers fashion designers with cutting-edge tools
              to create stunning 3D models of their designs, allowing you to
              visualise fabric flow, texture, and fit before even making a
              physical sample.
            </p>
          </div>

          {/* ======== CENTER — LADY ======== */}
          <div className="relative flex-1 flex items-stretch justify-center flex-shrink-0 pointer-events-none">
            <div className="w-full h-[95vh] mt-[-5vh]">
                <LadyHeroScene />
            </div>
          </div>

          {/* ======== RIGHT — CALLOUTS ======== */}
          <div
            className="lg:w-[28%] lg:pl-[2vw] flex flex-col justify-between flex-shrink-0"
            style={{ paddingTop: "8vh", paddingBottom: "8vh" }}
          >
            {features.map((f, i) => (
              <div key={i} className="flex flex-col">
                {/* Label line — points from lady side (left) to dot (right) */}
                <Image
                  src="/images/features/label-line.png"
                  alt=""
                  width={320}
                  height={50}
                  className="w-full h-auto object-contain object-left mb-2"
                />
                <h4
                  className="font-[var(--font-heading)] font-bold text-black mb-1"
                  style={{ fontSize: "clamp(13px, 1.05vw, 20px)" }}
                >
                  {f.title}
                </h4>
                <p
                  className="text-black/50 leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(12px, 0.9vw, 16px)",
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};