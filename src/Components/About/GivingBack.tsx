import Image from 'next/image'
import { SlDrop } from 'react-icons/sl'
import HeaderTags from '../Common/HeaderTags'
import { JSX } from 'react'
import { User2 } from 'lucide-react'
import { MdMerge } from 'react-icons/md'

interface GivingTags {
    icon: JSX.Element
    title: string
    desc: string
}

const givingData: GivingTags[] = [
    { icon: <SlDrop size={14} className='mt-2 text-[#C8913A]' />, title: "Sustainability Policy", desc: "Every itinerary is built with environmental impact in mind, from accommodation choices to transport routes and local supplier selection." },
    { icon: <MdMerge size={16} className='mt-2 text-[#C8913A]' />, title: "We Plant Trees", desc: "For every journey booked with Travel East, we contribute to verified reforestation programmes across our destination regions." },
    { icon: <User2 size={16} className='mt-2 text-[#C8913A]' />, title: "Community First", desc: "We hire local guides, partner with family-run properties, and invest directly in the communities that make our destinations extraordinary." },
]

export default function GivingBack() {
    return (
        <div className='relative'>
            <Image src={'/About/Images/giving.jpg'} width={1000} height={1000} alt='Giving Back' className='w-full max-h-247.75 object-cover' />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
            <div className='absolute inset-0 max-w-115 mx-25 my-25 space-y-8'>
                <HeaderTags data={{ name: "Giving Back" }} />
                <h2 className='text-[56px] leading-14 text-white'>Travel that gives back more than it <span className='text-[#E8B870]'>takes.</span>
                </h2>

                <p className='text-[20px] font-secondary text-white/55'>Responsible tourism is not a policy for us — it is how we operate. From the communities we move through to the environments we visit, every journey we design carries a commitment to leave things better.</p>

                {
                    givingData.map((item, index) => (
                        <div key={index} className='flex items-start gap-2'>
                            <span>{item?.icon}</span>
                            <div className='flex items-center'>
                                <p className='text-[16px] text-white/60 font-sans'><span className='font-bold font-primary text-white/80'>{item?.title}</span> — {item?.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
