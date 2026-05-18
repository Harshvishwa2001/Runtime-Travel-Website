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
            <SupportHero img={"/About/Images/support.jpg"} vid='' title='Ready to experience India like never before?' subdesc={`Let's design a journey that feels exactly like you.`} tag='TAILOR-MADE · PRIVATE DEPARTURES · 24/7 SUPPORT' />
        </>
    )
}
