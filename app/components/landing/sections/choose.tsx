import Image from "next/image";

const features = [
  {
    title: "Sustainable Design",
    description:
      "Experiment without waste. Reduce the need for multiple physical prototypes, contributing to a more eco-friendly design process.",
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Get instant feedback from clients, colleagues, or manufacturers without waiting for samples to ship.",
  },
  {
    title: "Simplified Workflow",
    description:
      "Intuitive tools allow you to focus on your designs while we handle the tech side. Create, edit, and render effortlessly in one place.",
  },
];

export const ChooseSection = () => {
  return (
    <section
      id="choose-section"
      className="relative w-full bg-[#0d0d0d] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-[90vh]">

        {/* ======== LEFT — MAN IMAGE ======== */}
        <div className="relative w-full lg:w-[42%] min-h-[50vh] lg:min-h-full flex-shrink-0">
          {/* Grid/lines bg */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <Image
              src="/images/choose/lines.png"
              alt=""
              fill
              className="object-cover opacity-30"
            />
          </div>
          {/* Man — bottom anchored, left aligned */}
          <div className="absolute bottom-0 left-0 right-0 z-[2] flex justify-center lg:justify-start">
            <Image
              src="/images/choose/man.png"
              alt="3D mannequin in black suit"
              width={600}
              height={900}
              quality={95}
              className="w-auto object-contain object-bottom"
              style={{ height: "90vh" }}
            />
          </div>
        </div>

        {/* ======== RIGHT — TEXT CONTENT ======== */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-10 lg:px-[4vw] py-20 lg:py-[6vw]">

          {/* Heading block */}
          <div className="mb-8 lg:mb-[2.5vw]">
            <h2
              className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-[4vw] font-black leading-[1.0] tracking-tight uppercase mb-3 lg:mb-[0.6vw]"
            >
              <span className="text-white">CHOOSE </span>
              <span className="text-[#e8961e]">MOATT</span>
            </h2>
            <h3
              id="choose-heading"
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[3vw] font-black leading-[1.0] tracking-tight text-white uppercase"
            >
              BOOST CREATIVITY<br />AND EFFICIENCY
            </h3>
          </div>

          {/* Subtitle */}
          <p
            id="choose-subtitle"
            className="text-white/70 text-lg lg:text-[1.15vw] leading-relaxed max-w-[540px] lg:max-w-[38vw] mb-10 lg:mb-[3vw]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Eliminate guesswork and wasted materials. Our platform enhances your
            creativity by providing a true-to-life digital design space, saving
            time and costs on sample production.
          </p>

          {/* Feature Cards — 2 col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1vw] max-w-[600px] lg:max-w-[42vw]">
            {features.map((feature, i) => (
              <div
                key={i}
                id={`choose-feature-${i}`}
                className={`rounded-2xl border border-white p-6 lg:p-[1.4vw] ${i === 2 ? "sm:col-span-1" : ""
                  }`}
              >
                <h3
                  className="font-[var(--font-heading)] text-lg lg:text-[1.15vw] font-bold text-white mb-3 lg:mb-[0.7vw]"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-white text-sm lg:text-[0.75vw] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};