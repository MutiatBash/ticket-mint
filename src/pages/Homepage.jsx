import React, {useState}from 'react'
import { useContractReads, useAccount, useContractWrite,usePrepareContractWrite, useContractRead} from 'wagmi'
import { token } from '../utils/testAbi'
import { Button } from '../components/Button'
import {ConnectButton} from "@rainbow-me/rainbowkit"
import Footer from '../components/Footer'
import HomeEvents from '../sections/Home/HomeEvents'

const Homepage = () => {

  return (
    <div>
      <HomeEvents/>
      <Footer/>
    </div>
  )
}

export default Homepage
