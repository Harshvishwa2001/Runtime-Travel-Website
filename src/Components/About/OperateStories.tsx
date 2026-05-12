import { div } from 'framer-motion/client'
import HeaderTags from '../Common/HeaderTags'
import Image from 'next/image'

interface StoryImages {
    tag: string,
    name: string,
    url: string
}

const StoryData = [
    { tag: "South Asia", name: "India", url: "/About/Images/ourstory.jpg" },
    { tag: "Himalayan", name: "Nepal", url: "/About/Images/nepal.jpg" },
    { tag: "Eastern Himalaya", name: "Bhutan", url: "/About/Images/bhutan.jpg" },
    { tag: "Island Nation", name: "Sri Lanka", url: "/About/Images/srilanka.jpg" },
    { tag: "Indian Ocean", name: "Maldives", url: "/About/Images/maldives.jpg" },
]

export default function OperateStories() {
    return (
        <div className='px-25 py-18.75 space-y-5'>
            <HeaderTags data={{ name: "Where We Operate" }} />
            <h2 className='text-[52px] leading-14'>Four regions. <br /> Infinite stories.</h2>
            <div className='grid grid-cols-5 relative gap-4'>
                {
                    StoryData.map((item, index) => (
                        <div key={index} className='relative'>
                            <Image alt={item?.name} width={1000} height={1000} className='w-full h-67'
                                src={item?.url} />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                            <div className='absolute bottom-6 left-6 spay-4'>
                                <p className='font-secondary text-[8px] uppercase text-[#E8B870]'>{item?.tag}</p>
                                <p className='font-primary text-[22px] text-white'>{item?.name}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
