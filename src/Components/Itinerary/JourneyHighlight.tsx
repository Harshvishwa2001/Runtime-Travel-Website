import Image from "next/image"

interface JourneyHighlight {
    img: string,
    header: string,
    title: string,
    desc: string
}

const JourneyHighlightData: JourneyHighlight[] = [
    { img: "/Itinerary/Images/mom1.jpg", header: "Spiritual India", title: "The Golden Temple, Amritsar", desc: "One of the most inclusive spiritual spaces on earth — open to all, feeding thousands daily." },
    { img: "/Itinerary/Images/mom2.jpg", header: "Living History", title: "Wagah Border Ceremony", desc: "A theatrical daily ritual at the India-Pakistan border — pageantry, nationalism, and human drama." },
    { img: "/Itinerary/Images/mom3.jpg", header: "Mountain Sanctuary", title: "McLeod Ganj Monasteries", desc: "Home of the Dalai Lama — Tibetan culture, prayer flags, and mountain silence." },
    { img: "/Itinerary/Images/mom4.jpg", header: "Alpine Extremes", title: "Rohtang Pass, Manali", desc: "Where the green Kullu Valley surrenders to high-altitude Himalayan wilderness." },
    { img: "/Itinerary/Images/mom5.jpg", header: "Hidden Meadows", title: "Khajjiar — Mini Switzerland", desc: "A cedar-ringed meadow so perfect it earned a comparison to Switzerland." },
    { img: "/Itinerary/Images/mom6.jpg", header: "Colonial Legacy", title: "Shimla's Mall Road", desc: "A mountain promenade frozen in British India — architecture, chai, and mountain air." },
]

export default function JourneyHighlight() {
    return (
        <div className='px-25 py-25'>
            <div className='space-y-3.5'>
                <p className='font-secondary text-[10px] text-[#C8913A]  uppercase text-center'>Journey Highlights</p>
                <h2 className='text-[46.47px] text-[#1A1A1A] text-center'>Moments that define this journey.</h2>
            </div>
            <div className='mt-16 grid grid-cols-3 gap-8 px-20'>
                {
                    JourneyHighlightData?.map((item, index) => (
                        <div key={index} className="space-y-4">
                            <Image src={item?.img} alt={item?.title} width={1000} height={1000} className="h-85 rounded-[18px] object-cover" />
                            <p className="font-secondary text-[9px] text-[#C8913A] uppercase tracking-widest">{item?.header}</p>
                            <p className="text-[19px] tracking-wider text-[#1A1A1A]">{item?.title}</p>
                            <p className="text-[#888888] text-[13px]">{item?.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
