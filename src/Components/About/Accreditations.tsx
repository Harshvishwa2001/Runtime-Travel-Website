import { JSX } from 'react'
import HeaderTags from '../Common/HeaderTags'
import { MdAccessTime } from 'react-icons/md'
import { VscDiffAdded } from 'react-icons/vsc'
import { IoIosStarOutline } from 'react-icons/io'
import { SlDrop } from 'react-icons/sl'
import { LiaUserAltSolid } from 'react-icons/lia'
import { LuMountain } from 'react-icons/lu'

interface AccData {
    icon: JSX.Element,
    name: string,
    desc: string
}

const AccData = [
    { icon: <MdAccessTime size={34} />, name: "Ministry of Tourism", desc: "Government of India — Official recognition" },
    { icon: <VscDiffAdded size={34} />, name: "IATA", desc: "International Air Transport Association" },
    { icon: <IoIosStarOutline size={34} />, name: "IATO", desc: "Indian Association of Tour Operators" },
    { icon: <SlDrop size={34} />, name: "TAAI", desc: "Travel Agents Association of India" },
    { icon: <LiaUserAltSolid size={34} />, name: "ASTA", desc: "American Society of Travel Agents" },
    { icon: <LuMountain size={34} />, name: "DEX Group", desc: "Multi-award winning travel organisation" },
]

export default function Accreditations() {
    return (
        <div className='flex items-center justify-between'>
            <div className='px-25 py-18.75 max-w-lg space-y-5'>
                <HeaderTags data={{ name: "Accreditations" }} />
                <h2 className='text-[38px] text-black leading-12'> Recognised by every body that matters.</h2>
                <p>Our accreditations aren't just logos — they are the guarantee that your money, your journey, and your trust are in hands that are held to the highest global standard.</p>
            </div>
            <div className='grid grid-cols-3 gap-1 px-10'>
                {
                    AccData.map((item, index) => (
                        <div key={index} className='bg-[#F7F4F0] px-7 py-8 space-y-3 m-px'>
                            <div className='text-[#C8913A]'>{item.icon}</div>
                            <h3 className='text-[12px] text-[#131110] tracking-widest uppercase'>{item.name}</h3>
                            <p className='text-[#9A938E]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
