import { createContext } from "react"

export let AuthDataContext = createContext()

function AuthContext({ children }) {
    let serverUrl = "http://localhost:3000"
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