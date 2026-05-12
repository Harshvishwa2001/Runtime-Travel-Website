"use client";
import { useState } from "react";
import Image from "next/image";

const sections = [
    {
        id: "01",
        label: "EXPERTISE",
        title: "Deep local",
        subtitle: "knowledge.",
        description: "We are proud of our unrivalled ground service — an established network of offices and partnerships throughout India, with a team of India's finest local guides ensuring an authentic, hassle-free experience at every turn.",
        image: "/About/Images/Journey.jpg",
    },
    {
        id: "02",
        label: "Financial Security",
        title: "Safe & Secure",
        subtitle: "Transactions",
        description: "Your financial security is our priority. We offer fully bonded travel services to ensure your investment is protected from the moment you book until you return home.",
        image: "/About/Images/Journey.jpg",
    },
    {
        id: "03",
        label: "Genuine Service",
        title: "Personalized",
        subtitle: "Care",
        description: "Experience hospitality like never before. Our dedicated team is available 24/7 to cater to your specific needs and ensure your journey is exactly as you imagined.",
        image: "/About/Images/Journey.jpg",
    },
];

export default function JourneyDetails() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex w-full h-150 bg-white overflow-hidden font-serif">
            {sections.map((section, index) => {
                const isActive = activeIndex === index;

                return (
                    <div
                        key={section.id}
                        onClick={() => setActiveIndex(index)}
                        className={`relative h-full transition-all duration-800 ease-in-out cursor-pointer border-l border-gray-100 first:border-l-0 ${isActive ? "flex-4" : "flex-[0.5] min-w-61.25"
                            }`}
                    >

                        {/* Background Image - Always present for smoother cross-fading */}
                        <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}>
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/55" />
                            <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/20 to-transparent" />
                        </div>

                        {/* Active Content */}
                        <div className={`relative top-20 z-10 p-12  flex flex-col justify-center h-full space-y-4.5 max-w-xl text-white transition-all duration-700 ${isActive ? "opacity-100 translate-x-0 delay-300" : "opacity-0 -translate-x-4 pointer-events-none"
                            }`}>
                            <span className="text-[#C8913A] text-[10px] tracking-widest uppercase font-sans ">
                                {section.id} — {section.label}
                            </span>
                            <h2 className="text-[38px] leading-tight font-primary">
                                {section.title} <br />
                                <span className="italic font-light text-[#E8B870]">{section.subtitle}</span>
                            </h2>
                            <p className="text-sm text-white/60 leading-relaxed max-w-md">
                                {section.description}
                            </p>
                        </div>

                        {/* Collapsed View (Vertical Text) */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center py-12 transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}>
                            <span className="text-[#C8913A] text-[44px] mb-8 font-extralight">
                                {section.id}
                            </span>
                            <p
                                className="uppercase tracking-[0.3em] text-sm text-[#131110] whitespace-nowrap"
                                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                            >
                                {section.label}
                            </p>
                            <div className="mt-8 w-px h-20 bg-[#C8913A]/30" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}