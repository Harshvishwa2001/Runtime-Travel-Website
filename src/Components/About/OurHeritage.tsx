
interface StatsData {
    value: string,
    label: string
}

const stats: StatsData[] = [
    { value: "1965", label: "YEAR FOUNDED" },
    { value: "50+", label: "YEARS OF HISTORY" },
    { value: "4", label: "DESTINATIONS MASTERED" },
    { value: "24/7", label: "GUEST SUPPORT" },
];

export default function OurHeritage() {

    return (
        <div className='grid grid-cols-2 py-20 px-25 '>
            <div className="pr-25 space-y-6">
                <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest'>
                    <span className='w-9 h-px bg-[#C8913A] '></span> DEX Group · Our Heritage
                </p>
                <h2 className="text-[52px] w-sm leading-14">Over <span className="text-[#C8913A] italic">50 years</span>
                    of shaping India
                    travel.
                </h2>
                <p className="text-[16px] font-secondary">Travel East is a unit of DEX Group — a multi-award winning travel organisation based in New Delhi, with a history stretching back to 1965 in aviation and tourism. What began as a single passion for India has grown into an unrivalled network of expertise across the Indian subcontinent.</p>
            </div>
            <div className="relative grid grid-cols-2 max-w-4xl h-100 mx-auto">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2" />

                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200 -translate-x-1/2" />

                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col relative top-0 p-12 ${index % 2 === 0 ? 'items-start pl-0' : 'items-start pl-16'}`}
                    >
                        <h2 className="text-[52px] font-serif text-[#C8913A] leading-none mb-6">
                            {stat.value}
                        </h2>
                        <p className="text-sm tracking-[0.2em] text-[#050E1A] font-medium uppercase">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
