import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
  authReady: false
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // init netlify identity connection
    netlifyIdentity.init()

    netlifyIdentity.on('login', (user) => {
      setUser(user)
      netlifyIdentity.close()
      console.log("Login event")
    })

    netlifyIdentity.on('logout', (user) => {
      setUser(null)
      console.log("Logout event")
    })

    return () => {
      // Unregister listeners on component unmount
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  const context = { user, login, logout }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}