import { JSX } from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { PiThermometerHotFill } from 'react-icons/pi';
import { TbBuildingCircus } from 'react-icons/tb';

interface SeasonType {
    icon: JSX.Element,
    text: string
    color: string
}
interface SeasonProps {
    title: string;
    months: string;
    description: string;
    opacity: string
}

const seasons: SeasonProps[] = [
    {
        title: "Winter",
        months: "(Oct–Mar)",
        description: "The absolute best time. Cool days (20-25°C) and crisp nights. Perfect for desert camping and city walks.",
        opacity: 'opacity-100'
    },
    {
        title: "Summer",
        months: "(Apr–Jun)",
        description: "Intensely hot, exceeding 40°C. Best avoided unless you prefer complete solitude and indoor luxury.",
        opacity: 'opacity-60'
    },
    {
        title: "Monsoon",
        months: "(Jul–Sep)",
        description: "Dramatic skies and lower temperatures, but humidity rises. A unique time to see the desert turn green.",
        opacity: 'opacity-100'
    }
];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const season: SeasonType[] = [
    { icon: <IoIosStarOutline size={22} />, text: "Peak", color: 'text-[#243665]' },
    { icon: <PiThermometerHotFill size={22} />, text: "Heat", color: 'text-[#1F1B17]/40' },
    { icon: <TbBuildingCircus size={22} />, text: "Festivals", color: 'text-[#243665]' },
]

export default function VistingTime() {
    return (
        <div className='px-25 py-12'>
            <div className='text-center space-y-4'>
                <h2 className='font-medium font-manrope text-[48px] text-[#050E1A]'>Best Time to Visit</h2>
                <p className='min-w-2xl px-12.5'>The climate of the Thar Desert is dramatic. Planning your timing is essential for a
                    comfortable journey.
                </p>
            </div>
            <div className='px-7 py-12 space-y-4'>
                <div className='flex items-center justify-between'>
                    {
                        season?.map((item, index) => (
                            <div key={index} className='flex flex-col items-center justify-center'>
                                <div className={`w-5 h-5 ${item?.color} mb-2`}>{item?.icon}</div>
                                <p className={`text-[10px] font-arial font-bold ${item?.color}`}>{item?.text}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-between border-b border-[#24366533]'>
                    {
                        months?.map((item, index) => (
                            <div key={index} className=' mb-4 '>
                                <p className='text-[#5E3F3A99] uppercase font-manrope font-bold  text-[10px] tracking-wider '>{item}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-full mx-auto space-y-10">

                    {/* Progress Bar from image_a0a0fd.png */}
                    <div className="relative w-full h-3.5 bg-gray-200 rounded-full overflow-hidden flex">
                        {/* Winter Segment */}
                        <div className="h-full bg-slate-400 w-[25%]" />
                        {/* Summer Segment */}
                        <div className="h-full bg-gray-300 w-[50%]" />
                        {/* Monsoon Segment */}
                        <div className="h-full bg-slate-400 w-[25%]" />
                    </div>

                    {/* Season Cards from image_a0a152.png */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {seasons.map((season, index) => (
                            <div
                                key={index}
                                className={`p-8 border border-[#0000001A] rounded-[32px] bg-white flex flex-col justify-between ${season?.opacity}`}
                            >
                                <div>
                                    <h3 className="text-[16px] font-semibold text-black leading-wide font-manrope">
                                        {season.title} <span className={`font-medium text-black`}>{season.months}</span>
                                    </h3>
                                    <p className={`mt-4 text-[#5E3F3A] text-sm leading-relaxed font-arial`}>
                                        {season.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
