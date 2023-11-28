export const EventsCard = ({ events,index }) => {
    return (
      <div
        className="border border-[#D9D9D926] rounded-2xl bg-[#19181833] w-full p-3 h-full"
        key={index}
      >
        <div className="flex flex-col gap-3 lg:gap-5 flex-grow justify-self-end">
        <div className="relative">
            <p className="absolute">{events?.tags.map((tag) => {
                return(
                    <span>{tag.tags}</span>
                )
            })}
                </p>
                <img className="w-full h-35 rounded-lg" src={events.src} /></div>
          <h3 className="font-['Stoke'] text-[#FFFDFC] text-[14px]">{events.title}</h3>
          <div className="flex flex-col gap-1.5 pb-1">
            <div className="flex flex-row gap-2 items-center">
            <p className="text-zinc-300 text-opacity-80 text-xs font-normal font-['Manrope']">{events.date}</p>
            <span className="text-zinc-300 text-opacity-80">.</span>
            <p className="text-zinc-300 text-opacity-80 text-xs font-normal font-['Manrope']">{events.time}</p>
            </div>
        
            <p className="text-[0.7rem] font-extralight text-[#fffdfcc9] font-['Stoke'] ">{events.venue}</p>
            <p className="text-[0.7rem] font-['Stoke'] text-[#F57328] ">{events.type}</p>
          </div>
        </div>
      </div>
    );
  };