import Image from 'next/image'

interface tagsData {
    name: string
}

const tags: tagsData[] = [
    { name: "Ministry of Tourism · Govt. of India" },
    { name: "IATA Certified" },
    { name: "IATO · TAAI · ASTA" },
]

export default function AboutBannner() {
    return (
        <div>
            <Image src={"/About/Images/AboutBanner.jpg"} alt='AboutBanner' width={1000} height={1000} priority className="w-full h-screen object-cover -scale-x-100" />
            <div className="absolute inset-0 bg-[#C8913A] opacity-20 pointer-events-none"></div>
            <div
                className="absolute inset-0 z-20 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.784 0 0 0 0 0.568 0 0 0 0 0.227 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className='absolute inset-0 top-37.25 flex flex-col justify-center px-10 lg:px-25 space-y-4 lg:space-y-10'>

                {/* Heading */}
                <h1 className='text-[24px] lg:text-[70px] text-white leading-tight lg:leading-18 font-serif'>
                    Crafted by wanderers. <br />
                    Designed for the <br />
                    <span className='text-[#FFB900]'>discerning.</span>
                </h1>

                {/* Description */}
                <p className='max-w-xl text-[16px] lg:text-xl text-white/90 font-secondary'>
                    A full-service inbound tour operator with over 50 years of expertise —
                    curating extraordinary journeys across India, Nepal, Bhutan, and Sri Lanka.
                </p>

                {/* Tags Section */}
                <div className='flex flex-wrap items-center justify-start gap-2 lg:gap-4'>
                    {tags.map((item, index) => (
                        <div
                            key={index}
                            className='px-4 py-2 bg-white/10 backdrop-blur-md flex items-center gap-3 rounded-sm border border-white/20'
                        >
                            <span className='w-1.5 h-1.5 bg-[#C8913A] rounded-full' />
                            <p className='text-[10px] lg:text-[16px] text-white font-medium uppercase tracking-widest'>
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
