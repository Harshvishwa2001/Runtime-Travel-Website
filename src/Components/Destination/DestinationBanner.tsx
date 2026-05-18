import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React, { JSX } from 'react'
import { FaMoneyBills } from 'react-icons/fa6'
import { MdOutlineAccessTime } from 'react-icons/md'
import Button from '../Common/Button'

interface packageTypes {
    icon: JSX.Element,
    text: string
}



const PackageData: packageTypes[] = [
    { icon: <Calendar size={16} />, text: "Oct - March" },
    { icon: <MdOutlineAccessTime size={16} />, text: "3-4 Days" },
    { icon: <FaMoneyBills size={16} />, text: "Starting at $850" }
]

export default function DestinationBanner() {
    return (
        <div className='relative inset-0'>
            <Image alt='DestinationBanner' src={'/Destination/Images/Destination.jpg'} width={1000} height={1000} className='min-w-full h-screen' />
            <div className='absolute inset-0 bg-black/30' />
            <div className='absolute bottom-50 lg:bottom-20 left-0 px-4 lg:px-25 space-y-4 lg:space-y-6 text-white'>
                <h2 className='font-manrope text-4xl lg:text-[70px] text-white leading-10'>Jodhpur</h2>
                <p className='font-arial text-lg lg:text-[30px] text-white/80'>Step into timeless royalty</p>
                <div className='lg:flex items-center space-y-2 lg:space-y-0 gap-4 py-6 lg:py-0'>
                    {PackageData.map((item, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <div className='text-white'>
                                {item.icon}
                            </div>
                            <p className='text-sm text-white font-manrope font-semibold tracking-wide'>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Button className='font-manrope uppercase text-[12px] lg:text-sm font-medium bg-white' text='Explore Itineraries' />
                    <Button className='font-manrope uppercase text-[12px] lg:text-sm font-medium bg-white' text='Plan Your Trip' />
                </div>
            </div>
        </div>
    )
}
