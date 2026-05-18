import Image from 'next/image';

export interface TourInclusions {
    items: string[];
    item2: string[];
}

const tourInclusionsData: TourInclusions = {
    items: [
        "12 Nights accommodation on Double/Twin occupancy basis, using 3 star hotel.",
        "Meal Plan – [BB: Bed & Breakfast].",
        "All sightseeing program as per the itinerary.",
        "All transfers, sightseeing & excursions will be by an air-conditioned vehicle.",
        "Services of an English speaking local guide for the monuments as per the tour program.",
        "Shared boat ride in Periyar.",
        "Forest Trek in Periyar.",
        "Kathakali Dance in Cochin.",
        "All entrances fee to the monuments as per the tour program.",
        "Road taxes, parking fee, fuel charges and interstate taxes as per the program.",
        "Mineral water bottles in the vehicle [02 bottles each day].",
        "Wet tissues placed in the vehicle for the entire tour.",
        "Travel East’s Representative for assistance on all arrival and departure transfers with meet and assist.",
        "All currently applicable taxes."
    ],

    item2: [
        "Visit to Mahabalipuram and Kanchipuram Temples",
        "Visit to Brihadeshwara Shiva Temples – Tanjore, a Unesco World Heritage site",
        "Visit of Meenakshi Temple",
        "Wildlife visit at Thekkady",
        "Sightseeing tour of multi-ethnic Cochin",
        "Visit to Brindavan Garden & Mysore Palace.",
        "Visit of Temple at Belur & Halebid.",
        "Visit to Sravanbelgola"
    ]
};

export default function MomentDaybyDay() {
    const data = tourInclusionsData;
    return (
        <>
            <div className='px-4 lg:px-25 py-6 lg:py-8.75'>
                <div className='space-y-3'>
                    <p className='font-secondary text-[10px] text-[#C8913A]  uppercase text-center'>The Journey</p>
                    <h2 className='text-2xl lg:text-[46.47px] text-[#1A1A1A] text-center'>Need to Know Before You Go</h2>
                </div>
                <div className='grid lg:grid-cols-2 lg:gap-10 py-8lg:py-17.5 justify-center'>
                    <ul className="py-6">
                        {data?.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-sm lg:text-[18px] text-[#555555] tracking-wider leading-7" >
                                <span className="text-black "> • </span>
                                <span> {item} </span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Image src={'/Itinerary/Images/Daybyday.jpg'} alt='Moments Day-by-Day' width={1000} height={1000} className='h-full rounded-[18px] object-cover' />
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-25 py-6 lg:py-8.75'>
                <div className='space-y-3'>
                    <p className='font-secondary text-[10px] text-[#C8913A]  uppercase text-center'>The Journey</p>
                    <h2 className='text-2xl lg:text-[46.47px] text-[#1A1A1A] text-center'>The Essence of the Journey</h2>
                </div>
                <div className='grid lg:grid-cols-2 lg:gap-10 py-8 lg:py-17.5 '>
                    <div>
                        <Image src={'/Itinerary/Images/Daybyday1.jpg'} alt='Moments Day-by-Day' width={1000} height={1000} className='h-80 lg:h-155 rounded-[18px] object-cover' />
                    </div>
                    <ul className="py-6 flex flex-col lg:justify-center">
                        {data?.item2.map((item, index) => (
                            <li key={index} className="flex items-center gap-4 text-sm lg:text-[18px] text-[#555555] tracking-wider leading-8" >
                                <span className="text-black "> • </span>
                                <span> {item} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
