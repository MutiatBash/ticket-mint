
import React ,{useContext, createContext, useState, Children} from "react";

export const UserContext = createContext()
const AppContext = ({children}) => {

    const [user, setUser] = useState("")

    
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default AppContext
