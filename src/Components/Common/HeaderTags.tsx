interface TagsHeader {
    name: string
}

export default function HeaderTags({ data }: { data: TagsHeader }) {
    return (
        <div>
            <p className='text-[#C8913A] flex gap-3.5 items-center font-sans uppercase text-[10px] tracking-widest py-6'>
                <span className='w-9 h-px bg-[#C8913A] '></span> {data?.name}
            </p>
        </div>
    )
}
