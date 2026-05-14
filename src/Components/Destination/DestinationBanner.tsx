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
            <div className='absolute bottom-20 left-0 px-10 md:px-25 space-y-6 text-white'>
                <h2 className='font-manrope text-[70px] text-white leading-10'>Jodhpur</h2>
                <p className='font-arial text-[30px] text-white/80'>Step into timeless royalty</p>
                <div className='flex items-center gap-4'>
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
                    <Button className='font-manrope uppercase text-sm font-medium' text='Explore Itineraries' />
                    <Button className='font-manrope uppercase text-sm font-medium' text='Plan Your Trip' />
                </div>
            </div>
        </div>
    )
}
