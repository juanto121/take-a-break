import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from './FirebaseConfig'
import StorageService from '../services/LocalStorage'

export const AuthContext = createContext({ user: null })
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth)
        })
    }, [])

    const signInWithPopup = async () => {
        try {
            const authResult = await auth.signInWithPopup(provider)
            await StorageService.saveUser({ email: authResult.user.email, displayName: authResult.user.displayName })
            setUser(authResult.user)
            setIsAuthenticated(true)
            window.location = "/break-session"
        } catch(error) {
            console.error("Failed to authenticate")
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signInWithPopup,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
