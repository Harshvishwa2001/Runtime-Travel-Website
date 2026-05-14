import Image from 'next/image'
import Button from '../Common/Button'

interface ExperienceType {
    img: string,
    title: string
    desc: string
    tag: string
}

const ExperienceData: ExperienceType[] = [
    { img: "/Destination/Images/exp1.jpg", title: "Royal Palace Sojourn", desc: "Sleep where maharajas dreamed in the Umaid Bhawan suites.", tag: "Luxury Heritage" },
    { img: "/Destination/Images/exp2.jpg", title: "The Marwar Kitchen", desc: "Master the art of red chili and saffron in a private atelier.", tag: "Culinary Art" },
    { img: "/Destination/Images/exp3.jpg", title: "Indigo Soul Walk", desc: "Uncover the hidden courtyards of the historic blue district.", tag: "Cultural Immersive" },
]

export default function Experience() {
    return (
        <div className='px-25 py-8'>
            <h2 className='font-manrope font-semibold text-[48px] text-[#1F1B17]'>Experience Spotlight</h2>
            <div className='mt-16 grid grid-cols-2 gap-12'>
                <div className='relative inset-0 overflow-hidden rounded-[32px]'>
                    <Image src={"/Destination/Images/Experience.jpg"} alt='Experience' width={1000} height={1000} className='w-170  min-h-screen object-cover object-[70%_center] scale-125' />
                    <div className='absolute inset-0 bg-black/10 ' />

                    <div className='absolute bottom-14 left-0 px-10 md:px-12 space-y-6 text-white'>
                        <p className='text-[12px] font-bold tracking-widest uppercase font-manrope'>Signature Adventure</p>
                        <h2 className='text-[48px] font-semibold leading-12 text-[#FFF8F4] font-manrope'>Sunset Over <br />the Thar</h2>
                        <p className='border-l border-[#FFF8F44D] text-[#FFF8F4] text-[18px] font-light font-manrope pl-4 max-w-sm'>Traverse the golden dunes on a private camel trek, ending with a starlit feast curated by royal chefs.
                        </p>
                        <Button text='Details & Booking' className='mt-4 font-manrope uppercase text-[12px]' />
                    </div>
                </div>
                <div className='py-10 flex flex-col'>
                    {
                        ExperienceData?.map((item, index) => (
                            <div key={index} className='flex items-center gap-8 pb-3.5 pt-8 border-b border-[#E9BCB533]'>
                                <Image src={item?.img} width={1000} height={1000} alt={item?.title} className='w-32 h-40 rounded-[16px]' />
                                <div className='space-y-3'>
                                    <h2 className='text-[24px] text-[#1F1B17] font-semibold font-manrope'>{item?.title}</h2>
                                    <p className='text-sm font-light text-black font-manrope'>{item?.desc}</p>
                                    <p className='text-[10px] text-[#243665] tracking-widest uppercase'>{item?.tag}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
