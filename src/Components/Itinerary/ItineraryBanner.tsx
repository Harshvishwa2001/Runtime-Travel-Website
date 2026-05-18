import Image from 'next/image';
import React from 'react';

interface ItineraryBannerProps {
    data: {
        journeyDetails: string;
        title: {
            main: string;
            accent: string;
        };
        subtitle: string;
        cities: string[];
    };
}

const itineraryData: ItineraryBannerProps = {
    data: {
        journeyDetails: "14-Day Journey · North India",
        title: {
            main: "Journey Through the",
            accent: " Himalayas.",
        },
        subtitle: "From the ancient streets of Delhi to the alpine silence of Manali — a curated expedition through the spiritual heart of North India.",
        cities: ["Delhi", "Amritsar", "Dalhousie", "Dharamshala", "Manali", "Shimla"]
    }
};

interface TripFact {
    label: string;
    value: string;
}

const tripFacts: TripFact[] = [
    { label: "Duration", value: "14 Days" },
    { label: "Starts", value: "Delhi" },
    { label: "Ends", value: "Delhi" },
    { label: "Region", value: "North India" },
    { label: "Style", value: "Cultural & Scenic" },
    { label: "Best Season", value: "Mar–Jun, Sep–Nov" },
    { label: "Pace", value: "Leisurely" },
    { label: "Group Type", value: "Private" },
];

export default function ItineraryBanner() {
    const { data } = itineraryData;

    return (
        <section>
            <div className="relative w-full h-screen overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Itinerary/Images/ItineraryBanner.png"
                        alt="Himalayan Itinerary Background"
                        width={1000}
                        height={1000}
                        priority
                        className="object-cover w-full h-screen -scale-x-100"
                    />
                </div>

                <div className="absolute container lg:mt-10 xl:mt-40 px-6 lg:px-12 xl:px-25 text-white space-y-7">
                    <div className="flex items-center gap-4 ">
                        <div className="h-px w-8 lg:w-12 bg-white/60"></div>
                        <p className="text-[9px] lg:text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-white">
                            {data.journeyDetails}
                        </p>
                    </div>

                    <h1 className="text-[24px] md:text-[48px] lg:text-[68px] w-113 leading-none tracking-tight">
                        {data.title.main}
                        <span className="italic font-bold">{data.title.accent}</span>
                    </h1>

                    <p className="text-sm md:text-[15px] lg:text-[17px] text-white max-w-xl leading-relaxed font-secondary">
                        {data.subtitle}
                    </p>

                    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] lg:text-[11px] tracking-[0.2em] uppercase font-semibold text-white">
                        {data.cities.map((city, index) => (
                            <div key={city} className="flex items-center gap-x-4">
                                <span className="hover:text-white cursor-pointer transition-all duration-300">
                                    {city}
                                </span>
                                {index < data.cities.length - 1 && (
                                    <span className="text-white select-none">•</span>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="w-full border-b border-[#24366566] bg-white lg:px-10 py-4 lg:py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 divide-x divide-gray-200">
                        {tripFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center py-1 px-2 lg:px-4 text-center"
                            >
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#243665] font-secondary mb-2">
                                    {fact.label}
                                </span>
                                <span className="text-sm lg:text-[18px] text-[#1A1A1A]">
                                    {fact.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}