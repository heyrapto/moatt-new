import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import {
    HiOutlinePencil,
    HiOutlineScissors,
    HiOutlineHome,
} from "react-icons/hi";
import {
    TbDiamond,
    TbStack2,
    TbLayersIntersect,
} from "react-icons/tb";
import {
    FiZoomIn,
    FiZoomOut,
} from "react-icons/fi";

export const DemoSection = () => {
    return (
        <section
            id="demo-section"
            className="relative w-full overflow-hidden py-24 md:py-32 lg:py-[6vw] bg-[#0a0a0a]"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/demo/bg.png"
                    alt=""
                    fill
                    priority
                    quality={95}
                    className="object-cover mix-blend-overlay"
                />
                {/* Gradient overlays for depth and transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-80" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 mx-auto w-full px-5 sm:px-6 lg:px-[5vw]">
                {/* ======== DEMO VIEWER ======== */}
                <div className="relative flex items-center justify-center gap-4 lg:gap-[4vw]">
                    {/* Left Toolbar */}
                    <div className="hidden md:flex flex-col items-center gap-1 lg:gap-[0.4vw] rounded-full bg-[#1e1e1e]/90 border border-white/[0.06] backdrop-blur-md px-3 py-5 lg:px-[0.8vw] lg:py-[1.5vw] shadow-2xl">
                        <ToolbarIcon>
                            <HiOutlinePencil className="w-4 h-4" />
                        </ToolbarIcon>
                        <div className="w-5 h-px bg-white/10 my-1" />
                        <ToolbarIcon>
                            <HiOutlineScissors className="w-4 h-4" />
                        </ToolbarIcon>
                        <ToolbarIcon>
                            <HiOutlineHome className="w-4 h-4" />
                        </ToolbarIcon>
                        <ToolbarIcon>
                            <TbDiamond className="w-4 h-4" />
                        </ToolbarIcon>
                        <ToolbarIcon>
                            <TbStack2 className="w-4 h-4" />
                        </ToolbarIcon>
                        <ToolbarIcon>
                            <TbLayersIntersect className="w-4 h-4 lg:w-[1.1vw] lg:h-[1.1vw]" />
                        </ToolbarIcon>
                    </div>

                    {/* Demo Screenshot with Play Button */}
                    <div className="relative flex-1 max-w-[800px] lg:max-w-[55vw] group cursor-pointer">
                        {/* Screenshot */}
                        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
                            <Image
                                src="/images/demo/demo.png"
                                alt="Moatt 3D fashion design software demo showing a red dress on a mannequin"
                                width={1400}
                                height={800}
                                quality={95}
                                className="w-full h-auto object-cover"
                            />

                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/35" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    id="demo-play-btn"
                                    className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-[6vw] lg:h-[6vw] rounded-full bg-white/90 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
                                >
                                    <FaPlay className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.2vw] lg:h-[1.2vw] text-[#e8961e] ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Toolbar */}
                    <div className="hidden md:flex flex-col items-center gap-1 lg:gap-[0.4vw] rounded-full bg-[#1e1e1e]/90 border border-white/[0.06] backdrop-blur-md px-3 py-5 lg:px-[0.8vw] lg:py-[1.5vw] shadow-2xl">
                        <ToolbarIcon>
                            <FiZoomIn className="w-4 h-4" />
                        </ToolbarIcon>
                        <ToolbarIcon>
                            <FiZoomOut className="w-4 h-4" />
                        </ToolbarIcon>
                        {/* Color circle (orange) */}
                        <div className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw] rounded-full border-2 border-white/20 bg-[#e8961e] my-1" />
                        {/* Rainbow color strip */}
                        <div className="w-3 h-24 lg:w-[0.8vw] lg:h-[8vw] rounded-full bg-gradient-to-b from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 my-1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

/* Small reusable toolbar icon button */
function ToolbarIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] rounded-lg lg:rounded-[0.5vw] text-white/60 hover:text-white/90 hover:bg-white/[0.06] transition-colors duration-200 cursor-pointer">
            {children}
        </div>
    );
}