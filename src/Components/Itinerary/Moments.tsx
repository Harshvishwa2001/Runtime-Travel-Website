'use client'

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles - MANDATORY for layout
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const itineraryDays = [
    {
        day: "Day 01",
        title: "Arrival in Delhi",
        description: "Delhi is one of the oldest continuously inhabited cities in the world, where Mughal history, British-era planning, and modern India coexist. Arrive in New Delhi and transfer to your hotel. The remainder of the day is at leisure — settle in, breathe it in.",
        image: "/Itinerary/Images/moment1.jpg",
    },
    {
        day: "Day 02",
        title: "Delhi Sightseeing",
        description: "Explore Old and New Delhi, discovering grand ceremonial avenues, historic monuments, and vibrant bazaars that reflect the many layers of India's capital city.",
        highlights: "RED FORT & CHANDNI CHOWK",
        image: "/Itinerary/Images/moment2.jpg",
    },
    {
        day: "Day 03",
        title: "Delhi to Amritsar",
        description: "Travel to Amritsar, the spiritual center of Sikhism. Visit Jallianwala Bagh and attend the Wagah Border ceremony — a theatrical display of synchronized military tradition performed daily by India and Pakistan.",
        highlights: "Wagah Border Ceremony",
        image: "/Itinerary/Images/moment3.jpg",
    },
    {
        day: "Day 04",
        title: "Golden Temple",
        description: "Experience the peace of the Golden Temple at dawn, the most sacred site for Sikhs worldwide.",
        highlights: "SPIRITUAL MORNING",
        image: "/Itinerary/Images/moment1.jpg",
    },
];

export default function Moments() {
    return (
        <section className="py-10 lg:py-24 bg-white">
            <p className='font-secondary text-[10px] text-[#C8913A]  uppercase text-center'>The Journey</p>
            <h2 className='text-2xl lg:text-[46.47px] text-[#1A1A1A] text-center mb-6 lg:mb-15'>Day by day. Moment by moment.</h2>
            <div className="mx-auto pl-4 lg:pl-25">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    grabCursor={true}
                    autoHeight={false}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="itinerary-swiper !flex flex-col"
                >
                    {itineraryDays.map((item, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="flex flex-col h-full group ">

                                {/* Card Image */}
                                <div className="relative w-full h-80 lg:min-h-113.25 overflow-hidden rounded-2xl mb-8">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 453px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Card Text Content */}
                                <div className="flex flex-col grow space-y-2 lg:space-y-4 px-4 lg:px-10">
                                    <span className="text-[10px] lg:text-[12px] tracking-[0.2em] uppercase text-[#75777C] font-arial">
                                        {item.day}
                                    </span>

                                    <h3 className="text-lg lg:text-2xl font-manrope text-[#050E1A] tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-[12px] lg:text-sm text-[#44474C] leading-relaxed font-arial grow">
                                        {item.description}
                                    </p>

                                    {item.highlights && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#C8913A] text-[11px]">✦</span>
                                            <span className="text-[10px] tracking-[0.15em] uppercase text-[#C8913A] font-secondary">
                                                {item.highlights}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom CSS to handle the Swiper internal flex issues */}
            <style jsx global>{`
                .swiper-wrapper {
                    display: flex !important;
                }
                .swiper-slide {
                    height: auto !important;
                    display: flex !important;
                }
            `}</style>
        </section>
    );
}