import { div } from 'framer-motion/client'
import Button from '../Common/Button'
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const Categorydata = ["Healthy", "Travel", "Food", "Lifestyle", "Innovate", "Read", "Sports", "Write"]

interface ArticleCardProps {
    imageSrc: string;
    category: string;
    date: string;
    title: string;
    imageHeightClass: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    imageSrc,
    category,
    date,
    title,
    imageHeightClass,
}) => {
    return (
        <div className="flex flex-col w-full group cursor-pointer">
            {/* Image Container with Custom Border Radius */}
            <div className={`relative w-full ${imageHeightClass} rounded-[24px] overflow-hidden shadow-sm`}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                />
            </div>

            {/* Meta Metadata (Category & Date) */}
            <div className="flex items-center gap-2 mt-4 text-[12px] font-medium tracking-wide text-gray-500">
                <span className="text-[#0D0D0D] font-secondary capitalize">{category}</span>
                <span className="text-[#0D0D0D]">•</span>
                    <div className="flex items-center gap-1 text-[#0D0D0D]">
                    <Calendar size={14} />
                    <span>{date}</span>
                </div>
            </div>


            <h3 className="mt-2 text-lg lg:text-[30px] text-gray-900  tracking-wide hover:text-blue-600 transition-colors">
                {title}
            </h3>
        </div>
    );
};

export default function Category() {
    return (
        <div className='px-4 lg:px-25'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl lg:text-[48px] text-[#0D0D0D]'>Explore Categories</h2>
                <Button text='View All' className='text-[12px] font-bold uppercase border-b border-black rounded-none' />
            </div>
            <div className='flex items-center justify-start gap-2 lg:gap-3.5 py-6 lg:py-12.5 overflow-hidden'>
                {
                    Categorydata.map((item, index) => (
                        <div key={index} >
                            <button className='text-sm lg:text-[20px] text-[#0D0D0D] border border-[#D6D6D6] font-secondary rounded-lg px-4 py-1' >{item}</button>
                        </div>
                    ))
                }
            </div>

            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 lg:gap-y-12 items-start">

                {/* Left Column Stack */}
                <div className="flex flex-col gap-12 w-full">
                    <ArticleCard
                        imageSrc="/Blog/Images/story.png"
                        category="Venture"
                        date="14 Jun, 2024"
                        title="Adventures Across Continents: Journeys of a Lifetime"
                        imageHeightClass="h-[300px] lg:h-[589px]"
                    />
                    <ArticleCard
                        imageSrc="/Blog/Images/cat4.png"
                        category="Thrive"
                        date="30 May, 2024"
                        title="Life Lessons: Insights and Stories of Personal Growth"
                        imageHeightClass="h-[300px] lg:h-[401px]"
                    />
                </div>

                {/* Right Column Stack */}
                <div className="flex flex-col gap-12 w-full">
                    <ArticleCard
                        imageSrc="/Blog/Images/cat2.png"
                        category="Calm"
                        date="02 Dec, 2023"
                        title="Mindful Moments: Embracing Peace and Presence Daily"
                        imageHeightClass="h-[240px] lg:h-[340px]"
                    />
                    <ArticleCard
                        imageSrc="/Blog/Images/cat3.png"
                        category="Legacy"
                        date="18 Mar, 2023"
                        title="Historical Horizons: Stories from Our Collective Past"
                        imageHeightClass="h-[450px] lg:h-[650px]"
                    />
                </div>

            </div>
        </div>
    )
}
