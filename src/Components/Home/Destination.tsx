'use client'

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react"; // Optional: for the '+' icon
import Image from 'next/image';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface HeritageSlide {
    id: number;
    title: string;
    category: string;
    image: string;
}

const slides: HeritageSlide[] = [
    { id: 1, title: "India", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey2.jpg" },
    { id: 2, title: "Jodhpur", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey3.jpg" },
    { id: 3, title: "Jaisalmer", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey2.jpg" },
    { id: 4, title: "India", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey3.jpg" },
    { id: 5, title: "Jodhpur", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey2.jpg" },
    { id: 6, title: "Jaisalmer", category: "SUBCONTINENT HERITAGE", image: "/Home/Images/journey3.jpg" },
];

export default function Destination() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
    const AUTOPLAY_DELAY = 5000;

    return (
        <div className="bg-white py-0 lg:py-20">
            {/* Header Section */}
            <div className='max-w-full mx-auto px-4 lg:px-25 mb-12'>
                <h2 className='text-2xl lg:text-[48px] text-[#1A1A1A] font-serif'>Discover Destinations</h2>
                <p className='max-w-xl font-manrope text-[#6A7282] text-sm lg:text-[16px]'>
                    Curated experiences that transcend travel, offering deep immersion into local culture,
                    history, and unparalleled luxury.
                </p>
            </div>

            <div className="max-w-full mx-auto pl-6 lg:pl-25">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{ 768: { slidesPerView: 3 } }}
                    loop={false}
                    autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="overflow-visible"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative aspect-square rounded-[18px] overflow-hidden group cursor-pointer shadow-sm">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 450px) 100vw, 33vw"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                                {/* Content Container */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="text-white z-10 transition-transform duration-500 group-hover:-translate-y-4">
                                        <p className="text-[10px] tracking-[0.25em] font-semibold opacity-80 mb-2 uppercase">
                                            {slide.category}
                                        </p>
                                        <h3 className="text-[38px] lg:text-[42px] font-serif leading-tight">
                                            {slide.title}
                                        </h3>
                                    </div>

                                    <div className="mt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                                        <button className="flex items-center gap-2 text-white text-sm font-medium tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-colors">
                                            Explore More
                                            <ArrowRightIcon size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Precision Progress Line */}
                <div className="max-w-full mx-auto pr-25">
                    <div className="mt-16 h-0.5 bg-gray-200 relative rounded-2xl overflow-hidden">
                        <div className="flex w-full h-full">
                            {slides.map((_, i) => (
                                <div key={i} className="flex-1 relative h-full">
                                    {activeIndex === i && (
                                        <motion.div
                                            key={`line-segment-${i}`}
                                            initial={{ scaleX: 0, originX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                                            className="absolute inset-0 bg-[#1A1A1A]"
                                        />
                                    )}
                                    {activeIndex > i && (
                                        <div className="absolute inset-0 bg-[#1A1A1A] z-10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}