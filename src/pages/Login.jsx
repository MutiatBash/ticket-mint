import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { WalletButton }from '../components/WalletButton'

const Login = () => {
  return (
    <div className='flex gap-5 py-5'>
        <ConnectButton/>
        <WalletButton/>
    </div>
  )
}

export default Login
