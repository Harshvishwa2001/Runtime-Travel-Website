import AboutBannner from '@/Components/About/AboutBannner'
import AboutJourney from '@/Components/About/AboutJourney'
import Accreditations from '@/Components/About/Accreditations'
import GivingBack from '@/Components/About/GivingBack'
import Map from '@/Components/About/Map'
import OperateStories from '@/Components/About/OperateStories'
import OurHeritage from '@/Components/About/OurHeritage'
import OurStory from '@/Components/About/OurStory'
import SupportHero from '@/Components/About/SupportHero'

export default function page() {
    return (
        <>
            <AboutBannner />
            <OurHeritage />
            <OurStory />
            <AboutJourney />
            <OperateStories />
            <Accreditations />
            <GivingBack />
            <Map />
            <SupportHero />
        </>
    )
}
