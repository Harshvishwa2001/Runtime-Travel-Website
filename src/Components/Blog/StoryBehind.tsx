import Image from 'next/image'
import React from 'react'
import Button from '../Common/Button'
import { div } from 'framer-motion/client';

interface TravelCardData {
    imageSrc: string;
    category: string;
    title: string;
}

export const travelBlogData: TravelCardData[] = [
    {
        imageSrc: "/Blog/Images/story.png",
        category: "Freedom",
        title: "Digital Nomad: Living and Working Anywhere, Anytime"
    },
    {

        imageSrc: "/Blog/Images/story.png",
        category: "Freedom",
        title: "What’s Buzzing on the Blog: Latest Entries"
    }
];

export default function StoryBehind() {
    return (
        <div className='px-25 py-18.75 grid grid-cols-2 gap-12.5'>
            <div className='px-6'>
                <Image src={'/Blog/Images/story.png'} alt='Story' width={1000} height={1000} className='h-110 rounded-[10px] object-fill object-top' />
            </div>
            <div>
                <div className='space-y-3.5 border-b border-[#D6D6D6] pb-10'>
                    <h2 className='text-[48px] text-[#0D0D0D]'>The Faces and Stories Behind </h2>
                    <p className='text-[16px] text-[#808080]'>Discover the inspiration behind our travel blog, where we share captivating stories and hidden gems from around the globe. Join us as we explore diverse cultures, breathtaking landscapes, and unforgettable experiences.</p>
                    <Button text='Get Started' className='text-[16px] text-white bg-[#243665] shadow-xs shadow-[#1018280D]' />
                </div>
                <div className='flex gap-8 items-center justify-between py-8'>
                    {
                        travelBlogData?.map((item, index) => (
                            <div key={index} className='flex gap-4'>
                                <Image src={item?.imageSrc} alt='Story' width={1000} height={1000} className='w-27.5 h-27.5 rounded-[10px]' />
                                <div className='mt-2'>
                                    <span className='text-[12px] text-[#0D0D0D] font-secondary p-2 border border-[#D6D6D6] rounded-lg'>{item?.category}</span>
                                    <h2 className='text-[16px] text-[#0D0D0D] mt-2.5 tracking-wide'>{item?.title}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
