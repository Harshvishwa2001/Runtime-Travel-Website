import SupportHero from '@/Components/About/SupportHero'
import Category from '@/Components/Blog/Category'
import PopularPost from '@/Components/Blog/PopularPost'
import StoryBehind from '@/Components/Blog/StoryBehind'
import TravelShowcase from '@/Components/Blog/TravelShowcase'
import SlideImage from '@/Components/Common/SlideImage'
import React from 'react'

export default function page() {
    return (
        <div>
            <TravelShowcase />
            <StoryBehind />
            <Category />
            <PopularPost />
            <SupportHero title="Create Your Dream Trip" img='' vid="/Blog/Images/boat video.mp4" subdesc="" tag="" />
            <SlideImage />
        </div>
    )
}
