import SupportHero from "@/Components/About/SupportHero";
import SlideImage from "@/Components/Common/SlideImage";
import VisualAnthology from "@/Components/Destination/Anthology";
import DestinationBanner from "@/Components/Destination/DestinationBanner";
import Experience from "@/Components/Destination/Experience";
import Overview from "@/Components/Destination/Overview";
import Reason from "@/Components/Destination/Reason";
import VistingTime from "@/Components/Destination/VistingTime";

export default function page() {
    return (
        <>
            <DestinationBanner />
            <Overview />
            <Experience />
            <VistingTime />
            <VisualAnthology />
            <Reason />
            <SupportHero title="Ready to experience Jodhpur like never before?" img="/Destination/Images/dest.jpg" subdesc="" tag="" />
            <SlideImage />
        </>
    )
}
