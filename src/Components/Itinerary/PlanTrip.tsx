import { Clock } from "lucide-react";
import { JSX } from "react";
import { GiMountainCave } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";

interface SpecialHighlight {
    iconType: JSX.Element
    title: string;
    description: string;
}

const specialHighlightsData: SpecialHighlight[] = [
    {
        iconType: <Clock size={24} />,
        title: "Langar at the Golden Temple",
        description: "Shared meals, shared humanity — thousands fed daily in a remarkable tradition of service that transcends faith."
    },
    {
        iconType: <HiOutlineHome size={24} />,
        title: "Himalayan Monastery Walk",
        description: "Tashijong at dawn — prayer flags, mountain silence, and the scent of juniper incense rising into still air."
    },
    {
        iconType: <GiMountainCave size={24} />,
        title: "Rohtang Pass Crossing",
        description: "Where India ends and the sky begins — high altitude, snow fields, and the vertigo of standing above the clouds."
    },
    {
        iconType: <IoBagOutline size={24} />,
        title: "Shimla Promenade",
        description: "Colonial India frozen in mountain air — architecture, unhurried afternoons, and views that stretch forever."
    }
];

export default function PlanTrip() {
    return (
        <div className="grid grid-cols-2 gap-20 px-44.5 py-25 items-center justify-center bg-[#F7F4F0]">
            <div className="border-l border-[#C8913A] pl-8.5">
                <h2 className="italic text-[42px] leading-16 text-[#1A1A1A]">"We don't plan trips. <br /> We craft moments<br /> you'll retell<br /> for decades."</h2>
            </div>
            <div className="">
                {
                    specialHighlightsData?.map((item, index) => (
                        <div key={index} className="flex items-start justify-start gap-5 border-b border-[#E8E4DE] mt-7">
                            <div className="w-10 h-10">{item?.iconType}</div>
                            <div className="spacey-1 mb-7">
                                <h2 className="text-[18px] text-[#1A1A1A]">{item?.title}</h2>
                                <p className="text-sm text-[#888888]">{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
