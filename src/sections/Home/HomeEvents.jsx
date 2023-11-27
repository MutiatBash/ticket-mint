import React from 'react'
import { EventsCard } from '../../components/Cards'
import { events } from '../../data'
import { Button } from '../../components/Button'

const HomeEvents = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 lg:px-16 py-8 lg:py-14 gap-8 relative'>
      <h2 className="font-['Stoke'] text-[#FFFDFC] text-center text-lg lg:text-4xl">Popular Events</h2>
       <div className='absolute top-0 pointer-events-none'><img src='/images/center-gradient.svg' alt="gradient"/></div>
    <div className='grid lg:grid-cols-4 gap-8 bg-[#020302] py-8 lg:py-16'>
      {
        events?.paid?.slice(0,4).map((events, index) =>{
          return(
           <EventsCard key={index} events={events}/>
          )
        })
      } 
    </div>
    <Button text="View more" className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-6 font-['Stoke']"/>
    </div>
  )
}

export default HomeEvents
