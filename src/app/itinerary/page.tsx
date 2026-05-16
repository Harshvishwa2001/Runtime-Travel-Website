import SupportHero from '@/Components/About/SupportHero'
import ItineraryBanner from '@/Components/Itinerary/ItineraryBanner'
import ItineraryJourney from '@/Components/Itinerary/ItineraryJourney'
import JourneyHighlight from '@/Components/Itinerary/JourneyHighlight'
import JourneyPath from '@/Components/Itinerary/JourneyPath'
import MomentDaybyDay from '@/Components/Itinerary/MomentDaybyDay'
import Moments from '@/Components/Itinerary/Moments'
import PlanTrip from '@/Components/Itinerary/PlanTrip'

export default function page() {
    return (
        <>
            <ItineraryBanner />
            <ItineraryJourney />
            <Moments />
            <MomentDaybyDay />
            <JourneyHighlight />
            <JourneyPath />
            <PlanTrip />
            <SupportHero img='/Itinerary/Images/footer.jpg' title='Ready to experience the Himalayas?' subdesc={`This journey is waiting. Let's make it yours.`} tag='Private departures available year-round' />
        </>
    )
}
