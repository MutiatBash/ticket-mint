// import React, {useState}from 'react'
// import { useContractReads, useAccount, useContractWrite,usePrepareContractWrite, useContractRead} from 'wagmi'
// import { token } from '../utils/testAbi'
// import { Button } from '../components/Button'
// import {ConnectButton} from "@rainbow-me/rainbowkit"


// // const ticketContract = {
// //   address: token?.address,
// //   abi: token?.abi,
// // }


// const Eventspage = () => {
//     const ticketContract = {
//     address: token?.address,
//     abi: token?.abi,
// }
//     const [user, setAddress] = useState("0x0")
//     const [amount, setAmount] = useState(0)
//     const [tickets, setTickets] = useState()

//     const { address, isConnecting, isDisconnected } = useAccount()


//     const { config, error } = usePrepareContractWrite({
//         address: token.address,
//         abi: token.abi,
//         functionName: 'buyTickets',
//         args:[user, amount]
//       })
      
//       const { data:buyData, isLoading:writeLoading, isSuccess:buySuccess, write } = useContractWrite(config)

//       const handleChange = (e) =>{
//         e.preventDefault()
//         write?.()
//       }
//     // const { data:buyData, isLoading:writeLoading, isSuccess, write } = useContractWrite({
//     //     ,
//     //     functionName: 'buyTickets',
//     //     args:[]
//     //   })

//       const { data:readData , isError:dataError, isLoading:dataLoading} = useContractRead({
//         address: token.address,
//         abi: token.abi,
//         functionName: 'getTickets',
        
//       })

//     const { data:ticketData, isError:ticketError, isLoading } = useContractReads({
//         contracts: [
//           {
//             ticketContract,
//             functionName: 'buyTickets',
//           },
//           {
//             ticketContract,
//             functionName: 'ticketHolders',
//           },
//           {
//             address: token.address,
//             abi: token.abi,
//             functionName: 'getTickets',
//           },
//         ],
//       })

//     //   const buyTickets = async () =>{
//     //     await ticketData?.ticketContract?.buyTickets(address,amount)
//     //     console.log("bought tickets")
//     //   }
//     //   const ticketHolders = async () =>{
//     //     await ticketData?.ticketContract?.ticketHolders(address)
//     //   }
//     //   const getTickets = async () =>{
//     //     await ticketData?.ticketContract?.getTickets(address)
//     //   }

//   return (
//     <div>
//       <input className="border" placeholder='wallet address' value={user} id="address" onChange={(e) => setAddress(e.target.value)}/>
//       <br></br>
//       <input className="border"  placeholder='number of tickets' value={amount} id="amount" onChange={(e) => setAmount(e.target.value)}/>
//       <Button text={`${writeLoading ? "buying...." : "Buy ticket" } `} onClick={handleChange} />
//       <Button text={"use tickets"} /> 
//       <Button text={"User tickets"}/>
     
//       <p>{buySuccess ? "successful" : "unsuccesful"}</p>

//       <p>number of tickets : {ticketData?.[2]?.toString() ?? "0"}</p>
//       <p>number of tickets : {readData.toString() ?? "0"}</p>
//       <p>error message : {dataError ? "error fetching data" : "no error"}</p>
//       <p>data loading : {dataLoading ? "loading...." : "fetched"}</p>
//       <p>{address}</p>
//     </div>
//   )
// }

// export default Eventspage
