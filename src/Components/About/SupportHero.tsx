import Image from 'next/image';
import Link from 'next/link';

interface SupportHeroProps {
    img: string,
    title: string,
    subdesc: string,
    tag: string
}

export default function SupportHero({ img, title, subdesc, tag }: SupportHeroProps) {
    return (
        <section className="relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden font-serif">
            <div className="absolute inset-0 z-0">
                <Image
                    src={img}
                    alt={title}
                    fill
                    priority
                    className="object-cover transition-transform duration-[3s] scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* 2. Central Content Container */}
            <div className="relative z-10 max-w-4xl px-6 text-center text-white flex flex-col items-center">

                {/* Main Heading */}
                <h1 className="text-6xl md:text-[66px] font-light leading-[1.2] max-w-3xl mb-8 tracking-[-0.01em]">
                    {title}
                </h1>

                {/* Subtitle / Descriptive text */}
                <p className="text-[17px] font-secondary font-light text-white/65 leading-relaxed mb-12 max-w-xl">
                    {subdesc}
                </p>

                {/* Sophisticated Gold Button (matching other components) */}
                <Link
                    href="/create-trip"
                    className="bg-[#C8913A] text-white font-sans text-[12px] tracking-[0.2em] uppercase py-4 px-12 rounded-sm transition-all duration-300 hover:bg-[#A6752D] hover:shadow-lg active:scale-95 mb-6"
                >
                    CREATE YOUR TRIP
                </Link>

                {/* Footnote Benefits */}
                <span className="text-[11px] font-secondary font-medium uppercase text-white tracking-[0.25em]">
                    {tag}
                </span>
            </div>
        </section>
    )
}