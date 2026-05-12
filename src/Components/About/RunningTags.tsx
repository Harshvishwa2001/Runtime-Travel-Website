"use client";

const displayText = [
    { tags: "Ministry of Tourism · Certified" },
    { tags: "IATA · Accredited" },
    { tags: "IATO · Member" },
    { tags: "TAAI · Member" },
    { tags: "ASTA · Member" },
    { tags: "DEX Group · Since 1965" },
];

export default function RunningTags() {
    const tripleData = [...displayText, ...displayText, ...displayText];

    return (
        <div className="w-full bg-[#C8913A] overflow-hidden slide-window">
            <div className="flex items-center justify-between py-4 px-4 min-w-max image-track">
                {tripleData.map((item, index) => (
                    <div key={index} className="flex items-center group">
                        <div className="flex items-center gap-3 px-15 border-l border-white/40">
                            {/* The Circular Icon */}
                            <div className="w-2.5 h-2.5 border border-white/80 rounded-full shrink-0" />

                            {/* The Text */}
                            <p className="text-white text-[11px] font-medium uppercase tracking-[0.15em] whitespace-nowrap">
                                {item.tags}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}