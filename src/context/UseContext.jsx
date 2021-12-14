import { useState, useContext, createContext } from 'react'

// creates our content
const UserContext = createContext()

// You import the UserProvider function

const UserProvider = ({ children }) => {
  // create our state
  const [user, setUser] = useState('')

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

// this is our hook

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser hook is outside the parent')
  }
  return context
}

export { UserProvider, useUser }
