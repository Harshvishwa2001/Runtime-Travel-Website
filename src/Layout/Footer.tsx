import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ArrowRight, ChevronDown, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa6';
import { PiFacebookLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill, PiPinterestLogoFill } from 'react-icons/pi';

const featured = [
    { name: "Sri Lanka Travel", href: "/destinations/sri-lanka" },
    { name: "Nepal Travel", href: "/destinations/nepal" },
    { name: "India Travel", href: "/destinations/india" },
    { name: "Punjab Travel", href: "/destinations/punjab" },
    { name: "Kerela Travel", href: "/destinations/kerala" },
    { name: "Mumbai Travel", href: "/destinations/mumbai" },
];

const guide = [
    { name: "India Travel Guide", href: "/travel-guide/india" },
    { name: "Sri Lanka Travel Guide", href: "/travel-guide/sri-lanka" },
    { name: "Kerela Travel Guide", href: "/travel-guide/kerala" },
    { name: "Punjab Travel Guide", href: "/travel-guide/punjab" },
    { name: "Lakshadweep Travel Guide", href: "/travel-guide/lakshadweep" },
];

const inspirations = [
    { name: "Trekking & Hiking in Asia", href: "/inspirations/trekking-hiking" },
    { name: "Relaxation and idleness", href: "/inspirations/relaxation" },
    { name: "Culture & Discovery", href: "/inspirations/culture-discovery" },
    { name: "Wellness & Inner Journey", href: "/inspirations/wellness" },
];

const page = [
    { name: "About Us", href: "/about" },
    { name: "Our Travel Vision", href: "/vision" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
];

const socialmedia = [
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: <PiInstagramLogoFill size={28} />
    },
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: <PiFacebookLogoFill size={28} />
    },
    {
        name: "YouTube",
        href: "https://youtube.com",
        icon: <FaYoutube size={28} />
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: <PiLinkedinLogoFill size={28} />
    },
    {
        name: "Pinterest",
        href: "https://pinterest.com",
        icon: <PiPinterestLogoFill size={28} />
    },
];

export default function Footer() {

    return (
        <>
            <div className='bg-white border-t p-4 lg:p-20'>
                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <Image src={'/Logo/footerlogo.png'} priority width={1000} height={1000} className='w-54 h-41' alt='Footer Logo' />
                    </div>
                    <div className='flex flex-col lg:items-start gap-4'>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center justify-center w-8 h-8 bg-[#E6E6E7] rounded-full flex-shrink-0'>
                                <MapPin size={18} className='text-[#5A5A60]' />
                            </div>
                            <p className='text-[#3C3B3E] font-manrope text-sm'>
                                42 Community Centre <span className='font-bold'>New Delhi - 110048</span>
                            </p>
                        </div>

                        {/* Phone */}
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center justify-center w-8 h-8 bg-[#E6E6E7] rounded-full flex-shrink-0'>
                                <Phone size={18} className='text-[#5A5A60]' />
                            </div>
                            <p className='text-[#3C3B3E] font-manrope text-sm'>
                                Call us at <span className='font-bold'> +91 33334 26862</span>
                            </p>
                        </div>

                        {/* Mail */}
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center justify-center w-8 h-8 bg-[#E6E6E7] rounded-full flex-shrink-0'>
                                <Mail size={18} className='text-[#5A5A60]' />
                            </div>
                            <p className='text-[#3C3B3E] font-manrope text-sm'>
                                Send a <span className='font-bold'>message</span>
                            </p>
                        </div>
                    </div>

                    <div className='bg-[#F5F5F5] rounded-lg p-6'>
                        <p className='font-manrope text-sm'>For any questions regarding our sustainability
                            processes, goals, and policy, please contact our
                            Sustainability Coordinator: <br />
                            <a href="mailto:tours@travelest.in" className='font-bold'>tours@travelest.in</a>
                        </p>
                        <button className='flex items-center text-[#433E3F] text-sm font-medium hover:font-bold transition-all duration-500 cursor-pointer underline font-manrope gap-2 mt-4 cursor-pointer'><ArrowRight size={16} /> Our policy</button>
                    </div>
                </div>

                {/* Footer Link */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
                    <div className=''>
                        <p className='font-manrope text-sm uppercase tracking-wide py-2 lg:py-1'>Featured Destinations</p>
                        {
                            featured.map((item, index) => (
                                <Link key={index} href={item.href} className='flex items-center text-[#433E3F] text-sm hover:font-bold transition-all duration-500 cursor-pointer font-manrope gap-2 mt-2 lg:mt-4'>{item.name}</Link>
                            ))
                        }
                    </div>
                    <div className=''>
                        <p className='font-manrope text-sm uppercase tracking-wide py-2 lg:py-1'>TRAVEL GUIDES</p>
                        {
                            guide.map((item, index) => (
                                <Link key={index} href={item.href} className='flex items-center text-[#433E3F] text-sm hover:font-bold transition-all duration-500 cursor-pointer font-manrope gap-2 mt-2 lg:mt-4'>{item.name}</Link>
                            ))
                        }
                    </div>
                    <div className=''>
                        <p className='font-manrope text-sm uppercase tracking-wide py-2 lg:py-1'>Inspirations</p>
                        {
                            inspirations.map((item, index) => (
                                <Link key={index} href={item.href} className='flex items-center text-[#433E3F] text-sm hover:font-bold transition-all duration-500 cursor-pointer font-manrope gap-2 mt-2 lg:mt-4'>{item.name}</Link>
                            ))
                        }
                    </div>
                    <div className=''>
                        <p className='font-manrope text-sm uppercase tracking-wide py-2 lg:py-1'>Travel East</p>
                        {
                            page.map((item, index) => (
                                <Link key={index} href={item.href} className='flex items-center text-[#433E3F] text-sm hover:font-bold transition-all duration-500 cursor-pointer font-manrope gap-2 mt-2 lg:mt-4'>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='py-4 lg:py-10 px-4 lg:px-25 flex justify-between border-t'>
                {/* Social media */}
                <div className="flex items-center gap-2 lg:gap-6">
                    {socialmedia.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                            aria-label={item.name}
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>

                {/* Translate */}
                <div className="flex items-center gap-2 text-[#71717A]  cursor-pointer text-[16px] relative">
                    <Select defaultValue="en">
                        <SelectTrigger className="">
                            <Globe size={18} className="text-gray-500" />
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="hi">हिंदी</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    )
}
