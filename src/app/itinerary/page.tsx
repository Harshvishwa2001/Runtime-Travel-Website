import ItineraryBanner from '@/Components/Itinerary/ItineraryBanner'
import ItineraryJourney from '@/Components/Itinerary/ItineraryJourney'
import Moments from '@/Components/Itinerary/Moments'

export default function page() {
    return (
        <>
            <ItineraryBanner />
            <ItineraryJourney />
            <Moments />
        </>
    )
}
