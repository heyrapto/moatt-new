import Image from "next/image";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbCube3dSphere } from "react-icons/tb";

const features = [
  {
    icon: <IoColorPaletteOutline className="w-7 h-7 text-[#e8961e]" />,
    title: "Intuitive Design Tools",
    description:
      "Powerful yet simple tools that let you sketch, drape, and pattern with precision — no steep learning curve.",
  },
  {
    icon: <TbCube3dSphere className="w-7 h-7 text-[#e8961e]" />,
    title: "Real-Time 3D Visualization",
    description:
      "See your designs come to life instantly in photorealistic 3D — rotate, zoom, and refine on the fly.",
  },
];

export const ChooseSection = () => {
  return (
    <section
      id="choose-section"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 xl:gap-16">
          {/* ======== LEFT — TEXT CONTENT ======== */}
          <div className="flex-1 w-full lg:max-w-[540px] space-y-10">
            {/* Heading */}
            <div className="space-y-5">
              <h2
                id="choose-heading"
                className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight"
              >
                Why Choose{" "}
                <span className="text-[#e8961e]">Moatt?</span>
              </h2>
              <p
                id="choose-subtitle"
                className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We combine cutting-edge 3D technology with an intuitive
                interface — empowering designers to create, iterate, and
                produce faster than ever.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  id={`choose-feature-${i}`}
                  className="group relative flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#e8961e]/20 hover:bg-white/[0.04]"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#e8961e]/10 border border-[#e8961e]/15 transition-colors duration-300 group-hover:bg-[#e8961e]/15">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="space-y-2 min-w-0">
                    <h3
                      className="font-[var(--font-heading)] text-lg font-bold text-white"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======== RIGHT — MAN IMAGE ======== */}
          <div className="flex-1 relative w-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[600px]">
            {/* Decorative lines behind the man */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/images/choose/lines.png"
                alt=""
                width={700}
                height={500}
                className="w-full max-w-[600px] h-auto object-contain opacity-40"
              />
            </div>

            {/* Man mannequin */}
            <div className="relative z-10">
              <Image
                src="/images/choose/man.png"
                alt="3D mannequin in black suit"
                width={500}
                height={700}
                quality={95}
                className="w-auto h-[450px] sm:h-[550px] lg:h-[620px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};