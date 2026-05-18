'use client'

import Image from 'next/image';
import { useState } from 'react';
import Button from '../Common/Button';

interface JourneyProps {
    data: {
        header: string,
        title: {
            main: string,
            accent: string,
        },
        desc: string,
    }
}

const journeyData: JourneyProps = {
    data: {
        header: "About This Journey",
        title: {
            main: "Culture, history, and mountain serenity —woven into",
            accent: "14 days."
        },
        desc: "Experience the spiritual heart of North India and the breathtaking beauty of the Himalayas on this immersive journey curated by Travel East. From the historic streets of Delhi and Amritsar to the peaceful monasteries of Dharamshala and the alpine landscapes of Manali and Shimla, this journey blends culture, history, and mountain serenity with thoughtfully designed experiences.",
    }
}

const navItems = [
    { name: 'Our Program', id: 'program' },
    { name: 'Important Notes', id: 'notes' },
    { name: 'Trips Highlight', id: 'highlights' },
];
export default function ItineraryJourney() {
    const { data } = journeyData;
    return (
        <>
            <div className='px-4 lg:px-25 py-6 lg:py-18.75 grid lg:grid-cols-2 items-center gap-8'>
                <div className='space-y-5 '>
                    <p className='font-secondary text-[#243665] text-sm lg:text-[16px] uppercase tracking-widest'>{data?.header}</p>
                    <h2 className='text-[#1A1A1A] text-2xl lg:text-[50px] leading-10 lg:leading-14 lg:max-w-lg'>{data?.title?.main}
                        <span className='text-[#C8913A] italic'>{data?.title?.accent}</span>
                    </h2>
                    <p className='text-sm lg:text-[18px] text-[#555555] font-secondary tracking-wide'>{data?.desc}</p>
                    <Button text='Create Your Trip' className='text-white text-sm lg:text-[16px] bg-[#243665] uppercase lg:mt-8' />
                </div>
                <div>
                    <Image src={'/Itinerary/Images/journeu.png'} alt='journey' width={1000} height={1000} className='rounded-xl' />
                </div>
            </div>
            <ItineraryNav />
        </>
    )
}

export function ItineraryNav() {
    const [activeTab, setActiveTab] = useState('Our Program');

    return (
        <nav className="w-full bg-white border-b border-[#0000001A]">
            <div className="w-full mx-auto px-4 lg:px-32.5">
                <div className="flex justify-start lg:justify-between gap-4 lg:gap-32">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.name)}
                                className="relative bottom-0 py-6 transition-all duration-500"
                            >
                                {/* Nav Text */}
                                <span className={`text-sm lg:text-lg font-serif tracking-wide ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                                    }`}>
                                    {item.name}
                                </span>

                                {/* Active Indicator (The Glow effect from your image) */}
                                {isActive && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full lg:w-[160%] h-20 overflow-hidden pointer-events-none">
                                        {/* The soft radial amber glow */}
                                        <div
                                            className="absolute -bottom-6.25 left-1/2 -translate-x-1/2 w-full h-full rounded-[100%]"
                                            style={{
                                                background: 'radial-gradient(circle, rgba(212,175,55,0.15) 100%, rgba(255,255,255,0) 100%)',
                                                filter: 'blur(8px)'
                                            }}
                                        />
                                        {/* The solid accent line (optional, based on design) */}
                                        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
