"use client";

import Button from '@/Components/Common/Button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Travel Vision", href: "#", hasDropdown: true },
    { name: "When to go?", href: "#", hasDropdown: true },
    { name: "CSR", href: "#", hasDropdown: true },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-25 p-2 `}>
            <nav className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">

                {/* 1. Logo Section */}
                <div className="shrink-0">
                    <Link href="/">
                        <img
                            src="/Logo/Logo.png"
                            alt="Travel East Logo"
                            className="h-22 object-contain"
                        />
                    </Link>
                </div>

                {/* 2. Navigation Links */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name} className="group relative">
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-white font-primary text-sm px-4 py-2 tracking-wider transition-all hover:text-gray-200"
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                )}
                            </Link>

                            {/* Dropdown Menu with improved styling */}
                            {link.hasDropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                    <div className="w-52 bg-white shadow-2xl rounded-lg py-2 border border-gray-100">
                                        <Link href="#" className="block px-5 py-2.5 text-sm text-[#050E1A] hover:bg-gray-50 font-secondary border-b border-gray-50 last:border-0">
                                            Our Mission
                                        </Link>
                                        <Link href="#" className="block px-5 py-2.5 text-sm text-[#050E1A] hover:bg-gray-50 font-secondary">
                                            Our Team
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* 3. Action Button */}
                <div className="shrink-0">
                    <Button
                        text="Create Your Trip"
                        className="scale-90 lg:scale-100 font-secondary text-[#243665]"
                    />
                </div>

            </nav>
        </div>
    );
}