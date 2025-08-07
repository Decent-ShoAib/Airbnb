import axios from "axios"
import { useContext } from "react"
import { createContext } from "react"
import { AuthDataContext } from "./AuthContext"
import { useEffect } from "react"
import { useState } from "react"

export const userDataContex = createContext()


function UserContex({ children }) {

    const [userData, setUserData] = useState(null)

    let { serverUrl } = useContext(AuthDataContext)

    const getUser = async () => {
        try {
            let result = await axios.get(serverUrl + '/api/user/currentuser', { withCredentials: true })
            setUserData(result.data);
            console.log(result.data);
        } catch (error) {
            setUserData(null)
            console.log("getuser error", error);
        }
    }
    let values = {
        userData, setUserData, getUser
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <userDataContex.Provider value={values}>
            {children}
        </userDataContex.Provider>
    )
}

export default UserContex