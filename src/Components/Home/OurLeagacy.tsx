import { JSX } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import SlideImage from '../Common/SlideImage';

interface TravelItem {
    icon: JSX.Element;
    name: string;
    desc: string;
}

const travel: TravelItem[] = [
    {
        icon: <FiUsers size={22} />, name: "We cap at 12. Always.", desc: "Large tour buses and anonymous crowds are the antithesis of real travel. Every Shanti journey carries a maximum of 12 travelers — small enough to eat at tables locals actually visit, stay in guesthouses that don't take groups, and travel at a rhythm that lets you breathe."
    },
    {
        icon: <FiUsers size={22} />, name: "Not a guidebook.", desc: "Every destination specialist on our team was born, grew up, or has lived for years in the region they lead. They know which temple opens early for silence, which family makes the best noodles three streets off the market, and when the fog rolls through the valley at dawn."
    },
    {
        icon: <FiUsers size={22} />, name: "Nothing is copy-paste.", desc: "We don't reuse itineraries. Your journey is built from a conversation — your pace, your passions, your idea of luxury (a mountain lodge or a city riad?). Our experts spend days crafting something that could only belong to you."
    },
    {
        icon: <FiUsers size={22} />, name: "Leave it better ", desc: "We partner exclusively with locally-owned accommodation, prioritise land and boat transport over short-haul flights, and contribute a portion of every booking to community conservation projects in each destination."
    },
]

export default function OurLeagacy() {
    return (
        <>
            <div className='grid grid-cols-2 gap-10 py-20 px-25'>
                <div className='space-y-10'>
                    <h2 className='text-[60px] leading-16'>Why travel with <br />Travel East</h2>
                    <p className='text-[#6A7282] w-87.25'>For three decades we have bridged the gap
                        between the curious traveler and the guarded
                        secrets of the orient</p>
                    <button className='flex gap-6 items-center'><BsArrowRight size={20} className='w-10 h-10 p-2 rounded-full border' /> Our Legacy</button>
                    <div className='border-l mt-20 pl-6 border-black leading-10'>
                        <p className='text-[#243665] text-[18px]'>Founding Ethos</p>
                        <p className='text-2xl'>Preservation through exploration.</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-13.75'>
                    {
                        travel.map((item, index) => (
                            <div key={index} className='space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-2xl text-[#FED97B]'>0{index + 1}</p>
                                    <FiUsers size={22} />
                                </div>
                                <p className='text-2xl text-[#0B1628]'>{item.name}</p>
                                <p className='text-[16px] text-[#6A7282]'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <SlideImage/>
            </div>
        </>
    )
}
