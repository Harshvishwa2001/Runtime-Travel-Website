"use client";

import React from "react";

interface DynamicButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string; // Explicit accessibility label
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export default function Button({
    text,
    onClick,
    className = "",
    ariaLabel,
    type = "button",
    disabled = false,
}: DynamicButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel || text} // Fallback to text if ariaLabel isn't provided
            className={`
        text-[#050E1A] 
        px-6 
        py-3 
        rounded-md 
        inline-flex 
        items-center 
        justify-center
        tracking-wider
        
        transition-all 
        duration-200
        active:scale-95 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        cursor-pointer
        
        /* Custom overrides */
        ${className}
      `}
        >
            {text}
        </button>
    );
}