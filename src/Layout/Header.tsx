"use client";

import Button from '@/Components/Common/Button';
import { ChevronDown, Menu, X } from 'lucide-react'; // Added Menu and X icons
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
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <>
            {/* Main Header Container */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-4 lg:px-[100px] p-2 
            ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
                <nav className="max-w-full mx-auto py-2 lg:py-4 flex items-center justify-between">

                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity cursor-pointer"
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* 1. Logo Section */}
                    <div className="shrink-0">
                        <Link href="/">
                            <img
                                src="/Logo/Logo.png"
                                alt="Travel East Logo"
                                className="h-14 lg:h-22 object-contain"
                            />
                        </Link>
                    </div>

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

                                {/* Desktop Dropdown */}
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
                            className="scale-90 lg:scale-100 text-xs lg:text-sm font-secondary bg-white text-[#243665]"
                        />
                    </div>

                </nav>
            </div>

            {/* Mobile Devices */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

                {/* Drawer Menu Panel */}
                <div className={`absolute top-0 left-0 w-[280px] sm:w-[320px] h-full bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                    <div>
                        {/* Drawer Header Close Panel */}
                        <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                            <img src="/Logo/Logo.png" alt="Logo" className="h-10 object-contain brightness-0 filter" />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Interactive List Stack */}
                        <ul className="mt-6 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.name} className="border-b border-gray-50 last:border-none">
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => toggleDropdown(link.name)}
                                                className="flex items-center justify-between w-full text-left py-3 font-primary text-sm text-[#050E1A] tracking-wider cursor-pointer"
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Mobile Expandable Submenus */}
                                            <div className={`overflow-hidden transition-all duration-300 max-h-0 bg-gray-50 rounded-md ${activeDropdown === link.name ? 'max-h-40 my-1' : ''}`}>
                                                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-xs text-[#050E1A] hover:bg-gray-100 font-secondary">
                                                    Our Mission
                                                </Link>
                                                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-xs text-[#050E1A] hover:bg-gray-100 font-secondary">
                                                    Our Team
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-3 font-primary text-sm text-[#050E1A] tracking-wider"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Drawer CTA Action */}
                    <div className="pt-6 border-t border-gray-100">
                        <Button
                            text="Create Your Trip"
                            className="w-full text-center text-sm font-secondary bg-[#243665] text-white shadow-md"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}