import Image from 'next/image';
import Button from '../Common/Button';
import Link from 'next/link';

export interface HorizontalArticleData {
    id: number;
    imageSrc: string;
    category: string;
    date: string;
    title: string;
    slug: string;
}

export const horizontalBlogArticles: HorizontalArticleData[] = [
    {
        id: 1,
        imageSrc: "/Blog/Images/cat4.png",
        category: "Innovate",
        date: "16 Aug, 2024",
        title: "Tech Innovations: Tomorrow’s Gadgets and Inventions",
        slug: "/blog/tech-innovations"
    },
    {
        id: 2,
        imageSrc: "/Blog/Images/cat4.png",
        category: "Taste",
        date: "20 Oct, 2022",
        title: "Flavours from Around the Globe: Culinary Adventures",
        slug: "/blog/global-flavours"
    },
    {
        id: 3,
        imageSrc: "/Blog/Images/cat4.png",
        category: "Saver",
        date: "15 Aug, 2024",
        title: "Culinary Curiosities: Exploring Flavoursand Techniques", // Kept original image spacing typo "Flavoursand"
        slug: "/blog/culinary-curiosities"
    },
    {
        id: 4,
        imageSrc: "/Blog/Images/cat4.png",
        category: "Read",
        date: "19 Oct, 2022",
        title: "Book Adventures: Exploring Worlds One Page at a Time",
        slug: "/blog/book-adventures"
    }
];

export default function PopularPost() {
    return (
        <div className='px-4 lg:px-25 py-6 lg:py-18.75'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl lg:text-[48px] text-[#0D0D0D]'>Popular Posts</h2>
                <Button text='View All' className='text-[12px] font-bold uppercase border-b border-black rounded-none' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 lg:gap-8 py-6 lg:py-12.5' >
                {
                    horizontalBlogArticles?.map((item, index) => (
                        <div key={index} className='flex items-center justify-start gap-4 lg:gap-6'>
                            <Image
                                src={item?.imageSrc}
                                alt={"/Blog/Images/story.png"}
                                width={100}
                                height={100}
                                className="object-cover rounded-xl lg:w-62.5 h-35 lg:h-45 transition-transform duration-500"
                                priority
                            />
                            <div className='space-y-2 lg:space-y-4'>
                                <div className='flex items-center justify-start gap-4'>
                                    <p className='font-secondary text-sm text-[#0D0D0D]' >{item?.category}</p>
                                    <span className='w-5 h-px bg-black text-[#0D0D0D]'></span>
                                    <p className='font-secondary text-sm text-[#0D0D0D]'>{item?.date}</p>
                                </div>
                                <h2 className='text-sm lg:text-[16px]'>{item?.title}</h2>
                                <Link href={item?.slug} className='text-[12px] font-bold uppercase border-b border-black rounded-none py-2' >Read More</Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
