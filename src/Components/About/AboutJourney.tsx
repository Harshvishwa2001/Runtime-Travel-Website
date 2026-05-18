import React from 'react'
import JourneyDetails from './JourneyDetails'
import RunningTags from './RunningTags'

export default function AboutJourney() {
    return (
        <div>
            <div className='lg:flex items-end justify-between px-6 lg:px-14 py-6 lg:py-10'>
                <div className=''>
                    <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest py-6'>
                        <span className='w-9 h-px bg-[#C8913A] '></span> What Drives Us
                    </p>
                    <h2 className="text-3xl lg:text-[52px] lg:w-lg leading-10 lg:leading-12">Three commitments.</h2>
                    <h2 className='text-3xl lg:text-[52px]'>Every <span className="text-[#C8913A] italic">journey.</span></h2>
                </div>
                <div>
                    <p className='text-[#9A938E] text-sm max-w-70 mt-6'>The principles that have guided Travel East since the very first trip we ever planned.</p>
                </div>
            </div>
            <div>
                <JourneyDetails />
                <RunningTags/>
            </div>
        </div>
    )
}
