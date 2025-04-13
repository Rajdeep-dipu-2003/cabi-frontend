import { createContext, useState } from "react"

const UserDataContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email, 
        fullname 
    })

    reutrn (
        <UserDataContext.Provider value={[user, setUser] } >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext