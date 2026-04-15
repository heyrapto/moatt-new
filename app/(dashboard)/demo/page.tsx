"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoHomeOutline, IoAddOutline, IoChevronDownOutline } from "react-icons/io5";
import { BsBucketFill, BsPlayFill } from "react-icons/bs";
import {
    PiPencilSimpleLine,
    PiMagicWand,
    PiArrowsOutCardinal,
    PiEraser,
    PiStack,
    PiCloud,
    PiScissors,
    PiRuler,
} from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { initScene } from "./three-scene";

const tools = [
    { icon: PiPencilSimpleLine, label: "Pencil" },
    { icon: PiMagicWand, label: "Magic Wand" },
    { icon: PiArrowsOutCardinal, label: "Move" },
    { icon: BsBucketFill, label: "Fill", active: true },
    { icon: PiEraser, label: "Eraser" },
    { icon: PiStack, label: "Layers" },
    { icon: PiCloud, label: "Cloud" },
    { icon: PiScissors, label: "Scissors" },
    { icon: PiRuler, label: "Ruler" },
];

const textures = [
    { label: "Gold Velvet", color: "#c8861a" },
    { label: "Purple Herringbone", color: "#6b4f8a" },
    { label: "Copper Linen", color: "#c07840" },
];

export default function DemoPage() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [activeTool, setActiveTool] = useState(3);

    useEffect(() => {
        if (!mountRef.current) return;
        const cleanup = initScene(mountRef.current);
        return cleanup;
    }, []);

    return (
        <main
            className="relative w-screen h-screen overflow-hidden bg-black"
            style={{ fontFamily: "var(--font-body)" }}
        >
            {/* ── CENTRAL CANVAS ──────────────────────────────────────────────── */}
            <div
                ref={mountRef}
                className="absolute inset-0 right-[240px] bg-white cursor-grab active:cursor-grabbing"
            />

            {/* ── TOP-LEFT FLOATING BAR ───────────────────────────────────────── */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-1 bg-[#111111] p-1.5 rounded-xl border border-white/5 shadow-2xl">
                <button className="w-9 h-9 rounded-[10px] bg-[#e8961e] flex items-center justify-center hover:bg-[#d4870f] transition-colors">
                    <IoHomeOutline className="w-[18px] h-[18px] text-white" />
                </button>
                <button className="w-9 h-9 rounded-[10px] bg-transparent flex items-center justify-center hover:bg-white/5 transition-colors">
                    <BsPlayFill className="w-[18px] h-[18px] text-white/40" />
                </button>
            </div>

            {/* ── LEFT FLOATING TOOLBAR ────────────────────────────────────────── */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 bg-[#111111] py-4 px-2.5 rounded-[24px] border border-white/5 shadow-2xl">
                {tools.map(({ icon: Icon, label }, i) => (
                    <button
                        key={i}
                        title={label}
                        onClick={() => setActiveTool(i)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTool === i
                            ? "bg-white/10 text-white"
                            : "text-white/30 hover:bg-white/5 hover:text-white/60"
                            }`}
                    >
                        <Icon className="w-[20px] h-[20px]" />
                    </button>
                ))}
            </div>

            {/* ── RIGHT PANEL ─────────────────────────────────────────────────── */}
            <div className="absolute right-0 top-0 bottom-0 w-[240px] bg-[#111111] border-l border-white/5 flex flex-col z-30 shadow-2xl overflow-hidden">
                
                {/* Profile + Share */}
                <div className="p-4 flex flex-col gap-4 border-b border-white/5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-white/5 rounded-full pl-1.5 pr-3 py-1.5 cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-7 h-7 rounded-full overflow-hidden bg-[#e8961e]/20">
                                <Image
                                    src="/images/auth-bg.png"
                                    alt="avatar"
                                    width={28}
                                    height={28}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <IoChevronDownOutline className="w-3.5 h-3.5 text-white/40" />
                        </div>
                        <button className="bg-[#e8961e] hover:bg-[#d4870f] transition-colors text-white font-bold rounded-lg px-4 py-2.5 text-[12px] shadow-lg shadow-[#e8961e]/10">
                            Share Project
                        </button>
                    </div>
                </div>

                {/* Properties Sections */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Fill */}
                    <div className="px-4 py-5 border-b border-white/5">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-white/40 uppercase tracking-widest font-bold text-[10px]">Fill</span>
                            <IoAddOutline className="w-4 h-4 text-white/30 cursor-pointer hover:text-white/70" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 flex-1">
                                <div className="w-5 h-5 rounded-md bg-white shadow-sm" />
                                <span className="text-white/80 font-mono text-[11px] tracking-wider">FFFFFF</span>
                            </div>
                            <div className="bg-white/5 rounded-lg px-3 py-2 w-[70px] text-center">
                                <span className="text-white/80 text-[11px]">100%</span>
                            </div>
                            <HiOutlineEye className="w-4 h-4 text-white/30 cursor-pointer hover:text-white/70" />
                        </div>
                    </div>

                    {/* Border */}
                    <div className="px-4 py-5 border-b border-white/5">
                        <div className="flex items-center justify-between">
                            <span className="text-white/40 uppercase tracking-widest font-bold text-[10px]">Border</span>
                            <IoAddOutline className="w-4 h-4 text-white/30 cursor-pointer hover:text-white/70" />
                        </div>
                    </div>

                    {/* Choose A Texture */}
                    <div className="p-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between uppercase tracking-widest font-bold text-[10px]">
                            <span className="text-white/80">Choose A Texture</span>
                            <button className="text-[#e8961e] hover:underline">Browse</button>
                        </div>

                        {/* Search */}
                        <div className="relative group">
                            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
                            <input 
                                type="text"
                                placeholder="Search Texture Type"
                                className="w-full bg-white/5 border border-transparent focus:border-[#e8961e]/30 rounded-xl py-2.5 pl-9 pr-4 text-[11px] text-white placeholder:text-white/20 outline-none transition-all"
                            />
                        </div>

                        {/* Texture Tiles */}
                        <div className="flex flex-col gap-3">
                            {textures.map((t, i) => (
                                <div
                                    key={i}
                                    className="group relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#e8961e]/40 transition-all shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: t.color }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-white font-medium text-[11px]">{t.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}