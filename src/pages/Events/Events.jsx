import React, {useState}from 'react'
import { useContractReads, useAccount, useContractWrite,usePrepareContractWrite, useContractRead} from 'wagmi'
import { token } from '../../utils/testAbi'
import { Button } from '../../components/Button'
import {ConnectButton} from "@rainbow-me/rainbowkit"
import Footer from '../../components/Footer'
import EventsSection from '../../sections/Events/EventsSection'
import HeroEvents from '../../sections/Events/Hero'
import Navbar from '../../components/Navbar'

const EventsPage = () => {

  return (
    <div className='relative'>
      <Navbar/>
      <HeroEvents/>
      <EventsSection/>
      <div><img src='/images/left-full-gradient.svg' className='absolute left-0 bottom-0'/></div>
      <Footer/>
    </div>
  )
}

export default EventsPage
