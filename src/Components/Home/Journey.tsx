'use client'

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface JourneySection {
    id: number,
    days: string,
    title: string,
    desc: string,
    price: string,
    image: string
}

const sections: JourneySection[] = [
    {
        id: 1,
        days: "14 DAYS • NEPAL & BHUTAN",
        title: "Himalayan Sanctuary",
        desc: "A soulful pilgrimage through the hidden monasteries and peak-side retreats of the thunder dragon.",
        price: "$12,400",
        image: "/Home/Images/journey1.png"
    },
    {
        id: 2,
        days: "10 DAYS • JAPAN",
        title: "Cultural Odyssey",
        desc: "Experience the perfect blend of ancient traditions and futuristic neon cities.",
        price: "$9,800",
        image: "/Home/Images/journey3.jpg"
    },
    {
        id: 3,
        days: "12 DAYS • PERU",
        title: "Inca Heritage",
        desc: "Uncover the mysteries of Machu Picchu and the sacred valley of the Incas.",
        price: "$11,200",
        image: "/Home/Images/journey2.jpg"
    }
];

export default function Journey() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-6 lg:py-18.75 px-4 lg:px-25">
            <div>
                <h2 className="text-2xl lg:text-[48px] text-[#050E1A]">Bespoke Journeys</h2>
                <div className="flex items-end justify-between">
                    <p className="text-[12px] lg:text-[16px] font-secondary text-[#6A7282] mt-4">Curated experiences that transcend travel, offering deep immersion into local culture, history, and unparalleled luxury.</p>
                    <button className="uppercase text-[10px] lg:text-[12px] font-bold tracking-widest cursor-pointer">View All Journeys</button>
                </div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-start w-full h-200 lg:h-160 gap-8 overflow-visible lg:overflow-hidden top-10">

                {/* LEFT CONTENT: STICKY ON DESKTOP, NATURAL FLOW ON MOBILE */}
                <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 z-10">

                    {/* The Menu List (Cards on the left) */}
                    <div className="flex flex-col gap-4 w-full">
                        {sections.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative overflow-hidden transition-all duration-500 cursor-pointer rounded-[24px] border border-gray-200 
                                ${isActive ? 'bg-[#FCF9F8] shadow-xl p-6 lg:p-8' : 'bg-transparent p-5 lg:p-6 border-opacity-50'}`}
                                >
                                    {/* Meta Header */}
                                    <p className={`font-secondary text-[12px] tracking-[0.2em] text-[#75777C] uppercase transition-colors 
                                ${isActive ? 'text-[#75777C]' : 'text-gray-300'}`}>
                                        {item.days}
                                    </p>

                                    {/* Title */}
                                    <h2 className={`text-2xl lg:text-3xl font-bold py-4 lg:py-6 transition-colors 
                                ${isActive ? 'text-[#050E1A]' : 'text-gray-400'}`}>
                                        {item.title}
                                    </h2>

                                    {/* INJECTED MOBILE-ONLY IMAGE EXPANSION */}
                                    <div className={`block lg:hidden overflow-hidden transition-all duration-500 ease-in-out
                                ${isActive ? 'max-h-[300px] my-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="w-full h-48 sm:h-64 overflow-hidden rounded-[14px] relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/5" />
                                        </div>
                                    </div>

                                    {/* Expanded Content (Visible only when active) */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                                ${isActive ? 'max-h-75 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-[#44474C] text-sm font-secondary leading-relaxed max-w-[90%]">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 mt-2">
                                            <span className="font-bold text-[#050E1A] text-[16px]">From {item.price}</span>
                                            <ArrowRight size={20} className="text-[#050E1A]" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT IMAGE: STICKY ON DESKTOP, HIDDEN ON MOBILE (HANDLED VIA MOBILE INJECTION ABOVE) */}
                <div className="hidden lg:block w-full lg:w-2/3 h-screen sticky top-0 overflow-hidden">
                    <div className="w-full h-150 overflow-hidden rounded-[18px] relative">
                        <img
                            key={sections[activeIndex].image}
                            src={sections[activeIndex].image}
                            alt={sections[activeIndex].title}
                            className="w-full h-full object-cover transition-all duration-500 ease-out animate-in fade-in"
                        />
                        {/* Subtle Overlay to match the premium look */}
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                {/* BACKGROUND SCROLL TRACKER - HIDDEN ON MOBILE TO PREVENT EXTRA SPACERS */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    {sections.map((_, i) => (
                        <div key={i} className="h-screen w-full" />
                    ))}
                </div>
            </div>
        </div>
    )
}
