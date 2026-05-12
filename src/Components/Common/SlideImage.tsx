"use client";
import Image from "next/image";

interface ImageData {
    name: string;
    url: string;
}

const images: ImageData[] = [
    { name: "kerala", url: "/Home/Images/dest1.jpg" },
    { name: "varanasi", url: "/Home/Images/dest2.jpg" },
    { name: "mumbai", url: "/Home/Images/dest3.jpg" },
    { name: "nepal", url: "/Home/Images/dest4.jpg" },
];

export default function SlideImage() {
    // Combine array with itself to create a seamless infinite loop
    const displayImages = [...images, ...images];

    return (
        <div className="py-20 slide-window overflow-hidden">
            <div className="image-track gap-2 px-5">
                {displayImages.map((item, index) => (
                    <div
                        key={index}
                        className="relative shrink-0 w-87.5 h-55 overflow-hidden rounded-[18px]"
                    >
                        <Image
                            src={item.url}
                            alt={item.name}
                            fill
                            className="object-cover"
                            priority={index < 4}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}