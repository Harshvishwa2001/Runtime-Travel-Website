import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  title: string;
  src: string;
  className: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "DESERT",
    src: "/Destination/Images/vis1.jpg",
    className: "md:col-span-2 h-[338px]",
  },
  {
    title: "BLUE GATE",
    src: "/Destination/Images/vis2.jpg",
    className: "md:col-span-1 h-[241px]",
  },
  {
    title: "SPICES MARKET",
    src: "/Destination/Images/vis3.png",
    className: "md:col-span-2 h-[338px]",
  },
  {
    title: "MAJESTY",
    src: "/Destination/Images/vis4.png",
    className: "md:col-span-1 h-[440px] -mt-25",
  },
];

export default function VisualAnthology() {
  return (
    <section className="max-w-full mx-auto px-25 py-12 bg-white">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-[56px] font-semibold font-manrope text-[#1A2B48] leading-tight">
            Visual Anthology
          </h2>
          <p className="text-gray-600 text-[18px] mt-2">
            A curated collection of moments that capture the essence of the soul.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2 items-end">
            <button className="p-3 border border-gray-200 rounded-[12px] hover:bg-gray-50 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-3 border border-gray-200 rounded-[12px] hover:bg-gray-50 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-full mx-auto">
        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-[40px] shadow-sm ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index < 2}
                className="object-cover"
              />

              {/* Exact Typography match for image_9564fb.jpg */}
              <div className="absolute bottom-8 right-10">
                <h3 className="text-white text-[32px] md:text-[36px] font-arial font-black tracking-tight leading-none uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}