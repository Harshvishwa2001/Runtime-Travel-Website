import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Destination {
    category: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const destinations: Destination[] = [
    {
        category: "SOUTH ASIA",
        title: "India",
        description: "From the Himalayan north to the tropical south — India is a continent unto itself.",
        image: "/About/Images/india.jpg",
        link: "/destinations/india"
    },
    {
        category: "HIMALAYAN",
        title: "Nepal",
        description: "Ancient temples, prayer flags, and peaks that touch the sky.",
        image: "/About/Images/nepal.jpg",
        link: "/destinations/nepal"
    },
    {
        category: "EASTERN HIMALAYA",
        title: "Bhutan",
        description: "The last Shangri-La — pristine, protected, and profoundly spiritual.",
        image: "/About/Images/bhutan.jpg",
        link: "/destinations/bhutan"
    },
    {
        category: "ISLAND NATION",
        title: "Sri Lanka",
        description: "Tea estates, ancient ruins, wildlife safaris, and turquoise shores.",
        image: "/About/Images/srilanka.jpg",
        link: "/destinations/srilanka"
    }
];

export default function MapSection() {
    return (
        <section className="relative w-full min-h-223 py-20 overflow-hidden">
            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src='/About/Images/map.png'
                    alt='World Map Background'
                    fill
                    className='object-cover h-[180px] opacity-60'
                />
                <div className="absolute inset-0 bg-[#F0EBE1]/90 " />
            </div>

            {/* 2. Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Hero Text Section */}
                <div className='flex flex-col items-center text-center mb-20 space-y-4'>
                    <span className='text-[#C8913A] text-[12px] font-sans uppercase tracking-[3px] font-bold'>
                        Where We Take You
                    </span>
                    <h2 className='text-5xl md:text-6xl text-[#131110] font-serif leading-tight'>
                        Four regions. <br /> Infinite stories.
                    </h2>
                    <p className='max-w-2xl text-[18px] text-[#2F2F2F] font-light leading-relaxed'>
                        Every destination we operate in has been walked, tested, and loved by our team.
                    </p>
                </div>

                {/* Destination Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col h-full border border-white/50"
                        >
                            {/* Image Container */}
                            <div className="relative h-45 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                {/* Bottom Inner Shadow for Image */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Text Details */}
                            <div className="p-8 flex flex-col grow bg-white space-y-4">
                                <span className="text-[#C8913A] text-[12px] tracking-[0.25em] font-sans uppercase">
                                    {item.category}
                                </span>

                                <h3 className="text-[20px] font-serif text-[#131110]">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 h-15 mb-4 text-[12px] leading-relaxed font-manrope">
                                    {item.description}
                                </p>

                                <Link
                                    href={item.link}
                                    className="inline-flex items-center text-[#C8913A] text-[11px] tracking-[0.2em] font-bold uppercase group/link w-fit"
                                >
                                    EXPLORE <ArrowRight size={12 } />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}