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
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-24 md:py-32 lg:py-[6vw]"
    >
      <div className="relative z-10 mx-auto w-full px-5 sm:px-6 lg:px-[5vw]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[5vw]">
          {/* ======== left — MAN IMAGE ======== */}
          <div className="flex-1 relative w-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[40vw]">
            {/* Decorative lines behind the man */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/images/choose/lines.png"
                alt=""
                width={700}
                height={500}
                className="w-full max-w-[600px] lg:max-w-[40vw] h-auto object-contain"
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
                className="w-auto h-[450px] sm:h-[550px] lg:h-[60vw] object-contain"
              />
            </div>
          </div>
          {/* ======== right — TEXT CONTENT ======== */}
          <div className="flex-1 w-full lg:max-w-[35vw] space-y-10 lg:space-y-[2.5vw]">
            {/* Heading */}
            <div className="space-y-5">
              <h2
                id="choose-heading"
                className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[4.2vw] font-extrabold leading-[1.05] tracking-tight text-white"
              >
                Why Choose{" "}
                <span className="text-[#e8961e]">Moatt?</span>
              </h2>
              <p
                id="choose-subtitle"
                className="text-white/60 text-base sm:text-lg lg:text-[1.15vw] leading-relaxed lg:max-w-[28vw]"
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
                  className="group relative flex items-start gap-5 lg:gap-[1.2vw] rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-[1.5vw] transition-all duration-300 hover:border-[#e8961e]/20 hover:bg-white/[0.04]"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 lg:w-[3.5vw] lg:h-[3.5vw] rounded-xl lg:rounded-[0.8vw] bg-[#e8961e]/10 border border-[#e8961e]/15 transition-colors duration-300 group-hover:bg-[#e8961e]/15">
                    {/* Icon container - resize the icon inside if needed */}
                    <div className="scale-100 lg:scale-[1.2]">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-2 min-w-0">
                    <h3
                      className="font-[var(--font-heading)] text-lg lg:text-[1.3vw] font-bold text-white"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/50 text-sm lg:text-[0.95vw] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};