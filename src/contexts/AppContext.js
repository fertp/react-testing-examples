import { useState, createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [ theme, setTheme ] = useState('clear')
  const value = {
    theme,
    changeTheme: () => setTheme(state => state === 'clear' ? 'dark' : 'clear')
  }

  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }