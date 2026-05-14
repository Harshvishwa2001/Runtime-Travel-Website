import DestinationBanner from "@/Components/Destination/DestinationBanner";
import Experience from "@/Components/Destination/Experience";
import Overview from "@/Components/Destination/Overview";
import VistingTime from "@/Components/Destination/VistingTime";

export default function page() {
    return (
        <>
            <DestinationBanner />
            <Overview />
            <Experience />
            <VistingTime />
        </>
    )
}
