import React from 'react'
import JourneyDetails from './JourneyDetails'
import RunningTags from './RunningTags'

export default function AboutJourney() {
    return (
        <div>
            <div className='flex items-end justify-between px-14 py-10'>
                <div>
                    <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest py-6'>
                        <span className='w-9 h-px bg-[#C8913A] '></span> What Drives Us
                    </p>
                    <h2 className="text-[52px] w-lg leading-12">Three commitments.</h2>
                    <h2 className='text-[52px]'>Every <span className="text-[#C8913A] italic">journey.</span></h2>
                </div>
                <div>
                    <p className='text-[#9A938E] text-sm max-w-70'>The principles that have guided Travel East since the very first trip we ever planned.</p>
                </div>
            </div>
            <div>
                <JourneyDetails />
                <RunningTags/>
            </div>
        </div>
    )
}
