import Button from '../Common/Button'

export default function DreamTrip() {
    return (
        <div className="relative overflow-hidden">
            <video
                src="/Home/Dreamtrip.mp4"
                className="absolute w-full h-150 object-cover overflow-hidden"
                loop
                autoPlay
                muted
                playsInline
            />

            <div className="relative w-full h-150 items-center justify-center text-center px-4 overflow-hidden top-50">
                <p className="items-center gap-2 text-white text-[60px]">
                    Create Your Dream Trip
                </p>
                <Button text='Create Your Trip' className='text-[12px] font-arial uppercase tracking-wide px-12 mt-12 text-[#050E1A]' />
            </div>
        </div>
    )
}
