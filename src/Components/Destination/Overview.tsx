import { div } from 'framer-motion/client'
import { MapPinIcon } from 'lucide-react'
import React, { JSX } from 'react'
import { LuLanguages } from 'react-icons/lu'
import { MdOutlineDiamond } from 'react-icons/md'
import { PiThermometerSimpleFill } from 'react-icons/pi'
import { text } from 'stream/consumers'

interface OverviewType {
    icon: JSX.Element,
    text: string,
    subtext: string
}

const overviewData: OverviewType[] = [
    { icon: <MapPinIcon size={22} />, text: "Location", subtext: "Rajasthan, India" },
    { icon: <PiThermometerSimpleFill size={22} />, text: "Climate", subtext: "Arid / Sunny" },
    { icon: <LuLanguages size={22} />, text: "Language", subtext: "Hindi / Marwari" },
    { icon: <MdOutlineDiamond size={22} />, text: "Style", subtext: "Luxury Heritage" },
]

export default function Overview() {
    return (
        <div className='px-25 py-27 grid grid-cols-2 gap-14.5'>
            <div className='space-y-6'>
                <p className='text-[10px] font-extrabold font-manrope uppercase text-[#243665] tracking-[0.2rem]'>The Blue City</p>
                <h2 className='text-[48px] font-manrope  leading-12 text-[#050E1A]'>
                    A tapestry of cobalt alleys and sandstone fortresses.
                </h2>

                <p className='font-arial text-[20px] text-[#1A1C1CB2]'>
                    Rising like a desert mirage against the scorched Thar sands, Jodhpur—
                    the Sun City—is a living chronicle of Marwar bravery. Every street is a
                    brushstroke of indigo, a tradition started by the Brahmins to keep
                    homes cool and repel insects, now an iconic visual identity that
                    captivates every traveler. <br /><br />
                    Dominated by the formidable Mehrangarh Fort, the city balances its
                    rugged martial history with a sophisticated culture of folk music,
                    exquisite crafts, and a culinary heritage that defines Rajasthani
                    opulence.
                </p>
            </div>

            <div className='grid grid-cols-2 py-12 gap-6.5'>
                {
                    overviewData?.map((item, index) => (
                        <div key={index} className='space-y-2 px-10 py-15'>
                            <div className='w-5 h-5'>{item?.icon}</div>
                            <p className='text-[#1A1C1C66] text-[10px] font-manrope font-extrabold uppercase tracking-[0.1rem] pt-4'>{item?.text}</p>
                            <p className='text-[#1A1C1C] text-[18px] font-manrope font-bold'>{item?.subtext}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
