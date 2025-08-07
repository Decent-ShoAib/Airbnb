import { createContext } from "react"

export let AuthDataContext = createContext()

function AuthContext({ children }) {
    let serverUrl = "https://airbnbbackend-liart.vercel.app/"
    let values = {
        serverUrl
    }

    
    return (
        <>
            <AuthDataContext.Provider value={values}>
                {children}
            </AuthDataContext.Provider>
        </>
    )
}

export default AuthContext