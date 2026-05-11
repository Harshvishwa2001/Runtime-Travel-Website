"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper core and its types
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

// 1. Define the Testimonial interface
interface Testimonial {
    name: string;
    role: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "John Smith",
        role: "Founder of Travel East",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/Home/Images/demo.png"
    },
    {
        name: "Sarah Jenkins",
        role: "Explorer",
        text: "The journeys designed here are truly unique. I discovered curated destinations and unforgettable experiences tailored exactly to my vision, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/Home/Images/journey1.png"
    }
];

export default function HomeTestimonial() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className='py-18.75 flex flex-col items-center justify-center overflow-hidden'>
            <h2 className='text-[48px] text-[#1A1A1A]'>Voices of the Discerning</h2>

            <div className="max-w-2xl w-full relative">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    spaceBetween={50}
                    slidesPerView={1}
                    className="w-full"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <p className='text-2xl italic pt-16.75 text-center'>
                                    {t.text}
                                </p>
                                <div className="flex flex-col items-center justify-center py-10">
                                    <Image
                                        src={t.image}
                                        width={100}
                                        height={100}
                                        alt={t.name}
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="text-[19px] text-[#201F2E] pt-3 uppercase font-bold tracking-wider">
                                        {t.name}
                                    </p>
                                    <p className="text-[18px] text-[#6E6C83] font-extralight font-secondary">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex gap-10 justify-center">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-12 h-12 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <GoArrowLeft size={22} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-12 h-12 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <GoArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
}