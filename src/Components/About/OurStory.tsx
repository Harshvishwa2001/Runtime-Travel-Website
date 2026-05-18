import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
        <div className='grid lg:grid-cols-2 py-10 lg:py-30 px-6 lg:px-44.25 gap-18'>
            <div className='space-y-6 lg:space-y-12'>
                <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest'>
                    <span className='w-9 h-px bg-[#C8913A] '></span> Our Story
                </p>
                <h2 className="text-3xl lg:text-[58px] lg:w-lg leading-10 lg:leading-14">Where every journey begins with a <span className="text-[#C8913A] italic">conversation.</span>
                </h2>
                <div className="relative inline-block">
                    <div className="overflow-hidden">
                        <Image
                            src="/About/Images/ourstory.jpg"
                            alt="Our Story - Monument"
                            width={500}
                            height={552}
                            className="object-contain -ml-10 h-100 lg:h-138 display-block"
                        />
                    </div>

                    <div className="absolute right-0 lg:right-0 -bottom-10 lg:-bottom-8 bg-[#C8913A] text-white p-8 w-30 h-30 flex flex-col justify-center items-center">
                        <span className="text-[40px] leading-none">
                            50+
                        </span>

                        <div className="mt-2 text-center">
                            <p className="text-[8px] tracking-[0.2em] uppercase leading-tight font-light">
                                Years of<br />Expertise
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-sm lg:text-[18px] tracking-widest font-secondary text-[#585250] leading-5 lg:leading-8'>
                    Travel East is a <span className='font-bold'>full-service Inbound Tour Operator </span> based in New Delhi, offering premium ground services for leisure, business, special interest, and experiential travel to India, Nepal, Bhutan, and Sri Lanka. <br /> <br />
                    We are a unit of <span className='font-bold'>DEX Group</span> — a multi-award winning travel organisation with over 50 years of history in the aviation and tourism sector. Built on an experienced team and a widespread network of self-owned and associate offices throughout the Indian subcontinent, we are reliable, innovative, and deeply committed to integrity and transparency.  <br /> <br />
                    Today, where world travellers demand destination expertise and premium service, <span className='font-bold'>we deliver on both counts</span>. Our operations are an amalgamation of uniquely crafted tours, extraordinary experiences, all-inclusive values, and unmatched service — from the moment you plan, to the moment you return home. <br /> <br />
                </p>

                <p className='bg-[#F7F4F0] border-l-2 border-[#C8913A] px-6 py-5 italic text-sm lg:text-[18px]'>
                    "Travel is personal. Our India travel experts listen, understand, and assist you to ensure all your expectations are met — in the right way."
                </p>
                <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest py-12'>
                    <span className='w-9 h-px bg-[#C8913A] '></span> Learn about DEX Group
                </p>
            </div>
        </div>
    )
}
