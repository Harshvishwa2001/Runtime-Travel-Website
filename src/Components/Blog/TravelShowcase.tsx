import React from 'react';
import Image from 'next/image';

interface CardProps {
    imageSrc: string;
    authorName: string;
    unsplashLink: string;
    isCenter?: boolean;
}

const TravelCard: React.FC<CardProps> = ({ imageSrc, authorName, unsplashLink, isCenter }) => {
    return (
        <div className={`flex flex-col flex-1 min-w-45 max-w-100 w-full transition-all duration-300 ${isCenter ? 'md:mt-10' : ''}`}>

            {/* Attribution Text Block */}
            <div className={`flex items-center justify-center py-3 text-[11px] text-gray-600 tracking-wide ${isCenter ? 'order-1 mb-2' : 'order-2 mt-2'}`}>
                <span className="inline-flex items-center justify-center border border-gray-500 rounded-full w-4 h-4 text-[9px] font-semibold mr-1.5 dynamic-rotate">
                    @
                </span>
                <span>
                    by <a href={unsplashLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium hover:underline">{authorName}</a> on Unsplash
                </span>
            </div>

            {/* Image Block */}
            <div className={`relative h-115 w-full rounded-[28px] overflow-hidden shadow-sm ${isCenter ? 'order-2' : 'order-1'}`}>
                <Image
                    src={imageSrc}
                    alt={`Photo by ${authorName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={isCenter} // Optimize loading for the center image
                />
            </div>

        </div>
    );
};

export default function TravelShowcase() {
    return (
        <section className="w-full min-h-screen bg-white px-6 md:px-25 py-10 md:py-30">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-center'>
                <div>
                    <h2 className='text-[56px] text-[#333333] leading-14 font-bold'>
                        Embark on Life's Greatest Travel Adventures Today
                    </h2>
                    <p className='text-[16px] font-secondary mt-15 *:  text-gray-700 leading-relaxed'>
                        Don't waste time and join our community of authors! Share your knowledge
                        and experience with our readers and get the opportunity to become
                        a part of our professional and creative team!
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 items-stretch justify-center w-full">

                    <TravelCard
                        imageSrc="/Blog/Images/banner1.jpg"
                        authorName="Guzmán Barquín"
                        unsplashLink="https://unsplash.com"
                    />

                    <TravelCard
                        imageSrc="/Blog/Images/banner2.jpg"
                        authorName="Ryan Spencer"
                        unsplashLink="https://unsplash.com"
                        isCenter
                    />

                    <TravelCard
                        imageSrc="/Blog/Images/banner3.jpg"
                        authorName="S O C I A L . C U T"
                        unsplashLink="https://unsplash.com"
                    />

                </div>
            </div>
        </section>
    );
}