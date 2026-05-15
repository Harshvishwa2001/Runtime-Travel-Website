import { Gem, History, Moon, Mountain, Music, Palette, ShoppingBag, Utensils } from "lucide-react";
import { BsForkKnife } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";
import { MdOutlineDiamond, MdOutlineShoppingBag } from "react-icons/md";
import { PiMoon } from "react-icons/pi";

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const features: FeatureItem[] = [
    {
        title: "FORT VIEWS",
        description: "Behold the Mehrangarh cliff from any rooftop.",
        icon: <Mountain size={24} />
    },
    {
        title: "INDIGO HUES",
        description: "Every street is a photographer's dream canvas.",
        icon: <Palette size={24} />
    },
    {
        title: "ROYAL HERITAGE",
        description: "Experience life inside living palaces.",
        icon: <MdOutlineDiamond size={24} />
    },
    {
        title: "SPICE MARKETS",
        description: "The aroma of world-class chilies and saffron.",
        icon: <BsForkKnife size={24} />
    },
    {
        title: "FOLK SOUL",
        description: "The haunting melodies of the Manganiyar singers.",
        icon: <IoMdMusicalNote size={24} />
    },
    {
        title: "CRAFTSMANSHIP",
        description: "Exquisite textiles and hand-beaten metalwork.",
        icon: <MdOutlineShoppingBag size={24} />
    },
    {
        title: "STARLIT DUNES",
        description: "Desert silence under a crystal-clear Milky Way.",
        icon: <PiMoon size={24} />
    },
    {
        title: "ANCIENT WISDOM",
        description: "Centuries-old stepwells that tell water's story.",
        icon: <History size={24} />
    }
];

export default function Reason() {
    return (
        <div className='px-25 py-10'>
            <h2 className='text-[36px] text-[#1F1B17] font-semibold font-manrope text-center py-6'>Reasons to Fall in Love</h2>

            <div className="grid grid-cols-4 items-start gap-4">
                {
                    features?.map((item, index) => (
                        <div key={index} className="bg-[#EDF2FF99] h-46 p-8 space-y-4 rounded-[16px] flex flex-col items-center justify-center">
                            <div className="w-8 h-8 text-[#243665]">{item?.icon}</div>
                            <h2 className="text-sm text-[#243665] font-manrope font-bold tracking-widest uppercase">{item?.title}</h2>
                            <p className="text-sm text-black font-manrope text-center">{item?.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
