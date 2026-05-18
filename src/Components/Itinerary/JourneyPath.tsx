import Image from 'next/image'
import React from 'react'

interface RouteNode {
    city: string;
    days: string;
}

const journeyRoute: RouteNode[] = [
    { city: "DELHI", days: "D1-2" },
    { city: "AMRITSAR", days: "D3-4" },
    { city: "DALHOUSIE", days: "D5-6" },
    { city: "DHARAMSHALA", days: "D7" },
    { city: "TARAGARH", days: "D8" },
    { city: "MANALI", days: "D9-10" },
    { city: "SHIMLA", days: "D11-12" },
    { city: "DELHI", days: "D13-14" },
];

export default function JourneyPath() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden py-20 flex flex-col justify-center items-center">

            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src='/About/Images/map.png'
                    alt='World Map Background'
                    fill
                    className='object-cover'
                />
                <div className="absolute inset-0 bg-[#F0EBE1]/90" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full text-center mx-auto px-6 lg:px-12 lg:px-24 flex flex-col items-center justify-center">
                <p className='font-sans text-[16px] text-[#C8913A] uppercase font-medium tracking-widest'> Your Path</p>
                <h2 className='text-xl lg:text-[56px] text-[#1A1A1A] mt-2'> From plains to peaks. </h2>
                <p className='font-secondary text-black text-[12px] lg:text-[16px] leading-relaxed mt-2'>
                    Eight destinations. One seamless journey across North India.
                </p>

                {/* Timeline Card Container - Centered seamlessly below the text copy */}
                <div className='w-full max-w-190 bg-white/65 backdrop-blur-sm px-4 lg:px-10 py-12 mt-12 rounded-2xl border border-[#C8913A33]'>
                    <div className="w-full select-none">
                        {/* Desktop Timeline Layout */}
                        <div className="hidden lg:flex flex-col items-center justify-center w-full  mx-auto ">
                            {/* Top Row: Nodes 1 to 6 */}
                            <div className="flex items-center justify-center w-full">
                                {journeyRoute.slice(0, 6).map((node, index) => (
                                    <div key={index} className="flex items-center">
                                        {/* Node content structure */}
                                        <div className="flex flex-col items-center text-center">
                                            <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">
                                                {node.city}
                                            </span>
                                            <div className="w-4 h-4 rounded-full border-2 border-[#C8913A] bg-transparent flex items-center justify-center mb-3" />
                                            <span className="font-secondary uppercase text-[9px] tracking-widest text-[#C8913A] font-medium">
                                                {node.days}
                                            </span>
                                        </div>

                                        {/* Connecting line (only shown between active continuous nodes) */}
                                        {index < 5 && (
                                            <div className="w-8 h-px bg-[#C8913A]/60 -mt-10" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Row: Nodes 7 & 8 (Centered underneath) */}
                            <div className="flex items-center justify-center w-full mt-4">
                                {journeyRoute.slice(6, 8).map((node, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="flex flex-col items-center text-center">
                                            <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] font-medium mb-4">
                                                {node.city}
                                            </span>
                                            <div className="w-4 h-4 rounded-full border-2 border-[#C8913A] bg-transparent flex items-center justify-center mb-3" />
                                            <span className="font-secondary uppercase text-[9px] tracking-widest text-[#C8913A] font-medium">
                                                {node.days}
                                            </span>
                                        </div>
                                        {index === 0 && (
                                            <div className="w-8 h-px bg-[#C8913A]/60 -mt-10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile & Tablet Balanced Grid Layout */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-4 lg:hidden max-w-2xl mx-auto px-6">
                            {journeyRoute.map((node, index) => (
                                <div key={index} className="flex flex-col items-center text-center relative">
                                    <span className="text-xs lg:text-sm tracking-[0.15em] text-[#1A1A1A] font-medium mb-3">
                                        {node.city}
                                    </span>
                                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#C8913A] bg-transparent mb-2.5 z-10" />
                                    <span className="font-secondary uppercase text-[9px] tracking-widest text-[#C8913A]">
                                        {node.days}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}