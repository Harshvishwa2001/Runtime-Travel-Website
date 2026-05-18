import { ArrowRight, MapPinIcon, Search } from "lucide-react";

export default function HomeBanner() {
    const tags = ["Japan", "Bali", "Rajasthan", "Kyoto", "Angkor"];
    return (
        <>
            <div className="relative overflow-hidden">

                <video
                    src="/Home/HomeBaneer.mp4"
                    className="absolute w-full h-screen object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                />

                <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <div className="mb-6">
                        <p className="inline-flex items-center gap-2 text-white bg-black/20 text-[10px] lg:text-[12px] backdrop-blur-md px-6 py-2 rounded-full font-manrope uppercase tracking-widest border border-[#FFFFFF33]">
                            <MapPinIcon size={14} className="text-[#FFD230]" />
                            Taj Mahal - Agra
                        </p>
                    </div>

                    <h1 className="px-4 text-[20px] lg:text-[70px] text-white ">
                        Explore the World Beyond the Map
                    </h1>

                    <p className="text-white/90 font-secondary text-sm lg:text-xl max-w-2xl mb-10">
                        Discover curated destinations, unforgettable experiences, and journeys designed just for you.
                    </p>

                    <div className="flex flex-col items-center w-full max-w-3xl gap-6">
                        <div className="w-full bg-white rounded-[16px] p-2 flex items-center shadow-2xl">
                            <div className="pl-4 pr-3 text-[#99A1AF]">
                                <Search size={22} />
                            </div>

                            <input
                                type="text"
                                placeholder="Search a destination, experience..."
                                className="flex-1 bg-transparent outline-none text-[#243665] text-sm lg:text-lg placeholder:text-[#99A1AF]"
                            />

                            <button className="bg-[#26355D] hover:bg-[#1a2542] text-white px-5 lg:px-8 py-3 rounded-[14px] flex items-center gap-2 font-bold transition-all duration-300 font-arial tracking-wider text-sm">
                                <span className="hidden lg:inline">Search</span> <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    className="px-6 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white  text-[10px] lg:text-[12px] transition-all duration-300 font-arial tracking-wider"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
