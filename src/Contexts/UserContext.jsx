
import React ,{useContext, createContext, useState, Children} from "react";

export const UserContext = createContext()
const AppContext = ({children}) => {

    const [user, setUser] = useState("")
    // const [eventName, setEventName] = useState("")
    // const [eventDate, setEventDate] = useState()
    // const [eventTime, setEventTime] = useState()
    // const [eventVenue, setEventVenue] = useState()
    // const [eventPrice, setEventPrice] = useState()
    // const [eventTickets, setEventTickets] = useState()


    
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default AppContext
