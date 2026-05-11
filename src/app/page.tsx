import Destination from '@/Components/Home/Destination'
import DreamTrip from '@/Components/Home/DreamTrip'
import HomeBanner from '@/Components/Home/HomeBanner'
import HomeTestimonial from '@/Components/Home/HomeTestimonial'
import Journey from '@/Components/Home/Journey'
import OurLeagacy from '@/Components/Home/OurLeagacy'

export default function page() {
  return (
    <>
      <HomeBanner />
      <Journey />
      <DreamTrip />
      <HomeTestimonial />
      <Destination />
      <OurLeagacy />
    </>
  )
}
